// Dolores — Single-file serverless function for Vercel
// Fetches knowledge base from Notion in real-time

const Anthropic = require("@anthropic-ai/sdk");
const axios = require("axios");

// ═══════════════════════════════════════════════════════════
// NOTION — fetch knowledge base from Notion pages
// ═══════════════════════════════════════════════════════════

const NOTION_API = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";

// Key Notion pages to fetch
const NOTION_PAGES = [
  { id: "325e26adb8c980478b9fd89e951c3baf", label: "Wiki" },
  { id: "325e26adb8c980bf95d9c334774c80c6", label: "Internal FAQ" },
  { id: "2fce26adb8c980b4b248d3c8a0de8185", label: "Reimbursement" },
];

// Simple cache — survives within a single Vercel instance (warm starts)
let cachedKB = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Extract plain text from Notion rich_text array
function extractRichText(richTextArr) {
  if (!richTextArr || !Array.isArray(richTextArr)) return "";
  return richTextArr.map((rt) => rt.plain_text || "").join("");
}

// Extract text content from a single Notion block
function extractBlockText(block) {
  const type = block.type;
  if (!block[type]) return "";

  const richText = block[type].rich_text;
  const text = extractRichText(richText);

  switch (type) {
    case "heading_1":
      return `\n# ${text}\n`;
    case "heading_2":
      return `\n## ${text}\n`;
    case "heading_3":
      return `\n### ${text}\n`;
    case "paragraph":
      return text ? `${text}\n` : "";
    case "bulleted_list_item":
      return `- ${text}\n`;
    case "numbered_list_item":
      return `- ${text}\n`;
    case "to_do":
      const checked = block[type].checked ? "✅" : "☐";
      return `${checked} ${text}\n`;
    case "toggle":
      return text ? `${text}\n` : "";
    case "callout":
      return text ? `${text}\n` : "";
    case "quote":
      return text ? `> ${text}\n` : "";
    case "divider":
      return "---\n";
    case "code":
      return `\`${text}\`\n`;
    case "table_row":
      const cells = block[type].cells || [];
      const row = cells.map((cell) => extractRichText(cell)).join(" | ");
      return `| ${row} |\n`;
    case "bookmark":
      return block[type].url ? `${block[type].url}\n` : "";
    case "embed":
      return block[type].url ? `${block[type].url}\n` : "";
    default:
      return text ? `${text}\n` : "";
  }
}

// Recursively fetch all blocks from a Notion page
async function fetchAllBlocks(blockId, token, depth = 0) {
  if (depth > 3) return ""; // Max recursion depth

  let allText = "";
  let cursor = undefined;
  let hasMore = true;

  while (hasMore) {
    try {
      const url = `${NOTION_API}/blocks/${blockId}/children?page_size=100${
        cursor ? `&start_cursor=${cursor}` : ""
      }`;
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
          "Notion-Version": NOTION_VERSION,
        },
        timeout: 8000,
      });

      const blocks = res.data.results || [];

      for (const block of blocks) {
        allText += extractBlockText(block);

        // Recurse into blocks with children (toggles, callouts, etc.)
        if (block.has_children) {
          const childText = await fetchAllBlocks(block.id, token, depth + 1);
          allText += childText;
        }
      }

      hasMore = res.data.has_more;
      cursor = res.data.next_cursor;
    } catch (err) {
      console.error(`Notion fetch error for ${blockId}:`, err.message);
      hasMore = false;
    }
  }

  return allText;
}

// Fetch a single Notion page (title + content)
async function fetchNotionPage(pageId, label) {
  try {
    // Get page title
    const pageRes = await axios.get(`${NOTION_API}/pages/${pageId}`, {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Notion-Version": NOTION_VERSION,
      },
      timeout: 5000,
    });

    const titleProp = pageRes.data.properties?.title?.title;
    const title = titleProp ? extractRichText(titleProp) : label;

    // Get page content
    const content = await fetchAllBlocks(pageId, process.env.NOTION_TOKEN);

    return `\n# ${title}\n${content}`;
  } catch (err) {
    console.error(`Failed to fetch Notion page ${label}:`, err.message);
    return `\n# ${label}\n(Could not fetch this page)\n`;
  }
}

// Fetch all Notion pages and assemble knowledge base
async function getKnowledgeBase() {
  const now = Date.now();

  // Return cache if fresh
  if (cachedKB && now - cacheTimestamp < CACHE_TTL) {
    console.log("Using cached knowledge base");
    return cachedKB;
  }

  console.log("Fetching knowledge base from Notion...");

  if (!process.env.NOTION_TOKEN) {
    console.warn("NOTION_TOKEN not set — using fallback");
    return FALLBACK_KB;
  }

  try {
    // Fetch all pages in parallel
    const pages = await Promise.all(
      NOTION_PAGES.map((p) => fetchNotionPage(p.id, p.label))
    );

    const kb = pages.join("\n---\n");
    cachedKB = kb;
    cacheTimestamp = now;
    return kb;
  } catch (err) {
    console.error("Failed to fetch Notion KB:", err.message);
    // Return stale cache if available, otherwise fallback
    return cachedKB || FALLBACK_KB;
  }
}

// Minimal fallback KB in case Notion is unreachable
const FALLBACK_KB = `The Bridge Spring26 is an 8-week residency in San Francisco for non-US founders.
Arrivals: April 10-12. Kick-off: April 13.
For questions, contact spring26-thebridge@joinef.com or ask on Slack #spring26-the-bridge.`;

// ═══════════════════════════════════════════════════════════
// SYSTEM PROMPT
// ═══════════════════════════════════════════════════════════

function buildSystemPrompt(knowledgeBase) {
  return `You are Dolores, the official WhatsApp assistant for The Bridge Spring26.

## Your Identity
- Your name is Dolores — named after Mission Dolores Manor, the house in San Francisco where The Bridge founders live during the program
- You're the go-to bot for The Bridge Spring26 founders
- You're helpful, sharp, and a little witty
- You talk like a smart friend who's already in SF and knows everything about the program
- Keep it casual but informative — no corporate fluff
- Use short messages. This is WhatsApp, not an email
- Use emojis sparingly but naturally (not every message)
- If someone asks who you are, introduce yourself as Dolores, The Bridge's AI assistant

## Your Audience
- 18-25 year old founders from around the world (non-US)
- Highly technical, ambitious, builder-types
- They're busy and want fast, clear answers
- They might be stressed about logistics (visa, flights, housing)
- Be reassuring but direct

## Tone & Style
- Conversational English, slightly informal
- Think: "smart friend who's already in SF" vibe
- Short sentences. Get to the point
- OK to use abbreviations (SF, IC, KOD, etc.) but explain on first use
- Never be condescending or overly formal
- Match their energy — if they're chill, be chill. If they're stressed, be helpful and calm

## FORMATTING RULES (CRITICAL)
You are writing for WhatsApp, NOT a website or email. Follow these rules strictly:
- NEVER use Markdown syntax. No ** for bold, no ## for headers, no - for bullet points, no []() for links
- WhatsApp bold: use single asterisks *like this*
- WhatsApp italic: use underscores _like this_
- WhatsApp strikethrough: use tildes ~like this~
- WhatsApp monospace: use backticks \`like this\`
- For lists, just use line breaks and simple dashes or numbers, no fancy formatting
- For links, just paste the raw URL — no markdown link syntax
- Keep messages clean and readable, avoid walls of text
- Use line breaks to separate ideas, not headers

## Response Rules

### DO:
- Answer questions based ONLY on the knowledge base below
- Provide links when relevant (forms, calendar, wiki, etc.)
- Be specific with dates, amounts, and deadlines
- If a question has a clear answer, give it immediately — don't pad
- For multi-part questions, use numbered responses
- Proactively mention related deadlines if relevant

### DON'T:
- Make up information not in the knowledge base
- Share internal ops details or staff-only info
- Give immigration/visa advice beyond directing to the Monica session and EF team
- Share the dashboard passwords proactively — only if a founder specifically asks for dashboard access
- Discuss other founders' personal info
- Make promises about funding, acceptance, or outcomes
- Never mention "Entrepreneurs First" or "EF" unless the founder brings it up first

### WHEN YOU DON'T KNOW:
Say something like:
- "Not sure about that one — hit up the team at spring26-thebridge@joinef.com and they'll sort you out"
- "Good question but I don't have the answer yet. Ping the team on Slack #spring26-the-bridge"

## KNOWLEDGE BASE:

${knowledgeBase}
`;
}

// ═══════════════════════════════════════════════════════════
// CLAUDE API — conversation management
// ═══════════════════════════════════════════════════════════

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const conversationCache = new Map();
const MAX_HISTORY = 10;

function getHistory(phoneNumber) {
  return conversationCache.get(phoneNumber) || [];
}

function addToHistory(phoneNumber, role, content) {
  const history = getHistory(phoneNumber);
  history.push({ role, content });
  if (history.length > MAX_HISTORY) {
    history.splice(0, history.length - MAX_HISTORY);
  }
  conversationCache.set(phoneNumber, history);
}

async function generateResponse(phoneNumber, userMessage) {
  addToHistory(phoneNumber, "user", userMessage);
  const messages = getHistory(phoneNumber);

  // Fetch fresh knowledge base from Notion
  const knowledgeBase = await getKnowledgeBase();
  const systemPrompt = buildSystemPrompt(knowledgeBase);

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    system: systemPrompt,
    messages,
  });

  const assistantMessage =
    response.content[0]?.text || "Sorry, I couldn't process that. Try again!";
  addToHistory(phoneNumber, "assistant", assistantMessage);
  return assistantMessage;
}

// ═══════════════════════════════════════════════════════════
// WHATSAPP API — send messages + mark as read
// ═══════════════════════════════════════════════════════════

const WHATSAPP_API = "https://graph.facebook.com/v21.0";

function splitMessage(text, maxLength) {
  if (text.length <= maxLength) return [text];
  const chunks = [];
  let remaining = text;
  while (remaining.length > 0) {
    if (remaining.length <= maxLength) {
      chunks.push(remaining);
      break;
    }
    let splitIndex = remaining.lastIndexOf("\n", maxLength);
    if (splitIndex === -1 || splitIndex < maxLength * 0.5) {
      splitIndex = remaining.lastIndexOf(" ", maxLength);
    }
    if (splitIndex === -1) splitIndex = maxLength;
    chunks.push(remaining.slice(0, splitIndex));
    remaining = remaining.slice(splitIndex).trimStart();
  }
  return chunks;
}

async function sendMessage(to, text) {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const token = process.env.WHATSAPP_TOKEN;
  const chunks = splitMessage(text, 4000);

  for (const chunk of chunks) {
    await axios.post(
      `${WHATSAPP_API}/${phoneNumberId}/messages`,
      {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type: "text",
        text: { body: chunk },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  }
}

async function markAsRead(messageId) {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const token = process.env.WHATSAPP_TOKEN;
  try {
    await axios.post(
      `${WHATSAPP_API}/${phoneNumberId}/messages`,
      {
        messaging_product: "whatsapp",
        status: "read",
        message_id: messageId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error("Failed to mark as read:", err.message);
  }
}

// ═══════════════════════════════════════════════════════════
// AIRTABLE — conversation logging
// ═══════════════════════════════════════════════════════════

const AIRTABLE_API = "https://api.airtable.com/v0";
const BASE_ID = process.env.AIRTABLE_BASE_ID || "appHQ6zqny4qVWgOZ";
const TABLE_NAME = "Dolores Conversations";

async function logMessage({ messageId, phoneNumber, direction, message }) {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) {
    console.warn("AIRTABLE_TOKEN not set — skipping logging");
    return;
  }
  try {
    await axios.post(
      `${AIRTABLE_API}/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`,
      {
        records: [
          {
            fields: {
              "Message ID": messageId || `bot-${Date.now()}`,
              "Phone Number": phoneNumber,
              Direction: direction,
              Message: message,
              Timestamp: new Date().toISOString(),
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error("Airtable log failed:", err.response?.data || err.message);
  }
}

// ═══════════════════════════════════════════════════════════
// WEBHOOK HANDLER — main export
// ═══════════════════════════════════════════════════════════

const processedMessages = new Set();

module.exports = async function handler(req, res) {
  // ─── GET: Webhook verification (Meta handshake) ───
  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === process.env.WEBHOOK_VERIFY_TOKEN) {
      console.log("Webhook verified");
      return res.status(200).send(challenge);
    }
    return res.status(403).send("Forbidden");
  }

  // ─── POST: Incoming messages ───
  if (req.method === "POST") {
    const body = req.body;

    try {
      const entry = body?.entry?.[0];
      const changes = entry?.changes?.[0];
      const value = changes?.value;

      if (!value?.messages?.[0]) {
        return res.status(200).send("OK");
      }

      const message = value.messages[0];
      const from = message.from;
      const messageId = message.id;

      // Deduplicate
      if (processedMessages.has(messageId)) {
        return res.status(200).send("OK");
      }
      processedMessages.add(messageId);
      if (processedMessages.size > 1000) {
        const arr = [...processedMessages];
        arr.slice(0, arr.length - 1000).forEach((id) =>
          processedMessages.delete(id)
        );
      }

      // Mark as read (non-blocking)
      markAsRead(messageId).catch(() => {});

      // Only handle text messages
      if (message.type !== "text") {
        await sendMessage(
          from,
          "Hey! I can only read text messages for now. Type your question and I'll help you out 🙂"
        );
        await logMessage({
          messageId,
          phoneNumber: from,
          direction: "inbound",
          message: `[${message.type} message — not supported]`,
        });
        return res.status(200).send("OK");
      }

      const userText = message.text.body;
      console.log(`Message from ${from}: ${userText}`);

      // Log inbound (non-blocking)
      logMessage({
        messageId,
        phoneNumber: from,
        direction: "inbound",
        message: userText,
      }).catch(() => {});

      const reply = await generateResponse(from, userText);
      console.log(`Reply to ${from}: ${reply.slice(0, 100)}...`);

      await sendMessage(from, reply);

      // Log outbound (non-blocking)
      logMessage({
        messageId: `reply-${messageId}`,
        phoneNumber: from,
        direction: "outbound",
        message: reply,
      }).catch(() => {});

      return res.status(200).send("OK");
    } catch (err) {
      console.error("Error processing message:", err);
      return res.status(200).send("OK");
    }
  }

  res.status(405).send("Method not allowed");
};
