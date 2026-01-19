'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronDown, Filter } from 'lucide-react'

export default function CategoryPage({ params }) {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState(null)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    Promise.all([
      fetch('/data/products.json').then(res => res.json()),
      fetch('/data/categories.json').then(res => res.json())
    ]).then(([productsData, categoriesData]) => {
      const foundCategory = categoriesData.categories.find(c => c.slug === params.slug)
      const categoryProducts = productsData.products.filter(p => p.category === params.slug)
      
      setCategory(foundCategory)
      setProducts(categoryProducts)
      setFilteredProducts(categoryProducts)
    })
  }, [params.slug])

  useEffect(() => {
    let filtered = products

    // Filter by price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        filtered.sort((a, b) => b.id - a.id)
        break
      case 'popular':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    setFilteredProducts(filtered)
  }, [products, priceRange, sortBy])

  if (!category) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground text-lg">Loading category...</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground">
        {/* Category Header */}
        <section className="relative h-80 overflow-hidden">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-6xl mb-4">{category.icon}</p>
              <h1 className="text-5xl font-bold mb-4">{category.name}</h1>
              <p className="text-xl text-primary-foreground/80">{category.count} products available</p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:col-span-1 ${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-card rounded-lg p-6 sticky top-20 border border-border">
                <div className="flex items-center justify-between mb-6 lg:hidden">
                  <h3 className="font-bold text-lg">Filters</h3>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    ✕
                  </button>
                </div>

                {/* Price Filter */}
                <div className="mb-8 pb-8 border-b border-border">
                  <h4 className="font-bold text-foreground mb-4">Price Range</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground block mb-2">Min: ৳{priceRange[0]}</label>
                      <input
                        type="range"
                        min="0"
                        max="2000"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground block mb-2">Max: ৳{priceRange[1]}</label>
                      <input
                        type="range"
                        min="0"
                        max="2000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Availability Filter */}
                <div>
                  <h4 className="font-bold text-foreground mb-4">Availability</h4>
                  <label className="flex items-center gap-2 cursor-pointer hover:text-accent">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span className="text-sm text-muted-foreground">In Stock</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <button
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                  className="lg:hidden flex items-center gap-2 text-muted-foreground hover:text-accent font-medium"
                >
                  <Filter className="w-5 h-5" />
                  Filters
                </button>

                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-sm font-medium text-muted-foreground">
                    Sort by:
                  </label>
                  <div className="relative">
                    <select
                      id="sort"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-card border border-border rounded-lg px-4 py-2 pr-8 text-foreground hover:border-accent focus:outline-none focus:border-accent"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="newest">Newest</option>
                      <option value="popular">Most Popular</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No products found. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
