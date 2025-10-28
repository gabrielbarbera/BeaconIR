/**
 * API Route: PR Module
 *
 * Handles press release submission and distribution
 */

import { submitPressRelease } from "@/lib/modules/prModule";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const result = await submitPressRelease({
      title: data.title,
      content: data.content,
      clientEmail: data.clientEmail,
      distributionDate: data.distributionDate,
      partner: data.partner,
    });

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error in PR API route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const clientEmail = searchParams.get("clientEmail");

    if (!clientEmail) {
      return NextResponse.json(
        { error: "clientEmail is required" },
        { status: 400 }
      );
    }

    // TODO: Fetch PR submissions for client
    // const submissions = await getPRSubmissionsByClient(clientEmail);

    return NextResponse.json({ submissions: [] }, { status: 200 });
  } catch (error) {
    console.error("Error in PR GET route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
