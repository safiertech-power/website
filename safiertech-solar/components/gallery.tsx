"use client"

import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  {
    src: "/residential-solar-panels.png",
    alt: "Residential solar panel installation",
    caption: "Residential Installation - Ghaziabad",
  },
  {
    src: "/office-solar-panels.png",
    alt: "Commercial solar installation",
    caption: "Commercial Project - Modinagar",
  },
  {
    src: "/industrial-solar-farm.png",
    alt: "Industrial solar installation",
    caption: "Industrial Installation - Meerut",
  },
  {
    src: "/solar-panel-maintenance.png",
    alt: "Solar panel maintenance",
    caption: "Maintenance Service - B.B. Nagar",
  },
  {
    src: "/placeholder-pxf61.png",
    alt: "Solar inverter installation",
    caption: "Electrical Setup - Ghaziabad",
  },
  {
    src: "/solar-panel-farm-install.png",
    alt: "Farm solar installation",
    caption: "Agricultural Solar - Bulandshahr",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <div className="p-4 bg-white">
              <p className="text-sm font-medium text-brand-600">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Simple lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              width={800}
              height={600}
              className="object-contain max-h-[80vh]"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
