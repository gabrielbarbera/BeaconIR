import { authOptions } from "@/lib/auth";
import { sendContactSupportEmail } from "@/lib/email";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { subject, message, urgency } = await request.json();

    if (!subject || !message) {
      return NextResponse.json(
        { error: "Subject and message are required" },
        { status: 400 }
      );
    }

    // Send support email
    await sendContactSupportEmail(
      session.user.email,
      subject,
      message,
      urgency || "normal",
      session.user.email
    );

    return NextResponse.json(
      { message: "Support request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Support request error:", error);
    return NextResponse.json(
      { error: "Failed to send support request" },
      { status: 500 }
    );
  }
}
