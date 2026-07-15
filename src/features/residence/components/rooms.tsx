import { useState } from 'react'
import { Trans, useLingui } from '@lingui/react/macro'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { IMAGES, LIVING_SLIDES } from '../data'
import { useSwipe } from '../hooks/use-swipe'
import { Reveal } from './reveal'

export function LivingSection() {
  const { i18n, t } = useLingui()
  const [index, setIndex] = useState(0)

  const total = LIVING_SLIDES.length
  const slide = LIVING_SLIDES[index]
  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)
  const swipeHandlers = useSwipe(next, prev)

  return (
    <section>
      <div className="grid min-h-[560px] md:grid-cols-[1.5fr_1fr]">
        <div
          {...swipeHandlers}
          className="relative h-72 overflow-hidden md:h-auto"
        >
          <img
            key={slide.src}
            src={slide.src}
            alt={i18n._(slide.label)}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-linear-to-b from-transparent to-[rgba(13,16,21,0.75)] px-5 pb-5 pt-14 md:px-7">
            <p className="font-display text-2xl text-white md:text-[28px]">
              {i18n._(slide.label)}
            </p>
            <div className="flex items-center gap-2 pb-2">
              {LIVING_SLIDES.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={i18n._(s.label)}
                  aria-current={i === index}
                  className={`h-2 w-2 cursor-pointer rounded-full transition-colors ${
                    i === index ? 'bg-gold' : 'bg-white/45 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={prev}
            aria-label={t`Étape précédente`}
            className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-ink/55 text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold md:left-5 md:h-13 md:w-13"
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={t`Étape suivante`}
            className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-ink/55 text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold md:right-5 md:h-13 md:w-13"
          >
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex flex-col justify-center bg-cream px-6 py-12 md:px-14 md:py-16">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-[4px] text-gold">
              <Trans>Espace de vie</Trans>
            </p>
            <h2 className="mb-4 font-display text-3xl font-medium text-navy md:text-[38px]">
              <Trans>Un salon spacieux et lumineux</Trans>
            </h2>
            <p className="font-light leading-[1.8] text-body-text">
              <Trans>
                Profitez d'un vaste espace de vie baigné de lumière naturelle,
                idéal pour recevoir votre famille ou vos invités dans une
                ambiance chaleureuse et raffinée.
              </Trans>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function KitchenSection() {
  const { t } = useLingui()

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[4px] text-gold">
          <Trans>Cuisine</Trans>
        </p>
        <h2 className="mb-4 font-display text-4xl font-medium text-navy md:text-[42px]">
          <Trans>Une cuisine moderne</Trans>
        </h2>
        <p className="font-light leading-[1.8] text-body-text">
          <Trans>
            Découvrez des espaces lumineux de cuisine, équipés pour répondre
            aux besoins du quotidien tout en conservant une esthétique
            contemporaine.
          </Trans>
        </p>
      </Reveal>
      <Reveal className="grid gap-4 md:grid-cols-[1.4fr_1fr] md:grid-rows-[280px_280px]">
        <img
          src={IMAGES.kitchen1}
          alt={t`La cuisine moderne`}
          loading="lazy"
          className="block h-64 w-full rounded-md object-cover md:row-span-2 md:h-full"
        />
        <img
          src={IMAGES.kitchen2}
          alt={t`La kitchenette`}
          loading="lazy"
          className="block h-64 w-full rounded-md object-cover md:h-full"
        />
        <img
          src={IMAGES.kitchen3}
          alt={t`Plan de travail de la cuisine`}
          loading="lazy"
          className="block h-64 w-full rounded-md object-cover md:h-full"
        />
      </Reveal>
    </section>
  )
}

export function BedroomsSection() {
  const { t } = useLingui()

  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[4px] text-gold">
            <Trans>Chambres</Trans>
          </p>
          <h2 className="mb-4 font-display text-4xl font-medium text-navy md:text-[42px]">
            <Trans>Des chambres confortables</Trans>
          </h2>
          <p className="font-light leading-[1.8] text-body-text">
            <Trans>
              Chaque chambre offre un espace généreux, une excellente
              luminosité et une atmosphère propice au repos.
            </Trans>
          </p>
        </Reveal>
        <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <img
            src={IMAGES.bedroom1}
            alt={t`La chambre principale`}
            loading="lazy"
            className="block h-80 w-full rounded-md object-cover"
          />
          <img
            src={IMAGES.bedroom2}
            alt={t`Chambre`}
            loading="lazy"
            className="block h-80 w-full rounded-md object-cover"
          />
          <img
            src={IMAGES.bedroom3}
            alt={t`Chambre`}
            loading="lazy"
            className="block h-80 w-full rounded-md object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}

export function BathroomsSection() {
  const { t } = useLingui()

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[4px] text-gold">
          <Trans>Salles de bain</Trans>
        </p>
        <h2 className="mb-4 font-display text-4xl font-medium text-navy md:text-[42px]">
          <Trans>Des salles de bain élégantes</Trans>
        </h2>
        <p className="font-light leading-[1.8] text-body-text">
          <Trans>
            Des finitions modernes, des équipements de qualité et un design
            raffiné pour un confort optimal.
          </Trans>
        </p>
      </Reveal>
      <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <img
          src={IMAGES.bathroom1}
          alt={t`Salle de bain`}
          loading="lazy"
          className="block h-[360px] w-full rounded-md object-cover"
        />
        <img
          src={IMAGES.bathroomMain}
          alt={t`Salle de bain principale`}
          loading="lazy"
          className="block h-[360px] w-full rounded-md object-cover"
        />
        <img
          src={IMAGES.laundry}
          alt={t`La buanderie`}
          loading="lazy"
          className="block h-[360px] w-full rounded-md object-cover"
        />
      </Reveal>
    </section>
  )
}
