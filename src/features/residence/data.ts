import { msg } from '@lingui/core/macro'
import type { MessageDescriptor } from '@lingui/core'

export const IMAGES = {
  facade: '/images/facade.jpeg',
  living1: '/images/living-1.jpeg',
  living2: '/images/living-2.jpeg',
  living3: '/images/living-3.jpeg',
  kitchen1: '/images/kitchen-1.jpeg',
  kitchen2: '/images/kitchen-2.jpeg',
  kitchen3: '/images/kitchen-3.jpeg',
  hall: '/images/hall.jpeg',
  bedroom1: '/images/bedroom-1.jpeg',
  bedroom2: '/images/bedroom-2.jpeg',
  bedroom3: '/images/bedroom-3.jpeg',
  bathroomMain: '/images/bathroom-main.jpeg',
  bathroom1: '/images/bathroom-1.jpeg',
  laundry: '/images/laundry.jpeg',
  golf: '/images/golf.jpeg',
  detail1: '/images/detail-1.jpeg',
  detail2: '/images/detail-2.jpeg',
  detail3: '/images/detail-3.jpeg',
} as const

export interface TourStep {
  src: string
  label: MessageDescriptor
}

/*
 * Client-requested walkthrough order (Toff/indication.txt):
 * start on the house, kitchen when the text says so, main bathroom
 * with the bedrooms, and finish on the golf course.
 */
export const TOUR_STEPS: TourStep[] = [
  { src: IMAGES.facade, label: msg`La façade` },
  { src: IMAGES.living1, label: msg`Le salon` },
  { src: IMAGES.living2, label: msg`Le séjour` },
  { src: IMAGES.living3, label: msg`Le salon boisé` },
  { src: IMAGES.kitchen1, label: msg`La cuisine moderne` },
  { src: IMAGES.kitchen2, label: msg`La kitchenette` },
  { src: IMAGES.hall, label: msg`Le couloir` },
  { src: IMAGES.bedroom1, label: msg`La chambre principale` },
  { src: IMAGES.bedroom2, label: msg`Chambre` },
  { src: IMAGES.bedroom3, label: msg`Chambre` },
  { src: IMAGES.bathroomMain, label: msg`Salle de bain principale` },
  { src: IMAGES.bathroom1, label: msg`Salle de bain` },
  { src: IMAGES.laundry, label: msg`La buanderie` },
  { src: IMAGES.golf, label: msg`Le quartier Golf Park` },
]

export const LIVING_SLIDES: TourStep[] = [
  { src: IMAGES.living1, label: msg`Le salon` },
  { src: IMAGES.living2, label: msg`Le séjour` },
  { src: IMAGES.living3, label: msg`Le salon boisé` },
]

/* Same ordering as the approved prototype gallery */
export const GALLERY_IMAGES: string[] = [
  IMAGES.facade,
  IMAGES.living1,
  IMAGES.kitchen1,
  IMAGES.bathroomMain,
  IMAGES.living2,
  IMAGES.bedroom1,
  IMAGES.bathroom1,
  IMAGES.living3,
  IMAGES.bedroom2,
  IMAGES.hall,
  IMAGES.laundry,
  IMAGES.bedroom3,
  IMAGES.kitchen3,
  IMAGES.detail1,
  IMAGES.detail2,
  IMAGES.detail3,
  IMAGES.kitchen2,
  IMAGES.golf,
]

export const PHONE_DISPLAY = '+27 84 409 75 27'
export const PHONE_TEL = '+27844097527'
export const WHATSAPP_URL = 'https://wa.me/27844097527'

export const ADDRESS_DISPLAY = '81 Wattel Road, Golf Park, Meyerton'
const ADDRESS_QUERY = encodeURIComponent(
  '81 Wattel Road, Golf Park, Meyerton, South Africa',
)
/* Keyless Google Maps embed; swap for the Maps Embed API if a key is added later */
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${ADDRESS_QUERY}&output=embed`
export const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`
