import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, Clock, PackageOpen } from 'lucide-react'

export default function RefundPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground">
        <section className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground py-12">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Return and Refund Policy</h1>
            <p className="text-primary-foreground/80 mt-2">Hassle-free returns within 30 days</p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 py-12">
          <div className="space-y-8">
            {/* Quick Overview */}
            <section className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Quick Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex gap-4">
                  <Clock className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">30 Days to Return</p>
                    <p className="text-sm text-muted-foreground">From the date of delivery</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <PackageOpen className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Unused & Sealed</p>
                    <p className="text-sm text-muted-foreground">Must be in original condition</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground">Full Refund</p>
                    <p className="text-sm text-muted-foreground">Within 7-10 business days</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Return Process */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">How to Return a Product</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Contact Customer Support</h3>
                    <p className="text-muted-foreground">
                      Email us at support@gollachutgadgets.com or call +880-1234-567890 within 30 days of purchase with your order number.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Get Return Authorization</h3>
                    <p className="text-muted-foreground">
                      We'll provide you with a return shipping label and return authorization number (RMA) via email.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Ship Back the Item</h3>
                    <p className="text-muted-foreground">
                      Pack the product securely with all original packaging and documentation. Use the provided shipping label.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Receive Refund</h3>
                    <p className="text-muted-foreground">
                      Once we receive and inspect your item, we'll process your refund within 7-10 business days.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Return Conditions */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Eligibility for Returns</h2>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-primary mb-3">✓ We Accept Returns If:</h3>
                <ul className="space-y-2 text-foreground">
                  <li>✓ Product is unopened and in original packaging</li>
                  <li>✓ All accessories and documentation are included</li>
                  <li>✓ Return is initiated within 30 days of delivery</li>
                  <li>✓ Product is not damaged due to misuse</li>
                  <li>✓ Product shows no signs of wear or damage</li>
                </ul>
              </div>

              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                <h3 className="font-bold text-destructive mb-3">✗ We Do NOT Accept Returns If:</h3>
                <ul className="space-y-2 text-foreground">
                  <li>✗ Item has been opened or used</li>
                  <li>✗ Item shows physical damage or signs of use</li>
                  <li>✗ Return is requested after 30 days</li>
                  <li>✗ Original packaging or accessories are missing</li>
                  <li>✗ Item was purchased from another retailer</li>
                  <li>✗ Item was purchased at a clearance or final sale price</li>
                </ul>
              </div>
            </section>

            {/* Refund Details */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Refund Details</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Refund Amount:</span> Full refund of the purchase price
                </p>
                <p>
                  <span className="font-semibold text-foreground">Processing Time:</span> 7-10 business days after inspection
                </p>
                <p>
                  <span className="font-semibold text-foreground">Return Shipping:</span> Free return shipping with provided label
                </p>
                <p>
                  <span className="font-semibold text-foreground">Original Shipping:</span> Non-refundable
                </p>
                <p>
                  <span className="font-semibold text-foreground">Method:</span> Refunds are processed to the original payment method
                </p>
              </div>
            </section>

            {/* Damages and Defects */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Damaged or Defective Items</h2>
              <p className="text-muted-foreground mb-4">
                If you receive a damaged or defective item, please contact us immediately with photos of the damage. 
                We will provide you with a replacement or full refund at no cost, including return shipping.
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">Report Damage Within:</span> 48 hours of delivery
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="p-4 bg-card rounded-lg border border-border">
                  <p className="font-bold text-foreground mb-2">Q: Can I return an item without the original box?</p>
                  <p className="text-muted-foreground">A: Original packaging is required. Items without original boxes may not be accepted for return.</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <p className="font-bold text-foreground mb-2">Q: How long does refund take to appear?</p>
                  <p className="text-muted-foreground">A: Refunds are processed within 7-10 business days. It may take an additional 3-5 business days for the amount to appear in your account depending on your bank.</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <p className="font-bold text-foreground mb-2">Q: What about items purchased on sale?</p>
                  <p className="text-muted-foreground">A: Sale and clearance items are non-refundable unless defective.</p>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border">
                  <p className="font-bold text-foreground mb-2">Q: Can I exchange instead of returning?</p>
                  <p className="text-muted-foreground">A: Yes! You can exchange items for the same product in a different variant or model, subject to availability.</p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="border-t-2 border-border pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-4">
                Contact our customer support team for any return or refund related inquiries.
              </p>
              <div className="p-4 bg-accent/10 rounded-lg border border-accent/30">
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Email:</span> support@gollachutgadgets.com</p>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Phone:</span> +880-1234-567890</p>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Hours:</span> Monday - Saturday, 10:00 AM - 8:00 PM</p>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
