'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const brandLogos = {
  'Apple': 'https://images.unsplash.com/photo-1621768216002-5ac171876625?w=200&h=100&fit=crop',
  'Samsung': 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=200&h=100&fit=crop',
  'Xiaomi': 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200&h=100&fit=crop',
  'OnePlus': 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=200&h=100&fit=crop',
  'Google': 'https://images.unsplash.com/photo-1573883430060-e2c5e1f9f0e1?w=200&h=100&fit=crop',
  'Sony': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=100&fit=crop',
  'Huawei': 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200&h=100&fit=crop',
  'Oppo': 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=200&h=100&fit=crop'
}

export default function BrandShowcase({ brands }) {
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Shop by Popular Brands
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors border border-border"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors border border-border"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={`/shop?brand=${brand.slug}`}
            className="group shrink-0 w-[180px] h-[120px] bg-card border-2 border-border hover:border-accent rounded-lg p-4 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative w-full h-full">
              <Image
                src={brandLogos[brand.name] || brand.logo || 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200&h=100&fit=crop'}
                alt={brand.name}
                fill
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
