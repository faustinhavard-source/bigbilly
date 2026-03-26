const Anthropic = require("@anthropic-ai/sdk");
const { SYSTEM_PROMPT } = require("./knowledge");

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Simple in-memory conversation store (per phone number, last 10 messages)
// NOTE: Vercel serverless functions are stateless — this cache only lives
// for the duration of a warm instance. For persistent memory, swap with
// Redis/Upstash or a DB.
const conversationCache = new Map();
const MAX_HISTORY = 10;

function getHistory(phoneNumber) {
  return conversationCache.get(phoneNumber) || [];
}

function addToHistory(phoneNumber, role, content) {
  const history = getHistory(phoneNumber);
  history.push({ role, content });
  // Keep only last MAX_HISTORY messages
  if (history.length > MAX_HISTORY) {
    history.splice(0, history.length - MAX_HISTORY);
  }
  conversationCache.set(phoneNumber, history);
}

async function generateResponse(phoneNumber, userMessage) {
  // Add user message to history
  addToHistory(phoneNumber, "user", userMessage);

  const messages = getHistory(phoneNumber);

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages,
  });

  const assistantMessage =
    response.content[0]?.text || "Sorry, I couldn't process that. Try again!";

  // Add assistant response to history
  addToHistory(phoneNumber, "assistant", assistantMessage);

  return assistantMessage;
}

module.exports = { generateResponse };
