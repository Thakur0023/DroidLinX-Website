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
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-primary-300 to-accent-500 bg-clip-text text-transparent">
          Ready to Join DroidLinX?
        </h2>

        <p className="text-lg text-secondary-300 mb-8">
          Whether you're interested in learning new technologies, collaborating on exciting projects, or growing your network—we've got a place for you.
        </p>

        <div className="bg-secondary-800/50 border border-secondary-700 rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-bold text-primary-300 mb-2">Learn</h3>
              <p className="text-secondary-400 text-sm">
                Master cutting-edge technologies through workshops and mentorship
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-bold text-primary-300 mb-2">Build</h3>
              <p className="text-secondary-400 text-sm">
                Collaborate on impactful projects with talented team members
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-bold text-primary-300 mb-2">Grow</h3>
              <p className="text-secondary-400 text-sm">
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