import { useState } from 'react'
import { Trans, useLingui } from '@lingui/react/macro'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { TOUR_STEPS } from '../data'
import { useSwipe } from '../hooks/use-swipe'
import { Reveal } from './reveal'

export function GuidedTour() {
  const { i18n, t } = useLingui()
  const [index, setIndex] = useState(0)

  const total = TOUR_STEPS.length
  const step = TOUR_STEPS[index]
  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)
  const swipeHandlers = useSwipe(next, prev)

  return (
    <section id="visite" className="scroll-mt-20 bg-ink py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <Reveal className="mb-10">
          <p className="mb-3 text-xs uppercase tracking-[4px] text-gold">
            <Trans>Visite guidée</Trans>
          </p>
          <h2 className="font-display text-4xl font-medium md:text-[42px]">
            <Trans>Parcourez la maison pièce par pièce</Trans>
          </h2>
        </Reveal>

        <div
          {...swipeHandlers}
          className="relative h-[420px] overflow-hidden rounded-md bg-ink-deep md:h-[600px]"
        >
          <img
            key={step.src}
            src={step.src}
            alt={i18n._(step.label)}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-b from-transparent to-[rgba(13,16,21,0.9)] px-6 pb-8 pt-16 md:px-10">
            <p className="text-xs uppercase tracking-[3px] text-gold">
              <Trans>
                Étape {index + 1} / {total}
              </Trans>
            </p>
            <p className="mt-1.5 font-display text-3xl md:text-[34px]">
              {i18n._(step.label)}
            </p>
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

        <div className="mt-5 flex gap-2.5 overflow-x-auto pb-1">
          {TOUR_STEPS.map((thumb, i) => (
            <button
              key={`${thumb.src}-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={i18n._(thumb.label)}
              aria-current={i === index}
              className={`shrink-0 cursor-pointer overflow-hidden rounded-sm transition-opacity ${
                i === index
                  ? 'opacity-100 outline-2 outline-gold'
                  : 'opacity-45 hover:opacity-75'
              }`}
            >
              <img
                src={thumb.src}
                alt=""
                loading="lazy"
                className="block h-[54px] w-[76px] object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
