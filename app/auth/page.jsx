'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Admin login attempt:', formData)
    // TODO: Implement admin authentication logic
  }

  return (

      <main className="min-h-screen bg-gradient-to-b from-background via-background to-background text-foreground flex items-center justify-center relative">
        {/* Theme Switcher in top-right corner */}
        <div className="absolute top-4 right-4">
          <ThemeSwitcher />
        </div>

        <section className="max-w-lg w-full mx-auto px-4">
          <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
            {/* Logo */}
            <Link href="/" className="flex items-center justify-center gap-2 mb-6 cursor-pointer">
              {mounted && theme === 'dark' ? (
                <Image
                  src="/logo/Logo.png"
                  alt="GollachutGadgets Logo"
                  width={200}
                  height={100}
                  className="h-10 w-auto object-contain"
                  priority
                />
              ) : (
                <Image
                  src="/logo/logoblack.png"
                  alt="GollachutGadgets Logo"
                  width={200}
                  height={100}
                  className="h-10 w-auto object-contain"
                  priority
                />
              )}
            </Link>

            <h1 className="text-2xl font-bold text-foreground mb-8 text-center">Admin Login</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-muted-foreground mb-2">
                  Admin Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="admin@gollachutgadgets.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-muted-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-10 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer text-muted-foreground">
                  <input type="checkbox" className="w-4 h-4 rounded border-border bg-card" />
                  <span>Remember me</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors text-lg"
              >
                Sign In
              </button>
            </form>

          </div>
        </section>
      </main>
  )
}
