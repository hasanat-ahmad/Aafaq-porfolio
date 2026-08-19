import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LINKS, NAV_LINKS } from '../data/content'
import LinkedInIcon from './LinkedInIcon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-white/95 shadow-[0_1px_20px_rgba(13,27,51,0.06)] backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8"
      >
        <a
          href="#home"
          className="font-serif text-xl font-semibold tracking-tight text-navy-900"
        >
          Aafaq Ahmad<span className="text-gold-500">, ACA</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium tracking-wide text-soft transition-colors duration-200 hover:text-navy-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={LINKS.cv}
            download
            className="group hidden items-center gap-2 border border-navy-900 bg-navy-900 px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] text-white uppercase transition-all duration-300 hover:bg-navy-800 hover:shadow-[0_10px_24px_-10px_rgba(13,27,51,0.5)] lg:inline-flex"
          >
            <Download
              size={14}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
            CV
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hidden h-9.5 w-9.5 items-center justify-center border border-navy-200 text-navy-800 transition-all duration-300 hover:border-gold-500 hover:bg-gold-100/50 hover:text-gold-700 lg:flex"
          >
            <LinkedInIcon size={16} />
          </a>

          <a
            href={LINKS.cv}
            download
            aria-label="Download CV"
            className="flex h-10 w-10 items-center justify-center border border-navy-200 text-navy-800 transition-colors duration-300 hover:border-gold-500 hover:bg-gold-100/50 lg:hidden"
          >
            <Download size={16} strokeWidth={1.75} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-navy-900 lg:hidden"
          >
            {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="border-t border-line bg-white lg:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-line/60 last:border-0">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-sm font-medium text-navy-900 transition-colors hover:text-gold-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="grid grid-cols-2 gap-3 pt-5">
                <a
                  href={LINKS.cv}
                  download
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-navy-900 px-4 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-navy-800"
                >
                  <Download size={14} strokeWidth={1.75} />
                  Download CV
                </a>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 border border-navy-200 px-4 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-navy-800 uppercase transition-colors hover:border-gold-500 hover:bg-gold-100/50"
                >
                  <LinkedInIcon size={14} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}