'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AnimatedAndroid: React.FC = () => {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="flex items-center justify-center w-full h-full"
    >
      <svg
        viewBox="0 0 200 280"
        className="w-32 h-40 sm:w-40 sm:h-52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <motion.rect
          x="60"
          y="30"
          width="80"
          height="80"
          rx="15"
          fill="#3B82F6"
          initial={{ fill: '#3B82F6' }}
          whileHover={{ fill: '#60A5FA' }}
          transition={{ duration: 0.3 }}
        />

        {/* Antenna Left */}
        <motion.line
          x1="70"
          y1="25"
          x2="50"
          y2="5"
          stroke="#3B82F6"
          strokeWidth="8"
          strokeLinecap="round"
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: '70px 25px' }}
        />

        {/* Antenna Right */}
        <motion.line
          x1="130"
          y1="25"
          x2="150"
          y2="5"
          stroke="#3B82F6"
          strokeWidth="8"
          strokeLinecap="round"
          animate={{ rotate: [10, -10, 10] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: '130px 25px' }}
        />

        {/* Left Eye */}
        <circle cx="80" cy="55" r="8" fill="#E6EDF3" />
        <motion.circle
          cx="80"
          cy="55"
          r="5"
          fill="#3B82F6"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        {/* Right Eye */}
        <circle cx="120" cy="55" r="8" fill="#E6EDF3" />
        <motion.circle
          cx="120"
          cy="55"
          r="5"
          fill="#3B82F6"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        {/* Mouth */}
        <path d="M 85 85 Q 100 95 115 85" stroke="#E6EDF3" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Body */}
        <rect x="55" y="110" width="90" height="100" rx="10" fill="#3B82F6" />

        {/* Chest Panel */}
        <rect x="70" y="125" width="60" height="70" rx="8" fill="#161B22" />

        {/* Chest Lights - Animated */}
        {[0, 1, 2].map((col) =>
          [0, 1, 2].map((row) => (
            <motion.circle
              key={`${col}-${row}`}
              cx={85 + col * 15}
              cy={140 + row * 15}
              r="4"
              fill="#22C55E"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                delay: (col + row) * 0.1,
                repeat: Infinity,
              }}
            />
          ))
        )}

        {/* Left Arm */}
        <motion.g
          animate={{ rotate: [-15, 15, -15] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ transformOrigin: '55px 145px' }}
        >
          <rect x="30" y="130" width="25" height="70" rx="10" fill="#3B82F6" />
          <circle cx="42" cy="205" r="8" fill="#E6EDF3" />
        </motion.g>

        {/* Right Arm */}
        <motion.g
          animate={{ rotate: [15, -15, 15] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{ transformOrigin: '145px 145px' }}
        >
          <rect x="145" y="130" width="25" height="70" rx="10" fill="#3B82F6" />
          <circle cx="158" cy="205" r="8" fill="#E6EDF3" />
        </motion.g>

        {/* Left Leg */}
        <motion.g
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <rect x="70" y="215" width="18" height="50" rx="9" fill="#22C55E" />
          <circle cx="79" cy="270" r="8" fill="#E6EDF3" />
        </motion.g>

        {/* Right Leg */}
        <motion.g
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <rect x="112" y="215" width="18" height="50" rx="9" fill="#22C55E" />
          <circle cx="121" cy="270" r="8" fill="#E6EDF3" />
        </motion.g>
      </svg>
    </motion.div>
  )
}

export { AnimatedAndroid }
