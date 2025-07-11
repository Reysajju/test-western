import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Western Medical Writer - Professional Medical Writing Services",
  description: "Expert medical writing, editing, and publication support services for healthcare professionals and researchers.",
  keywords: "medical writing, medical editing, publication support, healthcare communications, clinical research",
  authors: [{ name: "Western Medical Writer" }],
  openGraph: {
    title: "Western Medical Writer - Professional Medical Writing Services",
    description: "Expert medical writing, editing, and publication support services for healthcare professionals and researchers.",
    type: "website",
    siteName: "Western Medical Writer",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://js.stripe.com/v3/" async />
      </head>
      <body className={`${inter.variable} antialiased bg-white`}>
        <ScrollProgress />
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
