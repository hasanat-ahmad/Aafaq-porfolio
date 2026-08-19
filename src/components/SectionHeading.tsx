import Reveal from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
}: SectionHeadingProps) {
  const centered = align === 'center'
  const dark = tone === 'dark'

  return (
    <Reveal className={centered ? 'text-center' : ''}>
      <p className="text-[11px] font-semibold tracking-[0.28em] text-gold-600 uppercase">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-serif text-3xl font-medium sm:text-4xl ${
          dark ? 'text-white' : 'text-navy-900'
        } ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
      >
        {title}
      </h2>
      <div
        className={`mt-5 h-px w-14 bg-gold-500 ${centered ? 'mx-auto' : ''}`}
      />
      {description ? (
        <p
          className={`mt-6 max-w-2xl text-base leading-relaxed ${
            dark ? 'text-navy-300' : 'text-soft'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}