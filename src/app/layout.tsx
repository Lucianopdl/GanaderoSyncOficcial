import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { WhatsAppButton } from '@/components/whatsapp-button';

// SEO Optimizado para Feedlot y Ganadería
export const metadata: Metadata = {
  metadataBase: new URL('https://ganaderosync.com'),
  title: {
    default: 'GanaderoSync - Software de Gestión de Feedlot y Ganadería con IA',
    template: '%s | GanaderoSync'
  },
  description: 'Software líder en gestión de feedlot, engorda de ganado y administración ganadera. Optimiza tu producción con IA, trazabilidad completa, control de inventario y análisis predictivo. Solución integral para ganaderos modernos.',
  keywords: [
    'software feedlot',
    'gestión de feedlot',
    'software ganadero',
    'gestión ganadera',
    'engorda de ganado',
    'software para ganadería',
    'trazabilidad ganadera',
    'control de ganado',
    'software para feedlot',
    'administración de feedlot',
    'gestión de engordas',
    'software bovino',
    'control de peso ganado',
    'inventario ganadero',
    'software para engorda',
    'ganadería inteligente',
    'IA para ganadería',
    'análisis predictivo ganado',
    'monitoreo de salud animal',
    'gestión de alimento ganado',
    'software para corral de engorda',
    'administración ganadera',
    'software para productores de carne',
    'optimización feedlot',
    'rentabilidad ganadera'
  ],
  authors: [{ name: 'GanaderoSync Global' }],
  creator: 'GanaderoSync Global',
  publisher: 'GanaderoSync Global',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://ganaderosync.com',
    siteName: 'GanaderoSync',
    title: 'GanaderoSync - Software de Gestión de Feedlot y Ganadería con IA',
    description: 'Transforma tu feedlot con el software más avanzado de gestión ganadera. IA, trazabilidad, control total y análisis predictivo para maximizar tu rentabilidad.',
    images: [
      {
        url: '/logo gs.png',
        width: 1200,
        height: 630,
        alt: 'GanaderoSync - Software de Gestión de Feedlot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GanaderoSync - Software de Gestión de Feedlot y Ganadería con IA',
    description: 'Transforma tu feedlot con IA, trazabilidad completa y análisis predictivo. Software líder en gestión ganadera.',
    images: ['/logo gs.png'],
    creator: '@GanaderoSync',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Reemplazar con código real
  },
  alternates: {
    canonical: 'https://ganaderosync.com',
    languages: {
      'es-ES': 'https://ganaderosync.com',
      'es-MX': 'https://ganaderosync.com/mx',
      'es-AR': 'https://ganaderosync.com/ar',
      'en-US': 'https://ganaderosync.com/en',
    },
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/favicon.ico', sizes: '16x16 32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Datos estructurados JSON-LD para SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GanaderoSync',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Windows, macOS, Linux',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    description: 'Software líder en gestión de feedlot, engorda de ganado y administración ganadera con inteligencia artificial, trazabilidad completa y análisis predictivo.',
    featureList: [
      'Control de ganado en feedlot',
      'Gestión de alimento y nutrición',
      'Monitoreo de salud animal',
      'Análisis financiero de feedlot',
      'Predicciones con IA',
      'Trazabilidad completa',
    ],
    screenshot: 'https://ganaderosync.com/logo gs.png',
    author: {
      '@type': 'Organization',
      name: 'GanaderoSync Global',
      url: 'https://ganaderosync.com',
      logo: 'https://ganaderosync.com/logo gs.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-234-567-890',
        contactType: 'customer service',
        email: 'info@ganaderosync.com',
        availableLanguage: ['Spanish', 'English'],
      },
      sameAs: [
        'https://twitter.com/GanaderoSync',
        'https://linkedin.com/company/ganaderosync',
        'https://facebook.com/ganaderosync',
      ],
    },
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GanaderoSync Global',
    url: 'https://ganaderosync.com',
    logo: 'https://ganaderosync.com/logo gs.png',
    description: 'Líder en software de gestión de feedlot y ganadería con inteligencia artificial',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Global',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-890',
      contactType: 'sales',
      email: 'info@ganaderosync.com',
      availableLanguage: ['Spanish', 'English'],
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://ganaderosync.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Características',
        item: 'https://ganaderosync.com/#features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Precios',
        item: 'https://ganaderosync.com/#pricing',
      },
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06b6d4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />

        {/* Datos estructurados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        {children}
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
