// lib/integrations/sendfox.ts
interface SendFoxContact {
  email: string;
  name: string;
  lists?: string[];
}

export async function addToSendFoxList(data: {
  email: string;
  name: string;
}): Promise<boolean> {
  try {
    const apiKey = process.env.SENDFOX_API_KEY;
    const listId = process.env.SENDFOX_LIST_ID;

    if (!apiKey || !listId) {
      console.error("SendFox credentials not configured");
      return false;
    }

    const contact: SendFoxContact = {
      email: data.email,
      name: data.name,
      lists: [listId],
    };

    // TODO: Replace with actual SendFox API endpoint
    const response = await fetch("https://api.sendfox.com/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    if (!response.ok) {
      console.error("Failed to add contact to SendFox:", await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error adding contact to SendFox:", error);
    return false;
  }
}

export async function sendEmailCampaign(
  listId: string,
  subject: string,
  content: string
): Promise<boolean> {
  try {
    const apiKey = process.env.SENDFOX_API_KEY;

    if (!apiKey) {
      console.error("SendFox API key not configured");
      return false;
    }

    // TODO: Replace with actual SendFox API endpoint
    const response = await fetch("https://api.sendfox.com/campaigns", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        list_id: listId,
        subject,
        content,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Error sending SendFox campaign:", error);
    return false;
  }
}

// For development/testing without API key
export function logEmailSubscription(data: {
  email: string;
  name: string;
}): void {
  console.log("📬 New Email Subscription:", {
    timestamp: new Date().toISOString(),
    ...data,
  });
}
