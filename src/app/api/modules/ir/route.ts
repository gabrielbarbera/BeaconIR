/**
 * API Route: IR Module
 *
 * Handles IR website creation and management
 */

import { createIRSite } from "@/lib/modules/irModule";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const result = await createIRSite({
      companyName: data.companyName,
      clientEmail: data.clientEmail,
      planTier: data.planTier,
      customDomain: data.customDomain,
    });

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error in IR API route:", error);
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

    // TODO: Fetch IR projects for client
    // const projects = await getIRProjectsByClient(clientEmail);

    return NextResponse.json({ projects: [] }, { status: 200 });
  } catch (error) {
    console.error("Error in IR GET route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
