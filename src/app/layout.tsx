import "../../styles/globals.css";
import { Inter } from "next/font/google";
import { Metadata, Viewport } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Om Namo Siwai | Premier Construction Services",
  description: "Om Namo Siwai Constructions offers world-class infrastructure services built on trust, transparency, and hard work. We deliver innovative, high-quality projects with timely completion, safety, and client satisfaction at the forefront.",
  keywords: "Om namo siwai construction, omnamosiwai, residential construction, commercial construction, building services, construction company, home renovation, project management, road construction company",
  authors: [{ name: "Om Namo Siwai" }],
  creator: "Om Namo Siwai",
  publisher: "Om Namo Siwai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.omnamosiwai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Om Namo Siwai - Building Excellence in Every Project',
    description: 'Transform your vision into reality with Om Namo Siwai expert construction services.',
    url: 'https://www.omnamosiwai.com',
    siteName: 'Om Namo Siwai',
    images: [
      {
        url: '/home2.jpg',
        width: 1200,
        height: 630,
        alt: 'Om Namo Siwai - Premier Construction Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Om Namo Siwai | Expert Construction Services',
    description: 'Om Namo Siwai Constructions offers world-class infrastructure services built on trust, transparency, and hard work',
    images: ['https://www.omnamosiwai.com/twitter-image.jpg'],
    creator: '@Omnamosiwai',
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
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-100">{children}</main>
      </body>
    </html>
  );
}