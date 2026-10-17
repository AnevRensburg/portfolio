/** Contact details and prices shown across the site. Change them here and they update everywhere. */
export const SITE = {
  name: 'Ané Janse van Rensburg',
  url: 'https://anevrensburg.github.io/portfolio',
  email: 'anejvr06@gmail.com',
  phoneDisplay: '071 547 7921',
  /** International format without "+" or spaces, as wa.me expects. */
  whatsappNumber: '27715477921',
  location: 'Durbanville, Cape Town',
  github: 'https://github.com/AnevRensburg',
} as const;

export const PRICES = {
  website: 'R200',
  maintenancePerHour: 'R50',
} as const;
