import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
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
              Terms & Conditions
            </h1>

            <p className="mt-4 text-slate-300">
              Last updated: September 2026
            </p>
          </div>
        </section>

        <article className="max-w-5xl mx-auto px-6 py-16">
          <div className="prose prose-slate max-w-none">
            <h2>1. About These Terms</h2>

            <p>
              These Terms & Conditions govern your use of this website and the
              services and information made available through it.
            </p>

            <h2>2. Website Use</h2>

            <p>
              You agree to use this website lawfully and responsibly and not
              attempt to interfere with its operation or security.
            </p>

            <h2>3. Information on the Website</h2>

            <p>
              We aim to keep website information useful and accurate. However,
              information may change and should not automatically be considered
              a guarantee, quotation or contractual offer.
            </p>

            <h2>4. Quote Requests</h2>

            <p>
              Submitting a quote request does not automatically create a
              contract. Any commercial arrangement will be subject to the
              applicable terms agreed between the relevant parties.
            </p>

            <h2>5. Third-Party Services</h2>

            <p>
              The website may contain information relating to third-party
              products or services. Third-party providers may have their own
              terms, conditions and privacy policies.
            </p>

            <h2>6. Intellectual Property</h2>

            <p>
              Unless otherwise stated, website content, branding, design and
              original materials are protected by applicable intellectual
              property laws.
            </p>

            <h2>7. Limitation of Liability</h2>

            <p>
              To the extent permitted by applicable law, we are not responsible
              for losses arising from reliance on information that is outdated,
              incomplete or supplied by third parties.
            </p>

            <h2>8. Changes to These Terms</h2>

            <p>
              We may update these Terms & Conditions from time to time. The
              updated version will be published on this page.
            </p>

            <h2>9. Contact</h2>

            <p>
              If you have questions regarding these terms, please contact us
              through the Contact Us page.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}