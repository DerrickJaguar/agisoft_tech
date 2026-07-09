import PageHero from '../components/PageHero'
import useSEO from '../hooks/useSEO'

export default function Terms() {
  useSEO({
    title: 'Terms & Conditions',
    description: 'The terms governing use of the Agisoft Technologies website and services.',
  })

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Last updated: July 2026"
      />
      <section className="section-padding mx-auto max-w-3xl">
        <div className="space-y-8 text-charcoal/70 dark:text-white/70">
          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3 leading-relaxed">
              By accessing or using the Agisoft Technologies website, or engaging us for software
              development, consulting, or related services, you agree to be bound by these Terms &
              Conditions. If you do not agree, please do not use our website or services.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              2. Our Services
            </h2>
            <p className="mt-3 leading-relaxed">
              Agisoft Technologies provides custom software development, mobile applications, cloud
              infrastructure, artificial intelligence, cybersecurity, and IT consulting services.
              The specific scope, timeline, and deliverables for any engagement are defined in a
              separate proposal or contract agreed upon with each client.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              3. Intellectual Property & Ownership
            </h2>
            <p className="mt-3 leading-relaxed">
              Unless otherwise agreed in writing, clients receive full ownership of the source code
              and intellectual property for custom-built solutions upon final payment. Agisoft
              Technologies retains the right to reuse general knowledge, non-proprietary components,
              and internal tools developed independently of client-specific work.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              4. Payments & Pricing
            </h2>
            <p className="mt-3 leading-relaxed">
              Pricing for projects is agreed upon before work begins, whether as a fixed-price quote
              or a retainer arrangement. Invoices are due according to the payment schedule outlined
              in your project agreement. Late payments may result in paused work until resolved.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              5. Website Use
            </h2>
            <p className="mt-3 leading-relaxed">
              You agree to use this website only for lawful purposes and in a way that does not
              infringe the rights of others or restrict their use of the site. Content on this
              website — including text, graphics, logos, and images — is the property of Agisoft
              Technologies unless otherwise noted, and may not be reproduced without permission.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              6. Limitation of Liability
            </h2>
            <p className="mt-3 leading-relaxed">
              While we strive for accuracy and reliability in our services and website content,
              Agisoft Technologies is not liable for indirect, incidental, or consequential damages
              arising from the use of our website or services, to the extent permitted by law.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              7. Maintenance & Support
            </h2>
            <p className="mt-3 leading-relaxed">
              Post-launch maintenance and support are provided under separate support agreements
              with defined response times and coverage. Services outside an active support
              agreement may be billed separately.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              8. Termination
            </h2>
            <p className="mt-3 leading-relaxed">
              Either party may terminate an ongoing engagement in accordance with the notice period
              and terms specified in the relevant project agreement. Fees for work completed up to
              the termination date remain payable.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              9. Changes to These Terms
            </h2>
            <p className="mt-3 leading-relaxed">
              We may revise these Terms & Conditions from time to time. Continued use of our
              website or services after changes are posted constitutes acceptance of the revised
              terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal dark:text-white">
              10. Contact Us
            </h2>
            <p className="mt-3 leading-relaxed">
              Questions about these terms can be directed to{' '}
              <a href="mailto:info@agisofttechnologies.com" className="text-primary hover:text-primary-dark">
                info@agisofttechnologies.com
              </a>{' '}
              or Kiwatule Road, Nambi Mall, Level 2 RM H19, Kampala.
            </p>
          </div>

          <p className="rounded-xl border border-charcoal/10 bg-surface p-4 text-sm dark:border-white/10 dark:bg-white/5">
            This document is a general template intended to give visitors a clear overview of the
            terms governing our website and services. For binding, jurisdiction-specific terms, we
            recommend consulting a qualified lawyer.
          </p>
        </div>
      </section>
    </>
  )
}
