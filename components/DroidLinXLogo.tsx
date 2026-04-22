'use client'

import React from 'react'

const DroidLinXLogo: React.FC = () => {
  return (
    <svg
      viewBox="0 0 120 120"
      className="w-12 h-12 sm:w-14 sm:h-14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring glow effect */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="botGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </radialGradient>
      </defs>

      {/* Head */}
      <rect x="35" y="15" width="50" height="50" rx="8" fill="url(#botGradient)" filter="url(#glow)" />

      {/* Left Antenna */}
      <line x1="40" y1="12" x2="25" y2="2" stroke="#FCD34D" strokeWidth="4" strokeLinecap="round" filter="url(#glow)" />
      <circle cx="25" cy="2" r="3" fill="#FCD34D" filter="url(#glow)" />

      {/* Right Antenna */}
      <line x1="80" y1="12" x2="95" y2="2" stroke="#FCD34D" strokeWidth="4" strokeLinecap="round" filter="url(#glow)" />
      <circle cx="95" cy="2" r="3" fill="#FCD34D" filter="url(#glow)" />

      {/* Left Eye */}
      <circle cx="48" cy="32" r="5" fill="#000" />
      <circle cx="49" cy="31" r="2" fill="#FCD34D" />

      {/* Right Eye */}
      <circle cx="72" cy="32" r="5" fill="#000" />
      <circle cx="73" cy="31" r="2" fill="#FCD34D" />

      {/* Mouth */}
      <path d="M 50 48 Q 60 52 70 48" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Body */}
      <rect x="30" y="65" width="60" height="50" rx="6" fill="url(#botGradient)" filter="url(#glow)" />

      {/* Chest detail */}
      <rect x="40" y="75" width="40" height="30" rx="4" fill="#000" opacity="0.3" />

      {/* Left Arm */}
      <rect x="15" y="75" width="15" height="35" rx="7" fill="url(#botGradient)" filter="url(#glow)" />
      <circle cx="22" cy="115" r="4" fill="#FCD34D" filter="url(#glow)" />

      {/* Right Arm */}
      <rect x="90" y="75" width="15" height="35" rx="7" fill="url(#botGradient)" filter="url(#glow)" />
      <circle cx="98" cy="115" r="4" fill="#FCD34D" filter="url(#glow)" />

      {/* Left Leg */}
      <rect x="42" y="115" width="10" height="20" rx="5" fill="url(#botGradient)" filter="url(#glow)" />
      <circle cx="47" cy="118" r="3" fill="#FCD34D" filter="url(#glow)" />

      {/* Right Leg */}
      <rect x="68" y="115" width="10" height="20" rx="5" fill="url(#botGradient)" filter="url(#glow)" />
      <circle cx="73" cy="118" r="3" fill="#FCD34D" filter="url(#glow)" />

      {/* Text */}
      <text
        x="60"
        y="135"
        fontSize="8"
        fontWeight="bold"
        fill="#FCD34D"
        textAnchor="middle"
        filter="url(#glow)"
      >
        DX
      </text>
    </svg>
  )
}

export { DroidLinXLogo }
