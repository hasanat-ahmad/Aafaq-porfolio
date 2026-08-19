import { Check } from 'lucide-react'
import { TRAINING } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Training() {
  return (
    <section
      id="training"
      className="border-y border-line bg-white py-24 sm:py-32"
      aria-label="Professional training"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="06 — Development"
          title="Professional Training"
          description="Continuous professional development across technical, regulatory, and leadership disciplines."
        />

        <ul className="mt-14 flex flex-wrap gap-3">
          {TRAINING.map((item, i) => (
            <Reveal key={item} delay={i * 0.04} y={14}>
              <li>
                <span className="inline-flex items-center gap-2.5 border border-line bg-paper px-5 py-3 text-[13px] font-medium tracking-wide text-navy-800 transition-all duration-300 hover:border-gold-500/60 hover:bg-gold-100/40">
                  <Check size={14} strokeWidth={2} className="text-gold-600" />
                  {item}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}