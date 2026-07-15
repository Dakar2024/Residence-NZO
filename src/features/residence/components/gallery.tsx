import { useEffect, useState } from 'react'
import { Trans, useLingui } from '@lingui/react/macro'
import { X } from 'lucide-react'
import { GALLERY_IMAGES } from '../data'
import { Reveal } from './reveal'

export function GallerySection() {
  const { t } = useLingui()
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  return (
    <section id="galerie" className="scroll-mt-20 bg-ink py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-[4px] text-gold">
            <Trans>Galerie</Trans>
          </p>
          <h2 className="mb-11 font-display text-4xl font-medium text-white md:text-[42px]">
            <Trans>Toutes les photos</Trans>
          </h2>
        </Reveal>
        <div className="columns-2 gap-4 lg:columns-3">
          {GALLERY_IMAGES.map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setLightbox(src)}
              aria-label={t`Agrandir la photo`}
              className="mb-4 block w-full cursor-zoom-in overflow-hidden rounded-md break-inside-avoid"
            >
              <img
                src={src}
                alt={t`Photo de la propriété`}
                loading="lazy"
                className="block w-full transition-transform duration-500 hover:scale-[1.04]"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-100 flex cursor-zoom-out items-center justify-center bg-[rgba(10,12,16,0.94)] p-6 md:p-10"
        >
          <img
            src={lightbox}
            alt={t`Photo de la propriété`}
            className="max-h-full max-w-full rounded-sm shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          />
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label={t`Fermer`}
            className="absolute top-5 right-6 cursor-pointer text-white md:top-6 md:right-9"
          >
            <X size={30} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </section>
  )
}
