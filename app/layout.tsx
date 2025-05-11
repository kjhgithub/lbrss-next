import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "LBRSS", template: "%s | LBRSS" },
  description: "Luke Barnes Racket Stringing Services",
  keywords: ["Squash", "Paddle", "Racket", "Stringing", "Badminton"],
  manifest: "https://lbrss.haki-tech.com/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    url: "https://lbrss.haki-tech.com",
    type: "website",
    title: "LBRSS",
    description: "Luke Barnes Racket Stringing Services",
    images: [
      {
        url: "https://lbrss.haki-tech.com/android-chrome-512x512.png",
        type: "image/png",
        width: 512,
        height: 512,
      },
    ],
  },
  robots: "noai, noimageai",
};

export const viewport: Viewport = {
  themeColor: "#f1f5f9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-base-200`}>
        <div className="container mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
