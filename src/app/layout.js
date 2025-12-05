import Script from "next/script";
import StructuredData from "../components/StructuredData";
import "./globals.css";
import "./clash-display.css";

const siteUrl = "https://nittarab.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Patrick Barattin - Software Engineer & Entrepreneur",
    template: "%s | Patrick Barattin",
  },
  description:
    "Personal website of Patrick Barattin, software engineer and entrepreneur. AI Agent Developer, Full-Stack Engineer (TypeScript, Next.js, NestJS), and Fintech enthusiast.",
  keywords: [
    "Patrick Barattin",
    "Software Engineer",
    "Entrepreneur",
    "Ruby on Rails",
    "Fintech",
    "AI",
    "Web Development",
    "E-commerce",
    "AI Engineering",
    "Context Engineering",
    "AI Agents",
    "GitHub Copilot",
    "Cursor",
    "Team Transformation",
  ],
  authors: [{ name: "Patrick Barattin", url: siteUrl }],
  creator: "Patrick Barattin",
  publisher: "Patrick Barattin",
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
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Patrick Barattin - Software Engineer & Entrepreneur",
    description:
      "AI Agent Developer | Full-Stack Engineer (TypeScript, Next.js, NestJS) | Fintech enthusiast",
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
    site: "@nittarab",
    creator: "@nittarab",
    title: "Patrick Barattin - Software Engineer & Entrepreneur",
    description:
      "AI Agent Developer | Full-Stack Engineer (TypeScript, Next.js, NestJS) | Fintech enthusiast",
    images: ["/nittarab_profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  other: {
    "theme-color": "#ffffff",
  },
};

import Providers from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        {/* Preload hero image for faster Largest Contentful Paint */}
        <link rel="preload" as="image" href="/nittarab_profile.jpg" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WXVGFLXNJF"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WXVGFLXNJF');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
