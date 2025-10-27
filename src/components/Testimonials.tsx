"use client";

export default function Testimonials() {
  return (
    <section className="section-padding bg-navy-light relative overflow-hidden">
      {/* Subtle gold gradient accent stripe at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/30 to-transparent"></div>
      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-beacon-gold to-transparent mx-auto"></div>
          </div>
          <h2 className="heading-section mb-6">What our clients say</h2>
          <p className="text-body-lg max-w-3xl mx-auto">
            Trusted by founders and operators who take investor communications
            seriously
          </p>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="card-glass group">
              <div className="flex items-start mb-6">
                <svg
                  className="w-12 h-12 text-beacon-gold/20 group-hover:text-beacon-gold/40 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-body-lg mb-8 leading-relaxed">
                "Beacon IR made it simple to launch our IR site and coordinate
                releases in under 48 hours. The clarity and speed changed the
                game for us."
              </blockquote>

              <div className="flex items-center space-x-4 pt-6 border-t border-slate-gray/20">
                <div className="w-14 h-14 bg-gradient-to-br from-beacon-gold to-beacon-gold/80 rounded-full flex items-center justify-center shadow-lg shadow-beacon-gold/20">
                  <span className="text-deep-navy font-bold text-lg">F</span>
                </div>
                <div>
                  <p className="font-semibold text-pure-white">Founder</p>
                  <p className="text-slate-gray text-sm">
                    Series B SaaS Company
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card-glass group">
              <div className="flex items-start mb-6">
                <svg
                  className="w-12 h-12 text-beacon-gold/20 group-hover:text-beacon-gold/40 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-body-lg mb-8 leading-relaxed">
                "The platform gave us confidence before our investor updates —
                fast, compliant, and on-brand."
              </blockquote>

              <div className="flex items-center space-x-4 pt-6 border-t border-slate-gray/20">
                <div className="w-14 h-14 bg-gradient-to-br from-beacon-gold to-beacon-gold/80 rounded-full flex items-center justify-center shadow-lg shadow-beacon-gold/20">
                  <span className="text-deep-navy font-bold text-lg">H</span>
                </div>
                <div>
                  <p className="font-semibold text-pure-white">Head of IR</p>
                  <p className="text-slate-gray text-sm">
                    Fintech Growth Company
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-gray/60 text-center mt-12 italic">
            More testimonials coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
