# Agiled API Documentation

## Overview

[Agiled.app](https://agiled.app/) is an all-in-one business management platform that provides CRM, project management, invoicing, client portals, and more. This documentation covers the API integration for Beacon IR.

**Official API Documentation:** https://my.agiled.app/developers

---

## Authentication

### Getting Your API Key

1. Log in to your Agiled account
2. Navigate to **Settings** > **API Settings**
3. Generate a new API key
4. Copy the key (format: `agiled_xxxxxxxxxxxx`)

**Important:** API access is available exclusively to users with paid accounts.

### Using the API Key

All API requests require authentication via Bearer token:

```http
Authorization: Bearer agiled_your_api_key_here
```

---

## Base URL

```http
https://api.agiled.app/v1
```

---

## Common Endpoints

### 1. Contacts & Leads

#### Create a Contact

```http
POST /contacts
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "notes": "Interested in IR website services",
  "source": "website-contact-form"
}
```

**Response:**
```json
{
  "id": "contact_123",
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "created_at": "2024-01-15T10:30:00Z"
}
```

#### Get All Contacts

```http
GET /contacts
```

**Query Parameters:**
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 20)
- `search` - Search by name, email, or company

#### Get Contact by ID

```http
GET /contacts/{contact_id}
```

---

### 2. Projects

#### Create a Project

```http
POST /projects
```

**Request Body:**
```json
{
  "name": "IR Website for Acme Corp",
  "client_id": "contact_123",
  "description": "Full IR website setup with CMS",
  "start_date": "2024-01-15",
  "due_date": "2024-03-15",
  "status": "active",
  "project_value": 2000
}
```

#### Get Projects

```http
GET /projects
```

**Query Parameters:**
- `status` - Filter by status (active, completed, on_hold)
- `client_id` - Filter by client
- `page` - Page number
- `limit` - Items per page

---

### 3. Deals (CRM Pipeline)

#### Create a Deal

```http
POST /deals
```

**Request Body:**
```json
{
  "name": "IR Website Setup",
  "contact_id": "contact_123",
  "value": 1500,
  "stage": "qualification",
  "notes": "Company planning to go public in Q2 2025"
}
```

**Deal Stages:**
- `qualification` - Initial contact
- `proposal` - Proposal sent
- `negotiation` - In negotiations
- `won` - Deal closed
- `lost` - Deal lost

#### Update Deal Stage

```http
PATCH /deals/{deal_id}
```

**Request Body:**
```json
{
  "stage": "proposal",
  "notes": "Follow-up scheduled for next week"
}
```

---

### 4. Invoices

#### Create an Invoice

```http
POST /invoices
```

**Request Body:**
```json
{
  "contact_id": "contact_123",
  "project_id": "project_456",
  "items": [
    {
      "description": "IR Website Development",
      "quantity": 1,
      "price": 1500,
      "total": 1500
    },
    {
      "description": "CMS Integration",
      "quantity": 1,
      "price": 500,
      "total": 500
    }
  ],
  "notes": "Payment due within 30 days",
  "due_date": "2024-02-15"
}
```

#### Get Invoices

```http
GET /invoices?status=pending
```

**Query Parameters:**
- `status` - pending, paid, overdue, cancelled
- `contact_id` - Filter by client
- `project_id` - Filter by project

---

### 5. Tasks

#### Create a Task

```http
POST /tasks
```

**Request Body:**
```json
{
  "title": "Review IR website mockups",
  "project_id": "project_456",
  "assigned_to": "team_member_id",
  "due_date": "2024-01-20",
  "priority": "high",
  "status": "todo"
}
```

**Task Statuses:**
- `todo` - Not started
- `in_progress` - Currently working
- `in_review` - Under review
- `done` - Completed

---

## Beacon IR Integration Use Cases

### 1. Contact Form Submission

When a user submits the contact form, create a lead in Agiled:

**Endpoint:** `POST /contacts`

```typescript
// Implementation in src/lib/integrations/agiled.ts
const leadData = {
  name: data.name,
  email: data.email,
  company: data.company,
  notes: data.message,
  source: "beacon-ir-website",
  status: "new"
};

const response = await fetch("https://api.agiled.app/v1/contacts", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.AGILED_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(leadData),
});
```

### 2. Module Purchase Workflow

When a client purchases an IR module:

1. **Create/Update Contact**
   - Add to "IR Module - Clients" list
   - Tag with module type (PR, IR, Bundle)

2. **Create Project**
   - Project name: "IR Module: {Module Type} for {Company}"
   - Link to contact
   - Set estimated value based on pricing tier

3. **Create Tasks**
   - Initial setup task
   - Content migration task
   - Launch checklist task

4. **Create Invoice**
   - Auto-generate based on module pricing
   - Link to project
   - Set payment terms

### 3. Ongoing Client Management

#### Quarterly Updates
- Track all clients in Agiled by module type
- Use tags for segmentation (PR, IR, Bundle)
- Set up automated reminders for quarterly check-ins

#### Revenue Tracking
- Use projects to track module subscriptions
- Use invoices to track recurring revenue
- Create reports by module type and revenue tier

---

## Rate Limits

Agiled API has rate limits to ensure service quality:
- **Free Plan:** Limited API access
- **Paid Plans:** Full API access with higher limits
- **Recommended:** Implement retry logic with exponential backoff

---

## Error Handling

### Common Error Codes

```json
{
  "error": {
    "code": "validation_error",
    "message": "Email is already registered",
    "details": {
      "field": "email",
      "value": "john@example.com"
    }
  }
}
```

**Error Codes:**
- `401` - Unauthorized (invalid API key)
- `403` - Forbidden (insufficient permissions)
- `404` - Resource not found
- `422` - Validation error
- `429` - Rate limit exceeded
- `500` - Server error

### Retry Logic

```typescript
async function callAgiledAPI(endpoint: string, options: RequestInit) {
  const maxRetries = 3;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(endpoint, options);
      if (response.ok) return response;
      
      if (response.status === 429) {
        const waitTime = Math.pow(2, attempt) * 1000; // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }
      
      throw new Error(`API call failed: ${response.status}`);
    } catch (error) {
      if (attempt === maxRetries) throw error;
    }
  }
}
```

---

## Webhooks (Optional)

Agiled supports webhooks for real-time updates:

### Register Webhook

```http
POST /webhooks
```

**Request Body:**
```json
{
  "url": "https://your-domain.com/api/webhooks/agiled",
  "events": [
    "contact.created",
    "deal.stage_changed",
    "invoice.paid"
  ]
}
```

### Webhook Payload Example

```json
{
  "event": "contact.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "id": "contact_123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

## Best Practices

### 1. API Key Security
- ✅ Store API key in environment variables
- ✅ Never commit API keys to version control
- ✅ Use different keys for development and production
- ✅ Rotate keys periodically (quarterly)

### 2. Data Management
- ✅ Use consistent naming conventions for projects
- ✅ Tag contacts by module type and revenue tier
- ✅ Link all related resources (contacts, projects, invoices)
- ✅ Keep notes updated with client interactions

### 3. Error Handling
- ✅ Always validate API responses
- ✅ Implement retry logic for transient failures
- ✅ Log errors for debugging
- ✅ Gracefully handle API downtime

### 4. Performance
- ✅ Cache frequently accessed data
- ✅ Batch operations when possible
- ✅ Use pagination for large datasets
- ✅ Limit concurrent API calls

---

## Resources

- **Official Documentation:** https://my.agiled.app/developers
- **Support:** https://agiled.app/contact-us/
- **Help Center:** https://help.agiled.app/
- **API Key Guide:** https://help.agiled.app/article/60-how-to-get-agiled-api-key

---

## Implementation Status

### Current Implementation

See `src/lib/integrations/agiled.ts` for the current integration:

- ✅ Contact form to lead creation
- ✅ Basic error handling
- ✅ Environment variable configuration

### To Do

- ⏳ Update API endpoints to match actual Agiled API
- ⏳ Implement deal pipeline integration
- ⏳ Add project creation for module purchases
- ⏳ Set up invoice generation
- ⏳ Add webhook support (optional)
- ⏳ Implement rate limiting
- ⏳ Add retry logic

---

## Testing

### Test API Connection

```bash
# Add to your .env.local
AGILED_API_KEY=agiled_your_test_key

# Test API
npm run test  # Add API tests
```

### Manual Testing

1. Submit contact form on website
2. Check Agiled dashboard for new contact
3. Verify contact data is correct
4. Check for any errors in console

---

**Last Updated:** January 2024  
**Version:** 1.0.0  
**Maintained By:** Beacon IR Development Team
