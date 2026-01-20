'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const categoryImages = {
  'Phones': 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=300&fit=crop',
  'Smartwatches': 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=300&fit=crop',
  'Earbuds': 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop',
  'Power Banks': 'https://images.unsplash.com/photo-1609042227505-5876f6aa4e90?w=400&h=300&fit=crop',
  'Fitness Trackers': 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop',
  'Speakers': 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
  'Headphones': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
  'Tablets': 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
  'Laptops': 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
  'Cameras': 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop'
}

export default function CategorySlider({ categories }) {
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
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
          Browse by Category
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
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/shop?category=${category.slug}`}
            className="group relative shrink-0 w-[200px] h-[250px] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Background Image */}
            <Image
              src={categoryImages[category.name] || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
              <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-white/80">
                {category.count} products
              </p>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors rounded-lg" />
          </Link>
        ))}
      </div>
    </section>
  )
}
