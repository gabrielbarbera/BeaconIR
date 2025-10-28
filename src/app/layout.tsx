import ErrorBoundaryWrapper from "@/components/ErrorBoundaryWrapper";
import Navbar from "@/components/Navbar";
import Spotlight from "@/components/Spotlight";
import SessionProvider from "@/components/providers/SessionProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beacon IR - Illuminate Your Investor Narrative",
  description:
    "Beacon IR is the modern investor relations platform for startups and growth companies. From IR websites to earnings distribution and global press, we help you build trust and communicate with clarity.",
  keywords:
    "investor relations, IR, startups, growth companies, press distribution, investor communications",
  authors: [{ name: "Beacon IR" }],
  openGraph: {
    title: "Beacon IR - Illuminate Your Investor Narrative",
    description:
      "The modern investor relations platform for startups and growth companies.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      { url: "/favicon-32.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png" },
    ],
    apple: [
      {
        url: "/images/logos/app-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased relative" suppressHydrationWarning>
        <ErrorBoundaryWrapper>
          <SessionProvider>
            <Spotlight />
            <div className="relative z-10">
              <Navbar />
              {children}
            </div>
          </SessionProvider>
        </ErrorBoundaryWrapper>
      </body>
    </html>
  );
}
