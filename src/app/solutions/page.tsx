"use client";

import Footer from "@/components/Footer";
import {
  Brain,
  Globe,
  Megaphone,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";

export default function SolutionsPage() {
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
              Complete IR Platform
            </span>
          </div>
          <h1 className="heading-main mb-8 animate-fade-in">
            Everything you need to communicate with investors — clearly.
          </h1>
          <p className="text-body-lg max-w-4xl mx-auto leading-relaxed">
            Beacon IR is the modern investor relations platform that helps
            startups, funds, and growth-stage companies build trust through
            transparent, structured, and high-impact communications.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button onClick={handleBookCall} className="btn-primary">
              Talk to an Expert
            </button>
            <button onClick={handleRequestDemo} className="btn-secondary">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* IR Websites Section */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-navy-light overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/40 to-transparent animate-pulse"></div>

        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-beacon-gold/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {/* Icon with Glow Effect */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-4 group hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-accent-gold" />
              </div>

              <h2 className="heading-section mb-6 leading-tight">
                IR Websites — "Your Investor Narrative, Elevated"
              </h2>

              <p className="text-body-lg mb-10">
                Modern investor relations websites that are fast, compliant, and
                beautifully designed.
              </p>

              <ul className="space-y-4 text-stone-gray">
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Launch in days, not months
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Host investor decks, announcements, and disclosures
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Branded to match your company identity
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Optional regulatory archiving & tracking
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Works seamlessly with your CRM, Notion, or Airtable stack
                  </span>
                </li>
              </ul>

              <div className="mt-10 p-6 card-glass rounded-xl">
                <p className="text-emphasis text-xl leading-relaxed">
                  "Looks like your brand. Feels like trust."
                </p>
              </div>
            </div>

            {/* Enhanced Card */}
            <div className="card-glass text-center group hover:scale-105 transition-all duration-500 p-16">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group-hover:shadow-lg group-hover:shadow-beacon-gold/20 transition-all duration-300">
                <Globe className="w-12 h-12 text-accent-gold" />
              </div>
              <p className="text-stone-gray text-sm uppercase tracking-wider">
                Visual Feature
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings & News Distribution */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              {/* Enhanced Card */}
              <div className="card-glass rounded-xl text-center group hover:scale-105 transition-all duration-500 p-16">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group-hover:shadow-lg group-hover:shadow-beacon-gold/20 transition-all duration-300">
                  <Megaphone className="w-12 h-12 text-accent-gold" />
                </div>
                <p className="text-stone-gray text-sm uppercase tracking-wider">
                  Signal Intelligence
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              {/* Icon with Glow Effect */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-4 group hover:scale-110 transition-transform duration-300">
                <Megaphone className="w-8 h-8 text-accent-gold" />
              </div>

              <h2 className="heading-section mb-6 leading-tight">
                Earnings & News Distribution — "Signal Without the Noise"
              </h2>

              <p className="text-body-lg mb-10 leading-relaxed">
                Distribute your company updates with precision and confidence.
              </p>

              <ul className="space-y-4 text-stone-gray">
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Targeted global press distribution
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    AI-enhanced formatting for newswires & investor inboxes
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Automatic posting to your IR site
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    RSS & webhook integrations for flexible workflows
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Compliant archiving and time-stamped releases
                  </span>
                </li>
              </ul>

              <div className="mt-10 p-6 card-glass rounded-xl">
                <p className="text-beacon-gold italic font-serif text-xl leading-relaxed">
                  "Your message — where it matters, when it matters."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Communications */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-deep-navy overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/40 to-transparent animate-pulse"></div>

        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-signal-blue/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {/* Icon with Glow Effect */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-4 group hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-accent-gold" />
              </div>

              <h2 className="heading-section mb-6 leading-tight">
                Investor Communications — "Clarity Builds Confidence"
              </h2>

              <p className="text-body-lg mb-10 leading-relaxed">
                Structure your investor updates so nothing gets lost in
                translation.
              </p>

              <ul className="space-y-4 text-stone-gray">
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Scheduled or ad-hoc updates
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Shareholder letters, event invites, earnings releases
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Branded email templates + automated workflows
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Consistent messaging across every channel
                  </span>
                </li>
              </ul>

              <div className="mt-10 p-6 card-glass rounded-xl">
                <p className="text-beacon-gold italic font-serif text-xl leading-relaxed">
                  "Investors shouldn't have to guess. They should just know."
                </p>
              </div>
            </div>

            {/* Enhanced Card */}
            <div className="card-glass rounded-xl text-center group hover:scale-105 transition-all duration-500 p-16">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group-hover:shadow-lg group-hover:shadow-beacon-gold/20 transition-all duration-300">
                <MessageCircle className="w-12 h-12 text-accent-gold" />
              </div>
              <p className="text-stone-gray text-sm uppercase tracking-wider">
                Communication Hub
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Market Visibility */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              {/* Enhanced Card */}
              <div className="card-glass rounded-xl text-center group hover:scale-105 transition-all duration-500 p-16">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group-hover:shadow-lg group-hover:shadow-beacon-gold/20 transition-all duration-300">
                  <Brain className="w-12 h-12 text-accent-gold" />
                </div>
                <p className="text-stone-gray text-sm uppercase tracking-wider">
                  Intelligence Layer
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              {/* Icon with Glow Effect */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-4 group hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-accent-gold" />
              </div>

              <h2 className="heading-section mb-6 leading-tight">
                Media & Market Visibility — "See the Impact of Your Story"
              </h2>

              <p className="text-body-lg mb-10 leading-relaxed">
                Track how your story travels through the market.
              </p>

              <ul className="space-y-4 text-stone-gray">
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    AI-powered coverage and sentiment analysis
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Investor engagement metrics
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Press pickup monitoring
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-beacon-gold mr-4 text-xl">•</span>
                  <span className="group-hover:text-slate-light transition-colors">
                    Real-time dashboards & alerts
                  </span>
                </li>
              </ul>

              <div className="mt-10 p-6 card-glass rounded-xl">
                <p className="text-beacon-gold italic font-serif text-xl leading-relaxed">
                  "If it's out there, you'll know about it first."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-deep-navy overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/40 to-transparent animate-pulse"></div>

        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-beacon-gold/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6">
              Designed for Different Teams
            </h2>
            <p className="text-body-lg max-w-3xl mx-auto">
              Whether you're a startup building credibility or a growth company
              preparing for IPO, Beacon IR adapts to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card-glass rounded-xl p-8 group hover:scale-105 hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-6">
                <Sparkles className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="text-xl font-bold text-beacon-gold mb-4">
                VC-Backed Startups
              </h3>
              <p className="text-stone-gray leading-relaxed">
                Establish credibility fast with professional IR infrastructure.
              </p>
            </div>

            <div className="card-glass rounded-xl p-8 group hover:scale-105 hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-6">
                <Zap className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="text-xl font-bold text-beacon-gold mb-4">
                Growth & Pre-IPO Companies
              </h3>
              <p className="text-stone-gray leading-relaxed">
                Meet disclosure standards and build shareholder trust.
              </p>
            </div>

            <div className="card-glass rounded-xl p-8 group hover:scale-105 hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-6">
                <Globe className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="text-xl font-bold text-beacon-gold mb-4">
                Funds & Agencies
              </h3>
              <p className="text-stone-gray leading-relaxed">
                Extend your IR offering with Beacon IR infrastructure.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button onClick={handleBookCall} className="btn-primary mr-4 mb-4">
              Talk to an Expert
            </button>
            <button onClick={handleRequestDemo} className="btn-secondary mb-4">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Why Beacon IR */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6">Why Beacon IR</h2>
            <p className="text-body-lg max-w-3xl mx-auto">
              Modern infrastructure designed for how companies actually work
              today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="card-glass rounded-xl p-8 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-7 h-7 text-accent-gold" />
                </div>
                <div>
                  <h3 className="heading-subsection mb-3">
                    Built for modern companies
                  </h3>
                  <p className="text-stone-gray">
                    Future-ready architecture that scales with you.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-xl p-8 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-accent-gold" />
                </div>
                <div>
                  <h3 className="heading-subsection mb-3">
                    Fast and agile deployment
                  </h3>
                  <p className="text-stone-gray">Launch in days, not months.</p>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-xl p-8 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-7 h-7 text-accent-gold" />
                </div>
                <div>
                  <h3 className="heading-subsection mb-3">
                    AI-optimized visibility
                  </h3>
                  <p className="text-stone-gray">
                    Intelligent distribution that reaches the right audience.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-xl p-8 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-accent-gold" />
                </div>
                <div>
                  <h3 className="heading-subsection mb-3">
                    Transparent pricing & support
                  </h3>
                  <p className="text-stone-gray">
                    No hidden fees, no enterprise bloat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="card-glass rounded-2xl p-12 max-w-3xl mx-auto">
              <p className="text-2xl text-beacon-gold italic font-serif leading-relaxed">
                "Institutional-grade IR — without the enterprise bloat."
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
