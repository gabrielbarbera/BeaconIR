"use client";

import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

export default function TermsPage() {
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
              <FileText className="w-10 h-10 text-accent-gold" />
            </div>
          </div>
          <h1 className="heading-main mb-6 leading-tight">Terms of Service</h1>
          <p className="text-xl text-stone-gray">Last Updated: December 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-glass rounded-2xl p-12 mb-8">
            <h2 className="heading-subsection text-beacon-gold mb-4">
              Agreement to Terms
            </h2>
            <p className="text-lg text-stone-gray leading-relaxed mb-4">
              By accessing or using Beacon IR's services, you agree to be bound
              by these Terms of Service. If you do not agree with any part of
              these terms, you must not use our services.
            </p>
          </div>

          <div className="card-glass rounded-xl p-10 mb-8">
            <h2 className="heading-subsection text-beacon-gold mb-4">
              Description of Service
            </h2>
            <p className="text-lg text-stone-gray leading-relaxed mb-4">
              Beacon IR provides investor relations solutions including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-stone-gray leading-relaxed ml-4">
              <li>Investor relations website development and hosting</li>
              <li>Content distribution and press release services</li>
              <li>Investor communications tools</li>
              <li>Analytics and engagement tracking</li>
            </ul>
          </div>

          <div className="card-glass rounded-xl p-10 mb-8">
            <h2 className="heading-subsection text-beacon-gold mb-4">
              User Obligations
            </h2>
            <p className="text-lg text-stone-gray leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-stone-gray leading-relaxed ml-4">
              <li>
                Provide accurate and complete information when using our
                services
              </li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>
                Use our services only for lawful purposes and in accordance with
                these terms
              </li>
              <li>Not attempt to gain unauthorized access to our systems</li>
            </ul>
          </div>

          <div className="card-glass rounded-xl p-10 mb-8">
            <h2 className="heading-subsection text-beacon-gold mb-4">
              Intellectual Property
            </h2>
            <p className="text-lg text-stone-gray leading-relaxed mb-4">
              All content on the Beacon IR platform, including but not limited
              to text, graphics, logos, and software, is the property of Beacon
              IR or its licensors and is protected by copyright and other
              intellectual property laws.
            </p>
            <p className="text-lg text-stone-gray leading-relaxed">
              You retain ownership of the content you upload to our platform,
              but grant us a license to use, display, and distribute such
              content to provide our services.
            </p>
          </div>

          <div className="card-glass rounded-xl p-10 mb-8">
            <h2 className="heading-subsection text-beacon-gold mb-4">
              Service Availability
            </h2>
            <p className="text-lg text-stone-gray leading-relaxed">
              We strive to provide reliable service but do not guarantee
              uninterrupted access. We reserve the right to modify, suspend, or
              discontinue any aspect of our services at any time.
            </p>
          </div>

          <div className="card-glass rounded-xl p-10 mb-8">
            <h2 className="heading-subsection text-beacon-gold mb-4">
              Limitation of Liability
            </h2>
            <p className="text-lg text-stone-gray leading-relaxed">
              To the maximum extent permitted by law, Beacon IR shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of our services.
            </p>
          </div>

          <div className="card-glass rounded-xl p-10 mb-8">
            <h2 className="heading-subsection text-beacon-gold mb-4">
              Changes to Terms
            </h2>
            <p className="text-lg text-stone-gray leading-relaxed">
              We reserve the right to modify these terms at any time. Material
              changes will be notified to users. Continued use of our services
              after such changes constitutes acceptance of the new terms.
            </p>
          </div>

          <div className="card-glass rounded-xl p-10 mb-8">
            <h2 className="heading-subsection text-beacon-gold mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-stone-gray leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact
              us at:
            </p>
            <p className="text-lg text-beacon-gold">legal@beacon-ir.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
