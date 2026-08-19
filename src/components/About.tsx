import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const STATS = [
  { value: '5+', label: 'Years of Professional Experience' },
  { value: '3', label: 'Countries of International Experience' },
  { value: '6', label: 'Industry Sectors Served' },
  { value: 'ACA', label: 'Qualified Chartered Accountant' },
]

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 sm:py-32" aria-label="About">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="01 — About"
          title="Professional Profile"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal delay={0.05}>
            <div className="space-y-6 text-base leading-[1.85] text-soft">
              <p>
                ACA-qualified Audit &amp; Assurance professional with
                approximately five years of experience in external audit
                engagements across multinational and local organizations.
                Experienced in planning, executing, and completing audits in
                accordance with IFRS and International Standards on Auditing
                while managing multiple engagements and collaborating with
                stakeholders.
              </p>
              <p>
                Professional experience spans Technology, Telecommunications,
                Manufacturing, Real Estate, Oil &amp; Petroleum, and other
                sectors.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative h-full border border-line bg-white p-8">
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 h-1 w-16 bg-gold-500"
              />
              <p className="text-[11px] font-semibold tracking-[0.28em] text-gold-600 uppercase">
                Profile
              </p>
              <h3 className="mt-4 font-serif text-2xl text-navy-900">
                An Executive Summary
              </h3>
              <p className="mt-5 text-sm leading-[1.9] text-soft">
                A detail-driven professional who plans, executes, and completes
                audits with discipline, precision, and a commitment to quality
                — across borders, sectors, and stakeholder expectations.
                Currently serving with KPMG Professional Services in Riyadh,
                Saudi Arabia.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 border-y border-line bg-white">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 0.08}
                className="border-line lg:border-r lg:last:border-r-0"
              >
                <div
                  className={`flex h-full flex-col gap-3 px-6 py-10 sm:px-8 ${
                    i % 2 === 1 ? 'border-l border-line lg:border-l-0' : ''
                  } ${
                    i > 1 ? 'border-t border-line lg:border-t-0' : ''
                  }`}
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-4xl font-medium text-navy-900 sm:text-5xl">
                    {stat.value}
                    <span className="text-gold-500" aria-hidden="true">
                      .
                    </span>
                  </dd>
                  <dd className="text-[12px] leading-relaxed tracking-wide text-soft uppercase">
                    {stat.label}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}