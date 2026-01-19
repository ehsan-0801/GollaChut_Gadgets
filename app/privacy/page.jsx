import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background text-foreground">
        <section className="bg-secondary py-8">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground mt-2">Last updated: January 2024</p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 py-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                GollachutGadgets ("Company", "we", "our", or "us") operates the GollachutGadgets website.
                This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information Collection and Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-3">Types of Data Collected:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Personal Data (name, email address, phone number, address)</li>
                <li>Usage Data (pages visited, time spent, clicks, referral source)</li>
                <li>Device Information (device type, operating system, browser)</li>
                <li>Payment Information (processed securely through payment gateways)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GollachutGadgets uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Security of Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
                While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-card rounded-lg border border-border">
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Email:</span> privacy@gollachutgadgets.com</p>
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
