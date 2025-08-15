"use client"

import { useEffect, useRef } from "react"

interface SolarSceneProps {
  speed?: number
  intensity?: number
}

export function SolarScene({ speed = 1, intensity = 1 }: SolarSceneProps) {
  const sunRef = useRef<SVGCircleElement>(null)
  const shimmerRef = useRef<SVGRectElement>(null)
  const gridLineRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    // Sun animation
    if (sunRef.current) {
      sunRef.current.style.animation = `sunRise ${20 / speed}s ease-in-out infinite alternate`
    }

    // Shimmer animation
    if (shimmerRef.current) {
      shimmerRef.current.style.animation = `shimmer ${8 / speed}s ease-in-out infinite`
    }

    // Grid pulse animation
    if (gridLineRef.current) {
      gridLineRef.current.style.animation = `gridPulse ${3 / speed}s ease-in-out infinite`
    }
  }, [speed])

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Sun gradient */}
          <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFA000" />
            <stop offset="70%" stopColor="#FFC857" />
            <stop offset="100%" stopColor="#FFE082" />
          </radialGradient>

          {/* Panel gradient */}
          <linearGradient id="panelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1067A3" />
            <stop offset="50%" stopColor="#0B3C5D" />
            <stop offset="100%" stopColor="#1067A3" />
          </linearGradient>

          {/* Shimmer gradient */}
          <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          {/* Panel mask for shimmer */}
          <mask id="panelMask">
            <rect x="0" y="0" width="800" height="400" fill="black" />
            <rect x="150" y="200" width="500" height="120" fill="white" />
          </mask>
        </defs>

        {/* Sky background */}
        <rect width="800" height="400" fill="url(#skyGradient)" />
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E3F2FD" />
            <stop offset="100%" stopColor="#BBDEFB" />
          </linearGradient>
        </defs>

        {/* Sun */}
        <circle ref={sunRef} cx="650" cy="100" r="40" fill="url(#sunGradient)" opacity={intensity} />

        {/* Sun rays */}
        <g opacity={intensity * 0.6}>
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="650"
              y1="100"
              x2={650 + Math.cos((i * Math.PI) / 4) * 60}
              y2={100 + Math.sin((i * Math.PI) / 4) * 60}
              stroke="#FFA000"
              strokeWidth="2"
              opacity="0.5"
            />
          ))}
        </g>

        {/* Solar panels */}
        <g>
          {/* Panel row 1 */}
          <rect x="150" y="200" width="100" height="60" fill="url(#panelGradient)" rx="4" />
          <rect x="260" y="200" width="100" height="60" fill="url(#panelGradient)" rx="4" />
          <rect x="370" y="200" width="100" height="60" fill="url(#panelGradient)" rx="4" />
          <rect x="480" y="200" width="100" height="60" fill="url(#panelGradient)" rx="4" />
          <rect x="590" y="200" width="100" height="60" fill="url(#panelGradient)" rx="4" />

          {/* Panel row 2 */}
          <rect x="150" y="270" width="100" height="60" fill="url(#panelGradient)" rx="4" />
          <rect x="260" y="270" width="100" height="60" fill="url(#panelGradient)" rx="4" />
          <rect x="370" y="270" width="100" height="60" fill="url(#panelGradient)" rx="4" />
          <rect x="480" y="270" width="100" height="60" fill="url(#panelGradient)" rx="4" />
          <rect x="590" y="270" width="100" height="60" fill="url(#panelGradient)" rx="4" />
        </g>

        {/* Shimmer effect */}
        <rect
          ref={shimmerRef}
          x="-100"
          y="200"
          width="100"
          height="130"
          fill="url(#shimmerGradient)"
          mask="url(#panelMask)"
        />

        {/* Grid connection lines */}
        <path
          ref={gridLineRef}
          d="M 700 250 L 750 250 L 750 200 L 780 200"
          stroke="#1067A3"
          strokeWidth="3"
          strokeDasharray="10,5"
          fill="none"
          opacity={intensity}
        />

        {/* House icon */}
        <polygon points="720,180 740,160 760,180 760,200 720,200" fill="#0B3C5D" opacity={intensity} />

        {/* Grid icon */}
        <rect x="775" y="195" width="20" height="10" fill="#1067A3" opacity={intensity} />
      </svg>

      <style jsx>{`
        @keyframes sunRise {
          0% { transform: translateY(20px) scale(0.8); opacity: 0.6; }
          100% { transform: translateY(-10px) scale(1.1); opacity: 1; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(700px); }
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
