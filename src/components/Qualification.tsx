import { Award } from 'lucide-react'
import Reveal from './Reveal'

export default function Qualification() {
  return (
    <section
      id="qualification"
      className="bg-navy-950 py-24 sm:py-32"
      aria-label="Qualification"
    >
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-gold-500/50">
            <Award size={32} strokeWidth={1.25} className="text-gold-400" />
          </div>
          <p className="mt-10 text-[11px] font-semibold tracking-[0.32em] text-gold-400 uppercase">
            Professional Qualification
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium text-white sm:text-4xl">
            Chartered Accountancy
          </h2>
          <div className="mx-auto mt-6 h-px w-14 bg-gold-500" />
          <p className="mt-8 inline-block border border-gold-500/40 bg-gold-500/5 px-8 py-3 text-sm font-semibold tracking-[0.18em] text-gold-300 uppercase">
            ACA Qualified — Pakistan
          </p>
        </Reveal>
      </div>
    </section>
  )
}