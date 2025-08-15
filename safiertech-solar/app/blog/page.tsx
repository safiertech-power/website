import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { BookOpen, Clock, Instagram, FileText, Calculator, Wrench } from "lucide-react"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Blog - Launching Soon",
  description:
    "Safiertech Solar blog launching soon with guides on solar subsidies, net-metering, system sizing, and maintenance. Stay updated with solar industry insights.",
}

const upcomingTopics = [
  {
    icon: FileText,
    title: "MNRE Subsidy Guide",
    description: "Complete guide to government subsidies and application process",
  },
  {
    icon: Calculator,
    title: "Solar System Sizing",
    description: "How to calculate the right solar system size for your needs",
  },
  {
    icon: Wrench,
    title: "Maintenance Best Practices",
    description: "Tips for maintaining your solar system for optimal performance",
  },
  {
    icon: BookOpen,
    title: "Net-Metering Explained",
    description: "Understanding net-metering policies and benefits in Uttar Pradesh",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
              <BookOpen className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Solar Knowledge Hub</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              We're preparing comprehensive guides and insights to help you make informed decisions about solar energy.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-3">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Publishing Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-6">What We're Preparing</h2>
              <p className="text-xl text-neutral-600">
                Our blog will feature practical guides, industry insights, and expert advice on solar energy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingTopics.map((topic, index) => {
                const Icon = topic.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-brand-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-brand-600 mb-2">{topic.title}</h3>
                          <p className="text-sm text-neutral-600">{topic.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-brand-600 mb-4">Stay Updated</h2>
                <p className="text-neutral-600 mb-6">
                  Be the first to know when we publish new guides and insights about solar energy, subsidies, and
                  maintenance tips.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                  <Input placeholder="Enter your email address" type="email" className="flex-1" disabled />
                  <Button disabled className="sm:w-auto">
                    Notify Me
                  </Button>
                </div>

                <p className="text-sm text-neutral-500 mb-6">
                  Newsletter signup will be available when our blog launches.
                </p>

                <div className="border-t pt-6">
                  <p className="text-sm text-neutral-600 mb-4">Follow us on Instagram for updates and tips:</p>
                  <Button asChild variant="outline" className="bg-transparent">
                    <Link href={siteConfig.social.instagram.url} target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4 mr-2" />@{siteConfig.social.instagram.handle}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-6">Have Questions Now?</h2>
            <p className="text-xl text-neutral-600 mb-8">
              While we prepare our comprehensive guides, our solar experts are ready to answer your questions directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/quote">Get Expert Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent">
                <Link href={`tel:${siteConfig.contact.phone}`}>Call: {siteConfig.contact.phone}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
