'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './Section'
import { Button } from './Button'

const CTA: React.FC = () => {
  return (
    <Section background="gradient">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight drop-shadow-lg">
          Ready to Join DroidLinX?
        </h2>

        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
          Whether you're interested in learning new technologies, collaborating on exciting projects, or growing your network—we've got a place for you.
        </p>

        <div className="bg-gradient-to-br from-accent-purple/20 to-accent-cyan/10 border border-accent-cyan/50 rounded-2xl p-8 mb-8 shadow-lg shadow-accent-cyan/20 glow-effect">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-accent-cyan mb-2 text-lg">Learn</h3>
              <p className="text-text-secondary text-sm">
                Master cutting-edge technologies through workshops and mentorship
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-accent-green mb-2 text-lg">Build</h3>
              <p className="text-text-secondary text-sm">
                Collaborate on impactful projects with talented team members
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-bold text-accent-amber mb-2 text-lg">Grow</h3>
              <p className="text-text-secondary text-sm">
                Build your network and advance your tech career
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="primary" size="lg">
            Join Our Discord
          </Button>
          <Button variant="secondary" size="lg">
            Attend Next Event
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export { CTA }