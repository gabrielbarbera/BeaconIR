"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-secondary py-12 border-t border-slate-gray/20">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <Link href="/">
              <img
                src="/images/logos/beaconir-logo-horizontal.svg"
                alt="Beacon IR"
                className="h-8 mb-4"
              />
            </Link>
            <p className="text-slate-gray mb-4">
              Illuminating your investor narrative.
            </p>
            <p className="text-sm text-slate-gray/60">
              © 2024 Beacon IR. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-pure-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-slate-gray">
              <li>
                <Link
                  href="/"
                  className="hover:text-beacon-gold transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-beacon-gold transition-colors duration-200"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-beacon-gold transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="hover:text-beacon-gold transition-colors duration-200"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="hover:text-beacon-gold transition-colors duration-200"
                >
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-pure-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-gray mb-6">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-beacon-gold transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-beacon-gold transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>

            <h4 className="text-pure-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/beacon-ir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-gray hover:text-beacon-gold transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/beaconir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-gray hover:text-beacon-gold transition-colors duration-200"
              >
                Twitter/X
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
