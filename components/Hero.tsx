'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './Button'
import { AnimatedAndroid } from './AnimatedAndroid'

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-bg-primary flex items-center justify-center overflow-hidden pt-16">
      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="px-3 py-1 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-accent-blue text-sm font-medium"
              >
                Full Stack + Android Development
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-text-primary leading-tight"
            >
              DroidLinX
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-text-secondary leading-relaxed max-w-lg"
            >
              A thriving community of developers building next-generation mobile and web applications. Learn, build, and innovate together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button variant="primary" size="lg">
                Join Community
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 pt-8"
            >
              {[
                { label: '1.2k+ Members', icon: '👥' },
                { label: '25+ Events', icon: '🎉' },
                { label: '2 Domains', icon: '🚀' },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-text-secondary text-sm">{stat.icon}</span>
                  <span className="text-text-primary font-semibold">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Illustration/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 lg:h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-green/10 rounded-2xl border border-border-default overflow-hidden">
              <AnimatedAndroid />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-text-tertiary text-xs sm:text-sm">Scroll to explore</span>
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-5 text-text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  )
}

export { Hero }