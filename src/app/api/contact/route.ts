import {
  createAgiledLead,
  logContactToConsole,
} from "@/lib/integrations/agiled";
import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.company || !data.email || !data.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Log for development
    logContactToConsole(data);

    // Send to Agiled CRM
    const agiledSuccess = await createAgiledLead(data);

    if (!agiledSuccess) {
      console.warn(
        "Failed to create Agiled lead, but continuing with form submission"
      );
    }

    // TODO: Send email notification to team
    // await sendEmailNotification(data)

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
