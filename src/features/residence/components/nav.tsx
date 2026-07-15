import { useState } from 'react'
import { useNavigate, useParams } from '@tanstack/react-router'
import { Trans } from '@lingui/react/macro'
import { Menu, X } from 'lucide-react'
import { setLocaleCookie, type Locale } from '@/shared/actions/cookies'

const NAV_LINKS = [
  { href: '#apropos', label: <Trans>À propos</Trans> },
  { href: '#visite', label: <Trans>Visite</Trans> },
  { href: '#galerie', label: <Trans>Galerie</Trans> },
  { href: '#contact', label: <Trans>Contact</Trans> },
] as const

export function SiteNav() {
  const navigate = useNavigate()
  const params = useParams({ strict: false })
  const [menuOpen, setMenuOpen] = useState(false)

  const locale = (params.lang as Locale) || 'en'
  const nextLocale: Locale = locale === 'fr' ? 'en' : 'fr'

  async function toggleLang() {
    await setLocaleCookie({ data: nextLocale })
    const newPath = window.location.pathname.replace(
      new RegExp(`^/${locale}(/|$)`),
      `/${nextLocale}$1`,
    )
    navigate({ to: newPath })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/70 text-white backdrop-blur-md">
      <div className="flex items-center justify-between px-5 py-4 md:px-12">
        <a
          href="#hero"
          className="font-display text-lg tracking-[2px] text-white md:text-[22px] md:tracking-[3px]"
        >
          RÉSIDENCE <span className="text-gold">NZO</span>
        </a>

        <nav className="hidden items-center gap-7 text-[13px] uppercase tracking-[1.5px] md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#e8e6e1] transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLang}
            className="cursor-pointer rounded-full border border-white/40 px-3.5 py-1.5 text-xs tracking-[2px] transition-colors hover:border-gold hover:text-gold"
          >
            {nextLocale.toUpperCase()}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleLang}
            className="cursor-pointer rounded-full border border-white/40 px-3 py-1 text-xs tracking-[2px]"
          >
            {nextLocale.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Menu"
            className="cursor-pointer p-1"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-ink/95 px-5 pb-4 pt-2 text-sm uppercase tracking-[1.5px] md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-[#e8e6e1]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
