"use client";

export default function About() {
  return (
    <section className="section-padding bg-deep-navy relative overflow-hidden">
      {/* Subtle gold gradient accent stripe at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/30 to-transparent"></div>
      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary mb-8">
            We built Beacon IR to make investor communications clear, fast, and
            accessible.
          </h2>

          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Beacon IR was founded on a simple idea: emerging companies deserve
            institutional-grade investor relations infrastructure — without the
            cost or complexity of legacy systems. We combine trusted IR best
            practices with modern technology, beautiful design, and global
            distribution — so your narrative shines through every time.
          </p>

          {/* Mission Statement */}
          <blockquote className="text-2xl md:text-3xl font-serif font-light text-beacon-gold italic border-l-4 border-beacon-gold pl-6 max-w-2xl mx-auto">
            "Every signal starts with a beacon."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
