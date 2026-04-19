import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ChinaSmartFinds - 中国好物精选 | Smart Shopping from China",
  description: "Discover the best Chinese products on Amazon, Temu, and AliExpress. Hand-picked quality items with great value.",
  keywords: ["Chinese products", "Amazon finds", "Temu deals", "AliExpress", "smart shopping", "China goods"],
  authors: [{ name: "ChinaSmartFinds" }],
  openGraph: {
    title: "ChinaSmartFinds - 中国好物精选",
    description: "Discover the best Chinese products on Amazon, Temu, and AliExpress.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChinaSmartFinds - 中国好物精选",
    description: "Discover the best Chinese products on Amazon, Temu, and AliExpress.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
