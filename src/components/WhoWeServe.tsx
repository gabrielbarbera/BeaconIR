'use client'

const segments = [
  {
    title: 'VC-Backed Startups',
    description: 'Get IR-ready fast. Build trust with investors through updates, clear disclosures, and beautiful IR websites.',
  },
  {
    title: 'Growth & Pre-IPO Companies',
    description: 'Meet disclosure standards, manage shareholder communications, and prepare your public narrative.',
  },
  {
    title: 'Funds & IR Agencies',
    description: 'Extend your capabilities with Beacon IR infrastructure and managed communications support.',
  },
]

export default function WhoWeServe() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary mb-6">
            Tailored for high-impact teams.
          </h2>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {segments.map((segment, index) => (
            <div key={index} className="bg-background-accent rounded-xl p-8 hover:bg-accent-gold/10 transition-all duration-300">
              <h3 className="text-xl font-serif font-semibold text-text-primary mb-4">
                {segment.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {segment.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-primary">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  )
}
