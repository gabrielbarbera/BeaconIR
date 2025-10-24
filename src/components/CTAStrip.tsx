'use client'

export default function CTAStrip() {
  const handleBookCall = () => {
    window.open('https://calendly.com/beacon-ir', '_blank')
  }

  const handleRequestDemo = () => {
    // TODO: Scroll to contact form
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding bg-gradient-to-r from-accent-gold to-accent-lightBlue">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-navy mb-8">
          Ready to shine a light on your investor story?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleBookCall}
            className="bg-primary-navy text-accent-gold px-8 py-4 rounded-lg font-semibold hover:bg-primary-charcoal transition-colors duration-200"
          >
            Book a Call
          </button>
          <button
            onClick={handleRequestDemo}
            className="border-2 border-primary-navy text-primary-navy px-8 py-4 rounded-lg font-semibold hover:bg-primary-navy hover:text-accent-gold transition-colors duration-200"
          >
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  )
}
