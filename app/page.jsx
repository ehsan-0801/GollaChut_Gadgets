import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import HeroSection from '@/components/HeroSection'
import CategorySlider from '@/components/CategorySlider'
import ProductCard from '@/components/ProductCard'
import BrandShowcase from '@/components/BrandShowcase'
import { Clock, Zap, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import productsData from '@/public/data/products.json'
import categoriesData from '@/public/data/categories.json'
import brandsData from '@/public/data/brands.json'

export default function Home() {
  const products = productsData?.products ?? []
  const categories = categoriesData?.categories ?? []
  const brands = brandsData?.brands ?? []

  const featuredProducts = products.slice(0, 6)
  const flashSaleProducts = products.slice(6, 10)

  return (
    <>
      <Header />
      <CartDrawer />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <HeroSection />
        </section>

        {/* Featured Offers Banner */}
        <section className="bg-secondary py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-accent rounded-lg p-6 text-accent-foreground flex items-center gap-4 hover:shadow-lg transition-shadow">
                <Zap className="w-12 h-12 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Fast Delivery</h3>
                  <p className="text-sm opacity-80">Same day delivery available</p>
                </div>
              </div>
              
              <div className="bg-primary rounded-lg p-6 text-primary-foreground flex items-center gap-4 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-12 h-12 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Best Prices</h3>
                  <p className="text-sm opacity-80">Price match guarantee</p>
                </div>
              </div>
              
              <div className="bg-accent rounded-lg p-6 text-accent-foreground flex items-center gap-4 hover:shadow-lg transition-shadow">
                <Clock className="w-12 h-12 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Easy Returns</h3>
                  <p className="text-sm opacity-80">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <CategorySlider categories={categories} />
        </section>

        {/* Brands */}
        <section className="max-w-7xl mx-auto px-4 py-8 border-t border-border">
          <BrandShowcase brands={brands} />
        </section>

        {/* Featured Products */}
        <section className="max-w-7xl mx-auto px-4 py-12 border-t border-border">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground text-balance">
              Featured Products
            </h2>
            <Link
              href="/shop"
              className="text-accent hover:text-primary font-semibold flex items-center gap-2"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Flash Sale Section */}
        <section className="max-w-7xl mx-auto px-4 py-12 border-t border-border">
          <div className="bg-primary rounded-lg p-6 text-primary-foreground mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8" />
                <h2 className="text-3xl font-bold">⚡ Flash Sale</h2>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-80">Ends in</p>
                <p className="text-2xl font-bold">02:45:30</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashSaleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-accent rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center text-accent-foreground">
                <p className="opacity-80 font-semibold mb-2">Limited Time Offer</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                  Get 30% Off on Your First Purchase
                </h2>
                <p className="text-lg opacity-80 mb-6">
                  Use code GOLLACHUT30 at checkout
                </p>
                <button className="bg-accent-foreground text-accent px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity w-fit">
                  Shop Now
                </button>
              </div>
              <div className="relative h-64 md:h-auto hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop"
                  alt="Promotional offer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-secondary text-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6 text-balance">
              Get exclusive deals, new arrivals, and special offers directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-card text-foreground border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
