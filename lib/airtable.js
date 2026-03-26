const axios = require("axios");

const AIRTABLE_API = "https://api.airtable.com/v0";
const BASE_ID = process.env.AIRTABLE_BASE_ID || "appHQ6zqny4qVWgOZ";
const TABLE_NAME = "BigBilly Conversations";

async function logMessage({ messageId, phoneNumber, direction, message }) {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) {
    console.warn("⚠️ AIRTABLE_TOKEN not set — skipping message logging");
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
              Direction: direction, // "inbound" or "outbound"
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
    // Non-blocking — don't crash the bot if logging fails
    console.error("❌ Airtable log failed:", err.response?.data || err.message);
  }
}

module.exports = { logMessage };
