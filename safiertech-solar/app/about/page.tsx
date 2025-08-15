import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Phone, Mail, Shield, Award, Users, Wrench } from "lucide-react"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Safiertech Solar - leading EPC company in Uttar Pradesh. Our mission, expertise, and commitment to quality solar installations with 5-year maintenance promise.",
}

const services = [
  {
    icon: Shield,
    title: "Site Audit & Design",
    description: "Comprehensive site assessment and custom solar system design",
  },
  {
    icon: Award,
    title: "Procurement & Installation",
    description: "BIS-certified components and professional installation services",
  },
  {
    icon: Users,
    title: "Commissioning & Testing",
    description: "Complete system commissioning and performance testing",
  },
  {
    icon: Wrench,
    title: "Subsidy & Financing Support",
    description: "MNRE subsidy processing and financing assistance",
  },
]

const qualityPoints = [
  "BIS-certified solar components and equipment",
  "MNRE-aligned installation practices",
  "Net-metering support and documentation",
  "Safety standards compliance",
  "25-year anti-rust structural warranty",
  "Cyclone-resistant engineering up to 160 km/h",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Safiertech Solar</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Leading EPC company transforming Uttar Pradesh's energy landscape with reliable, sustainable solar
              solutions since our inception.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-6">Our Mission</h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                To democratize clean energy access across Uttar Pradesh by providing end-to-end solar EPC services that
                are reliable, affordable, and backed by comprehensive support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-600 mb-4">What We Do</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  As a comprehensive EPC (Engineering, Procurement, and Construction) company, we handle every aspect of
                  your solar journey - from initial site audit and system design to procurement, installation,
                  commissioning, and ongoing maintenance.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  We also provide complete support for government subsidies, financing options, and net-metering
                  connections, ensuring a hassle-free transition to solar energy.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <Card key={index} className="text-center">
                      <CardContent className="p-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-brand-100 rounded-lg mb-3">
                          <Icon className="w-5 h-5 text-brand-600" />
                        </div>
                        <h4 className="font-semibold text-sm mb-2">{service.title}</h4>
                        <p className="text-xs text-neutral-600">{service.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-6">Our Coverage</h2>
              <p className="text-xl text-neutral-600">
                Serving communities across Uttar Pradesh with local expertise and dedicated support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.branches.map((branch, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 rounded-lg mb-4">
                      <MapPin className="w-6 h-6 text-brand-600" />
                    </div>
                    <h3 className="font-semibold text-brand-600 mb-2">{branch.name}</h3>
                    <p className="text-sm text-neutral-600">{branch.city}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Standards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-6">Quality & Standards</h2>
              <p className="text-xl text-neutral-600">
                We maintain the highest standards in equipment, installation, and service delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-brand-600 mb-4">Our Commitments</h3>
                <ul className="space-y-3">
                  {qualityPoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-neutral-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-600 mb-4">Why Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-brand-600" />
                    <span className="text-neutral-600">5-year comprehensive maintenance promise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-brand-600" />
                    <span className="text-neutral-600">Local expertise with regional understanding</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-brand-600" />
                    <span className="text-neutral-600">Dedicated customer support team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Wrench className="w-6 h-6 text-brand-600" />
                    <span className="text-neutral-600">End-to-end project management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-6">Get in Touch</h2>
              <p className="text-xl text-neutral-600">Ready to start your solar journey? Contact our experts today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-brand-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-neutral-600 mb-3">{siteConfig.contact.phone}</p>
                  <p className="text-sm text-neutral-600">{siteConfig.contact.tel}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 text-brand-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-neutral-600">{siteConfig.contact.email}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-brand-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {siteConfig.contact.address.street}, {siteConfig.contact.address.city},{" "}
                    {siteConfig.contact.address.pincode}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/quote">Get Your Free Quotation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
