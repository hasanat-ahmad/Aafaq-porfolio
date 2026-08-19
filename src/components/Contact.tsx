import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { CONTACT, LINKS } from '../data/content'
import LinkedInIcon from './LinkedInIcon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const inputClasses =
  'w-full border border-line bg-white px-4 py-3.5 text-sm text-ink placeholder:text-soft/60 transition-colors duration-200 focus:border-gold-500 focus:outline-none'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(String(data.get('subject') ?? ''))
    const body = encodeURIComponent(
      `Name: ${String(data.get('name') ?? '')}\nEmail: ${String(
        data.get('email') ?? '',
      )}\n\n${String(data.get('message') ?? '')}`,
    )
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    setSent(true)
    form.reset()
  }

  return (
    <section
      id="contact"
      className="bg-paper py-24 sm:py-32"
      aria-label="Contact"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="09 — Contact"
          title="Let's Connect"
          description="Open to professional conversations, collaborations, and opportunities in audit, assurance, financial reporting, and risk management."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <address className="space-y-4 not-italic">
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-5 border border-line bg-white p-6 transition-all duration-300 hover:border-gold-500/60"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-navy-100 bg-paper transition-colors duration-300 group-hover:border-gold-500/50 group-hover:bg-gold-100/50">
                  <Mail size={19} strokeWidth={1.5} className="text-navy-700" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold tracking-[0.22em] text-gold-600 uppercase">
                    Email
                  </span>
                  <span className="mt-1 block text-sm font-medium break-all text-navy-900">
                    {CONTACT.email}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="group flex items-center gap-5 border border-line bg-white p-6 transition-all duration-300 hover:border-gold-500/60"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-navy-100 bg-paper transition-colors duration-300 group-hover:border-gold-500/50 group-hover:bg-gold-100/50">
                  <Phone size={19} strokeWidth={1.5} className="text-navy-700" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold tracking-[0.22em] text-gold-600 uppercase">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm font-medium text-navy-900">
                    {CONTACT.phone}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-5 border border-line bg-white p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-navy-100 bg-paper">
                  <MapPin size={19} strokeWidth={1.5} className="text-navy-700" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold tracking-[0.22em] text-gold-600 uppercase">
                    Location
                  </span>
                  <span className="mt-1 block text-sm font-medium text-navy-900">
                    {CONTACT.location}
                  </span>
                </span>
              </div>

              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 border border-line bg-white p-6 transition-all duration-300 hover:border-gold-500/60"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-navy-100 bg-paper transition-colors duration-300 group-hover:border-gold-500/50 group-hover:bg-gold-100/50">
                  <LinkedInIcon size={19} className="text-navy-700" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold tracking-[0.22em] text-gold-600 uppercase">
                    LinkedIn
                  </span>
                  <span className="mt-1 block text-sm font-medium text-navy-900">
                    Connect on LinkedIn
                  </span>
                </span>
              </a>
            </address>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="border border-line bg-white p-8 sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[11px] font-semibold tracking-[0.18em] text-navy-800 uppercase"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] font-semibold tracking-[0.18em] text-navy-800 uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-[11px] font-semibold tracking-[0.18em] text-navy-800 uppercase"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Subject of your message"
                  className={inputClasses}
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[11px] font-semibold tracking-[0.18em] text-navy-800 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message…"
                  className={`${inputClasses} resize-y`}
                />
              </div>

              {sent && (
                <p
                  role="status"
                  className="mt-5 flex items-center gap-2 border border-gold-500/40 bg-gold-100/40 px-4 py-3 text-sm text-navy-800"
                >
                  <CheckCircle2 size={16} className="text-gold-600" />
                  Thank you — your email application is being prepared.
                </p>
              )}

              <button
                type="submit"
                className="mt-8 w-full border border-navy-900 bg-navy-900 px-8 py-4 text-[13px] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:bg-navy-800 hover:shadow-[0_14px_30px_-12px_rgba(13,27,51,0.5)] sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}