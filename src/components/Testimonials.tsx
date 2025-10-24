'use client'

export default function Testimonials() {
  return (
    <section className="section-padding bg-primary-navy">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary mb-6">
            What our clients say
          </h2>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl text-text-secondary italic mb-8 leading-relaxed">
            "Beacon IR made it simple to launch our IR site and coordinate releases in under 48 hours. 
            The clarity and speed changed the game for us."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
              <span className="text-primary-navy font-bold text-lg">F</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-text-primary">Founder</p>
              <p className="text-text-muted">Series B SaaS Company</p>
            </div>
          </div>

          <p className="text-sm text-text-muted mt-8 italic">
            More testimonials coming soon.
          </p>
        </div>
      </div>
    </section>
  )
}
