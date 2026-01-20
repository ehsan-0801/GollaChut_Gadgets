'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const navigationData = [
  {
    id: 1,
    label: 'Phones',
    href: '/shop?category=phones',
    submenu: [
      { label: 'iPhone', href: '/shop?brand=apple' },
      { label: 'Samsung', href: '/shop?brand=samsung' },
      { label: 'Xiaomi', href: '/shop?brand=xiaomi' },
      { label: 'OnePlus', href: '/shop?brand=oneplus' },
      { label: 'Google Pixel', href: '/shop?brand=google' },
      { label: 'All Phones', href: '/shop?category=phones' },
    ]
  },
  {
    id: 2,
    label: 'Smartwatches',
    href: '/shop?category=smartwatches',
    submenu: [
      { label: 'Apple Watch', href: '/shop?brand=apple' },
      { label: 'Galaxy Watch', href: '/shop?brand=samsung' },
      { label: 'Wear OS', href: '/shop?category=smartwatches&os=wear' },
      { label: 'Fitness Trackers', href: '/shop?category=fitness' },
      { label: 'All Smartwatches', href: '/shop?category=smartwatches' },
    ]
  },
  {
    id: 3,
    label: 'Earbuds',
    href: '/shop?category=earbuds',
    submenu: [
      { label: 'AirPods', href: '/shop?brand=apple' },
      { label: 'Galaxy Buds', href: '/shop?brand=samsung' },
      { label: 'Wireless', href: '/shop?category=earbuds&type=wireless' },
      { label: 'With Active Noise Cancellation', href: '/shop?category=earbuds&feature=anc' },
      { label: 'All Earbuds', href: '/shop?category=earbuds' },
    ]
  },
  {
    id: 4,
    label: 'Power & Accessories',
    href: '/shop?category=powerbanks',
    submenu: [
      { label: 'Power Banks', href: '/shop?category=powerbanks' },
      { label: 'Chargers', href: '/shop?category=chargers' },
      { label: 'Cables', href: '/shop?category=cables' },
      { label: 'Screen Protectors', href: '/shop?category=protectors' },
      { label: 'Cases & Covers', href: '/shop?category=cases' },
    ]
  },
  {
    id: 5,
    label: 'Fitness & Wearable',
    href: '/shop?category=fitness',
    submenu: [
      { label: 'Fitness Trackers', href: '/shop?category=fitness' },
      { label: 'Smart Rings', href: '/shop?category=rings' },
      { label: 'Health Monitors', href: '/shop?category=health' },
      { label: 'Sports Bands', href: '/shop?category=bands' },
    ]
  },
  {
    id: 6,
    label: 'Sound Equipment',
    href: '/shop?category=audio',
    submenu: [
      { label: 'Speakers', href: '/shop?category=speakers' },
      { label: 'Headphones', href: '/shop?category=headphones' },
      { label: 'Microphones', href: '/shop?category=microphones' },
      { label: 'Audio Cables', href: '/shop?category=audio-cables' },
    ]
  },
  {
    id: 7,
    label: 'Cover & Glass',
    href: '/shop?category=covers',
    submenu: [
      { label: 'Phone Cases', href: '/shop?category=cases' },
      { label: 'Screen Protectors', href: '/shop?category=protectors' },
      { label: 'Tempered Glass', href: '/shop?category=glass' },
      { label: 'Watch Cases', href: '/shop?category=watch-cases' },
    ]
  },
  {
    id: 8,
    label: 'Peripherals',
    href: '/shop?category=peripherals',
    submenu: [
      { label: 'Keyboards', href: '/shop?category=keyboards' },
      { label: 'Mouse', href: '/shop?category=mouse' },
      { label: 'USB Hubs', href: '/shop?category=hubs' },
      { label: 'Adapters', href: '/shop?category=adapters' },
    ]
  },
  {
    id: 9,
    label: 'Used Devices',
    href: '/shop?category=used',
    submenu: null
  },
]

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState(null)

  return (
    <nav className="hidden lg:block bg-background border-b border-border relative z-50">
      <div className="max-w-7xl mx-auto px-1">
        <ul className="flex items-center">
          {navigationData.map((item) => (
            <li
              key={item.id}
              className="relative group"
            >
              {/* Main Menu Item */}
              <Link
                href={item.href}
                className="flex items-center gap-1 px-2 py-3 text-foreground hover:text-accent transition-colors duration-200 font-medium whitespace-nowrap"
                onMouseEnter={() => setActiveMenu(item.id)}
              >
                {item.label}
                {item.submenu && (
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === item.id ? 'rotate-180' : ''}`} />
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.submenu && (
                <div 
                  className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]"
                  onMouseEnter={() => setActiveMenu(item.id)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <div className="bg-card border border-border rounded-md shadow-xl min-w-[220px] mt-0">
                    <ul className="py-2">
                      {item.submenu.map((subitem, index) => (
                        <li key={index}>
                          <Link
                            href={subitem.href}
                            className="block px-4 py-2.5 text-foreground hover:text-accent hover:bg-secondary transition-colors duration-150 text-sm whitespace-nowrap"
                          >
                            {subitem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
