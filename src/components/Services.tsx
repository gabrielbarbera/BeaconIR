'use client'

const services = [
  {
    title: 'IR Websites',
    description: 'Fast, compliant, and beautifully designed investor relations sites. Launch in days, not months.',
    icon: '🌐',
  },
  {
    title: 'Earnings & News Distribution',
    description: 'Share your company news and financial updates with precision. Global distribution built for modern markets.',
    icon: '📢',
  },
  {
    title: 'Investor Communications',
    description: 'From regular updates to key disclosures — structured, consistent messaging that builds confidence.',
    icon: '💬',
  },
  {
    title: 'Media & Market Visibility',
    description: 'AI-optimized press distribution, coverage tracking, and sentiment monitoring to keep your story seen and heard.',
    icon: '🧠',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-background-secondary">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary mb-6">
            Everything you need to communicate with investors — clearly.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background-accent rounded-xl p-6 hover:bg-accent-gold/10 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-semibold text-text-primary mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-4 h-1 bg-gradient-to-r from-accent-gold to-accent-lightBlue rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            Ready to get started? Let's discuss your investor communications needs.
          </p>
          <button className="btn-primary">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  )
}
