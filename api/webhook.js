const { generateResponse } = require("../lib/claude");
const { sendMessage, markAsRead } = require("../lib/whatsapp");
const { logMessage } = require("../lib/airtable");

// Track processed message IDs to avoid duplicates (WhatsApp can retry)
const processedMessages = new Set();

module.exports = async function handler(req, res) {
  // ─── GET: Webhook verification (Meta handshake) ───
  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === process.env.WEBHOOK_VERIFY_TOKEN) {
      console.log("✅ Webhook verified");
      return res.status(200).send(challenge);
    }
    return res.status(403).send("Forbidden");
  }

  // ─── POST: Incoming messages ───
  if (req.method === "POST") {
    const body = req.body;

    // Always return 200 immediately to acknowledge receipt
    // (Meta will retry if you don't respond within 20s)
    res.status(200).send("OK");

    try {
      // Extract message data
      const entry = body?.entry?.[0];
      const changes = entry?.changes?.[0];
      const value = changes?.value;

      // Only process actual messages (not status updates)
      if (!value?.messages?.[0]) return;

      const message = value.messages[0];
      const from = message.from; // sender phone number
      const messageId = message.id;

      // Deduplicate
      if (processedMessages.has(messageId)) return;
      processedMessages.add(messageId);

      // Clean up old message IDs (keep last 1000)
      if (processedMessages.size > 1000) {
        const arr = [...processedMessages];
        arr.slice(0, arr.length - 1000).forEach((id) =>
          processedMessages.delete(id)
        );
      }

      // Mark as read (blue ticks)
      await markAsRead(messageId);

      // Only handle text messages for now
      if (message.type !== "text") {
        const fallback =
          "Hey! I can only read text messages for now. Type your question and I'll help you out 🤙";
        await sendMessage(from, fallback);
        // Log the non-text attempt too
        await logMessage({
          messageId,
          phoneNumber: from,
          direction: "inbound",
          message: `[${message.type} message — not supported]`,
        });
        return;
      }

      const userText = message.text.body;
      console.log(`📩 Message from ${from}: ${userText}`);

      // Log inbound message to Airtable
      await logMessage({
        messageId,
        phoneNumber: from,
        direction: "inbound",
        message: userText,
      });

      // Generate response via Claude
      const reply = await generateResponse(from, userText);
      console.log(`📤 Reply to ${from}: ${reply.slice(0, 100)}...`);

      // Send response via WhatsApp
      await sendMessage(from, reply);

      // Log outbound message to Airtable
      await logMessage({
        messageId: `reply-${messageId}`,
        phoneNumber: from,
        direction: "outbound",
        message: reply,
      });
    } catch (err) {
      console.error("❌ Error processing message:", err);
    }

    return;
  }

  // Other methods
  res.status(405).send("Method not allowed");
};
