import { createFileRoute } from '@tanstack/react-router'
import { Trans } from '@lingui/react/macro'
import { ArrowLeft } from 'lucide-react'
import { LocalizedLink } from '@/shared/components/LocalizedLink'

export const Route = createFileRoute('/$lang/privacy')({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: 'Politique de confidentialité · Résidence NZO' },
      {
        name: 'description',
        content:
          'Politique de confidentialité du site Résidence NZO : données collectées, cookies et services tiers.',
      },
    ],
  }),
})

function PrivacyPage() {
  return (
    <div className="min-h-[100dvh] bg-cream font-body text-ink">
      <header className="bg-ink px-5 py-4 md:px-12">
        <LocalizedLink
          to="/"
          className="font-display text-[22px] tracking-[3px] text-white"
        >
          RÉSIDENCE <span className="text-gold">NZO</span>
        </LocalizedLink>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-14 md:px-10 md:py-20">
        <LocalizedLink
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-light text-body-text transition-colors hover:text-gold"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
          <Trans>Retour au site</Trans>
        </LocalizedLink>

        <h1 className="mb-3 font-display text-4xl font-medium text-navy md:text-5xl">
          <Trans>Politique de confidentialité</Trans>
        </h1>
        <p className="mb-12 text-sm font-light text-mute">
          <Trans>Dernière mise à jour : 15 juillet 2026</Trans>
        </p>

        <div className="flex flex-col gap-10 font-light leading-[1.8] text-body-text">
          <section>
            <h2 className="mb-3 font-display text-2xl font-medium text-navy">
              <Trans>Données collectées</Trans>
            </h2>
            <p>
              <Trans>
                Lorsque vous utilisez le formulaire de contact, nous recueillons
                uniquement les informations que vous fournissez : votre nom,
                votre numéro de téléphone et votre message. Aucune autre donnée
                personnelle n'est collectée lors de votre navigation.
              </Trans>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-2xl font-medium text-navy">
              <Trans>Utilisation de vos informations</Trans>
            </h2>
            <p>
              <Trans>
                Ces informations servent exclusivement à répondre à vos demandes
                de renseignements ou de visite concernant la propriété. Elles ne
                sont ni vendues, ni partagées avec des tiers à des fins
                commerciales.
              </Trans>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-2xl font-medium text-navy">
              <Trans>Cookies</Trans>
            </h2>
            <p>
              <Trans>
                Ce site utilise un seul cookie technique, destiné à mémoriser la
                langue que vous avez choisie. Aucun cookie publicitaire ou de
                suivi n'est utilisé.
              </Trans>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-2xl font-medium text-navy">
              <Trans>Services tiers</Trans>
            </h2>
            <p>
              <Trans>
                La carte de localisation est fournie par Google Maps : son
                affichage est soumis à la politique de confidentialité de
                Google. Les boutons WhatsApp et Appeler ouvrent des services
                externes, qui appliquent leurs propres conditions.
              </Trans>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-2xl font-medium text-navy">
              <Trans>Vos droits</Trans>
            </h2>
            <p>
              <Trans>
                Vous pouvez à tout moment demander l'accès, la rectification ou
                la suppression des informations que vous nous avez transmises,
                en nous contactant via WhatsApp ou par téléphone.
              </Trans>
            </p>
          </section>
        </div>
      </main>

      <footer className="flex flex-wrap items-center justify-between gap-2 bg-ink px-5 py-6 text-xs font-light tracking-[1px] text-[#9aa0aa] md:px-12">
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
      </footer>
    </div>
  )
}
