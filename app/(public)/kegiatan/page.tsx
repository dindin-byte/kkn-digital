import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  MapPin,
  Users,
} from "lucide-react";

import PageHero from "../../../src/components/page-hero";
import Reveal from "../../../src/components/reveal";

const featured = {
  category: "Ekonomi Kreatif",
  title: "Pasar Rakyat Digital",
  description:
    "Warga dan mahasiswa berkolaborasi menghadirkan pasar rakyat yang mempertemukan produk lokal dengan pembayaran digital. Acara ini menjadi ruang belajar bersama tentang pemasaran modern tanpa meninggalkan suasana pasar tradisional.",
  date: "12 Juli 2026",
  location: "Balai Desa Sukamaju",
  image:
    "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1800&q=85",
  stats: [
    { value: "32", label: "Transaksi digital" },
    { value: "24", label: "UMKM terlibat" },
    { value: "400+", label: "Pengunjung" },
  ],
};

const timeline = [
  {
    day: "05",
    month: "JUL",
    category: "Pendidikan",
    title: "Kelas Belajar Bersama",
    description:
      "Sesi belajar interaktif untuk anak-anak desa dengan media pembelajaran digital dan permainan edukatif.",
    location: "SD Negeri 01",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85",
  },
  {
    day: "28",
    month: "JUN",
    category: "Lingkungan",
    title: "Menanam untuk Masa Depan",
    description:
      "Penanaman bibit pohon bersama warga di sepanjang aliran sungai desa sebagai upaya menjaga daerah resapan.",
    location: "Bantaran Sungai",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=85",
  },
  {
    day: "21",
    month: "JUN",
    category: "Sosial",
    title: "Survei & Pemetaan Potensi",
    description:
      "Kunjungan door-to-door untuk mengenal kebutuhan warga dan memetakan potensi yang belum tergarap.",
    location: "4 Dusun",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=85",
  },
  {
    day: "14",
    month: "JUN",
    category: "Kolaborasi",
    title: "Sosialisasi Program Kerja",
    description:
      "Diskusi terbuka bersama perangkat desa dan tokoh masyarakat untuk menyepakati arah program KKN.",
    location: "Kantor Desa",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=85",
  },
];

export const metadata: Metadata = {
  title: "Kegiatan",
  description:
    "Dokumentasi dan cerita kegiatan KKN Digital bersama masyarakat desa.",
};

export default function KegiatanPage() {
  return (
    <main className="overflow-hidden">
      <PageHero
        eyebrow="Dokumentasi Kegiatan"
        title={
          <>
            Cerita yang kami{" "}
            <span className="display-italic text-[#78977c]">rawat bersama.</span>
          </>
        }
        description="Setiap kegiatan adalah bab kecil dari perjalanan pengabdian — tentang warga, mahasiswa, dan hal-hal sederhana yang tumbuh menjadi perubahan."
        meta={[
          { value: "24", label: "Kegiatan" },
          { value: "08", label: "Program" },
          { value: "4", label: "Dusun" },
          { value: "90+", label: "Hari pengabdian" },
        ]}
      />

      {/* FEATURED */}
      <section className="container-page pb-16">
        <Reveal className="overflow-hidden rounded-[34px] border border-white/70 bg-white/40 shadow-[0_36px_80px_-44px_rgba(18,41,31,0.5)] backdrop-blur-xl">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[300px] bg-[#dfe8d8] lg:min-h-[520px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 1024px) 94vw, 58vw"
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12291f]/45 to-transparent" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                <Camera size={13} /> Kegiatan utama
              </span>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#e6efe1] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#356a4e]">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#8b9b8e]">
                  <CalendarDays size={13} /> {featured.date}
                </span>
              </div>

              <h2 className="display mt-5 text-[clamp(2rem,3.6vw,3.2rem)] text-[#1b2f25]">
                {featured.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#6b7e72]">
                {featured.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#62756a]">
                <MapPin size={14} className="text-[#78977c]" />
                {featured.location}
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3 border-t border-[#1f4a37]/10 pt-6">
                {featured.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="display text-2xl text-[#1f4a37] sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#9aa99b]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TIMELINE */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#edf1e7]/60" />
        <div className="page-glow -left-40 top-24 h-[24rem] w-[24rem] bg-[#c7dbc2]/50" />

        <div className="container-page relative">
          <Reveal className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="eyebrow">Linimasa kegiatan</span>
              <h2 className="display mt-4 text-[clamp(2.2rem,4.2vw,3.5rem)] text-[#1b2f25]">
                Dari hari ke hari,{" "}
                <span className="display-italic text-[#78977c]">
                  dari warga untuk warga.
                </span>
              </h2>
            </div>
            <Link href="/galeri" className="link-arrow">
              Lihat galeri <ArrowUpRight size={15} />
            </Link>
          </Reveal>

          <div className="relative mt-11">
            <div className="absolute bottom-6 left-[31px] top-6 hidden w-px bg-gradient-to-b from-[#1f4a37]/25 via-[#1f4a37]/15 to-transparent sm:block" />

            <div className="space-y-5">
              {timeline.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="group relative flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-6">
                    <div className="relative z-10 hidden w-16 shrink-0 flex-col items-center sm:flex">
                      <span className="flex h-16 w-16 flex-col items-center justify-center rounded-[18px] border border-white/80 bg-white/75 text-center shadow-sm backdrop-blur-xl transition group-hover:bg-[#1f4a37] group-hover:text-white">
                        <span className="text-lg font-extrabold leading-none">
                          {item.day}
                        </span>
                        <span className="mt-1 text-[9px] font-bold tracking-[0.14em] opacity-60">
                          {item.month}
                        </span>
                      </span>
                    </div>

                    <div className="glass-card flex flex-1 flex-col gap-4 rounded-[26px] p-4 sm:flex-row sm:items-center sm:p-5">
                      <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-[18px] bg-[#dfe8d8] sm:h-28 sm:w-40">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 90vw, 160px"
                          unoptimized
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#78977c]">
                            {item.category}
                          </span>
                          <span className="flex items-center gap-1 text-[10px] font-semibold text-[#9aa99b] sm:hidden">
                            <CalendarDays size={11} />
                            {item.day} {item.month}
                          </span>
                        </div>
                        <h3 className="mt-1.5 text-lg font-extrabold tracking-tight text-[#1b2f25]">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-7 text-[#6b7e72]">
                          {item.description}
                        </p>
                        <p className="mt-2.5 flex items-center gap-1.5 text-xs text-[#8b9b8e]">
                          <MapPin size={13} /> {item.location}
                        </p>
                      </div>

                      <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1f4a37]/10 bg-white/60 text-[#1f4a37] transition group-hover:bg-[#1f4a37] group-hover:text-white sm:flex">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-24">
        <Reveal className="glass-dark relative overflow-hidden rounded-[32px] px-7 py-12 text-white sm:px-12 md:py-16">
          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-[#7c9e7f]/20 blur-[70px]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="eyebrow eyebrow-plain text-[#b9d0b5]">
                Arsip visual
              </span>
              <h2 className="display mt-4 max-w-xl text-[clamp(2rem,4vw,3.3rem)] text-white">
                Lebih banyak momen di{" "}
                <span className="display-italic text-[#b9d0b5]">
                  galeri kegiatan.
                </span>
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-white/60">
                Kumpulan foto dari lapangan: senyum warga, kerja bersama, dan
                hal-hal kecil yang membuat perjalanan ini berarti.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-self-end">
              <Link href="/galeri" className="btn btn-light">
                <Users size={16} /> Buka Galeri
              </Link>
              <Link
                href="/artikel"
                className="btn border border-white/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/15"
              >
                Baca Cerita <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
