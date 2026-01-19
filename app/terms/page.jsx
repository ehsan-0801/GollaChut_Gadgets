import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground">
        <section className="bg-secondary py-8">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground">Terms and Conditions</h1>
            <p className="text-muted-foreground mt-2">Last updated: January 2024</p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 py-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on GollachutGadgets for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Product Information and Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content of this site is accurate, complete, reliable, current, or error-free.
                Products are subject to availability. We reserve the right to limit quantities and to discontinue any product at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Pricing and Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                All prices are subject to change without notice. We reserve the right to limit or refuse any order. 
                Products are offered while supplies last and subject to any applicable quantity limits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Ordering and Payment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you place an order, you are offering to purchase the products shown. We will confirm receipt of your order by email. 
                However, we reserve the right to refuse any order or cancel any order.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Payment must be received before the order is shipped unless other arrangements have been made.
                We accept various payment methods as shown on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Shipping and Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will ship orders to the address provided at the time of purchase. Delivery times are estimates and not guaranteed.
                Risk of loss passes to you upon delivery to the carrier. Damage during shipping should be reported to the carrier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Returns and Refunds</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We offer a 30-day return policy on most products. Items must be in original condition with all packaging and documentation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Refunds will be processed within 7-10 business days after we receive and inspect the returned item.
                Shipping costs are non-refundable unless the return is due to our error.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall GollachutGadgets, its suppliers, or other parties mentioned on this site be liable for any damages whatsoever 
                (including, without limitation, direct, indirect, incidental, consequential, special, or punitive damages) arising out of your access to or use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                GollachutGadgets may revise these terms of service for the website at any time without notice.
                By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions regarding these Terms and Conditions, please contact us:
              </p>
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Email:</span> support@gollachutgadgets.com</p>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Phone:</span> +880-1234-567890</p>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Address:</span> Dhaka, Bangladesh</p>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
