import type { Metadata } from "next"
import { QuoteForm } from "@/components/quote-form"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Award, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Get Free Solar Quotation",
  description:
    "Get a personalized solar quotation for your property. Free site survey, subsidy support, and financing options available. Contact Safiertech Solar today.",
}

const benefits = [
  {
    icon: Shield,
    title: "No Hidden Costs",
    description: "Transparent pricing with detailed breakdown",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Get your quotation within 24 hours",
  },
  {
    icon: Award,
    title: "Expert Consultation",
    description: "Free technical consultation included",
  },
  {
    icon: Users,
    title: "Local Support",
    description: "Dedicated support across UP",
  },
]

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-600 mb-4">Get Your Free Solar Quotation</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Take the first step towards energy independence. Our solar experts will design a customized solution for
            your property with transparent pricing and comprehensive support.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-brand-600 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-neutral-600">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quote Form */}
        <QuoteForm />

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-brand-600 mb-4">What Happens Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold mb-3">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Site Survey</h3>
                  <p className="text-sm text-neutral-600">
                    Our technical team will visit your property for a detailed assessment and measurements.
                  </p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold mb-3">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Custom Design</h3>
                  <p className="text-sm text-neutral-600">
                    We'll create a tailored solar system design optimized for your energy needs and roof space.
                  </p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold mb-3">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Detailed Quotation</h3>
                  <p className="text-sm text-neutral-600">
                    Receive a comprehensive quotation including equipment, installation, subsidies, and financing
                    options.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
