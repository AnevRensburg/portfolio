import { ImageKey } from './image-manifest';

export interface Project {
  readonly id: string;
  readonly name: string;
  /** Short line under the name: what the business is. */
  readonly kind: string;
  readonly summary: string;
  /** What the site does for the business, shown as a checklist. */
  readonly highlights: readonly string[];
  readonly tags: readonly string[];
  readonly url: string;
  /** URL without the protocol, for display. */
  readonly urlLabel: string;
  readonly images: { readonly desktop: ImageKey; readonly full: ImageKey; readonly mobile: ImageKey };
  /** Brand colour used for the card's accent line. */
  readonly accent: string;
}

export const PROJECTS: readonly Project[] = [
  {
    id: 'symons',
    name: 'Symons Sport International',
    kind: 'Motorcycle parts importer · Bellville',
    summary:
      'A full rebuild of a long-running distributor’s website: a searchable product catalogue, a dealer finder for more than 100 dealers across Southern Africa, and a tribute page for the founder.',
    highlights: [
      'Live product search with a sticky brand menu',
      'Dealer finder grouped by province',
      'Old page links redirect, so Google rankings are kept',
    ],
    tags: ['Multi-page', 'Catalogue', 'Dealer finder', 'Custom domain'],
    url: 'https://www.symons-sport.co.za/',
    urlLabel: 'symons-sport.co.za',
    images: { desktop: 'work/symons-desktop', full: 'work/symons-full', mobile: 'work/symons-mobile' },
    accent: '#d62a2a',
  },
  {
    id: 'miamora',
    name: 'Miamora',
    kind: 'Perfume brand · Durbanville',
    summary:
      'A one-product shop for a handcrafted Eau de Parfum. Customers read the reviews, request a free sample or order a bottle, and the order arrives on WhatsApp ready to confirm.',
    highlights: [
      'WhatsApp order form with live totals and specials',
      'Google reviews on the page',
      'Product, price and delivery details set up for Google',
    ],
    tags: ['Single product', 'WhatsApp orders', 'Reviews', 'Custom domain'],
    url: 'https://miamora.co.za/',
    urlLabel: 'miamora.co.za',
    images: {
      desktop: 'work/miamora-desktop',
      full: 'work/miamora-full',
      mobile: 'work/miamora-mobile',
    },
    accent: '#c99a5b',
  },
  {
    id: 'bikestand',
    name: 'Bike Stand',
    kind: 'MTB & e-MTB workshop stand · Cape Town',
    summary:
      'A bold product page for a bicycle stand: what it fits, what it’s good for, a video of it in action and an order form that works on any phone.',
    highlights: [
      'Product video and photo gallery',
      'Multi-buy special applied to the order total',
      'Free courier or collection, chosen in the form',
    ],
    tags: ['Single product', 'Video', 'WhatsApp orders'],
    url: 'https://anevrensburg.github.io/bike-stand/',
    urlLabel: 'anevrensburg.github.io/bike-stand',
    images: {
      desktop: 'work/bikestand-desktop',
      full: 'work/bikestand-full',
      mobile: 'work/bikestand-mobile',
    },
    accent: '#f26b1d',
  },
  {
    id: 'serendipity',
    name: 'Serendipity Storage',
    kind: 'Storage cabinets for small spaces · Cape Town',
    summary:
      'A refresh that keeps the look customers know, rebuilt on a modern, faster base, with a new order form, review cards and a cleaner footer.',
    highlights: [
      'Order form that builds the order on WhatsApp',
      'Customer reviews shown as cards',
      'Same familiar design, now much faster',
    ],
    tags: ['Multi-page', 'Refresh', 'WhatsApp orders', 'Custom domain'],
    url: 'https://serendipitystorage.co.za/',
    urlLabel: 'serendipitystorage.co.za',
    images: {
      desktop: 'work/serendipity-desktop',
      full: 'work/serendipity-full',
      mobile: 'work/serendipity-mobile',
    },
    accent: '#4fc0d0',
  },
];
