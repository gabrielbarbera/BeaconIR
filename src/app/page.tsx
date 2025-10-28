import About from "@/components/About";
import Contact from "@/components/Contact";
import CTAStrip from "@/components/CTAStrip";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhoWeServe from "@/components/WhoWeServe";
import WhyBeacon from "@/components/WhyBeacon";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyBeacon />
      <WhoWeServe />
      <Testimonials />
      <CTAStrip />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
