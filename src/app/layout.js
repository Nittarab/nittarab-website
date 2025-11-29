import { Inter } from "next/font/google";
import Script from 'next/script';
import StructuredData from '../components/StructuredData';
import "./globals.css";
import './clash-display.css'

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://patrickbarattin.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Patrick Barattin - Software Engineer & Entrepreneur",
    template: "%s | Patrick Barattin"
  },
  description: "Personal website of Patrick Barattin, software engineer and entrepreneur. Passionate Ruby on Rails developer, Fintech enthusiast, and AI explorer.",
  keywords: ["Patrick Barattin", "Software Engineer", "Entrepreneur", "Ruby on Rails", "Fintech", "AI", "Web Development", "E-commerce"],
  authors: [{ name: "Patrick Barattin", url: siteUrl }],
  creator: "Patrick Barattin",
  publisher: "Patrick Barattin",
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
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Patrick Barattin - Software Engineer & Entrepreneur",
    description: "Passionate Ruby on Rails developer | Fintech enthusiast | AI explorer",
    type: "website",
    url: siteUrl,
    siteName: "Patrick Barattin",
    locale: "en_US",
    images: [
      {
        url: "/nittarab_profile.jpg",
        width: 400,
        height: 400,
        alt: "Patrick Barattin - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@patrickbarattin",
    creator: "@patrickbarattin",
    title: "Patrick Barattin - Software Engineer & Entrepreneur",
    description: "Passionate Ruby on Rails developer | Fintech enthusiast | AI explorer",
    images: ["/nittarab_profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
      <head>
        <StructuredData />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WXVGFLXNJF"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WXVGFLXNJF');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
