import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-background via-background to-background text-foreground">
        <section className="max-w-2xl mx-auto px-4 py-24 text-center">
          <div className="mb-8">
            <p className="text-9xl font-bold text-accent mb-4">404</p>
            <h1 className="text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Sorry, the page you're looking for doesn't exist. It might have been removed or the URL might be incorrect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/shop"
              className="inline-block bg-foreground text-background px-8 py-3 rounded-lg font-bold hover:bg-foreground/90 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>

          {/* Suggestions */}
          <div className="mt-16 pt-16 border-t border-border">
            <p className="text-muted-foreground font-semibold mb-6">Maybe you're looking for:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/shop" className="p-4 bg-card rounded-lg border border-border hover:bg-secondary transition">
                <p className="font-semibold text-foreground">📱 Shop Products</p>
              </Link>
              <Link href="/about" className="p-4 bg-card rounded-lg border border-border hover:bg-secondary transition">
                <p className="font-semibold text-foreground">ℹ️ About Us</p>
              </Link>
              <Link href="/contact" className="p-4 bg-card rounded-lg border border-border hover:bg-secondary transition">
                <p className="font-semibold text-foreground">💬 Contact Us</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
