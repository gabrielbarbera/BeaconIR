"use client";

import Footer from "@/components/Footer";
import { Brain, Globe as GlobeIcon, Mail, Radio, Sparkles } from "lucide-react";

export default function AboutPage() {
  const handleBookCall = () => {
    window.open("https://calendly.com/beacon-ir", "_blank");
  };

  const handleRequestDemo = () => {
    window.open("https://calendly.com/beacon-ir", "_blank");
  };

  return (
    <div className="min-h-screen bg-deep-navy">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 pt-40 overflow-hidden">
        {/* Enhanced Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-navy-light/30 to-deep-navy"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-beacon-gold/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-signal-blue/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-beacon-gold text-sm uppercase tracking-wider font-semibold mb-4 block">
              Our Story
            </span>
          </div>
          <h1 className="heading-main mb-8">
            A new standard for investor communications.
          </h1>
          <p className="text-body-lg max-w-4xl mx-auto leading-relaxed">
            Beacon IR was founded on the belief that emerging companies deserve
            world-class investor relations infrastructure — without legacy
            complexity.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-navy-light overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/40 to-transparent animate-pulse"></div>

        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-beacon-gold/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-10 h-10 text-accent-gold" />
            </div>
            <h2 className="heading-section mb-8">Our Mission</h2>
            <div className="card-glass rounded-2xl p-12 mb-8">
              <p className="text-emphasis text-3xl mb-8 leading-relaxed">
                To make investor communications clear, fast, and accessible.
              </p>
            </div>
          </div>

          <div className="card-glass rounded-xl p-8">
            <p className="text-body-lg mb-6 leading-relaxed">
              Investor relations used to be slow, expensive, and locked behind
              outdated tools. We're changing that.
            </p>
            <p className="text-body-lg leading-relaxed">
              We combine modern design, intelligent distribution, and
              institutional best practices to help founders and operators
              communicate with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-deep-navy overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/40 to-transparent animate-pulse"></div>

        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-signal-blue/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group hover:scale-110 transition-transform duration-300">
              <Radio className="w-10 h-10 text-accent-gold" />
            </div>
            <h2 className="heading-section mb-6">Our Approach</h2>
            <p className="text-body-lg max-w-3xl mx-auto">
              Four core principles that guide everything we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-glass group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="heading-subsection text-beacon-gold mb-4">
                Start with the Signal
              </h3>
              <p className="text-body-base leading-relaxed">
                IR is not just compliance — it's narrative clarity.
              </p>
            </div>

            <div className="card-glass group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="heading-subsection text-beacon-gold mb-4">
                Design for Trust
              </h3>
              <p className="text-body-base leading-relaxed">
                Every touchpoint reflects professionalism and precision.
              </p>
            </div>

            <div className="card-glass group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-6 group-hover:scale-110 transition-transform duration-300">
                <Radio className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="heading-subsection text-beacon-gold mb-4">
                Automate the Pain Away
              </h3>
              <p className="text-body-base leading-relaxed">
                No more PDFs, manual emails, or siloed tools.
              </p>
            </div>

            <div className="card-glass group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="heading-subsection text-beacon-gold mb-4">
                Scale with Insight
              </h3>
              <p className="text-body-base leading-relaxed">
                Understand exactly how your message travels through markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-navy-light overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/40 to-transparent animate-pulse"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group hover:scale-110 transition-transform duration-300">
              <Brain className="w-10 h-10 text-accent-gold" />
            </div>
            <h2 className="heading-section mb-6">Who We Serve</h2>
            <p className="text-body-lg max-w-3xl mx-auto">
              Companies and organizations at every stage of growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-6 card-glass rounded-xl p-6 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <span className="text-beacon-gold text-3xl">•</span>
              <p className="text-body-lg leading-relaxed">
                Startups preparing for growth or fundraising
              </p>
            </div>
            <div className="flex items-start space-x-6 card-glass rounded-xl p-6 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <span className="text-beacon-gold text-3xl">•</span>
              <p className="text-body-lg leading-relaxed">
                Companies entering later-stage or pre-IPO readiness
              </p>
            </div>
            <div className="flex items-start space-x-6 card-glass rounded-xl p-6 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <span className="text-beacon-gold text-3xl">•</span>
              <p className="text-body-lg leading-relaxed">
                Funds managing LP and investor updates
              </p>
            </div>
            <div className="flex items-start space-x-6 card-glass rounded-xl p-6 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <span className="text-beacon-gold text-3xl">•</span>
              <p className="text-body-lg leading-relaxed">
                Agencies scaling their IR capabilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-deep-navy overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/40 to-transparent animate-pulse"></div>

        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-beacon-gold/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group hover:scale-110 transition-transform duration-300">
              <GlobeIcon className="w-10 h-10 text-accent-gold" />
            </div>
            <h2 className="heading-section mb-8">Our Vision</h2>
            <p className="text-body-lg mb-12 leading-relaxed">
              To become the communication layer of modern capital markets —
              where companies and investors connect through signal, not noise.
            </p>
            <div className="card-glass rounded-2xl p-12">
              <blockquote className="text-emphasis text-4xl md:text-5xl leading-relaxed">
                "Every signal starts with a beacon."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-navy-light overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/40 to-transparent animate-pulse"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group hover:scale-110 transition-transform duration-300">
              <Mail className="w-10 h-10 text-accent-gold" />
            </div>
            <h2 className="heading-section mb-6">Join Us</h2>
            <p className="text-body-lg mb-12 leading-relaxed">
              Ready to illuminate your investor narrative?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleBookCall} className="btn-primary">
              Book a Call
            </button>
            <button onClick={handleRequestDemo} className="btn-secondary">
              Request a Demo
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
