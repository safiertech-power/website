"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle } from "lucide-react"

const processSteps = [
  "Site Survey",
  "Design",
  "Approvals/Subsidy",
  "Installation",
  "Commissioning",
  "Monitoring & Maintenance",
]

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setActiveStep(processSteps.length - 1)
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          let step = 0
          const interval = setInterval(() => {
            setActiveStep(step)
            step++
            if (step >= processSteps.length) {
              clearInterval(interval)
            }
          }, 800)
        }
      },
      { threshold: 0.3 },
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={timelineRef} className="relative">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {processSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center mb-8 md:mb-0 relative">
            {/* Step circle */}
            <div
              className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                index <= activeStep
                  ? "bg-brand-500 border-brand-500 text-white"
                  : "bg-white border-gray-300 text-gray-400"
              }`}
            >
              {index <= activeStep ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <span className="font-semibold">{index + 1}</span>
              )}
            </div>

            {/* Step label */}
            <div className="mt-3 text-center">
              <p
                className={`font-medium transition-colors duration-500 ${
                  index <= activeStep ? "text-brand-600" : "text-gray-500"
                }`}
              >
                {step}
              </p>
            </div>

            {/* Connection line */}
            {index < processSteps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-full w-full h-1">
                <div
                  className={`h-full transition-all duration-1000 ${
                    index < activeStep ? "bg-brand-500" : "bg-gray-300"
                  }`}
                  style={{
                    width: index < activeStep ? "100%" : "0%",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
