# BigBilly — The Bridge Spring26 WhatsApp Bot

WhatsApp chatbot for The Bridge Spring26 founders, powered by Claude + Vercel serverless.

## Architecture

```
WhatsApp User → Meta Cloud API → Vercel webhook (/api/webhook) → Claude API → WhatsApp reply
```

## Project Structure

```
├── api/
│   └── webhook.js          # Vercel serverless endpoint (GET=verify, POST=messages)
├── lib/
│   ├── claude.js            # Claude API integration + conversation history
│   ├── knowledge.js         # System prompt + knowledge base loader
│   └── whatsapp.js          # WhatsApp Cloud API send/read helpers
├── knowledge_base.md        # All program info (the bot's brain)
├── system_prompt.md         # Bot personality reference (human-readable)
├── META_SETUP.md            # Step-by-step Meta Business API setup
├── vercel.json              # Vercel config
└── package.json
```

## Quick Start

### 1. Prerequisites
- Node.js 18+
- Vercel CLI (`npm i -g vercel`)
- Anthropic API key
- Meta Business account (see META_SETUP.md)

### 2. Clone & Install
```bash
git clone <your-repo>
cd bigbilly-whatsapp-bot
npm install
```

### 3. Set Environment Variables

On Vercel dashboard or via CLI:
```bash
vercel env add WHATSAPP_TOKEN
vercel env add WHATSAPP_PHONE_NUMBER_ID
vercel env add WEBHOOK_VERIFY_TOKEN
vercel env add ANTHROPIC_API_KEY
```

| Variable | Description |
|----------|-------------|
| `WHATSAPP_TOKEN` | Permanent system user token from Meta |
| `WHATSAPP_PHONE_NUMBER_ID` | Your WhatsApp phone number ID |
| `WEBHOOK_VERIFY_TOKEN` | Any random string (must match Meta webhook config) |
| `ANTHROPIC_API_KEY` | Your Claude API key from console.anthropic.com |

### 4. Deploy
```bash
vercel --prod
```

### 5. Configure Meta Webhook
1. Go to Meta Developer Dashboard → Your App → WhatsApp → Configuration
2. Set Callback URL: `https://your-project.vercel.app/api/webhook`
3. Set Verify Token: same as your `WEBHOOK_VERIFY_TOKEN`
4. Subscribe to `messages` field

### 6. Test
Send a WhatsApp message to your test number. BigBilly should respond.

## Updating the Knowledge Base

Edit `knowledge_base.md` and redeploy:
```bash
vercel --prod
```

The bot reads the knowledge base at cold start. A new deploy = fresh knowledge.

## Limitations (MVP)

- **Conversation memory**: In-memory only (resets on cold start). For persistent history, add Redis (e.g., Upstash — free tier, works great with Vercel).
- **Media**: Text-only for now. Images, audio, documents not processed.
- **Blast mode**: Not yet implemented server-side (needs admin auth layer).

## Cost Estimate

- **Vercel**: Free tier covers ~100k invocations/month
- **Claude API**: ~$0.003-0.015 per message (Sonnet)
- **WhatsApp**: First 1,000 conversations/month free, then ~$0.005-0.08 per conversation depending on region
