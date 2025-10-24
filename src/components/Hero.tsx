'use client'

import { useState } from 'react'

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false)

  const handleBookCall = () => {
    setIsLoading(true)
    // TODO: Integrate with TidyCal
    window.open('https://calendly.com/beacon-ir', '_blank')
    setTimeout(() => setIsLoading(false), 1000)
  }

  const handleLearnMore = () => {
    // TODO: Scroll to services section
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-navy via-primary-charcoal to-background-accent">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f4a261" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 container-max section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Placeholder */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-accent-gold mb-4">
              Beacon IR
            </h1>
            <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-text-primary mb-6 leading-tight">
            Illuminate your investor story.
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Beacon IR is the modern investor relations platform for startups and growth companies. 
            From IR websites to earnings distribution and global press, we help you build trust and 
            communicate with clarity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={handleBookCall}
              disabled={isLoading}
              className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Opening...' : 'Book a Call'}
            </button>
            <button
              onClick={handleLearnMore}
              className="btn-secondary text-lg px-8 py-4"
            >
              Learn More
            </button>
          </div>

          {/* Trust Indicator */}
          <p className="text-sm text-text-muted italic">
            Trusted by founders and operators who take investor communications seriously.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
