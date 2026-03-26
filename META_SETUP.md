# Meta Business / WhatsApp Cloud API — Setup Guide

## Step 1: Create a Meta Business Account

1. Go to https://business.facebook.com
2. Click "Create Account"
3. Fill in business name (e.g., "EF The Bridge") and your details
4. Verify your email

## Step 2: Create a Meta App

1. Go to https://developers.facebook.com/apps
2. Click "Create App"
3. Select **"Business"** as the app type
4. Name it (e.g., "BigBilly WhatsApp Bot")
5. Link it to your Meta Business Account

## Step 3: Add WhatsApp Product

1. In your app dashboard, click **"Add Product"**
2. Find **"WhatsApp"** and click **"Set Up"**
3. You'll get a **test phone number** automatically
4. Note down:
   - **Phone Number ID** (in WhatsApp > API Setup)
   - **WhatsApp Business Account ID**
   - **Temporary Access Token** (valid 24h — we'll make a permanent one later)

## Step 4: Generate a Permanent Access Token

1. Go to https://developers.facebook.com/apps → Your App → **App Settings > Basic**
2. Note your **App ID** and **App Secret**
3. Go to **Business Settings** > **System Users** (https://business.facebook.com/settings/system-users)
4. Create a System User (Admin role)
5. Click **"Generate Token"** for that system user
6. Select your app, then add these permissions:
   - `whatsapp_business_management`
   - `whatsapp_business_messaging`
7. Generate — this token **never expires**. Save it securely.

## Step 5: Configure the Webhook

Once BigBilly is deployed on Vercel, you need to point WhatsApp to it:

1. Go to your app dashboard → **WhatsApp > Configuration**
2. Click **"Edit"** next to Webhook
3. Set:
   - **Callback URL**: `https://your-project.vercel.app/api/webhook`
   - **Verify Token**: the same value you set in your `WEBHOOK_VERIFY_TOKEN` env var
4. Click **"Verify and Save"**
5. Subscribe to the **"messages"** webhook field

## Step 6: Add a Real Phone Number (when ready for production)

1. Go to **WhatsApp > Phone Numbers**
2. Click **"Add Phone Number"**
3. Enter a real phone number (can't already be registered on WhatsApp)
4. Verify via SMS or voice call
5. Update your `WHATSAPP_PHONE_NUMBER_ID` env var with the new phone number ID

## Environment Variables You'll Need

```
WHATSAPP_TOKEN=your_permanent_access_token
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
WEBHOOK_VERIFY_TOKEN=any_random_string_you_choose
ANTHROPIC_API_KEY=your_claude_api_key
```

## Testing

- Use the **test phone number** provided by Meta to send yourself messages
- In WhatsApp > API Setup, you can add up to 5 test recipient numbers
- Send a test message to your bot and verify it responds

## Going to Production

1. Submit your app for **App Review** in Meta Developer Dashboard
2. Request the `whatsapp_business_messaging` permission
3. Once approved, your bot can message anyone who messages it first
4. You can also apply for **verified business** status for the green checkmark
