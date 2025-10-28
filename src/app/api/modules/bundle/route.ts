/**
 * API Route: Bundle Module
 *
 * Handles bundle purchases and activation
 */

import { purchaseBundle } from "@/lib/modules/bundleModule";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const result = await purchaseBundle({
      clientEmail: data.clientEmail,
      bundleTier: data.bundleTier,
      paymentMethod: data.paymentMethod || "stripe",
    });

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error in Bundle API route:", error);
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

    // TODO: Fetch bundles for client
    // const bundles = await getBundlesByClient(clientEmail);

    return NextResponse.json({ bundles: [] }, { status: 200 });
  } catch (error) {
    console.error("Error in Bundle GET route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
