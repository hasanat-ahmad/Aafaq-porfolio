import Reveal from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <Reveal className={centered ? 'text-center' : ''}>
      <p
        className={`text-[11px] font-semibold tracking-[0.28em] text-gold-600 uppercase ${
          centered ? '' : ''
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-serif text-3xl font-medium text-navy-900 sm:text-4xl ${
          centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-5 h-px w-14 bg-gold-500 ${
          centered ? 'mx-auto' : ''
        }`}
      />
      {description ? (
        <p
          className={`mt-6 max-w-2xl text-base leading-relaxed text-soft ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}