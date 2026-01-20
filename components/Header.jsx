'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { ShoppingCart, Heart, Search, Menu, X } from 'lucide-react'
import Navigation from './Navigation'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      const cart = JSON.parse(savedCart)
      setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0))
    }

    const handleCartUpdate = () => {
      const updated = localStorage.getItem('cart')
      if (updated) {
        const cart = JSON.parse(updated)
        setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0))
      }
    }

    window.addEventListener('cart-updated', handleCartUpdate)
    return () => window.removeEventListener('cart-updated', handleCartUpdate)
  }, [])

  const openCart = () => {
    window.dispatchEvent(new CustomEvent('cart-event', { detail: { openCart: true } }))
  }

  return (
    <header className="relative z-40 bg-card border-b border-border">
      {/* Top Utility Bar */}
      <div className="bg-secondary text-foreground py-2 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span>📞 +880-1234-567890</span>
            <span className="hidden md:inline">📍 Dhaka, Bangladesh</span>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground">Welcome to GollachutGadgets</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 min-w-0">
            {mounted && theme === 'dark' ? (
              <Image
                src="/logo/Logo.png"
                alt="GollachutGadgets Logo"
                width={100}
                height={100}
                className="h-8 md:h-10 w-auto max-w-32 md:max-w-44 object-contain"
                priority
              />
            ) : (
            <Image
                src="/logo/logoblack.png"
              alt="GollachutGadgets Logo"
                width={100}
                height={100}
                className="h-8 md:h-10 w-auto max-w-32 md:max-w-44 object-contain"
              priority
            />
            )}
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="w-full relative">
              <Search className="absolute left-3 top-3 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search for gadgets..."
                className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <ThemeSwitcher />
            
            <button className="hidden md:flex items-center gap-2 text-foreground hover:text-accent transition">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Wishlist</span>
            </button>
            
            <button onClick={openCart} className="flex items-center gap-2 text-foreground hover:text-accent transition relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
            />
          </div>
        </div>
      </div>

      {/* Navigation Bar with Dropdowns */}
      <Navigation />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-3">
            <Link href="/shop" className="block text-foreground hover:text-accent font-medium transition py-2">
              Shop All
            </Link>
            <Link href="/shop?category=phones" className="block text-foreground hover:text-accent font-medium transition py-2">
              Phones
            </Link>
            <Link href="/shop?category=smartwatches" className="block text-foreground hover:text-accent font-medium transition py-2">
              Smartwatches
            </Link>
            <Link href="/shop?category=earbuds" className="block text-foreground hover:text-accent font-medium transition py-2">
              Earbuds
            </Link>
            <Link href="/shop?category=powerbanks" className="block text-foreground hover:text-accent font-medium transition py-2">
              Power & Accessories
            </Link>
            <Link href="/shop?category=fitness" className="block text-foreground hover:text-accent font-medium transition py-2">
              Fitness & Wearable
            </Link>
            <Link href="/shop?category=audio" className="block text-foreground hover:text-accent font-medium transition py-2">
              Sound Equipment
            </Link>
            <Link href="/shop?category=covers" className="block text-foreground hover:text-accent font-medium transition py-2">
              Cover & Glass
            </Link>
            <Link href="/shop?category=peripherals" className="block text-foreground hover:text-accent font-medium transition py-2">
              Peripherals
            </Link>
            <Link href="/shop?category=used" className="block text-foreground hover:text-accent font-medium transition py-2">
              Used Devices
            </Link>
            <hr className="border-border my-2" />
            <Link href="/wishlist" className="block text-foreground hover:text-accent font-medium transition py-2">
              Wishlist
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
