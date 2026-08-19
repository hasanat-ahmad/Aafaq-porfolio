import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { CONTACT } from '../data/content'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  })

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-950"
      aria-label="Introduction"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(198,168,104,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(198,168,104,0.05) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-gold-500/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-navy-500/[0.12] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-8 top-24 hidden h-24 w-px bg-gold-500/25 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 bottom-24 hidden h-24 w-px bg-gold-500/25 lg:block"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 pt-32 pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-8">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.32em] text-gold-400 uppercase"
          >
            ACA-Chartered Accountant
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 font-serif text-4xl leading-[1.12] font-medium text-white sm:text-5xl lg:text-6xl"
          >
            Sahibzada Aafaq Ahmad<span className="text-gold-400">, ACA</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 text-base font-medium tracking-wide text-navy-100 sm:text-lg"
          >
            Audit &amp; Assurance Professional
            <span className="text-gold-400"> | </span>
            IFRS
            <span className="text-gold-400"> | </span>
            Risk &amp; Internal Controls
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-navy-200/80"
          >
            ACA-qualified Audit &amp; Assurance professional with international
            experience across Pakistan, Saudi Arabia, and Qatar.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2.5 border border-gold-500/70 bg-gold-500/10 px-7 py-3.5 text-[13px] font-semibold tracking-wide text-gold-300 transition-all duration-300 hover:bg-gold-500 hover:text-navy-950"
            >
              View Experience
              <ArrowRight
                size={15}
                strokeWidth={1.75}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 border border-white/25 px-7 py-3.5 text-[13px] font-semibold tracking-wide text-white transition-all duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.p
            {...fadeUp(0.5)}
            className="mt-10 flex items-center gap-2 text-[12px] tracking-wide text-navy-300"
          >
            <MapPin size={13} strokeWidth={1.5} className="text-gold-400" />
            {CONTACT.location}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="relative hidden justify-center lg:flex"
        >
          <div className="absolute -inset-6 rounded-sm border border-gold-500/15" />
          <div className="relative flex aspect-[4/5] w-full max-w-[380px] flex-col overflow-hidden border border-white/15 bg-navy-900/60">
            <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-gold-500/50">
                <span className="font-serif text-4xl font-medium text-gold-300">
                  SA
                </span>
              </div>
              <div className="text-center">
                <p className="font-serif text-xl text-white">Aafaq Ahmad</p>
                <p className="mt-1 text-[11px] tracking-[0.24em] text-navy-300 uppercase">
                  Audit &amp; Assurance
                </p>
              </div>
            </div>
            <div className="border-t border-white/10 px-5 py-3.5">
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] text-navy-300 uppercase">
                <span>Islamabad</span>
                <span className="text-gold-400">Since 2021</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        aria-hidden="true"
      >
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
      </motion.div>
    </section>
  )
}