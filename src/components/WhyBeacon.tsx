"use client";

import { Brain, Globe, Sparkles, Zap } from "lucide-react";

interface Benefit {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

const iconMap = {
  Globe,
  Zap,
  Brain,
  Sparkles,
};

const benefits: Benefit[] = [
  {
    icon: "Globe",
    title: "Built for modern startups",
    description:
      "Not just the Fortune 500 — built for agile, venture-backed teams.",
  },
  {
    icon: "Zap",
    title: "Fast and agile",
    description: "IR infrastructure deployed in days, not quarters.",
  },
  {
    icon: "Brain",
    title: "AI-optimized visibility",
    description:
      "Your story discovered where it matters — across media and search.",
  },
  {
    icon: "Sparkles",
    title: "Transparent pricing & support",
    description:
      "No enterprise bloat. No opaque retainers. Just clarity and results.",
  },
];

export default function WhyBeacon() {
  return (
    <section className="section-padding bg-deep-navy relative overflow-hidden">
      {/* Subtle gold gradient accent stripe at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/30 to-transparent"></div>
      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-beacon-gold to-transparent mx-auto"></div>
          </div>
          <h2 className="heading-section mb-6">
            Why companies choose Beacon IR
          </h2>
          <p className="text-body-lg max-w-3xl mx-auto">
            Investor relations infrastructure that scales with your ambition
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            if (!Icon) return null;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-beacon-gold/10 to-beacon-gold/5 rounded-xl border border-beacon-gold/20 group-hover:border-beacon-gold/40 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-accent-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="heading-subsection mb-4">{benefit.title}</h3>
                  <p className="text-body-base">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center mt-16">
          <div className="card-glass text-center p-8 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-gold pointer-events-none"></div>
            <div className="relative z-10">
              <p className="text-emphasis text-2xl md:text-3xl leading-relaxed mb-6">
                "Investor relations doesn't need to be slow or complex. Beacon
                IR gives emerging companies the clarity, tools, and distribution
                they need to communicate like market leaders — without the heavy
                lift."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
