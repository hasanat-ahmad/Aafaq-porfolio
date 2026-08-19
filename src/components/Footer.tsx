import { NAV_LINKS } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950" aria-label="Footer">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div>
            <p className="font-serif text-2xl font-medium text-white">
              Sahibzada Aafaq Ahmad<span className="text-gold-400">, ACA</span>
            </p>
            <p className="mt-2 text-[12px] tracking-[0.22em] text-navy-300 uppercase">
              Audit &amp; Assurance Professional
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] font-medium text-navy-300 transition-colors duration-200 hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-[12px] text-navy-300">
            © {year} Sahibzada Aafaq Ahmad, ACA. All rights reserved.
          </p>
          <p className="text-[11px] tracking-[0.18em] text-navy-400 uppercase">
            Precision · Integrity · Assurance
          </p>
        </div>
      </div>
    </footer>
  )
}