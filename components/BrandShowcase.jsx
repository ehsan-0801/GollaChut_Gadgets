'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function BrandShowcase({ brands }) {
  const [selectedBrand, setSelectedBrand] = useState(null)

  return (
    <section className="py-12 border-t border-border">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-balance">
        Shop by Popular Brands
      </h2>

      <div className="bg-secondary rounded-lg p-8">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setSelectedBrand(brand.id)}
              className={`flex items-center justify-center p-4 rounded-lg transition-all duration-300 ${
                selectedBrand === brand.id
                  ? 'bg-card shadow-lg border-2 border-accent'
                  : 'bg-card hover:shadow-md border-2 border-transparent hover:border-muted'
              }`}
            >
              <div className="relative w-24 h-16 md:w-28 md:h-20">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Brand Selected Info */}
      {selectedBrand && (
        <div className="mt-6 p-4 bg-accent/10 border-l-4 border-accent rounded">
          <p className="text-foreground font-semibold">
            {brands.find(b => b.id === selectedBrand)?.name} Products
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Click to view all products from this brand
          </p>
        </div>
      )}
    </section>
  )
}
