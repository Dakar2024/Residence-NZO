import { useState } from 'react'
import { Trans, useLingui } from '@lingui/react/macro'
import { Check, MapPin } from 'lucide-react'
import {
  ADDRESS_DISPLAY,
  IMAGES,
  MAPS_EMBED_URL,
  MAPS_LINK_URL,
  PHONE_TEL,
  WHATSAPP_URL,
} from '../data'
import { LocalizedLink } from '@/shared/components/LocalizedLink'
import { Reveal } from './reveal'

export function CtaBanner() {
  const { t } = useLingui()

  return (
    <section className="relative flex min-h-[440px] items-center justify-center overflow-hidden text-center">
      <img
        src={IMAGES.facade}
        alt={t`Façade de la villa`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(15,19,28,0.68)]" />
      <Reveal className="relative px-6 py-20 text-white">
        <h2 className="font-display text-[clamp(32px,4vw,48px)] font-medium">
          <Trans>Planifiez votre visite dès aujourd'hui</Trans>
        </h2>
        <p className="mx-auto mt-4 mb-8 max-w-xl text-[17px] font-light text-[#d8d5cf]">
          <Trans>
            Contactez-nous pour obtenir davantage d'informations sur cette
            propriété. Prix à discuter par téléphone.
          </Trans>
        </p>
        <a
          href="#contact"
          className="inline-block rounded-xs bg-gold px-10 py-4 text-[13px] font-medium uppercase tracking-[2px] text-ink transition-colors hover:bg-gold-light"
        >
          <Trans>Contactez-nous</Trans>
        </a>
      </Reveal>
    </section>
  )
}

export function ContactSection() {
  const { t } = useLingui()
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  /* 16px minimum: anything smaller triggers auto-zoom on focus in iOS Safari */
  const inputClass =
    'w-full rounded-sm border border-[#ddd8cd] bg-cream px-4 py-3.5 text-base outline-none transition-colors focus:border-gold'

  return (
    <section
      id="contact"
      className="mx-auto grid max-w-6xl scroll-mt-20 gap-12 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28"
    >
      <Reveal>
        <p className="mb-3 text-xs uppercase tracking-[4px] text-gold">
          <Trans>Contact</Trans>
        </p>
        <h2 className="mb-5 font-display text-4xl font-medium text-navy md:text-[42px]">
          <Trans>Parlons de votre projet</Trans>
        </h2>
        <div className="mb-10 flex flex-wrap gap-3.5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xs bg-whatsapp px-7 py-3.5 text-[13px] font-medium uppercase tracking-[1.5px] text-white transition-colors hover:bg-whatsapp-dark"
          >
            WhatsApp
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2.5 rounded-xs bg-navy px-7 py-3.5 text-[13px] font-medium uppercase tracking-[1.5px] text-white transition-colors hover:bg-navy-light"
          >
            <Trans>Appeler</Trans>
          </a>
        </div>
        <div className="overflow-hidden rounded-md border border-line">
          <iframe
            src={MAPS_EMBED_URL}
            title={t`Carte de la Résidence NZO`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[260px] w-full border-0"
          />
        </div>
        <a
          href={MAPS_LINK_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-3.5 inline-flex items-center gap-2 text-sm font-light text-body-text transition-colors hover:text-gold"
        >
          <MapPin size={16} strokeWidth={1.5} className="text-gold" />
          {ADDRESS_DISPLAY}
        </a>
      </Reveal>

      <Reveal
        delay={0.1}
        className="rounded-md border border-card-line bg-white p-7 shadow-[0_12px_40px_rgba(20,24,31,0.06)] md:p-11"
      >
        {sent ? (
          <div className="py-14 text-center">
            <Check size={40} strokeWidth={1.5} className="mx-auto mb-4 text-gold" />
            <p className="font-display text-[28px] text-navy">
              <Trans>Merci !</Trans>
            </p>
            <p className="font-light text-[#6b6f77]">
              <Trans>
                Votre message est prêt dans WhatsApp : il ne reste plus qu'à
                l'envoyer.
              </Trans>
            </p>
          </div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault()
              const text = [
                t`Bonjour, je m'appelle ${name}.`,
                t`Mon téléphone : ${phone}`,
                '',
                message,
              ].join('\n')
              window.open(
                `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`,
                '_blank',
                'noopener',
              )
              setSent(true)
            }}
          >
            <p className="text-lg font-medium text-navy">
              <Trans>Envoyez-nous un message</Trans>
            </p>
            <div>
              <label htmlFor="contact-name" className="sr-only">
                <Trans>Votre nom</Trans>
              </label>
              <input
                id="contact-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t`Votre nom`}
                autoComplete="name"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="sr-only">
                <Trans>Votre téléphone</Trans>
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t`Votre téléphone`}
                autoComplete="tel"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">
                <Trans>Votre message</Trans>
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t`Votre message`}
                rows={5}
                required
                className={`${inputClass} resize-y`}
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer rounded-xs bg-whatsapp py-4 text-[13px] font-medium uppercase tracking-[2px] text-white transition-colors hover:bg-whatsapp-dark active:translate-y-px"
            >
              <Trans>Envoyer sur WhatsApp</Trans>
            </button>
            <p className="text-xs font-light text-mute">
              <Trans>
                L'envoi se fait via WhatsApp : vous devez disposer d'un compte
                WhatsApp pour soumettre le formulaire.
              </Trans>
            </p>
          </form>
        )}
      </Reveal>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 pt-16 pb-8 text-[#9aa0aa] md:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 border-b border-white/8 pb-11 md:grid-cols-[2fr_1fr_1fr] md:gap-12">
        <div>
          <p className="mb-3.5 font-display text-[22px] tracking-[3px] text-white">
            RÉSIDENCE <span className="text-gold">NZO</span>
          </p>
          <p className="max-w-sm text-sm font-light leading-[1.7]">
            <Trans>
              Villa moderne au 81 Wattel Road, Golf Park, Meyerton. Confort,
              élégance et lumière, face au terrain de golf.
            </Trans>
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[2px] text-white">
            <Trans>Navigation</Trans>
          </p>
          <nav className="flex flex-col gap-2.5 text-sm font-light">
            <a href="#apropos" className="text-[#9aa0aa] transition-colors hover:text-gold">
              <Trans>À propos</Trans>
            </a>
            <a href="#visite" className="text-[#9aa0aa] transition-colors hover:text-gold">
              <Trans>Visite</Trans>
            </a>
            <a href="#galerie" className="text-[#9aa0aa] transition-colors hover:text-gold">
              <Trans>Galerie</Trans>
            </a>
            <LocalizedLink
              to="/privacy"
              className="text-[#9aa0aa] transition-colors hover:text-gold"
            >
              <Trans>Politique de confidentialité</Trans>
            </LocalizedLink>
          </nav>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[2px] text-white">Contact</p>
          <div className="flex flex-col gap-2.5 text-sm font-light">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="text-[#9aa0aa] transition-colors hover:text-gold"
            >
              WhatsApp
            </a>
            <a
              href={MAPS_LINK_URL}
              target="_blank"
              rel="noreferrer"
              className="text-[#9aa0aa] transition-colors hover:text-gold"
            >
              <Trans>81 Wattel Road, Golf Park, Meyerton, Afrique du Sud</Trans>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 pt-6 text-xs font-light tracking-[1px]">
        <p>
          <Trans>© 2026 Résidence NZO · Tous droits réservés</Trans>
        </p>
        <a
          href="https://yokkutelabs.com/en"
          target="_blank"
          rel="noreferrer"
          className="text-[#9aa0aa] transition-colors hover:text-gold"
        >
          Design by Yokkutelabs
        </a>
      </div>
    </footer>
  )
}
