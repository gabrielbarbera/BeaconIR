// lib/integrations/agiled.ts
interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface AgiledLead {
  name: string;
  email: string;
  company: string;
  notes: string;
  source: string;
  status?: string;
}

export async function createAgiledLead(
  data: ContactFormData
): Promise<boolean> {
  try {
    const apiKey = process.env.AGILED_API_KEY;

    if (!apiKey) {
      console.error("Agiled API key not configured");
      return false;
    }

    const lead: AgiledLead = {
      name: data.name,
      email: data.email,
      company: data.company,
      notes: data.message,
      source: "beacon-ir-website",
      status: "new",
    };

    // TODO: Replace with actual Agiled API endpoint
    const response = await fetch("https://api.agiled.app/v1/leads", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
    });

    if (!response.ok) {
      console.error("Failed to create Agiled lead:", await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error creating Agiled lead:", error);
    return false;
  }
}

export async function createAgiledContact(
  data: ContactFormData
): Promise<boolean> {
  try {
    const apiKey = process.env.AGILED_API_KEY;

    if (!apiKey) {
      console.error("Agiled API key not configured");
      return false;
    }

    // TODO: Replace with actual Agiled API endpoint for contacts
    const response = await fetch("https://api.agiled.app/v1/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.company,
        notes: data.message,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Error creating Agiled contact:", error);
    return false;
  }
}

// For development/testing without API key
export function logContactToConsole(data: ContactFormData): void {
  console.log("[Contact Form] New submission:", {
    timestamp: new Date().toISOString(),
    ...data,
  });
}
