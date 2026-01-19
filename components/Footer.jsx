'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <span className="text-accent-foreground font-bold">G</span>
              </div>
              <h3 className="font-bold text-lg">GollachutGadgets</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted source for premium electronics and gadgets. Shop the latest technology at competitive prices.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-bold mb-4">Important Links</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link href="/about" className="hover:text-accent transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-accent transition">Refund Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-bold mb-4">Customer Support</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="tel:+8801234567890" className="hover:text-accent transition">📞 +880-1234-567890</a></li>
              <li><a href="mailto:support@gollachutgadgets.com" className="hover:text-accent transition">📧 support@gollachutgadgets.com</a></li>
              <li><a href="#" className="hover:text-accent transition">💬 Live Chat Support</a></li>
              <li><a href="#" className="hover:text-accent transition">📍 Store Location</a></li>
            </ul>
          </div>

          {/* Payment & Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <h4 className="font-bold mb-2">Payment Methods</h4>
            <div className="flex gap-2 text-xs">
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded">💳 Visa</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded">💳 Mastercard</span>
              <span className="bg-muted text-muted-foreground px-2 py-1 rounded">📱 bKash</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 GollachutGadgets. All rights reserved. | Design & Development</p>
        </div>
      </div>
    </footer>
  )
}
