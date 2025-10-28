import { authOptions } from "@/lib/auth";
import { cmsClient } from "@/lib/cms-client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const companyId = searchParams.get("companyId");

    if (!type) {
      return NextResponse.json(
        { error: "Content type is required" },
        { status: 400 }
      );
    }

    // Get content based on type
    let content = [];
    switch (type) {
      case "ir-news":
        content = await cmsClient.getIRNews(
          companyId ? parseInt(companyId) : undefined
        );
        break;
      case "sec-filings":
        content = await cmsClient.getSECFilings(
          companyId ? parseInt(companyId) : undefined
        );
        break;
      case "presentations":
        content = await cmsClient.getPresentations(
          companyId ? parseInt(companyId) : undefined
        );
        break;
      case "leadership":
        content = await cmsClient.getLeadership(
          companyId ? parseInt(companyId) : undefined
        );
        break;
      case "faqs":
        content = await cmsClient.getFAQs(
          companyId ? parseInt(companyId) : undefined
        );
        break;
      case "events":
        content = await cmsClient.getInvestorEvents(
          companyId ? parseInt(companyId) : undefined
        );
        break;
      default:
        content = await cmsClient.getContent(type);
    }

    return NextResponse.json({ content }, { status: 200 });
  } catch (error) {
    console.error("Content fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch content" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    const { type, content } = data;

    if (!type || !content) {
      return NextResponse.json(
        { error: "Type and content are required" },
        { status: 400 }
      );
    }

    const result = await cmsClient.createContent(type, content);

    return NextResponse.json({ content: result }, { status: 201 });
  } catch (error) {
    console.error("Content creation error:", error);
    return NextResponse.json(
      { error: "Failed to create content" },
      { status: 500 }
    );
  }
}
