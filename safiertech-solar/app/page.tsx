import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { SolarScene } from "@/components/solar-scene"
import { WhyCards } from "@/components/why-cards"
import { ProcessTimeline } from "@/components/process-timeline"
import { Gallery } from "@/components/gallery"
import { Home, Building, Factory, Tractor, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Powering Uttar Pradesh with Reliable Solar EPC. Turn rooftops into assets with end-to-end design, installation, subsidy & financing support.",
}

const solutions = [
  {
    icon: Home,
    title: "Residential",
    description: "1-10 kW systems",
    savings: "₹2,000-₹8,000/month savings",
    color: "text-green-600",
  },
  {
    icon: Building,
    title: "Commercial",
    description: "10-100 kW systems",
    savings: "₹15,000-₹80,000/month savings",
    color: "text-blue-600",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "100 kW+ systems",
    savings: "₹1,00,000+/month savings",
    color: "text-purple-600",
  },
  {
    icon: Tractor,
    title: "Farms",
    description: "5-50 kW systems",
    savings: "₹5,000-₹40,000/month savings",
    color: "text-orange-600",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-100 to-white py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-600 mb-6 leading-tight">
                Powering Uttar Pradesh with Reliable Solar EPC
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed">
                Turn rooftops into assets—end-to-end design, installation, subsidy & financing support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  <Link href="/quote">Get Quotation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white bg-transparent"
                >
                  <Link href="/quote">Book Free Site Survey</Link>
                </Button>
              </div>
            </div>
            <div className="lg:pl-8">
              <SolarScene />
            </div>
          </div>
        </div>
      </section>

      {/* Why Safiertech Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-4">Why Choose Safiertech Solar?</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We make solar simple with comprehensive support from financing to maintenance.
            </p>
          </div>
          <WhyCards />
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-500">
              *Subsidy amounts are indicative and subject to government policies and eligibility criteria.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-4">Solar Solutions for Every Need</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Customized solar systems designed for your specific requirements and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300 ${solution.color}`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2 text-brand-600">{solution.title}</h3>
                    <p className="text-neutral-600 mb-2">{solution.description}</p>
                    <p className="text-sm font-medium text-green-600 mb-4">{solution.savings}</p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="group-hover:bg-brand-600 group-hover:text-white transition-colors bg-transparent"
                    >
                      <Link href="/quote">
                        Get Quote <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-4">Our Proven Process</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              From initial survey to ongoing maintenance, we handle every step of your solar journey.
            </p>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-4">Our Recent Projects</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              See the quality installations we've completed across Uttar Pradesh.
            </p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-4">Local Expertise You Can Trust</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              With deep roots across Ghaziabad, Modinagar, B.B. Nagar (Bulandshahr), and Meerut (Modipuram), we
              understand the unique needs of Uttar Pradesh's diverse communities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">500+</div>
                <div className="text-sm text-neutral-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">5MW+</div>
                <div className="text-sm text-neutral-600">Capacity Installed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">4</div>
                <div className="text-sm text-neutral-600">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">5 Years</div>
                <div className="text-sm text-neutral-600">Maintenance Promise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-gradient-to-r from-brand-600 to-brand-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Cut Your Electricity Bills?</h2>
          <p className="text-xl mb-8 opacity-90">Get a free site survey and personalized quotation today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/quote">Get Free Quotation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-brand-600 bg-transparent"
            >
              <Link href={`tel:${8745078808}`}>Call Now: 8745078808</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
