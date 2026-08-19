import { Check } from 'lucide-react'
import { SKILL_CATEGORIES } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-line bg-paper py-24 sm:py-32"
      aria-label="Skills and capabilities"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="07 — Capabilities"
          title="Technical & Professional Skills"
          description="A disciplined combination of technical accounting expertise, professional tools, and leadership capability."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.1}>
              <article className="flex h-full flex-col border border-line bg-white p-8 transition-all duration-300 hover:border-gold-500/60 hover:shadow-[0_16px_40px_-16px_rgba(13,27,51,0.15)]">
                <p className="text-[11px] font-semibold tracking-[0.26em] text-gold-600 uppercase">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 border-b border-line pb-5 font-serif text-xl font-medium text-navy-900">
                  {group.category}
                </h3>
                <ul className="mt-6 space-y-3.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-3">
                      <Check
                        size={14}
                        strokeWidth={2.25}
                        className="mt-1 shrink-0 text-gold-600"
                      />
                      <span className="text-sm leading-relaxed text-soft">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}