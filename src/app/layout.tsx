import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { WhatsAppButton } from '@/components/whatsapp-button';

// SEO Optimizado para Feedlot y Ganadería en Argentina y Latinoamérica
export const metadata: Metadata = {
  metadataBase: new URL('https://ganadero-sync-oficcial.vercel.app'),
  title: {
    default: 'GanaderoSync - Software de Gestión de Feedlot y Ganadería con IA | Argentina',
    template: '%s | GanaderoSync'
  },
  description: 'Software líder en gestión de feedlot, engorda de ganado y administración ganadera en Argentina y Latinoamérica. Optimiza tu producción con IA, trazabilidad completa, control de inventario y análisis predictivo. Solución integral para ganaderos modernos.',
  keywords: [
    // Keywords generales
    'software feedlot',
    'gestión de feedlot',
    'software ganadero',
    'gestión ganadera',
    'engorda de ganado',
    'software para ganadería',
    'trazabilidad ganadera',
    'control de ganado',
    // Keywords específicas de Argentina
    'software feedlot argentina',
    'gestión ganadera argentina',
    'software ganadero corrientes',
    'feedlot corrientes',
    'engorda de ganado argentina',
    'software para feedlot argentina',
    'administración de feedlot argentina',
    'trazabilidad bovina argentina',
    'software ganadero litoral',
    'feedlot nordeste argentino',
    // Keywords de funcionalidades
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
    'rentabilidad ganadera',
    // Keywords regionales
    'software ganadero latinoamérica',
    'feedlot latinoamérica',
    'gestión ganadera mercosur'
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
    locale: 'es_AR',
    url: 'https://ganadero-sync-oficcial.vercel.app',
    siteName: 'GanaderoSync',
    title: 'GanaderoSync - Software de Gestión de Feedlot y Ganadería con IA | Argentina',
    description: 'Transforma tu feedlot con el software más avanzado de gestión ganadera en Argentina. IA, trazabilidad, control total y análisis predictivo para maximizar tu rentabilidad.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'GanaderoSync - Software de Gestión de Feedlot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GanaderoSync - Software de Gestión de Feedlot y Ganadería con IA | Argentina',
    description: 'Transforma tu feedlot con IA, trazabilidad completa y análisis predictivo. Software líder en gestión ganadera en Argentina.',
    images: ['/logo.png'],
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
    canonical: 'https://ganadero-sync-oficcial.vercel.app',
    languages: {
      'es-AR': 'https://ganadero-sync-oficcial.vercel.app',
      'es-ES': 'https://ganadero-sync-oficcial.vercel.app',
      'es-MX': 'https://ganadero-sync-oficcial.vercel.app',
      'en-US': 'https://ganadero-sync-oficcial.vercel.app',
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
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
