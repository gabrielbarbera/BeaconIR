import { authOptions } from "@/lib/auth";
import { query } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    const {
      companyName,
      tickerSymbol,
      website,
      description,
      primaryColor,
      secondaryColor,
    } = data;

    // Validate required fields
    if (!companyName || !tickerSymbol) {
      return NextResponse.json(
        { error: "Company name and ticker symbol are required" },
        { status: 400 }
      );
    }

    // Get current user
    const userResult = await query("SELECT id FROM users WHERE email = $1", [
      session.user.email,
    ]);

    if (userResult.rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userId = userResult.rows[0].id;

    // Generate subdomain from company name
    const subdomain = companyName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    // Create company
    const companyResult = await query(
      `INSERT INTO companies (name, subdomain, ticker_symbol, website, description, primary_color, secondary_color, owner_id, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'active')
       RETURNING id, name, subdomain, ticker_symbol, website, status`,
      [
        companyName,
        subdomain,
        tickerSymbol,
        website || null,
        description || null,
        primaryColor || "#FAA52E",
        secondaryColor || "#0A1428",
        userId,
      ]
    );

    const company = companyResult.rows[0];

    // Update user's company_id
    await query("UPDATE users SET company_id = $1 WHERE id = $2", [
      company.id,
      userId,
    ]);

    return NextResponse.json(
      {
        message: "Company created successfully",
        company,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Company creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Get company for current user
export async function GET() {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user's company
    const result = await query(
      `SELECT c.* FROM companies c 
       JOIN users u ON c.id = u.company_id 
       WHERE u.email = $1`,
      [session.user.email]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ company: null }, { status: 200 });
    }

    return NextResponse.json({ company: result.rows[0] }, { status: 200 });
  } catch (error) {
    console.error("Get company error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
