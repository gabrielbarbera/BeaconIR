"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBookCall = () => {
    window.open("https://calendly.com/beacon-ir", "_blank");
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-deep-navy/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3"
            onClick={closeMenu}
          >
            <img
              src="/images/logos/beaconir-logo-primary.svg"
              alt="Beacon IR"
              className="h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/")
                  ? "text-beacon-gold"
                  : "text-slate-gray hover:text-beacon-gold"
              }`}
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/solutions")
                  ? "text-beacon-gold"
                  : "text-slate-gray hover:text-beacon-gold"
              }`}
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/pricing")
                  ? "text-beacon-gold"
                  : "text-slate-gray hover:text-beacon-gold"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/about")
                  ? "text-beacon-gold"
                  : "text-slate-gray hover:text-beacon-gold"
              }`}
            >
              About
            </Link>
            <Link
              href="/insights"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/insights")
                  ? "text-beacon-gold"
                  : "text-slate-gray hover:text-beacon-gold"
              }`}
            >
              Insights
            </Link>
            <Link
              href="/demo"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/demo")
                  ? "text-beacon-gold"
                  : "text-slate-gray hover:text-beacon-gold"
              }`}
            >
              Demo
            </Link>
            <button
              onClick={handleBookCall}
              className="btn-primary text-sm px-6 py-2"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-pure-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-deep-navy border-t border-slate-gray/20 px-4 py-6 space-y-4">
            <Link
              href="/"
              onClick={closeMenu}
              className={`block py-2 text-base font-medium transition-colors duration-200 ${
                isActive("/")
                  ? "text-beacon-gold"
                  : "text-slate-gray hover:text-beacon-gold"
              }`}
            >
              Home
            </Link>
            <Link
              href="/solutions"
              onClick={closeMenu}
              className={`block py-2 text-base font-medium transition-colors duration-200 ${
                isActive("/solutions")
                  ? "text-beacon-gold"
                  : "text-slate-gray hover:text-beacon-gold"
              }`}
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              onClick={closeMenu}
              className={`block py-2 text-base font-medium transition-colors duration-200 ${
                isActive("/pricing")
                  ? "text-beacon-gold"
                  : "text-slate-gray hover:text-beacon-gold"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className={`block py-2 text-base font-medium transition-colors duration-200 ${
                isActive("/about")
                  ? "text-beacon-gold"
                  : "text-slate-gray hover:text-beacon-gold"
              }`}
            >
              About
            </Link>
            <Link
              href="/insights"
              onClick={closeMenu}
              className={`block py-2 text-base font-medium transition-colors duration-200 ${
                isActive("/insights")
                  ? "text-beacon-gold"
                  : "text-slate-gray hover:text-beacon-gold"
              }`}
            >
              Insights
            </Link>
            <Link
              href="/demo"
              onClick={closeMenu}
              className={`block py-2 text-base font-medium transition-colors duration-200 ${
                isActive("/demo")
                  ? "text-beacon-gold"
                  : "text-slate-gray hover:text-beacon-gold"
              }`}
            >
              Demo
            </Link>
            <div className="pt-4 border-t border-slate-gray/20">
              <button
                onClick={() => {
                  handleBookCall();
                  closeMenu();
                }}
                className="btn-primary w-full"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
