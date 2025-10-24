'use client'

export default function Footer() {
  return (
    <footer className="bg-primary-charcoal py-12">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-accent-gold mb-4">
              Beacon IR
            </h3>
            <p className="text-text-secondary mb-4">
              Guiding your investor story.
            </p>
            <p className="text-sm text-text-muted">
              © Beacon IR. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#home" className="hover:text-accent-gold transition-colors duration-200">Home</a></li>
              <li><a href="#services" className="hover:text-accent-gold transition-colors duration-200">Solutions</a></li>
              <li><a href="#about" className="hover:text-accent-gold transition-colors duration-200">About</a></li>
              <li><a href="#contact" className="hover:text-accent-gold transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-text-secondary mb-6">
              <li><a href="/privacy" className="hover:text-accent-gold transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-accent-gold transition-colors duration-200">Terms of Service</a></li>
            </ul>

            <h4 className="text-text-primary font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/beacon-ir" className="text-text-secondary hover:text-accent-gold transition-colors duration-200">
                LinkedIn
              </a>
              <a href="https://twitter.com/beaconir" className="text-text-secondary hover:text-accent-gold transition-colors duration-200">
                Twitter/X
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
