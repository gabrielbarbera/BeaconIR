'use client'

const benefits = [
  {
    icon: '🌐',
    title: 'Built for modern startups',
    description: 'not just the Fortune 500.',
  },
  {
    icon: '⚡',
    title: 'Fast and agile',
    description: 'IR infrastructure in days, not quarters.',
  },
  {
    icon: '🧠',
    title: 'AI-optimized visibility',
    description: 'get discovered where it matters.',
  },
  {
    icon: '🕯️',
    title: 'Transparent pricing & support',
    description: 'no enterprise bloat.',
  },
]

export default function WhyBeacon() {
  return (
    <section className="section-padding bg-primary-navy">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary mb-6">
            Why companies choose Beacon IR
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-text-secondary leading-relaxed">
            Investor relations doesn't need to be slow or complicated. Beacon IR gives emerging 
            companies the clarity, tools, and global distribution they need to communicate like 
            market leaders — without the heavy lift.
          </p>
        </div>
      </div>
    </section>
  )
}
