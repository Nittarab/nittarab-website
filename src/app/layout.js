import { Inter } from "next/font/google";
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
