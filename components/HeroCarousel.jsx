'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: 'Latest Smartphones',
      subtitle: 'Get the newest tech with exclusive deals',
      image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=1200&h=500&fit=crop',
      cta: 'Shop Now',
      color: 'from-cyan-500'
    },
    {
      id: 2,
      title: 'Premium Earbuds',
      subtitle: 'Experience crystal-clear sound quality',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=500&fit=crop',
      cta: 'Explore',
      color: 'from-blue-500'
    },
    {
      id: 3,
      title: 'Power Your Devices',
      subtitle: 'Fast charging power banks now in stock',
      image: 'https://images.unsplash.com/photo-1609042227505-5876f6aa4e90?w=1200&h=500&fit=crop',
      cta: 'Get Offer',
      color: 'from-purple-500'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative h-80 md:h-96 lg:h-[450px] overflow-hidden rounded-lg bg-secondary">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance">
              {slide.title}
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 max-w-md text-balance">
              {slide.subtitle}
            </p>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 md:px-8 py-3 rounded-lg font-bold transition-colors w-fit">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-foreground/20 hover:bg-foreground/30 text-foreground p-2 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-foreground/20 hover:bg-foreground/30 text-foreground p-2 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all ${
              index === currentSlide
                ? 'bg-accent w-8 h-2'
                : 'bg-foreground/40 hover:bg-foreground/60 w-2 h-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
