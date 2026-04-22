'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './Section'
import { Card } from './Card'
import { Button } from './Button'
import { events } from '@/lib/data'

const EventsPreview: React.FC = () => {
  return (
    <Section id="events" background="default">
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <p className="text-secondary-400 text-lg">
            Join us for workshops, hackathons, and networking events
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card hover>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-accent-900/30 border border-accent-700 text-accent-400 rounded-full text-xs font-semibold mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-300 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-secondary-400 text-sm flex items-center gap-2">
                    <span>🕐</span> {event.time}
                  </p>
                  <p className="text-secondary-400 text-sm flex items-center gap-2">
                    <span>📍</span> {event.location}
                  </p>
                </div>
              </div>

              <p className="text-secondary-300 text-sm mb-6 leading-relaxed">
                {event.description}
              </p>

              <Button
                variant="primary"
                size="sm"
                className="w-full"
              >
                Register Now
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Button variant="secondary" size="lg">
          View Calendar
        </Button>
      </motion.div>
    </Section>
  )
}

export { EventsPreview }