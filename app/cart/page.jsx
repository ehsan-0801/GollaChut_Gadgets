'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, Plus, Minus } from 'lucide-react'
import { useState } from 'react'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 1199,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=500&fit=crop'
    },
    {
      id: 4,
      name: 'Sony WH-1000XM5',
      price: 349,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop'
    },
    {
      id: 5,
      name: 'Anker PowerCore 20000',
      price: 45,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1609042227505-5876f6aa4e90?w=500&h=500&fit=crop'
    }
  ])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const discount = Math.floor(subtotal * 0.05) // 5% discount
  const deliveryCharge = subtotal > 5000 ? 0 : 99
  const tax = Math.floor(subtotal * 0.05)
  const total = subtotal - discount + deliveryCharge + tax

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground">
        {/* Page Header */}
        <section className="bg-secondary py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground">Shopping Cart</h1>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-8">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent transition-all"
                    >
                      {/* Product Image */}
                      <div className="w-24 h-24 flex-shrink-0 bg-card rounded-lg overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-1">
                          <Link
                            href={`/product/${item.id}`}
                            className="hover:text-accent transition"
                          >
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-lg font-semibold text-foreground mb-3">
                          ৳{item.price.toLocaleString()}
                        </p>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-2 bg-card border border-border rounded-lg w-fit">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-secondary transition"
                          >
                            <Minus className="w-4 h-4 text-muted-foreground" />
                          </button>
                          <span className="px-4 py-2 font-semibold text-foreground min-w-12 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-secondary transition"
                          >
                            <Plus className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </div>
                      </div>

                      {/* Price & Remove */}
                      <div className="text-right flex flex-col justify-between">
                        <p className="text-lg font-bold text-foreground">
                          ৳{(item.price * item.quantity).toLocaleString()}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive/80 font-semibold flex items-center gap-2 justify-end hover:underline transition"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <Link
                  href="/shop"
                  className="inline-block mt-6 text-cyan-500 hover:text-cyan-600 font-semibold"
                >
                  ← Continue Shopping
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-lg p-6 border border-border sticky top-20">
                  <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>৳{subtotal.toLocaleString()}</span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-primary font-semibold">
                        <span>Discount (5%)</span>
                        <span>-৳{discount.toLocaleString()}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-muted-foreground">
                      <span>Tax (5%)</span>
                      <span>৳{tax.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-muted-foreground">
                      <span>Delivery Charge</span>
                      <span className={deliveryCharge === 0 ? 'text-primary font-semibold' : ''}>
                        {deliveryCharge === 0 ? '✓ FREE' : `৳${deliveryCharge}`}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between text-xl font-bold text-foreground mb-6">
                    <span>Total</span>
                    <span className="text-accent">৳{total.toLocaleString()}</span>
                  </div>

                  {deliveryCharge === 0 && (
                    <p className="text-xs text-primary font-semibold mb-6 p-3 bg-primary/10 rounded">
                      ✓ Free delivery on this order!
                    </p>
                  )}

                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors mb-3 text-lg">
                    Proceed to Checkout
                  </button>

                  <button className="w-full bg-foreground text-background py-3 rounded-lg font-bold hover:bg-foreground/90 transition-colors">
                    Continue Shopping
                  </button>

                  {/* Promo Code */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      className="w-full px-4 py-2 border border-border rounded-lg mb-2 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
                    />
                    <button className="w-full text-accent hover:text-accent/90 font-semibold py-2 border-2 border-accent rounded-lg hover:bg-accent/10 transition">
                      Apply Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-6">Your cart is empty</p>
              <Link
                href="/shop"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}
