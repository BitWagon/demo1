import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-slate-950 py-20 text-white md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
                Legal
              </span>

              <h1 className="mt-5 text-4xl font-bold md:text-6xl">
                Cookie Policy
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                This Cookie Policy explains how cookies and similar
                technologies may be used when you visit the Nexa Business
                Solutions website.
              </p>

              <p className="mt-5 text-sm text-slate-400">
                Last updated: September 2026
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85"
                alt="Business professional using a laptop"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85"
                alt="Business documents and information"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Website Privacy
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Understanding How Cookies Work
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Cookies are commonly used by websites to provide essential
                functionality, remember preferences, understand website
                usage and improve the overall visitor experience.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                This policy provides general information about how cookies may
                be used on the Nexa Business Solutions website and how you can
                manage them.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                The specific cookies used may depend on the features,
                analytics services and technologies implemented on the
                production website.
              </p>
            </div>
          </div>
        </section>

        {/* Main Cookie Policy */}
        <section className="bg-slate-50 py-20">
          <article className="prose prose-slate mx-auto max-w-4xl px-6">
            <h2>1. What Are Cookies?</h2>

            <p>
              Cookies are small files stored on your device when you visit
              certain websites. They can help websites remember preferences
              and understand how visitors use the site.
            </p>

            <p>
              Cookies may be stored temporarily for the duration of a browsing
              session or may remain on your device for a longer period,
              depending on their purpose and configuration.
            </p>

            <h2>2. How We May Use Cookies</h2>

            <p>
              Nexa Business Solutions may use necessary cookies to support
              website functionality and, where appropriate, analytics or
              preference technologies.
            </p>

            <p>
              Cookies and similar technologies may help us understand how
              visitors navigate the website, identify technical issues,
              remember certain preferences and improve the way information is
              presented.
            </p>

            <h2>3. Necessary Cookies</h2>

            <p>
              Some cookies may be required for parts of the website to work
              correctly.
            </p>

            <p>
              These may support essential functions such as navigation,
              security, form functionality, session management or other core
              website features.
            </p>

            <p>
              Where cookies are strictly necessary for a requested website
              function, they may operate without being used for unrelated
              purposes.
            </p>

            <h2>4. Analytics</h2>

            <p>
              If analytics tools are added to the website, they should only be
              configured in accordance with applicable privacy and cookie
              requirements.
            </p>

            <p>
              Analytics technologies may help provide information such as
              which pages are visited, how visitors interact with the website
              and whether there are technical or usability issues.
            </p>

            <p>
              Analytics information should be handled in accordance with the
              applicable privacy arrangements and configuration of the
              relevant analytics service.
            </p>

            <h2>5. Managing Cookies</h2>

            <p>
              You can manage or restrict cookies through your browser settings.
              Depending on the technology used, you may also be provided with
              additional cookie preference controls.
            </p>

            <p>
              Most modern browsers allow you to view, block or delete cookies.
              However, restricting certain cookies may affect the availability
              or functionality of some parts of a website.
            </p>

            <h2>6. Changes</h2>

            <p>
              This policy may be updated when our website, technologies or
              legal requirements change.
            </p>

            <p>
              Where appropriate, updates will be reflected on this page so
              that visitors can understand how our approach to cookies may
              change over time.
            </p>
          </article>
        </section>

        {/* Cookie Categories */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Cookie Categories
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Different Cookies Can Have Different Purposes
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Depending on the technologies used by the website, cookies can
                support different aspects of the online experience.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <div className="text-4xl">⚙️</div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Essential Cookies
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  These may support core website functions and help ensure
                  that important parts of the website operate correctly.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <div className="text-4xl">📊</div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Analytics Cookies
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Where implemented, analytics technologies may provide
                  insights into website usage and help identify opportunities
                  to improve the visitor experience.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <div className="text-4xl">🔧</div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Preference Technologies
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Certain technologies may remember settings or preferences to
                  make future visits more convenient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy and Security */}
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
                Privacy & Security
              </span>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Responsible Use of Website Technologies
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Website technologies should be implemented responsibly and
                with consideration for applicable privacy and data protection
                requirements.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="mt-1 text-xl text-blue-400">✓</div>

                  <div>
                    <h3 className="font-bold">
                      Appropriate Website Functionality
                    </h3>

                    <p className="mt-2 text-slate-400">
                      Technologies may be used to help provide essential
                      website functions and a consistent browsing experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 text-xl text-blue-400">✓</div>

                  <div>
                    <h3 className="font-bold">Clear Information</h3>

                    <p className="mt-2 text-slate-400">
                      Information about cookies and similar technologies should
                      be made available so visitors can understand their use.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 text-xl text-blue-400">✓</div>

                  <div>
                    <h3 className="font-bold">Ongoing Review</h3>

                    <p className="mt-2 text-slate-400">
                      Cookie technologies and website configurations may be
                      reviewed as the website develops.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85"
                alt="Business team working with digital technology"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=85"
                alt="Business team discussing website requirements"
                className="h-[400px] w-full object-cover"
              />
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Your Choices
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Managing or Restricting Cookies
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Most browsers provide settings that allow you to manage
                cookies. You may be able to delete existing cookies, block
                future cookies or receive notifications when cookies are being
                placed on your device.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-slate-900">
                    Browser Controls
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Browser settings can usually be used to control or remove
                    cookies.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-slate-900">
                    Website Preferences
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Where available, website cookie preference tools may allow
                    you to make choices about optional technologies.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-slate-900">
                    Impact on Website Features
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Blocking necessary technologies may cause some website
                    functionality to operate differently or become
                    unavailable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Information We May Collect */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Website Information
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Cookies May Support Different Website Activities
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Depending on the website configuration, cookies or similar
                technologies may be associated with different activities.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl border border-slate-200 p-7">
                <h3 className="text-lg font-bold text-slate-900">
                  Website Operation
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Supporting essential features and website functionality.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-7">
                <h3 className="text-lg font-bold text-slate-900">
                  User Preferences
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Remembering certain choices or settings where appropriate.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-7">
                <h3 className="text-lg font-bold text-slate-900">
                  Website Analytics
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Understanding general website usage where analytics are
                  implemented.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-7">
                <h3 className="text-lg font-bold text-slate-900">
                  Performance
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Helping identify technical issues and opportunities to
                  improve website performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Third Party Technologies */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Third Parties
              </span>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Third-Party Cookies and Services
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Some website functionality may rely on third-party services.
                Depending on which services are installed, those providers may
                use their own cookies or similar technologies.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Third-party providers may have their own privacy policies,
                cookie policies and terms. Where relevant, visitors should
                review those policies to understand how the relevant provider
                handles information.
              </p>

              <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h3 className="font-bold text-slate-900">
                  Important Consideration
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The actual third-party technologies used on the production
                  website should be reviewed and listed here where applicable.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85"
                alt="Business professionals working with technology"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Cookie Policy Checklist */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Website Review
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                  Keeping Cookie Information Up to Date
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  As website technologies change, cookie information should
                  also be reviewed to make sure this policy accurately reflects
                  the production website.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                  <span className="text-xl text-blue-600">✓</span>
                  <p className="leading-7 text-slate-600">
                    Review the cookies and technologies currently installed.
                  </p>
                </div>

                <div className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                  <span className="text-xl text-blue-600">✓</span>
                  <p className="leading-7 text-slate-600">
                    Identify which technologies are necessary and which are
                    optional.
                  </p>
                </div>

                <div className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                  <span className="text-xl text-blue-600">✓</span>
                  <p className="leading-7 text-slate-600">
                    Check that analytics and preference technologies are
                    configured appropriately.
                  </p>
                </div>

                <div className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                  <span className="text-xl text-blue-600">✓</span>
                  <p className="leading-7 text-slate-600">
                    Update this policy when website technologies or
                    requirements change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
              Questions
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Questions About Our Cookie Policy?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
              If you have questions about how cookies or similar technologies
              are used on our website, please contact Nexa Business Solutions
              through the Contact Us page.
            </p>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
              <h2 className="text-xl font-bold text-slate-900">
                Important Information
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                This is a general template and should be reviewed and adapted
                to match the actual cookies, analytics tools, third-party
                services and consent mechanism used by the production website.
              </p>

              <p className="mt-4 leading-7 text-slate-700">
                The final policy should accurately reflect the technologies
                installed on the website and should be reviewed for compliance
                with applicable UK privacy and cookie requirements before
                publication.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}