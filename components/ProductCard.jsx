'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const addToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      quantity: 1,
    }

    const savedCart = localStorage.getItem('cart')
    const cart = savedCart ? JSON.parse(savedCart) : []

    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push(cartItem)
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('cart-updated'))
    window.dispatchEvent(new CustomEvent('cart-event', { detail: { openCart: true } }))
  }

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-secondary h-60">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-lg font-semibold text-sm">
            -{product.discount}%
          </div>
        )}

        {/* Stock Badge */}
        {product.stock <= 10 && (
          <div className="absolute top-3 left-3 bg-accent/80 text-accent-foreground px-2 py-1 rounded text-xs font-semibold">
            Limited Stock
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full bg-card hover:bg-primary hover:text-primary-foreground">
            <Eye className="h-5 w-5" />
          </Button>
          <Button variant="default" asChild>
            <Link href={`/product/${product.id}`}>
              Quick View
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`rounded-full transition-all ${
              isWishlisted
                ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
                : 'bg-card text-foreground hover:bg-destructive hover:text-destructive-foreground'
            }`}
          >
            <Heart className="h-5 w-5" fill="currentColor" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-accent text-xs font-semibold uppercase mb-1">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition">
          <Link href={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-accent">
            ৳{product.price.toLocaleString()}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            ৳{product.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Add to Cart Button */}
        <div className="flex gap-2">
          <Button
            onClick={addToCart}
            variant="outline"
            className="flex-1"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
          <Button
            asChild
            variant="default"
            className="flex-1"
          >
            <Link href={`/checkout?product=${product.id}`}>
              Buy Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
