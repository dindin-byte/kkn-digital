import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  PenLine,
} from "lucide-react";

import PageHero from "../../../src/components/page-hero";
import Reveal from "../../../src/components/reveal";
import InstagramIcon from "../../../src/components/instagram-icon";

const featured = {
  category: "Cerita Lapangan",
  title: "Ketika Teknologi Bertemu dengan Kearifan Lokal",
  excerpt:
    "Awalnya kami datang dengan rencana digitalisasi. Namun warga mengajarkan bahwa teknologi hanya alat — yang membuatnya bermakna adalah cara kita menghargai cara kerja yang sudah ada.",
  date: "18 Juli 2026",
  read: "6 menit",
  author: "Tim KKN Digital",
  image:
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1800&q=85",
};

const articles = [
  {
    category: "Refleksi",
    title: "Belajar Bukan Sekadar Memberi, Tetapi Mendengar",
    excerpt:
      "Pengalaman pertama duduk bersama kelompok tani dan memahami kebutuhan yang sesungguhnya.",
    date: "10 Juli 2026",
    read: "5 menit",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Potensi Desa",
    title: "Di Balik Hijau: Potensi yang Belum Terlihat",
    excerpt:
      "Menelusuri kebun, sawah, dan kerajinan warga yang menyimpan cerita dan peluang besar.",
    date: "02 Juli 2026",
    read: "7 menit",
    image:
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Ekonomi",
    title: "Pasar yang Menyatukan Banyak Cerita",
    excerpt:
      "Di balik transaksi digital pertama warga, ada keberanian untuk mencoba hal baru bersama.",
    date: "14 Juli 2026",
    read: "4 menit",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Pendidikan",
    title: "Mengajar dengan Cerita, Belajar dengan Hati",
    excerpt:
      "Kelas yang tidak selalu tentang angka, tetapi tentang rasa ingin tahu yang tumbuh.",
    date: "07 Juli 2026",
    read: "5 menit",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Lingkungan",
    title: "Sampah yang Menjadi Berkah",
    excerpt:
      "Mengubah kebiasaan membuang menjadi kebiasaan memilah bersama ibu-ibu PKK desa.",
    date: "30 Juni 2026",
    read: "6 menit",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Tim",
    title: "Hal-Hal Kecil yang Kami Bawa Pulang",
    excerpt:
      "Bukan hanya pengalaman, tetapi cara pandang baru tentang arti pulang dan berkontribusi.",
    date: "24 Juni 2026",
    read: "4 menit",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
  },
];

export const metadata: Metadata = {
  title: "Artikel",
  description:
    "Refleksi, cerita lapangan, dan potensi desa dari perjalanan KKN Digital.",
};

export default function ArtikelPage() {
  return (
    <main className="overflow-hidden">
      <PageHero
        eyebrow="Artikel & Berita"
        title={
          <>
            Catatan dari{" "}
            <span className="display-italic text-[#78977c]">
              perjalanan kami.
            </span>
          </>
        }
        description="Refleksi, cerita warga, dan hal-hal yang kami pelajari selama mendampingi desa. Ditulis dengan hati, dari sudut pandang mahasiswa yang sedang belajar."
        meta={[
          { value: "18", label: "Artikel" },
          { value: "04", label: "Kategori" },
          { value: "06", label: "Penulis" },
          { value: "90+", label: "Hari" },
        ]}
      />

      {/* FEATURED */}
      <section className="container-page pb-16">
        <Reveal className="grid overflow-hidden rounded-[34px] border border-white/70 bg-white/40 shadow-[0_36px_80px_-44px_rgba(18,41,31,0.5)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[300px] bg-[#dfe8d8] lg:min-h-[500px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 1024px) 94vw, 56vw"
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12291f]/45 to-transparent" />
            <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
              <PenLine size={13} /> Pilihan editor
            </span>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10">
            <span className="w-fit rounded-full bg-[#e6efe1] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#356a4e]">
              {featured.category}
            </span>

            <h2 className="display mt-5 text-[clamp(2rem,3.6vw,3.1rem)] text-[#1b2f25]">
              {featured.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#6b7e72]">
              {featured.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#8b9b8e]">
              <span className="flex items-center gap-1.5">
                <CalendarDays size={13} /> {featured.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock3 size={13} /> {featured.read} baca
              </span>
              <span>{featured.author}</span>
            </div>

            <Link href="/artikel" className="btn btn-primary mt-7 w-fit">
              Baca Artikel <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ARTICLE GRID */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#edf1e7]/60" />
        <div className="page-glow -right-32 top-16 h-[24rem] w-[24rem] bg-[#c7dbc2]/50" />

        <div className="container-page relative">
          <Reveal className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="eyebrow">Arsip tulisan</span>
              <h2 className="display mt-4 text-[clamp(2.2rem,4.2vw,3.5rem)] text-[#1b2f25]">
                Semua cerita
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#829184]">
              Ditulis oleh tim KKN sebagai bagian dari proses belajar dan
              refleksi bersama warga.
            </p>
          </Reveal>

          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Reveal key={article.title} delay={(index % 3) * 90}>
                <Link
                  href="/artikel"
                  className="glass-card group flex h-full flex-col overflow-hidden rounded-[26px]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#dfe8d8]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                      unoptimized
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-extrabold leading-snug tracking-tight text-[#1b2f25]">
                      {article.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-7 text-[#6b7e72]">
                      {article.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[#1f4a37]/10 pt-4 text-xs text-[#8b9b8e]">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1.5">
                        <Clock3 size={12} /> {article.read}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-24">
        <Reveal className="glass flex flex-col items-start justify-between gap-6 rounded-[28px] px-7 py-9 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-[#e6efe1] text-[#356a4e]">
              <InstagramIcon size={21} />
            </span>
            <div>
              <h2 className="text-lg font-extrabold text-[#1b2f25]">
                Ikuti cerita terbaru kami
              </h2>
              <p className="mt-1 max-w-lg text-sm leading-7 text-[#6b7e72]">
                Dokumentasi harian, potongan cerita, dan momen di balik layar
                tersedia di Instagram KKN Digital.
              </p>
            </div>
          </div>
          <a
            href="#"
            className="btn btn-primary shrink-0"
            aria-label="Buka Instagram KKN Digital"
          >
            Kunjungi Instagram <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </section>
    </main>
  );
}
