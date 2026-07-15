import { Trans, useLingui } from '@lingui/react/macro'
import { motion, useReducedMotion } from 'motion/react'
import { IMAGES } from '../data'

export function Hero() {
  const { t } = useLingui()
  const reduce = useReducedMotion()

  return (
    <section id="hero" className="relative min-h-[100dvh] overflow-hidden">
      <img
        src={IMAGES.facade}
        alt={t`Façade de la villa`}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-180 from-[rgba(15,19,28,0.55)] via-[rgba(15,19,28,0.35)] via-45% to-[rgba(15,19,28,0.72)]" />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center text-white"
      >
        <p className="mb-4 text-xs uppercase tracking-[5px] text-gold">
          Golf Park · Midvaal
        </p>
        <h1 className="max-w-4xl font-display text-[clamp(38px,6vw,72px)] font-medium leading-[1.1]">
          <Trans>Découvrez votre future résidence</Trans>
        </h1>
        <p className="mt-5 mb-10 max-w-2xl text-[clamp(16px,2vw,21px)] font-light text-[#e8e6e1]">
          <Trans>
            Une villa moderne alliant confort, élégance et espaces de vie
            lumineux.
          </Trans>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#visite"
            className="rounded-xs bg-gold px-8 py-4 text-[13px] font-medium uppercase tracking-[2px] text-ink transition-colors hover:bg-gold-light"
          >
            <Trans>Découvrir la propriété</Trans>
          </a>
          <a
            href="#contact"
            className="rounded-xs border border-white/60 px-8 py-4 text-[13px] uppercase tracking-[2px] text-white transition-colors hover:border-gold hover:text-gold"
          >
            <Trans>Nous contacter</Trans>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
