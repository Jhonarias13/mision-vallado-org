import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Misión Vallado - Protegiendo Niños del Abuso Sexual",
    template: "%s | Misión Vallado",
  },
  description:
    "Fundación dedicada a proteger niños, niñas y adolescentes del abuso sexual en Colombia. Programas de prevención, protección y educación.",
  keywords: ["protección infantil", "abuso sexual", "prevención", "niños", "Colombia", "fundación", "ONG"],
  authors: [{ name: "Misión Vallado" }],
  creator: "Misión Vallado",
  publisher: "Misión Vallado",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://misionvallado.org"),
  alternates: {
    canonical: "/",
    languages: {
      "es-CO": "/es",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Misión Vallado - Protegiendo Niños del Abuso Sexual",
    description: "Fundación dedicada a proteger niños, niñas y adolescentes del abuso sexual en Colombia.",
    url: "https://misionvallado.org",
    siteName: "Misión Vallado",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Misión Vallado - Protegiendo a una generación",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Misión Vallado - Protegiendo Niños del Abuso Sexual",
    description: "Fundación dedicada a proteger niños, niñas y adolescentes del abuso sexual en Colombia.",
    images: ["/og-image.jpg"],
    creator: "@misionvallado",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ef4444" />
        <meta name="msapplication-TileColor" content="#ef4444" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Misión Vallado",
              alternateName: "Fundación Misión Vallado",
              url: "https://misionvallado.org",
              logo: "https://misionvallado.org/logo-mision-vallado.png",
              description: "Fundación dedicada a proteger niños, niñas y adolescentes del abuso sexual en Colombia",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bogotá",
                addressCountry: "CO",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+57-1-234-5678",
                contactType: "customer service",
                email: "info@misionvallado.org",
              },
              sameAs: [
                "https://facebook.com/misionvallado",
                "https://instagram.com/misionvallado",
                "https://twitter.com/misionvallado",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
