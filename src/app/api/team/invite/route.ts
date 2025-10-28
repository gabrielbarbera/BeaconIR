import { authOptions } from "@/lib/auth";
import { query } from "@/lib/db";
import { sendTeamInvitation } from "@/lib/email";
import crypto from "crypto";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { email, role } = await request.json();

    if (!email || !role) {
      return NextResponse.json(
        { error: "Email and role are required" },
        { status: 400 }
      );
    }

    // Get user's company
    const userResult = await query(
      "SELECT company_id FROM users WHERE email = $1",
      [session.user.email]
    );

    if (userResult.rows.length === 0 || !userResult.rows[0].company_id) {
      return NextResponse.json(
        { error: "User must be associated with a company" },
        { status: 400 }
      );
    }

    const companyId = userResult.rows[0].company_id;

    // Generate invitation token
    const invitationToken = crypto.randomBytes(32).toString("hex");

    // Get company name
    const companyResult = await query(
      "SELECT name FROM companies WHERE id = $1",
      [companyId]
    );

    const companyName = companyResult.rows[0]?.name || "the company";

    // Create invitation in database
    await query(
      `INSERT INTO team_invitations (company_id, email, role, token, status, expires_at)
       VALUES ($1, $2, $3, $4, 'pending', NOW() + INTERVAL '7 days')
       RETURNING id`,
      [companyId, email, role, invitationToken]
    );

    // Send invitation email
    await sendTeamInvitation(
      email,
      session.user.name || "A team member",
      companyName,
      role,
      invitationToken
    );

    return NextResponse.json(
      { message: "Invitation sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Invitation error:", error);
    return NextResponse.json(
      { error: "Failed to send invitation" },
      { status: 500 }
    );
  }
}
