import Link from "next/link"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl">Safiertech Solar</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Leading EPC & Installers across Uttar Pradesh. Transforming rooftops into sustainable energy assets with
              end-to-end solar solutions.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-brand-600 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-neutral-300 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="text-neutral-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link
                href={siteConfig.products.externalStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors text-sm"
              >
                Products
              </Link>
              <Link href="/blog" className="text-neutral-300 hover:text-white transition-colors text-sm">
                Blog
              </Link>
              <Link href="/quote" className="text-neutral-300 hover:text-white transition-colors text-sm">
                Get Quotation
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <Link
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>{siteConfig.contact.email}</span>
              </Link>
              <Link
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.contact.phone}</span>
              </Link>
              <Link
                href={`tel:${siteConfig.contact.tel}`}
                className="flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.contact.tel}</span>
              </Link>
              <Link
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 text-neutral-300 hover:text-white transition-colors text-sm"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.city},{" "}
                  {siteConfig.contact.address.pincode}, {siteConfig.contact.address.state}
                </span>
              </Link>
            </div>
          </div>

          {/* Branch Offices */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Locations</h3>
            <div className="space-y-3">
              {siteConfig.branches.map((branch, index) => (
                <div key={index} className="text-sm">
                  <div className="font-medium text-white">{branch.name}</div>
                  <div className="text-neutral-300">{branch.city}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">© {currentYear} SAFIERTECH SOLAR LTD. All rights reserved.</p>
            <p className="text-neutral-400 text-sm">Powering Uttar Pradesh with Clean Energy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
