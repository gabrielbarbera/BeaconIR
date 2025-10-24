import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyBeacon from '@/components/WhyBeacon'
import WhoWeServe from '@/components/WhoWeServe'
import Testimonials from '@/components/Testimonials'
import CTAStrip from '@/components/CTAStrip'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <WhyBeacon />
      <WhoWeServe />
      <Testimonials />
      <CTAStrip />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
