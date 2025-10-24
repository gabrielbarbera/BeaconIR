'use client'

import { useState } from 'react'

interface FormData {
  name: string
  company: string
  email: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Integrate with Agiled API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', company: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-primary-navy">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary mb-6">
              Let's talk about your investor communications.
            </h2>
            <p className="text-lg text-text-secondary">
              Whether you're launching your first IR website or scaling investor outreach globally, 
              we'll help you get there — fast.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-background-secondary rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background-accent border border-background-accent rounded-lg text-text-primary placeholder-text-muted focus:border-accent-gold focus:outline-none transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background-accent border border-background-accent rounded-lg text-text-primary placeholder-text-muted focus:border-accent-gold focus:outline-none transition-colors duration-200"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background-accent border border-background-accent rounded-lg text-text-primary placeholder-text-muted focus:border-accent-gold focus:outline-none transition-colors duration-200"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background-accent border border-background-accent rounded-lg text-text-primary placeholder-text-muted focus:border-accent-gold focus:outline-none transition-colors duration-200 resize-vertical"
                    placeholder="Tell us about your investor communications needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                    Thank you! We'll be in touch soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info & Calendly */}
            <div className="space-y-8">
              <div className="bg-background-secondary rounded-xl p-8">
                <h3 className="text-xl font-serif font-semibold text-text-primary mb-4">
                  Ready to get started?
                </h3>
                <p className="text-text-secondary mb-6">
                  Book a free consultation to discuss your investor communications strategy.
                </p>
                <button
                  onClick={() => window.open('https://calendly.com/beacon-ir', '_blank')}
                  className="btn-primary w-full"
                >
                  Schedule a Call
                </button>
              </div>

              <div className="bg-background-secondary rounded-xl p-8">
                <h3 className="text-xl font-serif font-semibold text-text-primary mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3 text-text-secondary">
                  <p>📧 hello@beaconir.com</p>
                  <p>📞 +1 (555) 123-4567</p>
                  <p>🌐 beaconir.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
