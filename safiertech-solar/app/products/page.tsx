import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink, Package, Clock, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Products - Launching Soon",
  description:
    "Safiertech Solar products catalog launching soon. Browse our comprehensive range of solar panels, inverters, and accessories. Visit our store for current offerings.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
              <Package className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Products Catalog</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Our comprehensive product catalog is launching soon with detailed specifications, pricing, and
              availability.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-3">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Launching Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Current Store Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-6">Visit Our Current Store</h2>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              While we prepare our new product catalog, you can browse our current offerings and make purchases through
              our existing store.
            </p>

            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-lg mb-6">
                  <ExternalLink className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-600 mb-4">Safiertech Store</h3>
                <p className="text-neutral-600 mb-6">
                  Browse our complete range of solar panels, inverters, mounting structures, and accessories with
                  detailed specifications and competitive pricing.
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href={siteConfig.products.externalStoreUrl} target="_blank" rel="noopener noreferrer">
                    Visit Store
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-6">What's Coming</h2>
              <p className="text-xl text-neutral-600">
                Our new product catalog will feature enhanced browsing and detailed product information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Package className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-brand-600 mb-2">Detailed Specifications</h3>
                  <p className="text-sm text-neutral-600">
                    Complete technical specifications, performance data, and compatibility information for all products.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-brand-600 mb-2">Easy Comparison</h3>
                  <p className="text-sm text-neutral-600">
                    Side-by-side product comparisons to help you choose the right components for your solar system.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-brand-600 mb-2">Real-time Availability</h3>
                  <p className="text-sm text-neutral-600">
                    Live inventory status and delivery timelines for all products across our service areas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-600 mb-6">Need Help Choosing Products?</h2>
            <p className="text-xl text-neutral-600 mb-8">
              Our solar experts can help you select the right components for your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/quote">Get Product Consultation</Link>
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
