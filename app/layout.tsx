import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { site } from '@/lib/site'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: ['Abdul Mueed', 'Mueed', 'software architect', 'full stack engineer', 'software engineer', 'Next.js developer', 'SaaS founder', 'Karachi', 'Pakistan', ...site.products.map((p) => p.name)],
  alternates: { canonical: '/' },
  openGraph: { type: 'profile', url: site.url, siteName: site.name, title: site.title, description: site.description, locale: 'en_US', firstName: 'Abdul', lastName: 'Mueed' },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  icons: {
    icon: '/icon.png',
  },
}

export const viewport: Viewport = { themeColor: '#ffffff' }

const person = {
  '@type': 'Person',
  '@id': `${site.url}/#person`,
  name: site.name,
  url: site.url,
  image: `${site.url}/icon.png`,
  jobTitle: 'Software Architect & Full Stack Engineer',
  description: site.description,
  email: `mailto:${site.email}`,
  sameAs: site.sameAs,
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Software Architecture', 'DevOps', 'AI integration', 'Product Design'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'ProfilePage', '@id': `${site.url}/#page`, url: site.url, name: site.title, mainEntity: { '@id': `${site.url}/#person` } },
    { '@type': 'WebSite', '@id': `${site.url}/#website`, url: site.url, name: site.name, publisher: { '@id': `${site.url}/#person` } },
    person,
    {
      '@type': 'ItemList',
      name: 'Products by Abdul Mueed',
      itemListElement: site.products.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: { '@type': 'SoftwareApplication', name: p.name, url: p.url, description: p.description, applicationCategory: 'BusinessApplication', operatingSystem: 'Web', author: { '@id': `${site.url}/#person` }, mainEntityOfPage: `${site.portfolio}/project/${p.id}` },
      })),
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
