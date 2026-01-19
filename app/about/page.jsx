import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Users, Award, Globe, Heart } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Every product is thoroughly tested and verified for authenticity.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority in every transaction.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'We source products from the best brands worldwide.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Community',
      description: 'We believe in building lasting relationships with our customers.'
    }
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Welcome to GollachutGadgets
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto text-balance">
              Your trusted destination for premium electronics and gadgets since 2020
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                GollachutGadgets was founded with a simple mission: to make premium technology accessible to everyone. 
                What started as a small tech enthusiast's dream has grown into one of the region's leading electronics retailers.
              </p>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                We believe that everyone deserves access to quality gadgets at fair prices. Our commitment to excellence, 
                customer service, and authenticity has earned us the trust of thousands of customers across Bangladesh.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, we're proud to offer a curated selection of smartphones, smartwatches, earbuds, and accessories from 
                the world's most trusted brands.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl h-96 bg-card">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Our team"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow border border-border">
                  <div className="text-accent flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-accent mb-2">50K+</p>
              <p className="text-muted-foreground font-semibold">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">10,000+</p>
              <p className="text-muted-foreground font-semibold">Products Listed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">48</p>
              <p className="text-muted-foreground font-semibold">Hours Delivery</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">4.8★</p>
              <p className="text-muted-foreground font-semibold">Customer Rating</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-foreground text-background py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Explore?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Discover our amazing collection of gadgets and electronics
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors text-lg">
              Start Shopping
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
