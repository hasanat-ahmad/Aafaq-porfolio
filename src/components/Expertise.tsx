import {
  BarChart3,
  ClipboardCheck,
  FileSearch,
  FolderCheck,
  GraduationCap,
  ShieldAlert,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { EXPERTISE } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const ICONS: Record<string, LucideIcon> = {
  'clipboard-check': ClipboardCheck,
  'bar-chart': BarChart3,
  'shield-alert': ShieldAlert,
  'shield-check': ShieldCheck,
  'file-search': FileSearch,
  'folder-check': FolderCheck,
  users: Users,
  'graduation-cap': GraduationCap,
}

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="bg-navy-950 py-24 sm:py-32"
      aria-label="Core expertise"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="03 — Expertise"
          title="Core Expertise"
          tone="dark"
          description="A focused professional practice built on audit precision, reporting integrity, and assurance quality."
        />

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTISE.map((item, i) => {
            const Icon = ICONS[item.icon] ?? ClipboardCheck
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.07} y={20}>
                <article className="group relative flex h-full flex-col gap-4 bg-navy-950 p-7 transition-colors duration-300 hover:bg-navy-900">
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 h-px w-0 bg-gold-500 transition-all duration-500 group-hover:w-full"
                  />
                  <div className="flex items-center justify-between">
                    <Icon
                      size={22}
                      strokeWidth={1.25}
                      className="text-gold-500 transition-transform duration-300 group-hover:-translate-y-0.5"
                    />
                    <span className="text-[11px] font-medium tracking-widest text-navy-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg leading-snug font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-navy-200">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}