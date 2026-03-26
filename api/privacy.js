module.exports = function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BigBilly — Privacy Policy</title>
  <style>
    body { font-family: -apple-system, sans-serif; max-width: 700px; margin: 40px auto; padding: 0 20px; color: #333; line-height: 1.6; }
    h1 { font-size: 1.5em; }
    h2 { font-size: 1.2em; margin-top: 1.5em; }
  </style>
</head>
<body>
  <h1>BigBilly — Privacy Policy</h1>
  <p><strong>Last updated:</strong> March 26, 2026</p>

  <h2>What is BigBilly?</h2>
  <p>BigBilly is a WhatsApp chatbot operated by Entrepreneurs First to assist participants of The Bridge Spring26 programme with programme-related questions.</p>

  <h2>Data we collect</h2>
  <p>When you message BigBilly, we receive your phone number and message content via the WhatsApp Business API. We store conversation logs (phone number, message text, timestamps) to improve the service.</p>

  <h2>How we use your data</h2>
  <p>Your data is used solely to respond to your questions and improve the chatbot experience. We do not sell, share, or use your data for advertising purposes.</p>

  <h2>Third-party services</h2>
  <p>BigBilly uses Meta's WhatsApp Business API for messaging, Anthropic's Claude API for generating responses, and Airtable for conversation logging. Each service has its own privacy policy.</p>

  <h2>Data retention</h2>
  <p>Conversation logs are retained for the duration of The Bridge programme and deleted within 90 days after the programme ends.</p>

  <h2>Your rights</h2>
  <p>You can request deletion of your data at any time by emailing <a href="mailto:spring26-thebridge@joinef.com">spring26-thebridge@joinef.com</a>.</p>

  <h2>Contact</h2>
  <p>For questions about this policy, contact <a href="mailto:spring26-thebridge@joinef.com">spring26-thebridge@joinef.com</a>.</p>
</body>
</html>`);
};
