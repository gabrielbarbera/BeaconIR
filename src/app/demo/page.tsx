"use client";

import Footer from "@/components/Footer";
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Clock,
  Globe,
  Handshake,
  Link2,
  Mail as MailIcon,
  Radio,
  Rocket,
  Sparkles,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function DemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleBookDemo = () => {
    window.open("https://calendly.com/beacon-ir", "_blank");
  };

  const handleBookExpert = () => {
    window.open("https://calendly.com/beacon-ir", "_blank");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", company: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
              Experience Beacon IR
            </span>
          </div>
          <h1 className="heading-main mb-8 leading-tight">
            Let's Illuminate Your Investor Story
          </h1>
          <p className="text-body-lg max-w-4xl mx-auto leading-relaxed mb-12">
            Schedule a call with our team to see how Beacon IR can transform
            your investor communications — from your first IR site to global
            distribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookDemo}
              className="btn-primary text-lg px-8 py-4"
            >
              Book a Demo
            </button>
            <button
              onClick={handleBookExpert}
              className="btn-secondary text-lg px-8 py-4"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-deep-navy overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-10 h-10 text-accent-gold" />
            </div>
            <h2 className="heading-section mb-6">
              What You'll See in the Demo
            </h2>
            <p className="text-body-lg max-w-3xl mx-auto">
              A comprehensive walkthrough of our complete platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-glass rounded-xl p-8 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-4">
                <Globe className="w-6 h-6 text-accent-gold" />
              </div>
              <p className="text-stone-gray leading-relaxed">
                A live walkthrough of our IR website builder
              </p>
            </div>
            <div className="card-glass rounded-xl p-8 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-4">
                <Radio className="w-6 h-6 text-accent-gold" />
              </div>
              <p className="text-stone-gray leading-relaxed">
                How to distribute updates with precision
              </p>
            </div>
            <div className="card-glass rounded-xl p-8 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-4">
                <BarChart3 className="w-6 h-6 text-accent-gold" />
              </div>
              <p className="text-stone-gray leading-relaxed">
                Real-time investor engagement analytics
              </p>
            </div>
            <div className="card-glass rounded-xl p-8 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-4">
                <Zap className="w-6 h-6 text-accent-gold" />
              </div>
              <p className="text-stone-gray leading-relaxed">
                How AI enhances visibility & narrative clarity
              </p>
            </div>
            <div className="card-glass rounded-xl p-8 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-4">
                <Link2 className="w-6 h-6 text-accent-gold" />
              </div>
              <p className="text-stone-gray leading-relaxed">
                Integration options with your existing stack
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group hover:scale-110 transition-transform duration-300">
              <Handshake className="w-10 h-10 text-accent-gold" />
            </div>
            <h2 className="heading-section mb-6">Who It's For</h2>
            <p className="text-body-lg max-w-3xl mx-auto">
              Built for teams at every stage of investor relations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-glass rounded-xl p-8 text-center group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-4">
                <Rocket className="w-6 h-6 text-accent-gold" />
              </div>
              <p className="text-stone-gray leading-relaxed">
                Founders preparing for fundraising or IPO
              </p>
            </div>
            <div className="card-glass rounded-xl p-8 text-center group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-4">
                <Users className="w-6 h-6 text-accent-gold" />
              </div>
              <p className="text-stone-gray leading-relaxed">
                IR / Finance / Communications teams
              </p>
            </div>
            <div className="card-glass rounded-xl p-8 text-center group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-4">
                <Building2 className="w-6 h-6 text-accent-gold" />
              </div>
              <p className="text-stone-gray leading-relaxed">
                Investor Relations Agencies
              </p>
            </div>
            <div className="card-glass rounded-xl p-8 text-center group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-beacon-gold/20 to-transparent mb-4">
                <Wallet className="w-6 h-6 text-accent-gold" />
              </div>
              <p className="text-stone-gray leading-relaxed">
                VC / PE / Web3 Funds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-deep-navy overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/40 to-transparent animate-pulse"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group hover:scale-110 transition-transform duration-300">
              <Clock className="w-10 h-10 text-accent-gold" />
            </div>
            <h2 className="heading-section mb-8">What to Expect</h2>
            <div className="card-glass rounded-xl p-8 mb-8 space-y-6">
              <div className="flex items-center justify-center space-x-3 text-lg text-stone-gray">
                <CheckCircle2 className="w-6 h-6 text-beacon-gold" />
                <p>30-minute live walkthrough</p>
              </div>
              <div className="flex items-center justify-center space-x-3 text-lg text-stone-gray">
                <CheckCircle2 className="w-6 h-6 text-beacon-gold" />
                <p>Tailored to your stage and use case</p>
              </div>
              <div className="flex items-center justify-center space-x-3 text-lg text-stone-gray">
                <CheckCircle2 className="w-6 h-6 text-beacon-gold" />
                <p>No hard sales pitch — just clarity</p>
              </div>
            </div>
            <p className="text-2xl text-beacon-gold mb-12 italic">
              Schedule a free strategy session today.
            </p>
            <button
              onClick={handleBookDemo}
              className="btn-primary text-lg px-8 py-4"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group hover:scale-110 transition-transform duration-300">
              <MailIcon className="w-10 h-10 text-accent-gold" />
            </div>
            <h2 className="heading-section mb-6">Or Leave Us a Message</h2>
            <p className="text-body-lg max-w-2xl mx-auto">
              Have questions? We'll get back to you within 24 hours.
            </p>
          </div>
          <div className="card-glass rounded-2xl p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-pure-white mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-navy-mid border border-slate-gray/20 rounded-lg text-pure-white placeholder-slate-gray focus:border-beacon-gold focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-beacon-gold/20"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-pure-white mb-2"
                >
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-navy-mid border border-slate-gray/20 rounded-lg text-pure-white placeholder-slate-gray focus:border-beacon-gold focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-beacon-gold/20"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-pure-white mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-navy-mid border border-slate-gray/20 rounded-lg text-pure-white placeholder-slate-gray focus:border-beacon-gold focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-beacon-gold/20"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-pure-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-4 bg-navy-mid border border-slate-gray/20 rounded-lg text-pure-white placeholder-slate-gray focus:border-beacon-gold focus:outline-none transition-all duration-300 resize-vertical focus:ring-2 focus:ring-beacon-gold/20"
                  placeholder="Tell us about your investor communications needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg py-4"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="p-6 bg-green-500/20 border border-green-500/50 rounded-xl">
                  <p className="text-green-400 leading-relaxed">
                    Thanks for reaching out. A member of our team will contact
                    you shortly to schedule your demo. We're looking forward to
                    illuminating your investor story.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-6 bg-red-500/20 border border-red-500/50 rounded-xl">
                  <p className="text-red-400 leading-relaxed">
                    Something went wrong. Please try again or contact us
                    directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
