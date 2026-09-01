import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-slate-900 py-20">
          <div className="max-w-5xl mx-auto px-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Legal
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Privacy Policy
            </h1>

            <p className="mt-4 text-slate-300">
              Last updated: September 2026
            </p>
          </div>
        </section>

        <article className="max-w-5xl mx-auto px-6 py-16">
          <div className="prose prose-slate max-w-none">
            <h2>1. Introduction</h2>

            <p>
              This Privacy Policy explains how we collect, use, store and
              protect information provided when you use our website and
              services.
            </p>

            <h2>2. Information We Collect</h2>

            <p>
              Depending on how you use the website, we may collect information
              such as your name, business name, email address, phone number and
              information included in enquiries or quote requests.
            </p>

            <h2>3. How We Use Information</h2>

            <p>
              Information may be used to respond to enquiries, provide
              requested services, process quote requests, improve our website
              and communicate with you about your enquiry.
            </p>

            <h2>4. Cookies</h2>

            <p>
              Our website may use cookies or similar technologies to support
              website functionality, understand usage and improve the user
              experience.
            </p>

            <h2>5. Data Security</h2>

            <p>
              We take reasonable steps to protect information against
              unauthorised access, alteration, disclosure or destruction.
            </p>

            <h2>6. Third Parties</h2>

            <p>
              We may use trusted third-party services to operate parts of our
              website or business. Where appropriate, those providers may
              process information on our behalf.
            </p>

            <h2>7. Your Rights</h2>

            <p>
              Depending on applicable law, you may have rights regarding the
              personal information we hold about you, including requesting
              access, correction or deletion.
            </p>

            <h2>8. Contact</h2>

            <p>
              If you have questions about this Privacy Policy or how your
              information is handled, please contact us.
            </p>

            <h2>9. Changes</h2>

            <p>
              We may update this Privacy Policy from time to time. The latest
              version will be published on this page.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}