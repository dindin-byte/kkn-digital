import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KKN Digital | Pengabdian untuk Masyarakat",
    template: "%s | KKN Digital",
  },
  description:
    "Platform digital dokumentasi kegiatan, program kerja, potensi desa, dan perjalanan pengabdian mahasiswa KKN.",
  keywords: [
    "KKN",
    "Kuliah Kerja Nyata",
    "pengabdian masyarakat",
    "profil desa",
    "program kerja",
    "KKN Digital",
  ],
  openGraph: {
    title: "KKN Digital | Pengabdian untuk Masyarakat",
    description:
      "Ruang digital untuk mengenal desa, program kerja, dan cerita pengabdian mahasiswa KKN.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
