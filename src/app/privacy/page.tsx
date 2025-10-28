"use client";

import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
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
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group hover:scale-110 transition-transform duration-300">
              <Shield className="w-10 h-10 text-accent-gold" />
            </div>
          </div>
          <h1 className="heading-main mb-6 leading-tight">Privacy Policy</h1>
          <p className="text-xl text-stone-gray">Last Updated: December 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-glass rounded-2xl p-12 mb-8">
            <h2 className="heading-subsection text-beacon-gold mb-4">
              Introduction
            </h2>
            <p className="text-lg text-stone-gray leading-relaxed mb-4">
              Beacon IR ("we", "our", or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our website
              and services.
            </p>
            <p className="text-lg text-stone-gray leading-relaxed">
              By accessing or using our services, you consent to the practices
              described in this policy.
            </p>
          </div>

          <div className="card-glass rounded-xl p-10 mb-8">
            <h2 className="heading-subsection text-beacon-gold mb-4">
              Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-pure-white mb-3">
              Personal Information
            </h3>
            <p className="text-lg text-stone-gray leading-relaxed mb-4">
              We may collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-stone-gray leading-relaxed ml-4">
              <li>Name, email address, and company information</li>
              <li>
                Contact details provided when requesting demos or booking calls
              </li>
              <li>Information submitted through contact forms or surveys</li>
              <li>Usage data and website analytics</li>
            </ul>
          </div>

          <div className="card-glass rounded-xl p-10 mb-8">
            <h2 className="heading-subsection text-beacon-gold mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-stone-gray leading-relaxed ml-4">
              <li>To provide and maintain our services</li>
              <li>To respond to your inquiries and requests</li>
              <li>To send you updates, newsletters, and marketing materials</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div className="card-glass rounded-xl p-10 mb-8">
            <h2 className="heading-subsection text-beacon-gold mb-4">
              Data Protection
            </h2>
            <p className="text-lg text-stone-gray leading-relaxed mb-4">
              We implement industry-standard security measures to protect your
              personal information. However, no method of transmission over the
              Internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </div>

          <div className="card-glass rounded-xl p-10 mb-8">
            <h2 className="heading-subsection text-beacon-gold mb-4">
              Your Rights
            </h2>
            <p className="text-lg text-stone-gray leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-stone-gray leading-relaxed ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </div>

          <div className="card-glass rounded-xl p-10 mb-8">
            <h2 className="heading-subsection text-beacon-gold mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-stone-gray leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us
              at:
            </p>
            <p className="text-lg text-beacon-gold">privacy@beacon-ir.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
