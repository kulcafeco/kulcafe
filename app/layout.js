import './globals.css'

export const metadata = {
  title: 'KÜL CAFÉ & CO. | Specialty Coffee with Tropical Soul · Houston & Katy, TX',
  description: 'Latin-inspired specialty coffee, tropical matchas, and fresh-baked goods in Houston & Katy, TX. Order on Uber Eats. Stay KÜL.',
  openGraph: {
    title: 'KÜL CAFÉ & CO. | Specialty Coffee with Tropical Soul',
    description: 'Latin-inspired drinks, fresh-baked bread. Houston & Katy, TX. 4.7★ on Uber Eats.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  themeColor: '#FFFFE1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
