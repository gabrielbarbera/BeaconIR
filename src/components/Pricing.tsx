"use client";

import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  FileText,
  Globe2,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

interface TierFeature {
  name: string;
  included: boolean;
}

interface Tier {
  name: string;
  tagline: string;
  monthlyPrice: number;
  setupPrice: number;
  idealFor: string;
  features: TierFeature[];
  icon: keyof typeof iconMap;
  popular?: boolean;
}

const iconMap = {
  Sparkles,
  TrendingUp,
  FileText,
  Shield,
};

const tiers: Tier[] = [
  {
    name: "Starter",
    tagline: "Your investor site, live in days",
    monthlyPrice: 250,
    setupPrice: 500,
    idealFor: "Seed–Series A startups",
    icon: "Sparkles",
    features: [
      { name: "Branded IR Website (custom domain)", included: true },
      { name: "Press Release Hosting (up to 4/month)", included: true },
      { name: "CMS Access (Strapi / Dashboard)", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Email Distribution", included: false },
      { name: "Advanced Analytics", included: false },
      { name: "AI Content Assistant", included: false },
      { name: "Custom Integrations", included: false },
      { name: "Priority Support", included: false },
      { name: "Compliance Archive", included: false },
    ],
  },
  {
    name: "Growth",
    tagline: "Communicate like a public company",
    monthlyPrice: 500,
    setupPrice: 1000,
    idealFor: "Series B+ or Pre-IPO",
    icon: "TrendingUp",
    popular: true,
    features: [
      { name: "Branded IR Website (custom domain)", included: true },
      { name: "Press Release Hosting (unlimited)", included: true },
      { name: "CMS Access (Strapi / Dashboard)", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Email Distribution (Mailchimp/Brevo)", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "AI Content Assistant", included: false },
      { name: "Custom Integrations", included: false },
      { name: "Priority Support", included: false },
      { name: "Compliance Archive", included: false },
    ],
  },
  {
    name: "Premium",
    tagline: "Advanced IR with AI-powered insights",
    monthlyPrice: 750,
    setupPrice: 1500,
    idealFor: "Pre-IPO & scaling companies",
    icon: "Shield",
    features: [
      { name: "Branded IR Website (custom domain)", included: true },
      { name: "Press Release Hosting (unlimited)", included: true },
      { name: "CMS Access (Strapi / Dashboard)", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Email Distribution (Mailchimp/Brevo)", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "AI Content Assistant", included: true },
      { name: "Custom Integrations", included: true },
      { name: "Priority Support", included: true },
      { name: "Compliance Archive", included: false },
    ],
  },
  {
    name: "Enterprise",
    tagline: "Your full investor comms team",
    monthlyPrice: 2000,
    setupPrice: 3500,
    idealFor: "Public companies & institutions",
    icon: "FileText",
    features: [
      { name: "Branded IR Website (custom domain)", included: true },
      { name: "Press Release Hosting (unlimited)", included: true },
      { name: "CMS Access (Strapi / Dashboard)", included: true },
      { name: "Basic Analytics", included: true },
      { name: "Email Distribution (Mailchimp/Brevo)", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "AI Content Assistant", included: true },
      { name: "Custom Integrations", included: true },
      { name: "Priority Support + Dedicated Manager", included: true },
      { name: "Compliance Archive", included: true },
    ],
  },
];

const addOns = [
  {
    icon: Globe2,
    name: "Press Distribution Pack",
    price: 150,
    period: "mo",
    description: "3 releases/month via global PR networks",
  },
  {
    icon: BarChart3,
    name: "Market Analytics Suite",
    price: 100,
    period: "mo",
    description: "Sentiment, coverage tracking, engagement",
  },
  {
    icon: Brain,
    name: "AI Copy Assistant",
    price: 50,
    period: "mo",
    description: "Draft investor updates or press releases",
  },
  {
    icon: Sparkles,
    name: "Custom Template Design",
    price: 750,
    period: "one-time",
    description: "Tailored IR site look & feel",
  },
  {
    icon: ArrowRight,
    name: "Fast Track Launch",
    price: 250,
    period: "one-time",
    description: "48-hour go-live setup",
  },
  {
    icon: Shield,
    name: "Compliance Archive / Audit Trail",
    price: 100,
    period: "mo",
    description: "For regulated markets or Pre-IPO",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  const calculateAnnual = (monthly: number) => {
    // 15% discount for annual
    return Math.round(monthly * 12 * 0.85);
  };

  return (
    <section className="section-padding bg-deep-navy relative overflow-hidden pt-32">
      {/* Subtle gold gradient accent stripe at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/30 to-transparent"></div>
      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-beacon-gold to-transparent mx-auto"></div>
          </div>
          <h1 className="heading-section mb-6">
            Transparent pricing that scales
          </h1>
          <p className="text-body-lg max-w-3xl mx-auto mb-6">
            Choose the plan that fits your stage. All plans include hosting,
            support, and the infrastructure to communicate like a public
            company.
          </p>

          {/* Save Badge - Floating Above */}
          {annual && (
            <div className="flex justify-center mb-4 animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-beacon-gold/20 border border-beacon-gold/30 text-beacon-gold rounded-full text-sm font-semibold backdrop-blur-sm">
                <span className="text-beacon-gold">💰</span>
                Save 15% with annual billing
              </span>
            </div>
          )}

          {/* Annual Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-body-base font-medium transition-colors duration-300 ${
                !annual ? "text-white" : "text-slate-400"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                annual ? "bg-beacon-gold/30" : "bg-slate-700"
              }`}
              aria-label={`Switch to ${annual ? "monthly" : "annual"} billing`}
            >
              <div
                className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-beacon-gold transition-transform duration-300 ${
                  annual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-body-base font-medium transition-colors duration-300 ${
                annual ? "text-white" : "text-slate-400"
              }`}
            >
              Annual
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {tiers.map((tier, index) => {
            const Icon = iconMap[tier.icon];
            const displayPrice = annual
              ? calculateAnnual(tier.monthlyPrice)
              : tier.monthlyPrice;
            const period = annual ? "year" : "mo";

            return (
              <div
                key={index}
                className={`relative card-glass p-8 transition-all duration-300 ${
                  tier.popular
                    ? "border-2 border-beacon-gold/40 scale-105 shadow-lg shadow-beacon-gold/10"
                    : "hover:border-beacon-gold/30"
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-beacon-gold text-deep-navy rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-beacon-gold/10 to-beacon-gold/5 rounded-xl border border-beacon-gold/20">
                    {Icon && <Icon className="w-8 h-8 text-accent-gold" />}
                  </div>
                </div>

                {/* Tier Name & Description */}
                <h3 className="heading-subsection mb-2">{tier.name}</h3>
                <p className="text-body-base text-slate-400 mb-6 min-h-[3rem]">
                  {tier.tagline}
                </p>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">
                      ${displayPrice.toLocaleString()}
                    </span>
                    <span className="text-slate-400">/{period}</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-2">
                    + ${tier.setupPrice.toLocaleString()} one-time setup
                  </p>
                  <p className="text-sm text-slate-400 mt-2">
                    Ideal for: {tier.idealFor}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 min-h-[20rem]">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-beacon-gold/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-beacon-gold" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center">
                            <svg
                              className="w-2 h-2 text-slate-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? "btn-primary"
                      : "border-2 border-beacon-gold/30 text-beacon-gold hover:border-beacon-gold hover:bg-beacon-gold/10"
                  }`}
                  onClick={() =>
                    window.open("https://calendly.com/beacon-ir", "_blank")
                  }
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-beacon-gold to-transparent mx-auto"></div>
            </div>
            <h2 className="heading-section mb-6">Add-ons & Extensions</h2>
            <p className="text-body-lg max-w-3xl mx-auto">
              Enhance your plan with powerful add-ons to meet your specific
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="card-glass p-6 hover:border-beacon-gold/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-beacon-gold/10 to-beacon-gold/5 rounded-lg border border-beacon-gold/20 group-hover:border-beacon-gold/40 transition-colors">
                      <addon.icon className="w-6 h-6 text-beacon-gold" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {addon.name}
                      </h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-beacon-gold">
                          ${addon.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-slate-400">
                          /{addon.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400">
                      {addon.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center card-glass p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-beacon-gold/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="heading-section mb-6">Ready to get started?</h2>
            <p className="text-body-lg mb-8 max-w-2xl mx-auto">
              Book a call with our team to discuss your investor relations needs
              and find the perfect plan for your company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="btn-primary"
                onClick={() =>
                  window.open("https://calendly.com/beacon-ir", "_blank")
                }
              >
                Schedule a Call
              </button>
              <button
                className="border-2 border-beacon-gold/30 text-beacon-gold py-3 px-6 rounded-lg font-semibold hover:border-beacon-gold hover:bg-beacon-gold/10 transition-all duration-300"
                onClick={() =>
                  window.open("https://calendly.com/beacon-ir/demo", "_blank")
                }
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
