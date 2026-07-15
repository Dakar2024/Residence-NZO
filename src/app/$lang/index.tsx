import { createFileRoute } from '@tanstack/react-router'
import { SiteNav } from '@/features/residence/components/nav'
import { Hero } from '@/features/residence/components/hero'
import { About } from '@/features/residence/components/about'
import { GuidedTour } from '@/features/residence/components/tour'
import {
  BathroomsSection,
  BedroomsSection,
  KitchenSection,
  LivingSection,
} from '@/features/residence/components/rooms'
import {
  AvailabilityBanner,
  PerksSection,
} from '@/features/residence/components/highlights'
import { GallerySection } from '@/features/residence/components/gallery'
import {
  ContactSection,
  CtaBanner,
  SiteFooter,
} from '@/features/residence/components/contact'

const TITLE = 'Résidence NZO · Villa moderne à Golf Park, Midvaal'
const DESCRIPTION =
  'Villa moderne à Golf Park, Midvaal (Afrique du Sud) : 3 chambres, 3 salles de bain, face au golf. Disponible à partir du 1er septembre 2026.'

export const Route = createFileRoute('/$lang/')({
  component: ResidencePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'og:image', content: '/images/facade.jpeg' },
      { name: 'twitter:title', content: TITLE },
      {
        name: 'script:ld+json',
        content: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Residence',
          name: 'Résidence NZO',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '81 Wattel Road',
            addressLocality: 'Golf Park, Meyerton',
            addressCountry: 'ZA',
          },
          numberOfBedrooms: 3,
          numberOfBathroomsTotal: 3,
          telephone: '+27844097527',
        }),
      },
    ],
  }),
})

function ResidencePage() {
  return (
    <div className="bg-cream font-body text-ink">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <GuidedTour />
        <LivingSection />
        <KitchenSection />
        <BedroomsSection />
        <BathroomsSection />
        <AvailabilityBanner />
        <PerksSection />
        <GallerySection />
        <CtaBanner />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
