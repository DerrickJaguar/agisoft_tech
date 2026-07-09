import PageHero from '../components/PageHero'
import useSEO from '../hooks/useSEO'

export default function Privacy() {
  useSEO({
    title: 'Privacy Policy',
    description: 'How Agisoft Technologies collects, uses, and protects your information.',
  })

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: July 2026"
      />
      <section className="section-padding mx-auto max-w-3xl">
        <div className="space-y-8 text-charcoal/70 dark:text-white/70">
          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              1. Introduction
            </h2>
            <p className="mt-3 leading-relaxed">
              Agisoft Technologies ("we", "us", "our") respects your privacy and is committed to
              protecting the personal information you share with us. This Privacy Policy explains
              what information we collect, how we use it, and the choices you have.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              2. Information We Collect
            </h2>
            <p className="mt-3 leading-relaxed">
              We collect information you provide directly to us, such as when you fill out our
              contact form, apply for a job, or subscribe to our newsletter. This may include your
              name, email address, phone number, company details, and any message content you
              submit. We also collect limited technical data automatically — such as browser type,
              device information, and pages visited — to help us understand how our site is used.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              3. How We Use Your Information
            </h2>
            <p className="mt-3 leading-relaxed">
              We use the information we collect to respond to inquiries, process job applications,
              deliver the services you request, send updates you've opted into, and improve our
              website and offerings. We do not sell your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              4. Cookies
            </h2>
            <p className="mt-3 leading-relaxed">
              We use cookies and similar technologies to remember your preferences (such as dark
              mode and cookie consent choices) and to understand site traffic. You can control
              cookie preferences through the consent banner or your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              5. Third-Party Services
            </h2>
            <p className="mt-3 leading-relaxed">
              We use trusted third-party services to operate parts of our site — for example, form
              submissions may be processed through Formspree, and our office location is displayed
              using Google Maps. These providers have their own privacy policies governing how they
              handle data.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              6. Data Security
            </h2>
            <p className="mt-3 leading-relaxed">
              We take reasonable technical and organizational measures to protect your information
              against unauthorized access, loss, or misuse. However, no method of transmission over
              the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              7. Your Rights
            </h2>
            <p className="mt-3 leading-relaxed">
              You may request access to, correction of, or deletion of your personal information at
              any time by contacting us at{' '}
              <a href="mailto:info@agisofttechnologies.com" className="text-primary hover:text-primary-dark">
                info@agisofttechnologies.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              8. Changes to This Policy
            </h2>
            <p className="mt-3 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              9. Contact Us
            </h2>
            <p className="mt-3 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at Kiwatule Road,
              Nambi Mall, Level 2 RM H19, Kampala, or email{' '}
              <a href="mailto:info@agisofttechnologies.com" className="text-primary hover:text-primary-dark">
                info@agisofttechnologies.com
              </a>
              .
            </p>
          </div>

          <p className="rounded-xl border border-charcoal/10 bg-surface p-4 text-sm dark:border-white/10 dark:bg-white/5">
            This policy is a general template intended to give visitors a clear overview of our
            data practices. For specific legal or regulatory compliance needs, we recommend
            consulting a qualified lawyer to tailor this document to your jurisdiction.
          </p>
        </div>
      </section>
    </>
  )
}
