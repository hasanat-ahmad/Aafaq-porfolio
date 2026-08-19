import { Globe } from 'lucide-react'
import { COUNTRIES } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function GlobalExperience() {
  return (
    <section
      id="global"
      className="bg-white py-24 sm:py-32"
      aria-label="Global experience"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="08 — Global"
          title="International Experience"
          align="center"
          description="A career that has crossed borders — delivering audit and assurance across three countries."
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute top-8 right-[16.6%] left-[16.6%] hidden border-t border-dashed border-gold-500/50 lg:block"
          />
          <ol className="grid gap-12 lg:grid-cols-3 lg:gap-6">
            {COUNTRIES.map((country, i) => (
              <Reveal key={country.name} delay={i * 0.12}>
                <li className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/60 bg-white text-[13px] sm:text-2xl">
                    <Globe
                      size={20}
                      strokeWidth={1.25}
                      className="text-navy-800 sm:hidden"
                    />
                    <span className="hidden sm:inline" aria-hidden="true">
                      {country.flag}
                    </span>
                    <span className="sr-only">{country.name}</span>
                  </span>
                  <div className="mt-6 border border-line bg-paper px-6 py-7">
                    <p className="font-serif text-2xl font-medium text-navy-900">
                      {country.name}
                    </p>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-soft">
                      {country.detail}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}