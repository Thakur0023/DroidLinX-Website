'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from './Section'
import { Card } from './Card'
import { Button } from './Button'
import { projects } from '@/lib/data'

const ProjectsPreview: React.FC = () => {
  return (
    <Section id="projects" background="gradient">
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-secondary-400 text-lg">
            Innovative solutions built by our talented community members
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card hover>
              <div className="mb-4 h-40 bg-gradient-to-br from-primary-900/20 to-accent-900/20 rounded-lg flex items-center justify-center">
                <span className="text-secondary-600 text-sm">{project.image}</span>
              </div>
              <h3 className="text-xl font-bold text-primary-300 mb-2">{project.title}</h3>
              <p className="text-secondary-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-primary-900/30 text-primary-300 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <Button variant="ghost" size="sm" className="flex-1">
                    GitHub
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="primary" size="sm" className="flex-1">
                    Live Demo
                  </Button>
                )}
              </div>
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
          View All Projects
        </Button>
      </motion.div>
    </Section>
  )
}

export { ProjectsPreview }