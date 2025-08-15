"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Banknote, Shield, Wrench, Gift } from "lucide-react"

const whyData = [
  {
    icon: Banknote,
    title: "Bank loans at ~7%",
    description: "Paperwork handled, quick approvals.",
    color: "text-green-600",
  },
  {
    icon: Shield,
    title: "Cyclone-resistant structures",
    description: "Engineered for up to 160 km/h winds, 25-year anti-rust.",
    color: "text-blue-600",
  },
  {
    icon: Wrench,
    title: "5-year maintenance promise",
    description: "Quarterly deep cleaning, health checks & repairs.",
    color: "text-orange-600",
  },
  {
    icon: Gift,
    title: "Up to ₹1,08,000 subsidy support*",
    description: "Documentation to disbursal, handled.",
    color: "text-purple-600",
  },
]

export function WhyCards() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(whyData.length).fill(false))
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setVisibleCards(new Array(whyData.length).fill(true))
      return
    }

    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, index * 200)
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {whyData.map((item, index) => {
        const Icon = item.icon
        return (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`transform transition-all duration-700 ${
              visibleCards[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300 ${item.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-brand-600">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
