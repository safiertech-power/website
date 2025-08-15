"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Instagram } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: siteConfig.products.externalStoreUrl, label: "Products", external: true },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl text-brand-600">Safiertech Solar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-neutral-600 hover:text-brand-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/quote">Get Quotation</Link>
            </Button>
          </nav>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-600 hover:text-brand-600 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href={`tel:${siteConfig.contact.phone}`}
              className="p-2 text-neutral-600 hover:text-brand-600 transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <span className="font-bold text-xl text-brand-600">Safiertech Solar</span>
                </Link>

                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-lg font-medium text-neutral-600 hover:text-brand-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <Button asChild className="bg-primary hover:bg-primary/90 w-full">
                  <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Quotation
                  </Link>
                </Button>

                <div className="flex items-center justify-center space-x-6 pt-6 border-t">
                  <Link
                    href={siteConfig.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-neutral-600 hover:text-brand-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </Link>
                  <Link
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center space-x-2 text-neutral-600 hover:text-brand-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call</span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
