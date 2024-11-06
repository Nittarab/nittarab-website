import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import './clash-display.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Patrick Barattin - Software Engineer & Entrepreneur",
  description: "Personal website of Patrick Barattin, software engineer and entrepreneur. Passionate Ruby on Rails developer, Fintech enthusiast, and AI explorer.",
  keywords: ["Patrick Barattin", "Software Engineer", "Entrepreneur", "Ruby on Rails", "Fintech", "AI"],
  author: "Patrick Barattin",
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  openGraph: {
    title: "Patrick Barattin - Software Engineer & Entrepreneur",
    description: "Passionate Ruby on Rails developer | Fintech enthusiast | AI explorer",
    type: "website",
    url: "https://patrickbarattin.com", // Replace with your actual domain
    image: "/nittarab_profile.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@patrickbarattin", // Replace with your actual Twitter handle
    title: "Patrick Barattin - Software Engineer & Entrepreneur",
    description: "Passionate Ruby on Rails developer | Fintech enthusiast | AI explorer",
    image: "/nittarab_profile.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
      <head>
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
      <body>
        {children}
      </body>
    </html>
  );
}
