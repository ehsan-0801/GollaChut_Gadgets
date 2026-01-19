'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CategoryGrid({ categories }) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-foreground mb-4 text-balance">
        Browse by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="group relative overflow-hidden rounded-lg h-40 md:h-48 flex flex-col items-center justify-center bg-secondary hover:shadow-xl transition-all duration-300"
          >
            {/* Background Image */}
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300 brightness-50 group-hover:brightness-75"
            />

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="font-bold text-foreground text-sm md:text-base group-hover:text-accent transition-colors">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-xs mt-1">
                {category.count} items
              </p>
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 justify-center pb-6">
              <span className="flex items-center gap-2 text-accent font-semibold text-sm">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
