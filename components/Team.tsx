'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './Section'
import { Card } from './Card'
import { teamMembers } from '@/lib/data'

const Team: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Section id="team" background="gradient">
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-secondary-400 text-lg">
            Talented individuals driving innovation and collaboration
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {teamMembers.map((member) => (
          <motion.div key={member.id} variants={item}>
            <Card hover>
              <div className="h-40 bg-gradient-to-br from-primary-900/20 to-accent-900/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-secondary-600 text-xs">{member.image}</span>
              </div>

              <h3 className="text-lg font-bold text-primary-300 mb-1">
                {member.name}
              </h3>

              <p className="text-accent-400 text-sm font-semibold mb-3">
                {member.role}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

export { Team }