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
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text leading-tight">
            About DroidLinX
          </h2>
          <p className="text-text-secondary text-lg mb-6 leading-relaxed">
            DroidLinX is a premier tech club dedicated to fostering innovation and collaboration. We bring together passionate developers and tech enthusiasts to build cutting-edge projects and explore emerging technologies.
          </p>
          <p className="text-text-tertiary text-base mb-8 leading-relaxed">
            Our mission is to empower members through hands-on learning, mentorship, and real-world project experience. We specialize in Android App Development and Full-Stack Development.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Android Development', 'Full-Stack', 'Web Dev', 'Mobile', 'Backend'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-accent-purple/20 border border-accent-purple/50 text-accent-cyan rounded-full text-sm font-medium hover:border-accent-cyan/80 transition-all"
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
              className="bg-gradient-to-br from-accent-purple/30 to-accent-cyan/10 border border-accent-cyan/40 rounded-xl p-6 hover:border-accent-cyan/80 hover:shadow-lg hover:shadow-accent-cyan/30 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

export { About }