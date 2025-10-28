import CTAStrip from "@/components/CTAStrip";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Beacon IR",
  description:
    "Transparent pricing for investor relations. Choose from Starter, Growth, or Pro plans. All plans include IR websites, hosting, and support.",
  openGraph: {
    title: "Pricing - Beacon IR",
    description: "Transparent pricing for modern investor relations",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <CTAStrip />
      <Footer />
    </>
  );
}
