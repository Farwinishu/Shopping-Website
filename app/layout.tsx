import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderTop from "@/public/components/HeaderTop";
import HeaderMain from "@/public/components/HeaderMain";
import NavBar from "@/public/components/NavBar";
import { Inter } from "next/font/google";
import Footer from "@/public/components/Footer";
const inter = Inter({
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hony Beast - E-commerce Store",
  description: "Shop the latest fashion, jewelry, perfumes and more at Hony Beast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <HeaderMain />
        <NavBar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}