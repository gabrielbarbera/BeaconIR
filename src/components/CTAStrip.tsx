"use client";

export default function CTAStrip() {
  const handleBookCall = () => {
    window.open("https://calendly.com/beacon-ir", "_blank");
  };

  const handleRequestDemo = () => {
    // TODO: Scroll to contact form
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-beacon-gold via-beacon-gold/90 to-beacon-gold/80"></div>

      {/* Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-10 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container-max text-center relative z-10">
        <div className="inline-block mb-6">
          <div className="h-1 w-32 bg-deep-navy/20 mx-auto"></div>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-navy mb-8 leading-tight">
          Ready to shine a light on your investor story?
        </h2>
        <p className="text-xl text-deep-navy/80 mb-12 max-w-3xl mx-auto">
          Join forward-thinking companies using Beacon IR to build investor
          confidence through clarity and precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={handleBookCall}
            className="bg-deep-navy border-2 border-deep-navy text-beacon-gold px-10 py-5 rounded-xl font-semibold shadow-xl shadow-black/20 hover:bg-deep-navy/95 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-300 ease-out"
          >
            Book a Call
          </button>
          <button
            onClick={handleRequestDemo}
            className="bg-beacon-gold border-2 border-beacon-gold text-deep-navy px-10 py-5 rounded-xl font-semibold shadow-xl shadow-black/20 hover:bg-beacon-gold/95 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-300 ease-out"
          >
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
