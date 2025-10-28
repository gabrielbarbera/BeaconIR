// Email service for sending transactional emails (invitations, support)
// Note: SendFox is for marketing automation, not transactional emails
// This service uses SMTP for sending emails

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail(options: EmailOptions): Promise<void> {
  // Check if SMTP credentials are configured
  const smtpConfigured =
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASSWORD &&
    process.env.FROM_EMAIL;

  // If not configured or in development, just log
  if (!smtpConfigured || process.env.NODE_ENV === "development") {
    console.log(
      "=== EMAIL SENT (MOCK - Configure SMTP to send real emails) ==="
    );
    console.log("To:", options.to);
    console.log("Subject:", options.subject);
    console.log("HTML Preview:", options.html.substring(0, 200) + "...");
    console.log("==========================");

    if (!smtpConfigured) {
      console.log(
        "💡 Configure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, and FROM_EMAIL to send real emails"
      );
    }
    return;
  }

  // Send actual email via SMTP
  const nodemailer = await import("nodemailer");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || "Beacon IR <noreply@beaconir.com>",
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text || options.html.replace(/<[^>]*>/g, ""),
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}

export async function sendTeamInvitation(
  to: string,
  inviterName: string,
  companyName: string,
  role: string,
  invitationToken: string
): Promise<void> {
  const acceptUrl = `${process.env.NEXTAUTH_URL}/auth/accept-invitation?token=${invitationToken}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #FAA52E;">You've been invited!</h1>
      <p>Hello,</p>
      <p><strong>${inviterName}</strong> has invited you to join <strong>${companyName}</strong> on Beacon IR.</p>
      <p>Your role will be: <strong>${role}</strong></p>
      <p style="margin: 30px 0;">
        <a href="${acceptUrl}" style="background-color: #FAA52E; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
          Accept Invitation
        </a>
      </p>
      <p style="color: #666; font-size: 14px;">
        If the button doesn't work, copy and paste this link into your browser:<br>
        <a href="${acceptUrl}">${acceptUrl}</a>
      </p>
      <p style="color: #666; font-size: 12px; margin-top: 30px;">
        This invitation will expire in 7 days.
      </p>
    </div>
  `;

  await sendEmail({
    to,
    subject: `Invitation to join ${companyName} on Beacon IR`,
    html,
  });
}

export async function sendContactSupportEmail(
  to: string,
  subject: string,
  message: string,
  urgency: string,
  fromEmail: string
): Promise<void> {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #FAA52E;">New Support Request</h2>
      <p><strong>From:</strong> ${fromEmail}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Urgency:</strong> ${urgency}</p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 6px; margin: 20px 0;">
        <p>${message.replace(/\n/g, "<br>")}</p>
      </div>
    </div>
  `;

  await sendEmail({
    to: "support@beaconir.com", // Support email
    subject: `Support Request: ${subject}`,
    html,
  });
}
