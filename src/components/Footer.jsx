import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, LinkedinIcon, XIcon, InstagramIcon } from './SocialIcons'

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Careers', to: '/careers' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const serviceLinks = [
  { label: 'Custom Software Development', to: '/services' },
  { label: 'Mobile App Development', to: '/services' },
  { label: 'Cloud Computing', to: '/services' },
  { label: 'Cybersecurity', to: '/services' },
  { label: 'AI & Machine Learning', to: '/services' },
]

const resourceLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'FAQ', to: '/#faq' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-20">
        <div>
          <img
            src="/images/Agi soft Main logo-02.png"
            alt="Agisoft Technologies"
            className="h-10 w-auto rounded-md bg-white/5 p-1"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Innovative software solutions for businesses, governments, NGOs, and enterprises
            across Africa and beyond.
          </p>
          <div className="mt-6 flex gap-3">
            {[FacebookIcon, LinkedinIcon, XIcon, InstagramIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 transition-colors hover:bg-primary hover:text-white"
                aria-label="Social link"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-primary-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-primary-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mt-6 font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Resources
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {resourceLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-primary-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Get in Touch
          </h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-primary-light" />
              <span>Kiwatule Road, Nambi Mall, Level 2 RM H19, Kampala</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-primary-light" />
              <a href="tel:+256785102010" className="hover:text-primary-light">
                +256 785 102 010
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-primary-light" />
              <a href="mailto:info@agisofttechnologies.com" className="hover:text-primary-light">
                info@agisofttechnologies.com
              </a>
            </li>
          </ul>
          <form className="mt-6 flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-primary px-4 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/50 sm:px-10 lg:px-20">
        © {new Date().getFullYear()} Agisoft Technologies. All rights reserved.
      </div>
    </footer>
  )
}
