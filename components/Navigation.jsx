'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight } from 'lucide-react'

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
  const [activeSubmenu, setActiveSubmenu] = useState(null)

  const handleMouseEnter = (id) => {
    setActiveMenu(id)
    setActiveSubmenu(null)
  }

  const handleMouseLeave = () => {
    setActiveMenu(null)
    setActiveSubmenu(null)
  }

  return (
    <nav className="hidden lg:block bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto overflow-y-visible no-scrollbar">
        <ul className="flex items-center w-max min-w-full">
          {navigationData.map((item) => (
            <li
              key={item.id}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main Menu Item */}
              <Link
                href={item.href}
                className="flex items-center gap-1 px-4 py-3 text-foreground hover:text-accent transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {item.label}
                {item.submenu && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.submenu && (
                <div className="absolute left-0 top-full pt-0 invisible group-hover:visible z-50 transition-all duration-200">
                  <div className="bg-secondary border border-border rounded-md shadow-lg min-w-max">
                    <ul className="py-2">
                      {item.submenu.map((subitem, index) => (
                        <li key={index}>
                          <Link
                            href={subitem.href}
                            className="flex items-center justify-between px-4 py-2 text-foreground hover:text-accent hover:bg-card/50 transition-colors duration-150 text-sm"
                          >
                            <span>{subitem.label}</span>
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
