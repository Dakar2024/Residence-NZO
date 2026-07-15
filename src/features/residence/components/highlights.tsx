import { Trans } from '@lingui/react/macro'
import { Armchair, DraftingCompass, House, Sun } from 'lucide-react'
import type { ReactNode } from 'react'
import { Reveal } from './reveal'

export function AvailabilityBanner() {
  return (
    <section className="bg-navy px-6 py-24 text-center text-white">
      <Reveal>
        <p className="mb-4 text-xs uppercase tracking-[4px] text-gold">
          <Trans>Disponibilité</Trans>
        </p>
        <p className="mx-auto max-w-3xl font-display text-[clamp(32px,4.5vw,54px)] font-medium">
          <Trans>Disponible à partir du 1er septembre 2026</Trans>
        </p>
        <a
          href="#contact"
          className="mt-9 inline-block rounded-xs bg-gold px-10 py-4 text-[13px] font-medium uppercase tracking-[2px] text-ink transition-colors hover:bg-gold-light"
        >
          <Trans>Réserver une visite</Trans>
        </a>
      </Reveal>
    </section>
  )
}

interface Perk {
  icon: ReactNode
  title: ReactNode
  text: ReactNode
}

const PERKS: Perk[] = [
  {
    icon: <Armchair size={24} strokeWidth={1.5} />,
    title: <Trans>Confort moderne</Trans>,
    text: <Trans>Des espaces pensés pour votre bien-être.</Trans>,
  },
  {
    icon: <DraftingCompass size={24} strokeWidth={1.5} />,
    title: <Trans>Architecture contemporaine</Trans>,
    text: <Trans>Une conception moderne et élégante.</Trans>,
  },
  {
    icon: <Sun size={24} strokeWidth={1.5} />,
    title: <Trans>Espaces lumineux</Trans>,
    text: (
      <Trans>De grandes ouvertures offrant une excellente luminosité.</Trans>
    ),
  },
  {
    icon: <House size={24} strokeWidth={1.5} />,
    title: <Trans>Cadre agréable</Trans>,
    text: (
      <Trans>
        Une résidence idéale pour vivre en toute tranquillité, face au golf.
      </Trans>
    ),
  },
]

export function PerksSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
      <Reveal>
        <h2 className="mb-14 text-center font-display text-4xl font-medium text-navy md:text-[42px]">
          <Trans>Pourquoi choisir cette propriété</Trans>
        </h2>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {PERKS.map((perk, i) => (
          <Reveal
            key={i}
            delay={i * 0.08}
            className="rounded-md border border-card-line bg-white px-6 py-9 text-center shadow-[0_6px_24px_rgba(20,24,31,0.05)]"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sand text-navy">
              {perk.icon}
            </div>
            <p className="mb-2.5 font-medium tracking-[0.5px] text-navy">
              {perk.title}
            </p>
            <p className="text-sm font-light leading-[1.7] text-[#6b6f77]">
              {perk.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
