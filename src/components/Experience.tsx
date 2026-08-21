import { motion, useReducedMotion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { EXPERIENCE } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Experience() {
  const reduce = useReducedMotion()

  return (
    <section
      id="experience"
      className="bg-white py-24 sm:py-32"
      aria-label="Professional experience"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="02 — Career"
          title="Professional Experience"
          description="A career built within KPMG — progressing from audit associate to supervisory roles across three countries."
        />

        <ol className="relative mt-16 border-l border-gold-500/40 pl-8 sm:pl-12">
          {EXPERIENCE.map((item, i) => (
            <li key={item.role} className="relative pb-14 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-9.75 flex h-3.5 w-3.5 items-center justify-center sm:-left-[55px]"
              >
                <span className="absolute h-3.5 w-3.5 rounded-full border border-gold-500 bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-navy-900" />
              </span>

              <motion.article
                initial={{ opacity: 0, x: reduce ? 0 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="group max-w-2xl border border-line bg-paper/60 p-6 transition-colors duration-300 hover:border-gold-500/60 hover:bg-paper sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-600 uppercase">
                    {item.period}
                  </p>
                  {'tag' in item && item.tag ? (
                    <span className="border border-gold-500/50 px-2 py-0.5 text-[10px] font-semibold tracking-[0.18em] text-gold-700 uppercase">
                      {item.tag}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 font-serif text-xl font-medium text-navy-900 sm:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm font-semibold tracking-wide text-navy-700">
                  {item.firm}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-[13px] text-soft">
                  <MapPin size={13} strokeWidth={1.5} className="text-gold-600" />
                  {item.location}
                </p>
              </motion.article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}