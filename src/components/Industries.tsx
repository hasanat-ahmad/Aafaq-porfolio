import {
  Building2,
  Cpu,
  Droplets,
  Factory,
  FileSignature,
  HeartHandshake,
  RadioTower,
  type LucideIcon,
} from 'lucide-react'
import { INDUSTRIES } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const ICONS: Record<string, LucideIcon> = {
  building: Building2,
  factory: Factory,
  'heart-handshake': HeartHandshake,
  'radio-tower': RadioTower,
  cpu: Cpu,
  droplets: Droplets,
  'file-signature': FileSignature,
}

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-paper py-24 sm:py-32"
      aria-label="Industry experience"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 — Sectors"
          title="Industry Experience"
          description="Audit and assurance services delivered across a diverse range of sectors — from regulated utilities to capital-intensive industries."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => {
            const Icon = ICONS[industry.icon] ?? Building2
            return (
              <Reveal key={industry.name} delay={(i % 3) * 0.08}>
                <article className="group flex h-full items-center gap-5 border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-[0_16px_40px_-16px_rgba(13,27,51,0.18)]">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center border border-navy-100 bg-paper p-3 transition-colors duration-300 group-hover:border-gold-500/50 group-hover:bg-gold-100/60">
                    <Icon size={22} strokeWidth={1.25} className="text-navy-700 transition-colors duration-300 group-hover:text-gold-700" />
                  </div>
                  <h3 className="font-serif text-[17px] leading-snug font-medium text-navy-900">
                    {industry.name}
                  </h3>
                </article>
              </Reveal>
            )
          })}

          <Reveal delay={0.16}>
            <div className="flex h-full flex-col justify-center gap-2 border border-dashed border-navy-200 bg-paper p-6">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-gold-600 uppercase">
                Across Borders
              </p>
              <p className="text-sm leading-relaxed text-soft">
                Engagements delivered for clients headquartered and operating
                across the Middle East and South Asia.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}