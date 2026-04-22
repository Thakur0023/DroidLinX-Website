'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'default' | 'gradient' | 'dark'
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  background = 'default',
}) => {
  const backgroundClasses = {
    default: 'bg-bg-primary',
    gradient: 'bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary',
    dark: 'bg-bg-secondary',
  }

  return (
    <section
      id={id}
      className={cn(
        'section-padding',
        backgroundClasses[background],
        className
      )}
    >
      <div className="container-max">
        {children}
      </div>
    </section>
  )
}

export { Section }