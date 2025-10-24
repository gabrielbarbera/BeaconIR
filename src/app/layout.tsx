import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'Beacon IR - Illuminate Your Investor Story',
  description: 'Beacon IR is the modern investor relations platform for startups and growth companies. From IR websites to earnings distribution and global press, we help you build trust and communicate with clarity.',
  keywords: 'investor relations, IR, startups, growth companies, press distribution, investor communications',
  authors: [{ name: 'Beacon IR' }],
  openGraph: {
    title: 'Beacon IR - Illuminate Your Investor Story',
    description: 'The modern investor relations platform for startups and growth companies.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
