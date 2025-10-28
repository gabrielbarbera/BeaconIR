# Beacon IR - Environment Setup Guide

## Environment Variables Setup

### 1. Agiled CRM Integration

Agiled is your all-in-one business management platform for CRM, projects, invoicing, and client portal.

**Get your API key:**
1. Log in to your Agiled account
2. Go to Settings > API
3. Generate a new API key
4. Copy the key (starts with `agiled_`)

**Environment Variable:**
```env
AGILED_API_KEY=agiled_your_api_key_here
```

**Available Features:**
- Lead management from contact form
- Client tracking
- Project management for IR website builds
- Invoicing for $250-2000/month tiers
- Client portal for each client

**📚 API Documentation:** See [agiled-api-documentation.md](./agiled-api-documentation.md) for detailed API reference, endpoints, and integration examples.

---

### 2. SendFox Email Marketing

SendFox is for email newsletters and investor communications.

**Get your API key:**
1. Log in to SendFox
2. Go to Settings > API
3. Create a new API key
4. Note your default list ID

**Environment Variables:**
```env
SENDFOX_API_KEY=your_sendfox_api_key_here
SENDFOX_LIST_ID=your_default_list_id_here
```

**Integration Points:**
- Contact form submissions → Newsletter list
- Investor update emails
- Quarterly newsletters
- Product announcements

---

### 3. TidyCal Scheduling

TidyCal handles client consultations and demos.

**Get your API key:**
1. Log in to TidyCal
2. Go to Settings > Integrations
3. Enable API access
4. Copy your API key

**Environment Variable:**
```env
TIDYCAL_API_KEY=your_tidycal_api_key_here
```

**Integration Points:**
- "Book a Call" buttons
- Demo scheduling
- Consultation bookings
- Client onboarding calls

---

### 4. Activepieces Automation

Activepieces handles workflow automation for the platform.

**Get your API key:**
1. Log in to Activepieces
2. Go to Settings > API
3. Generate API key

**Environment Variable:**
```env
ACTIVEPIECES_API_KEY=your_activepieces_api_key_here
```

**Workflows to Create:**
1. **Contact Form → Agiled**: Auto-create leads when form submitted
2. **Agiled → SendFox**: Add new clients to email list
3. **SendFox → Agiled**: Track email opens/engagements
4. **Press Release → Distribution**: Auto-distribute via Activepieces

---

### 5. Vercel Deployment

Vercel hosts the Beacon IR website with global CDN.

**Get your tokens:**
1. Sign up at [vercel.com](https://vercel.com)
2. Create new project: `beacon-ir`
3. Connect GitHub repository
4. Get tokens from Settings > Tokens

**Environment Variables:**
```env
VERCEL_PROJECT_ID=your_project_id
VERCEL_TOKEN=your_deployment_token
```

---

## Setup Instructions

### Local Development

1. **Copy the environment template:**
   ```bash
   cp env.example .env.local
   ```

2. **Edit `.env.local` with your actual keys:**
   ```env
   # Agiled CRM
   AGILED_API_KEY=agiled_your_key
   
   # SendFox Email
   SENDFOX_API_KEY=your_sendfox_key
   SENDFOX_LIST_ID=your_list_id
   
   # TidyCal Scheduling
   TIDYCAL_API_KEY=your_tidycal_key
   
   # Activepieces Automation
   ACTIVEPIECES_API_KEY=your_activepieces_key
   ```

3. **Restart the dev server:**
   ```bash
   npm run dev
   ```

### Vercel Production

1. **Go to Vercel Dashboard** → Your Project → Settings → Environment Variables

2. **Add all environment variables** for Production, Preview, and Development:

   ```env
   AGILED_API_KEY=your_production_key
   SENDFOX_API_KEY=your_production_key
   SENDFOX_LIST_ID=your_production_list_id
   TIDYCAL_API_KEY=your_production_key
   ACTIVEPIECES_API_KEY=your_production_key
   NEXT_PUBLIC_SITE_URL=https://beaconir.com
   ```

3. **Redeploy** after adding variables

---

## Testing Integrations

### Test Contact Form (Agiled)

1. Submit contact form at `/contact`
2. Check console logs for contact data
3. Verify lead appears in Agiled CRM
4. Check project dashboard in Agiled

### Test Email Integration (SendFox)

1. Subscribe to newsletter
2. Check SendFox dashboard for new contact
3. Send test email campaign
4. Verify delivery

### Test Scheduling (TidyCal)

1. Click "Book a Call" button
2. Verify TidyCal calendar opens
3. Book test appointment
4. Check TidyCal dashboard

---

## Security Best Practices

✅ **Never commit `.env.local` to git**
✅ **Use different API keys for production/preview**
✅ **Rotate API keys quarterly**
✅ **Use environment-specific variables in Vercel**
✅ **Enable 2FA on all service accounts**

---

## Cost Management

Your existing AppSumo tools provide these integrations for **$0 additional cost**:

| Service | Your Cost | Regular Price/Year | Savings |
|---------|-----------|-------------------|---------|
| **Agiled** | $0 | $2,520 | ✅ $2,520 saved |
| **SendFox** | $0 | $480 | ✅ $480 saved |
| **TidyCal** | $0 | $180 | ✅ $180 saved |
| **Activepieces** | $0 | $600 | ✅ $600 saved |
| **Total** | $0 | $3,780 | ✅ **$3,780/year** |

---

## Troubleshooting

### Contact form not submitting to Agiled
- Check `.env.local` has correct `AGILED_API_KEY`
- Verify API key permissions in Agiled
- Check browser console for errors
- Review Vercel logs

### Emails not sending
- Verify `SENDFOX_LIST_ID` is correct
- Check SendFox API rate limits
- Verify email addresses are valid

### Scheduling not working
- Check TidyCal API key is set
- Verify TidyCal calendar is published
- Check timezone settings

---

## Next Steps

1. ✅ Set up environment variables
2. Test each integration
3. Deploy to Vercel
4. Configure custom domain (beaconir.com)
5. Set up monitoring and analytics
