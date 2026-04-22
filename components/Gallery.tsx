'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './Section'

const Gallery: React.FC = () => {
  const galleryItems = [
    { id: 1, title: 'Hackathon 2026', category: 'Events' },
    { id: 2, title: 'Web Dev Workshop', category: 'Workshops' },
    { id: 3, title: 'Team Building', category: 'Community' },
    { id: 4, title: 'Project Showcase', category: 'Projects' },
    { id: 5, title: 'Networking Session', category: 'Events' },
    { id: 6, title: 'Code Review', category: 'Learning' },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <Section id="gallery" background="default">
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-secondary-400 text-lg">
            Highlights from our community events and projects
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {galleryItems.map((galleryItem) => (
          <motion.div
            key={galleryItem.id}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="group relative overflow-hidden rounded-lg aspect-square bg-gradient-to-br from-primary-900/20 to-accent-900/20 border border-secondary-700 cursor-pointer hover:border-primary-500 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-secondary-600 text-center px-4">
                <div className="text-4xl mb-2">📸</div>
                <div className="text-sm">{galleryItem.title}</div>
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
              <h3 className="text-primary-300 font-semibold text-sm">
                {galleryItem.title}
              </h3>
              <span className="inline-block text-xs text-accent-400 mt-1 px-2 py-1 bg-accent-900/30 rounded-full">
                {galleryItem.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

export { Gallery }