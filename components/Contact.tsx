'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from './Section'
import { Button } from './Button'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <Section id="contact" background="gradient">
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text leading-tight drop-shadow-lg">
            Get In Touch
          </h2>
          <p className="text-text-secondary text-lg">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-accent-cyan mb-2 flex items-center gap-3">
                <span className="text-2xl">📍</span> Location
              </h3>
              <p className="text-text-secondary">
                C3, Room no. 615<br />
                Chandigarh University
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent-green mb-2 flex items-center gap-3">
                <span className="text-2xl">📧</span> Email
              </h3>
              <div className="space-y-1">
                <a href="mailto:thakurankit2399@gmail.com" className="text-accent-cyan hover:text-accent-blue transition-colors block font-medium">
                  thakurankit2399@gmail.com
                </a>
                <a href="mailto:khyatghosh@gmail.com" className="text-accent-cyan hover:text-accent-blue transition-colors block font-medium">
                  khyatghosh@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-accent-amber mb-2 flex items-center gap-3">
                <span className="text-2xl">💬</span> Connect With Us
              </h3>
              <div className="flex gap-4">
                {[
                  { name: 'Discord', icon: '🎮', url: 'https://discord.com' },
                  { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/droidlinx_club/' },
                  { name: 'GitHub', icon: '🐙', url: 'https://github.com' },
                  { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/company/droidlinx-club/' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-12 h-12 rounded-lg bg-accent-purple/20 border border-accent-cyan/50 hover:border-accent-cyan hover:bg-accent-cyan/10 flex items-center justify-center hover:shadow-lg hover:shadow-accent-cyan/40 transition-all duration-300"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-bg-secondary border border-accent-purple/30 rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all duration-200"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-bg-secondary border border-accent-purple/30 rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all duration-200"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-bg-secondary border border-accent-purple/30 rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all duration-200"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-bg-secondary border border-accent-purple/30 rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all duration-200 resize-none"
              placeholder="Tell us more..."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isSubmitted}
            >
              {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </Section>
  )
}

export { Contact }