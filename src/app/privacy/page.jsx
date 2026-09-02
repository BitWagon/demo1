import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-950 py-20 text-white md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
                  Legal
                </span>

                <h1 className="mt-5 text-4xl font-bold md:text-6xl">
                  Privacy Policy
                </h1>

                <p className="mt-5 text-slate-300">
                  Last updated: September 2026
                </p>

                <p className="mt-6 max-w-2xl leading-8 text-slate-400">
                  This Privacy Policy explains how Nexa Business Solutions
                  collects, uses, stores and protects information when you use
                  our website and services.
                </p>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85"
                  alt="Online privacy and data security"
                  className="h-[380px] w-full rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85"
                  alt="Business documents and privacy information"
                  className="h-[400px] w-full rounded-3xl object-cover"
                />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Your Privacy Matters
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  Handling Your Information Responsibly
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Nexa Business Solutions respects your privacy and is
                  committed to handling personal information responsibly.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  When you contact us, request a quote or use our website, we
                  may need to collect certain information to understand your
                  requirements and respond to your enquiry.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  This policy explains the general ways information may be
                  collected, used, stored and shared when you interact with our
                  website and services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Privacy Policy */}
        <section className="bg-slate-50 py-16">
          <article className="prose prose-slate mx-auto max-w-4xl px-6">
            <h2>1. Introduction</h2>

            <p>
              This Privacy Policy explains how we collect, use, store and
              protect information provided when you use our website and
              services.
            </p>

            <p>
              Nexa Business Solutions respects your privacy and is committed
              to handling personal information responsibly.
            </p>

            <h2>2. Information We Collect</h2>

            <p>
              Depending on how you use the website, we may collect information
              such as your name, business name, business details, email
              address, phone number and information included in enquiries or
              quote requests.
            </p>

            <p>
              Information may be provided directly by you when you complete a
              contact form, request a quote, contact us about a service or
              otherwise communicate with our business.
            </p>

            <h2>3. How We Use Information</h2>

            <p>
              Information may be used to respond to enquiries, provide
              requested services, process quote requests, communicate about
              requested services and improve our website and customer
              experience.
            </p>

            <p>
              We may also use information to understand your requirements and
              help identify business service options that may be relevant to
              your enquiry.
            </p>

            <h2>4. Cookies</h2>

            <p>
              Our website may use cookies or similar technologies to support
              website functionality, understand usage and improve the user
              experience.
            </p>

            <p>
              Cookies may help the website operate correctly and provide
              information about how visitors interact with the website.
            </p>

            <h2>5. Sharing Information</h2>

            <p>
              We will only share information with relevant third parties where
              there is a legitimate reason and where appropriate safeguards and
              permissions apply.
            </p>

            <p>
              We may use trusted third-party services to operate parts of our
              website or business. Where appropriate, those providers may
              process information on our behalf.
            </p>

            <h2>6. Data Security</h2>

            <p>
              We take reasonable technical and organisational measures to
              protect personal information from unauthorised access, loss or
              misuse.
            </p>

            <p>
              We take reasonable steps to protect information against
              unauthorised access, alteration, disclosure or destruction.
            </p>

            <h2>7. Your Rights</h2>

            <p>
              Depending on applicable law and your circumstances, you may have
              rights concerning the personal information we hold about you,
              including requesting access, correction or deletion.
            </p>

            <p>
              Depending on your circumstances, you may also have rights
              concerning restriction of processing or objection in relation to
              your personal information.
            </p>

            <h2>8. Contact</h2>

            <p>
              If you have questions about this Privacy Policy or how your
              information is handled, please contact Nexa Business Solutions
              using the contact details provided on the website.
            </p>

            <h2>9. Changes</h2>

            <p>
              We may update this Privacy Policy from time to time. The latest
              version will be published on this page.
            </p>
          </article>
        </section>

        {/* Information We Handle */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Information We May Handle
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Information You Provide to Us
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                The information we handle depends on how you interact with
                our website and what you choose to provide.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <div className="text-3xl">👤</div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Personal Details
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Information such as your name and contact details when
                  provided through an enquiry.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <div className="text-3xl">🏢</div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Business Details
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Business information you provide to help us understand your
                  requirements.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <div className="text-3xl">✉️</div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Enquiry Information
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Details included in quote requests, contact forms or service
                  enquiries.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <div className="text-3xl">🌐</div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Website Usage
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Information relating to website functionality and usage
                  where cookies or similar technologies are used.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
                  Privacy & Security
                </span>

                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Protecting Information Responsibly
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  We take reasonable technical and organisational measures to
                  help protect personal information against unauthorised
                  access, loss, misuse, alteration, disclosure or destruction.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
                    <h3 className="font-bold">Responsible Handling</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Information is handled for legitimate business purposes
                      connected with your enquiry or use of our website.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
                    <h3 className="font-bold">Appropriate Safeguards</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Reasonable measures are used to help protect information
                      from unauthorised access or misuse.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
                    <h3 className="font-bold">Clear Communication</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      We aim to provide clear information about how your data
                      may be used when you interact with us.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85"
                  alt="Secure business technology and information"
                  className="h-[470px] w-full rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Your Choices */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85"
                  alt="Person reviewing privacy and business documents"
                  className="h-[430px] w-full rounded-3xl object-cover"
                />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Your Information
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  Understanding Your Privacy Choices
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Depending on applicable law and your circumstances, you may
                  have rights concerning the personal information we hold
                  about you.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                    <div className="text-xl">✓</div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Access Information
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        You may have a right to request access to personal
                        information we hold about you.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                    <div className="text-xl">✓</div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Correct Information
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        You may be able to request correction of inaccurate or
                        incomplete information.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                    <div className="text-xl">✓</div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Request Deletion
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        In certain circumstances, you may have a right to ask
                        for personal information to be deleted.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                    <div className="text-xl">✓</div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Ask Questions
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        You can contact us if you have questions about how
                        information is handled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Parties */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Third Parties
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  Working With Trusted Service Providers
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  We may use trusted third-party services to operate parts of
                  our website or business. Where appropriate, those providers
                  may process information on our behalf.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Information will only be shared with relevant third parties
                  where there is a legitimate reason and where appropriate
                  safeguards and permissions apply.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-900">
                      Website Services
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Providers that help operate or maintain website
                      functionality.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-900">
                      Business Services
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Relevant providers where information needs to be
                      processed in connection with your enquiry.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=85"
                  alt="Business professionals working together"
                  className="h-[430px] w-full rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
              Questions About Privacy?
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              We're Here to Help
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
              If you have questions about this Privacy Policy or how your
              information is handled, please contact Nexa Business Solutions
              using the contact details provided on the website.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <h2 className="text-xl font-bold text-slate-900">
                Important Information
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                This is a general website template and should be reviewed and
                adapted to reflect your actual business, data processing
                activities and applicable UK legal requirements before
                publication.
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                You should ensure that the final version accurately describes
                the information your business collects, why it is collected,
                how it is used, how long it is retained, who it may be shared
                with and the rights available to individuals.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}