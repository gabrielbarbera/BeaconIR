"use client";

import { useState } from "react";
import SplitText from "./SplitText";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false);

  const handleBookCall = () => {
    setIsLoading(true);
    // TODO: Integrate with TidyCal
    window.open("https://calendly.com/beacon-ir", "_blank");
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleLearnMore = () => {
    // TODO: Scroll to services section
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-navy pt-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-navy-mid/50 to-deep-navy"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-beacon-gold/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-signal-blue/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5C55A' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 container-max section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/images/logos/beaconir-logo-horizontal.svg"
              alt="Beacon IR"
              className="h-12 md:h-16 mx-auto mb-6"
            />
          </div>

          {/* Main Headline */}
          <div className="mb-6">
            <SplitText
              text="Illuminate Your Investor Story"
              tag="h2"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-pure-white leading-tight"
              splitType="words, chars"
              delay={50}
              duration={0.8}
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>

          {/* Subheadline */}
          <div className="mb-8">
            <SplitText
              text="Beacon IR is the modern investor relations platform for startups, funds, and growth-stage companies. From branded IR websites to earnings distribution and investor communications, we help you build trust and communicate with clarity."
              tag="p"
              className="text-lg md:text-xl text-slate-gray max-w-3xl mx-auto leading-relaxed"
              splitType="words"
              delay={30}
              duration={0.6}
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={handleBookCall}
              disabled={isLoading}
              className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Opening..." : "Book a Call"}
            </button>
            <button
              onClick={handleLearnMore}
              className="btn-secondary text-lg px-8 py-4"
            >
              Learn More
            </button>
          </div>

          {/* Trust Indicator */}
          <p className="text-sm text-slate-gray italic">
            Trusted by founders, operators, and IR professionals who take
            investor communications seriously.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-beacon-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-beacon-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
