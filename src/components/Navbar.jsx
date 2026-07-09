import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import { navLinks } from '../data/siteData'
import useDarkMode from '../hooks/useDarkMode'

function DesktopNavItem({ link }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  if (link.children) {
    const isActive = link.children.some((child) => child.to === location.pathname)
    return (
      <div ref={containerRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className={`flex items-center gap-1 whitespace-nowrap font-heading text-sm font-medium transition-colors hover:text-primary ${
            isActive ? 'text-primary' : 'text-charcoal/80 dark:text-white/80'
          }`}
        >
          {link.label}
          <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-charcoal/10 bg-white py-2 shadow-xl dark:border-white/10 dark:bg-charcoal">
            {link.children.map((child) => (
              <NavLink
                key={child.to}
                to={child.to}
                onClick={() => setOpen(false)}
                className={({ isActive: childActive }) =>
                  `block px-4 py-2.5 font-heading text-sm font-medium transition-colors ${
                    childActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-charcoal/80 hover:bg-charcoal/5 dark:text-white/80 dark:hover:bg-white/10'
                  }`
                }
              >
                {child.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <NavLink
      to={link.to}
      className={({ isActive }) =>
        `whitespace-nowrap font-heading text-sm font-medium transition-colors hover:text-primary ${
          isActive ? 'text-primary' : 'text-charcoal/80 dark:text-white/80'
        }`
      }
    >
      {link.label}
    </NavLink>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const { isDark, toggle } = useDarkMode()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-sm backdrop-blur-md dark:bg-charcoal/90'
          : 'bg-white/60 backdrop-blur-sm dark:bg-charcoal/60'
      }`}
    >
      <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-6 py-3 sm:px-10 lg:px-20">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/Agi soft Main logo-02.png"
            alt="Agisoft Technologies"
            className="h-16 w-auto sm:h-[4.5rem]"
          />
        </Link>

        <div className="hidden items-center gap-8 xl:flex">
          <ul className="flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.to || link.label}>
                <DesktopNavItem link={link} />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-charcoal/70 transition-colors hover:bg-charcoal/5 dark:text-white/70 dark:hover:bg-white/10"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/contact"
              className="whitespace-nowrap rounded-full border border-primary/30 px-5 py-2.5 font-heading text-sm font-semibold text-primary transition-colors hover:bg-primary/5 dark:hover:bg-primary/10"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/contact"
              className="whitespace-nowrap rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-semibold text-white shadow-sm shadow-primary/30 transition-colors hover:bg-primary-dark"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full text-charcoal/70 dark:text-white/70"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg text-charcoal dark:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-charcoal/10 bg-white px-6 pb-6 dark:border-white/10 dark:bg-charcoal xl:hidden">
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-heading text-sm font-medium text-charcoal/80 dark:text-white/80"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <ul className="ml-3 flex flex-col gap-1 border-l border-charcoal/10 pl-3 dark:border-white/10">
                      {link.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              `block rounded-lg px-3 py-2 font-heading text-sm font-medium ${
                                isActive
                                  ? 'bg-primary/10 text-primary'
                                  : 'text-charcoal/70 dark:text-white/70'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2.5 font-heading text-sm font-medium ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-charcoal/80 dark:text-white/80'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full border border-primary/30 px-5 py-2.5 text-center font-heading text-sm font-semibold text-primary"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary px-5 py-2.5 text-center font-heading text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
