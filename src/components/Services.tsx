"use client";

import { Brain, Globe, Megaphone, MessageCircle } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

const iconMap = {
  Globe,
  Megaphone,
  MessageCircle,
  Brain,
};

const services: Service[] = [
  {
    title: "IR Websites",
    description:
      "Fast, compliant, and beautifully designed investor relations sites. Launch in days, not months.",
    icon: "Globe",
  },
  {
    title: "Earnings & News Distribution",
    description:
      "Share financial updates and press releases with precision. Global reach built for modern markets.",
    icon: "Megaphone",
  },
  {
    title: "Investor Communications",
    description:
      "From regular updates to key disclosures — structured, consistent messaging that builds confidence.",
    icon: "MessageCircle",
  },
  {
    title: "Media & Market Visibility",
    description:
      "AI-optimized press distribution, coverage tracking, and sentiment monitoring to keep your story seen and heard.",
    icon: "Brain",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-navy-light relative overflow-hidden"
    >
      {/* Subtle gold gradient accent stripe at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/40 to-transparent"></div>
      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-beacon-gold to-transparent mx-auto"></div>
          </div>
          <h2 className="heading-section mb-6">
            Everything you need to communicate with investors — clearly.
          </h2>
          <p className="text-body-lg max-w-3xl mx-auto">
            Modern investor relations infrastructure that scales with your
            company
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            if (!Icon) return null;
            return (
              <div
                key={index}
                className="group card-glass hover:border-beacon-gold/20"
              >
                {/* Icon with enhanced styling */}
                <div className="mb-6 relative">
                  <div className="inline-flex p-4 bg-gradient-to-br from-beacon-gold/10 to-beacon-gold/5 rounded-xl border border-beacon-gold/20">
                    <Icon className="w-8 h-8 text-accent-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="heading-subsection mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-body-base">{service.description}</p>

                {/* Enhanced Hover Effect */}
                <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-beacon-gold to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <p className="text-body-lg mb-8 max-w-2xl mx-auto">
            Ready to get started? Let's discuss your investor communications
            needs.
          </p>
          <button
            className="btn-primary"
            onClick={() =>
              window.open("https://calendly.com/beacon-ir", "_blank")
            }
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}
