import { Trans, useLingui } from '@lingui/react/macro'
import { LandPlot } from 'lucide-react'
import { IMAGES } from '../data'
import { Reveal } from './reveal'

export function About() {
  const { t } = useLingui()

  return (
    <section
      id="apropos"
      className="mx-auto grid max-w-6xl scroll-mt-20 items-center gap-10 px-5 py-20 md:grid-cols-[1fr_1.1fr] md:gap-16 md:px-10 md:py-28"
    >
      <Reveal>
        <p className="mb-3 text-xs uppercase tracking-[4px] text-gold">
          <Trans>Présentation</Trans>
        </p>
        <h2 className="mb-5 font-display text-4xl font-medium text-navy md:text-[42px]">
          <Trans>À propos de cette propriété</Trans>
        </h2>
        <p className="text-[17px] font-light leading-[1.8] text-body-text">
          <Trans>
            Découvrez une résidence moderne pensée pour offrir un cadre de vie
            exceptionnel. Chaque espace a été conçu avec soin afin de proposer
            confort, luminosité et élégance. Cette propriété répond
            parfaitement aux attentes des familles, des investisseurs ou des
            personnes recherchant un logement de standing.
          </Trans>
        </p>
        <dl className="mt-9 flex flex-wrap gap-x-9 gap-y-5 border-t border-line pt-6">
          <div>
            <dd className="font-display text-3xl text-navy">3+</dd>
            <dt className="text-xs uppercase tracking-[2px] text-mute">
              <Trans>Chambres</Trans>
            </dt>
          </div>
          <div>
            <dd className="font-display text-3xl text-navy">3</dd>
            <dt className="text-xs uppercase tracking-[2px] text-mute">
              <Trans>Salles de bain</Trans>
            </dt>
          </div>
          <div>
            <dd className="flex h-9 items-center text-navy">
              <LandPlot size={28} strokeWidth={1.5} />
            </dd>
            <dt className="text-xs uppercase tracking-[2px] text-mute">
              <Trans>Face au golf</Trans>
            </dt>
          </div>
        </dl>
      </Reveal>
      <Reveal delay={0.15} className="overflow-hidden rounded-md shadow-[0_24px_60px_rgba(20,24,31,0.18)]">
        <img
          src={IMAGES.facade}
          alt={t`Extérieur de la villa`}
          loading="lazy"
          className="block h-[320px] w-full object-cover md:h-[460px]"
        />
      </Reveal>
    </section>
  )
}
