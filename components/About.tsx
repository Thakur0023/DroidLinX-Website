'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './Section'

const About: React.FC = () => {
  const stats = [
    { label: 'Active Members', value: '1.2k+' },
    { label: 'Events Conducted', value: '25+' },
    { label: 'Years Running', value: '2' },
    { label: 'Domains', value: '2' },
  ]

  return (
    <Section id="about" background="default">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
            About DroidLinX
          </h2>
          <p className="text-secondary-300 text-lg mb-6 leading-relaxed">
            DroidLinX is a premier tech club dedicated to fostering innovation and collaboration. We bring together passionate developers and tech enthusiasts to build cutting-edge projects and explore emerging technologies.
          </p>
          <p className="text-secondary-400 text-base mb-8 leading-relaxed">
            Our mission is to empower members through hands-on learning, mentorship, and real-world project experience. We specialize in Android App Development and Full-Stack Development.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Android Development', 'Full-Stack', 'Web Dev', 'Mobile', 'Backend'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-primary-900/30 border border-primary-700 text-primary-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary-800 border border-secondary-700 rounded-lg p-6 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-secondary-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

export { About }