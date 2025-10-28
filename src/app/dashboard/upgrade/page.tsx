"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "1 IR Site",
      "Basic customization",
      "Email support",
      "10 content items",
      "Basic analytics",
    ],
    cta: "Current Plan",
    popular: false,
  },
  {
    name: "Professional",
    price: "$299",
    period: "month",
    description: "For growing companies",
    features: [
      "3 IR Sites",
      "Advanced customization",
      "Priority support",
      "Unlimited content items",
      "Advanced analytics",
      "Custom domain",
      "Press release hosting",
    ],
    cta: "Upgrade to Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations",
    features: [
      "Unlimited IR Sites",
      "White-label solution",
      "Dedicated support",
      "Custom integrations",
      "Advanced security",
      "API access",
      "Account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function UpgradePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/auth/login");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-deep-navy via-deep-navy to-[#0a0e27]">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleUpgrade = async (planName: string) => {
    setLoading(planName);

    try {
      // Create Stripe checkout session
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planName }),
      });

      const data = await response.json();

      if (data.type === "contact") {
        // Enterprise plan - contact sales
        window.location.href = `mailto:${data.email}?subject=Enterprise Plan Inquiry`;
        setLoading(null);
        return;
      }

      if (data.url) {
        // Redirect to Stripe checkout
        window.location.href = data.url;
      } else {
        setLoading(null);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-navy via-deep-navy to-[#0a0e27] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <button
            onClick={() => router.push("/dashboard")}
            className="text-gold hover:text-gold/80 mb-4 flex items-center gap-2 mx-auto w-fit"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Dashboard
          </button>
          <h1 className="text-4xl font-bold text-white mb-2">
            Choose Your Plan
          </h1>
          <p className="text-gray-400">
            Upgrade to unlock advanced features for your IR platform
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border-2 p-8 relative ${
                plan.popular ? "border-gold scale-105" : "border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-deep-navy px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2 mb-1">
                  <span className="text-4xl font-bold text-gold">
                    {plan.price}
                  </span>
                  {plan.period !== "forever" &&
                    plan.period !== "contact us" && (
                      <span className="text-gray-400">/{plan.period}</span>
                    )}
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleUpgrade(plan.name)}
                disabled={loading !== null}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                  plan.popular
                    ? "btn-primary"
                    : plan.name === "Free"
                    ? "btn-secondary opacity-50 cursor-not-allowed"
                    : "btn-secondary"
                }`}
              >
                {loading === plan.name ? "Loading..." : plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Questions about pricing?{" "}
            <button
              onClick={() =>
                window.open("mailto:support@beaconir.com", "_blank")
              }
              className="text-gold hover:text-gold/80"
            >
              Contact us
            </button>
          </p>
          <p className="text-gray-500 text-sm">
            All plans include a 14-day money-back guarantee
          </p>
        </div>
      </div>
    </div>
  );
}
