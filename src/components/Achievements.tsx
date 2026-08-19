import { ACHIEVEMENTS } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-white py-24 sm:py-32"
      aria-label="Professional achievements"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="05 — Recognition"
          title="Professional Achievements"
          description="Recognition earned through consistent quality, dedication, and contribution to client outcomes."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {ACHIEVEMENTS.map((achievement, i) => (
            <Reveal key={achievement.title} delay={(i % 2) * 0.1}>
              <article className="group relative flex h-full flex-col gap-5 overflow-hidden border border-line bg-paper/70 p-8 transition-all duration-300 hover:border-navy-300 sm:p-10">
                <span
                  aria-hidden="true"
                  className="absolute -top-7 -right-4 font-serif text-[96px] leading-none font-medium text-navy-100 transition-colors duration-300 group-hover:text-gold-100"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px w-12 bg-gold-500"
                />
                <h3 className="font-serif text-xl font-medium text-navy-900">
                  {achievement.title}
                </h3>
                <p className="text-[14px] leading-[1.85] text-soft">
                  {achievement.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}