'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Heart, Share2, ShoppingCart, Check, Star, Minus, Plus } from 'lucide-react'

export default function ProductDetailPage({ params }) {
  const [product, setProduct] = useState(null)
  const [allProducts, setAllProducts] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => {
        setAllProducts(data.products)
        const found = data.products.find(p => p.id === parseInt(params.id))
        setProduct(found)
      })
  }, [params.id])

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground text-lg">Loading product...</p>
        </div>
        <Footer />
      </>
    )
  }

  const images = [product.image, product.image, product.image] // In real app, would have multiple images
  const relatedProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="hover:text-accent">Home</a>
          <span>/</span>
          <a href="/shop" className="hover:text-accent">Shop</a>
          <span>/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        {/* Product Details */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div>
              <div className="bg-secondary rounded-lg overflow-hidden mb-4 h-96 md:h-[500px] flex items-center justify-center">
                <Image
                  src={images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>

              {/* Image Thumbnails */}
              <div className="flex gap-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? 'border-accent shadow-lg'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`View ${idx + 1}`}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Category */}
              <p className="text-accent text-sm font-semibold uppercase mb-2">
                {product.category}
              </p>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-6 pb-6 border-b border-border">
                <span className="text-3xl font-bold text-foreground">
                  ৳{product.price.toLocaleString()}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  ৳{product.originalPrice.toLocaleString()}
                </span>
                <span className="text-lg font-semibold text-primary">
                  Save ৳{(product.originalPrice - product.price).toLocaleString()}
                </span>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                {product.stock > 10 ? (
                  <>
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground font-medium">In Stock ({product.stock} available)</span>
                  </>
                ) : (
                  <span className="text-accent font-medium">Limited Stock ({product.stock} remaining)</span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 text-lg">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-bold text-foreground mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-medium text-foreground">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg bg-card">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-secondary transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-2 font-semibold text-foreground">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-secondary transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 text-lg">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`px-6 py-3 rounded-lg font-bold transition-all border-2 flex items-center justify-center gap-2 ${
                    isWishlisted
                      ? 'bg-destructive/10 border-destructive text-destructive hover:bg-destructive/20'
                      : 'border-border text-muted-foreground hover:border-destructive hover:text-destructive'
                  }`}
                >
                  <Heart className="w-5 h-5" fill="currentColor" />
                  Wishlist
                </button>
                <button className="px-6 py-3 rounded-lg font-bold border-2 border-border text-muted-foreground hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>

              {/* Additional Info */}
              <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">✓ Free Delivery</span> on orders over ৳5000<br />
                  <span className="font-semibold">✓ 30-day Money Back</span> Guarantee<br />
                  <span className="font-semibold">✓ 1-year Warranty</span> on all electronics
                </p>
              </div>
            </div>
          </div>

          {/* Specifications & Details Tabs */}
          <div className="border-t border-border py-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Specifications</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key} className="border-b border-border">
                        <td className="py-4 px-4 font-semibold text-foreground w-48 bg-secondary">
                          {key}
                        </td>
                        <td className="py-4 px-4 text-muted-foreground">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Description Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description} is a premium device built with the latest technology. 
                With {product.features.length} key features and superior build quality, 
                this product is perfect for users who demand excellence. The device offers 
                outstanding performance and reliability for everyday use.
              </p>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="border-t border-border py-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}
