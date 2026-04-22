'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Projects', href: '#projects' },
        { label: 'Events', href: '#events' },
        { label: 'Team', href: '#team' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Discord', href: 'https://discord.com' },
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'Instagram', href: 'https://www.instagram.com/droidlinx_club/' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/droidlinx-club/' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Guides', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Contact Us', href: '#contact' },
      ],
    },
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-secondary-950 border-t border-secondary-700">
      <div className="container-max py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12"
        >
          <motion.div variants={item} className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              DroidLinX
            </h3>
            <p className="text-secondary-400 text-sm mb-4">
              Building the future of technology together.
            </p>
            <div className="flex gap-3">
              {[
                { name: 'Discord', icon: '🎮', url: 'https://discord.com' },
                { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/droidlinx_club/' },
                { name: 'GitHub', icon: '🐙', url: 'https://github.com' },
                { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/company/droidlinx-club/' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary-800 hover:bg-secondary-700 flex items-center justify-center text-lg transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((group) => (
            <motion.div key={group.title} variants={item}>
              <h4 className="font-semibold text-secondary-100 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-secondary-400 hover:text-primary-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-secondary-700 pt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-secondary-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} DroidLinX. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-secondary-400 hover:text-primary-400 text-sm transition-colors"
              >
                Privacy
              </Link>
              <span className="text-secondary-700">•</span>
              <Link
                href="#"
                className="text-secondary-400 hover:text-primary-400 text-sm transition-colors"
              >
                Terms
              </Link>
              <span className="text-secondary-700">•</span>
              <Link
                href="#"
                className="text-secondary-400 hover:text-primary-400 text-sm transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export { Footer }