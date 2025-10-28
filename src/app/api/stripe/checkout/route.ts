import { authOptions } from "@/lib/auth";
import { stripe, STRIPE_PLANS } from "@/lib/stripe";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { plan } = await request.json();

    // Get plan details
    const planDetails =
      STRIPE_PLANS[plan.toLowerCase() as keyof typeof STRIPE_PLANS];

    if (!planDetails) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    // For Enterprise, redirect to contact
    if (plan.toLowerCase() === "enterprise") {
      return NextResponse.json(
        {
          type: "contact",
          email: "sales@beaconir.com",
        },
        { status: 200 }
      );
    }

    // For Free plan, just return success
    if (plan.toLowerCase() === "free") {
      return NextResponse.json(
        { message: "Already on free plan" },
        { status: 200 }
      );
    }

    // Create Stripe checkout session
    const session_url = new URL(request.url);
    session_url.pathname = "/dashboard/upgrade/success";
    const successUrl = session_url.toString();

    session_url.pathname = "/dashboard/upgrade/canceled";
    const cancelUrl = session_url.toString();

    // Create checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${planDetails.name} Plan`,
              description: `Upgrade to ${planDetails.name}`,
            },
            recurring: {
              interval: "month",
            },
            unit_amount: planDetails.price * 100, // Convert to cents
          },
          quantity: 1,
        },
      ],
      customer_email: session.user.email,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        userId: session.user.id || "",
        plan: plan.toLowerCase(),
      },
    });

    return NextResponse.json(
      {
        url: checkoutSession.url,
        sessionId: checkoutSession.id,
        message: "Checkout session created",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
