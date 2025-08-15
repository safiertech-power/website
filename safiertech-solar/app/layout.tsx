import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Safiertech Solar - Solar EPC & Installers in Uttar Pradesh",
    template: "%s | Safiertech Solar",
  },
  description:
    "Leading solar EPC company in Uttar Pradesh. End-to-end solar solutions with subsidy support, financing, and 5-year maintenance. Serving Ghaziabad, Modinagar, Meerut.",
  keywords: [
    "solar EPC Uttar Pradesh",
    "Ghaziabad solar installers",
    "net metering UP",
    "MNRE subsidy support",
    "solar panels Modinagar",
    "solar installation Meerut",
  ],
  authors: [{ name: "Safiertech Solar" }],
  creator: "Safiertech Solar",
  publisher: "Safiertech Solar",
  metadataBase: new URL("https://safiertech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://safiertech.com",
    siteName: "Safiertech Solar",
    title: "Safiertech Solar - Solar EPC & Installers in Uttar Pradesh",
    description:
      "Leading solar EPC company in Uttar Pradesh. End-to-end solar solutions with subsidy support, financing, and 5-year maintenance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Safiertech Solar - Solar Installation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safiertech Solar - Solar EPC & Installers in Uttar Pradesh",
    description:
      "Leading solar EPC company in Uttar Pradesh. End-to-end solar solutions with subsidy support, financing, and 5-year maintenance.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Safiertech Solar",
  alternateName: "SAFIERTECH SOLAR LTD",
  url: "https://safiertech.com",
  logo: "https://safiertech.com/logo.png",
  description: "Leading solar EPC company providing end-to-end solar solutions across Uttar Pradesh",
  address: {
    "@type": "PostalAddress",
    streetAddress: "518, Safiertech, 5 No. Bhatta Road, Rajnagar Extension",
    addressLocality: "Ghaziabad",
    addressRegion: "Uttar Pradesh",
    postalCode: "201017",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-8745078808",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["Hindi", "English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-120-631-3324",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["Hindi", "English"],
    },
  ],
  email: "info@safiertech.com",
  sameAs: ["https://www.instagram.com/safiertech_solar"],
  areaServed: [
    {
      "@type": "State",
      name: "Uttar Pradesh",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solar Installation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Solar Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Solar Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Industrial Solar Installation",
        },
      },
    ],
  },
  branchOf: [
    {
      "@type": "LocalBusiness",
      name: "Safiertech Solar Modinagar",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Modinagar",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "Safiertech Solar B.B. Nagar",
      address: {
        "@type": "PostalAddress",
        addressLocality: "B.B. Nagar (Bulandshahr)",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "Safiertech Solar Meerut",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Meerut (Modipuram)",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
