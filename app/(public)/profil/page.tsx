import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  CalendarDays,
  Compass,
  Landmark,
  Leaf,
  MapPin,
  Mountain,
  Sprout,
  Store,
  Users,
  Wheat,
} from "lucide-react";

import PageHero from "../../../src/components/page-hero";
import Reveal from "../../../src/components/reveal";

const quickFacts = [
  { icon: Users, value: "1.240", label: "Jiwa penduduk" },
  { icon: Building2, value: "312", label: "Kepala keluarga" },
  { icon: Mountain, value: "245", label: "Hektar luas wilayah" },
  { icon: MapPin, value: "4", label: "Dusun" },
];

const potensi = [
  {
    icon: Wheat,
    title: "Pertanian",
    description:
      "Sawah irigasi dan kebun sayur menjadi sumber penghidupan utama warga.",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=900&q=85",
    tag: "Sektor utama",
  },
  {
    icon: Store,
    title: "UMKM Lokal",
    description:
      "Olahan pangan, kerajinan tangan, dan warung warga yang terus tumbuh.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=85",
    tag: "24 pelaku usaha",
  },
  {
    icon: Leaf,
    title: "Wisata Alam",
    description:
      "Hamparan hijau, aliran sungai, dan jalur perbukitan yang potensial.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85",
    tag: "3 titik wisata",
  },
  {
    icon: Landmark,
    title: "Budaya",
    description:
      "Tradisi gotong royong dan kesenian lokal yang masih terjaga.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
    tag: "Warisan hidup",
  },
];

const sejarah = [
  {
    year: "1942",
    title: "Awal permukiman",
    text: "Wilayah ini mulai dibuka oleh beberapa keluarga petani yang mencari lahan subur di kaki perbukitan.",
  },
  {
    year: "1978",
    title: "Desa mulai tertata",
    text: "Jalan penghubung antar-dusun dibangun dan balai desa pertama berdiri sebagai pusat kegiatan warga.",
  },
  {
    year: "2005",
    title: "Irigasi & pertanian",
    text: "Sistem irigasi diperluas, membuat sawah warga dapat panen lebih dari satu kali dalam setahun.",
  },
  {
    year: "2026",
    title: "Desa digital",
    text: "Bersama mahasiswa KKN, desa mulai membangun identitas digital dan memperluas pasar UMKM.",
  },
];

export const metadata: Metadata = {
  title: "Profil Desa",
  description:
    "Mengenal sejarah, potensi, wilayah, dan kehidupan masyarakat desa binaan KKN Digital.",
};

export default function ProfilPage() {
  return (
    <main className="overflow-hidden">
      <PageHero
        eyebrow="Profil Desa"
        title={
          <>
            Desa yang tumbuh dari{" "}
            <span className="display-italic text-[#78977c]">kebersamaan.</span>
          </>
        }
        description="Mengenal sejarah, potensi, wilayah, dan kehidupan masyarakat desa tempat kami melaksanakan Kuliah Kerja Nyata."
        meta={[
          { value: "1.240", label: "Jiwa" },
          { value: "312", label: "Keluarga" },
          { value: "245 Ha", label: "Wilayah" },
          { value: "4", label: "Dusun" },
        ]}
      />

      {/* HERO IMAGE */}
      <section className="container-page">
        <Reveal className="relative overflow-hidden rounded-[34px] border border-white/70 shadow-[0_40px_90px_-44px_rgba(18,41,31,0.55)]">
          <div className="relative aspect-[16/10] bg-[#dfe8d8] sm:aspect-[16/8] lg:aspect-[16/7]">
            <Image
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1800&q=85"
              alt="Pemandangan hijau wilayah desa binaan"
              fill
              priority
              sizes="(max-width: 1240px) 94vw, 1180px"
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a1e]/80 via-transparent to-transparent" />
          </div>

          <div className="absolute inset-x-4 bottom-4 sm:inset-x-7 sm:bottom-7">
            <div className="flex flex-col justify-between gap-4 rounded-[22px] border border-white/20 bg-white/12 p-5 backdrop-blur-2xl sm:flex-row sm:items-end sm:p-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  Wilayah Pengabdian
                </p>
                <h2 className="display mt-2 text-3xl text-white sm:text-4xl">
                  Desa Sukamaju
                </h2>
                <p className="mt-2 flex items-center gap-2 text-xs text-white/70">
                  <MapPin size={14} />
                  Kecamatan Cikarang · Kabupaten Bandung
                </p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-xl transition hover:bg-white/25"
              >
                Buka Peta <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* QUICK FACTS */}
      <section className="container-page py-10 md:py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <Reveal key={fact.label} delay={index * 80}>
                <div className="glass-card h-full rounded-[24px] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#e6efe1] text-[#356a4e]">
                    <Icon size={20} />
                  </span>
                  <p className="display mt-6 text-4xl text-[#1f4a37]">
                    {fact.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#829184]">
                    {fact.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SEJARAH */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#edf1e7]/60" />
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <span className="eyebrow">Sejarah Desa</span>
              <h2 className="display mt-4 text-[clamp(2.3rem,4.2vw,3.5rem)] text-[#1b2f25]">
                Jejak yang membentuk{" "}
                <span className="display-italic text-[#78977c]">hari ini.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-8 text-[#62756a]">
                Dari permukiman petani sederhana hingga menjadi desa yang
                terbuka pada perubahan. Setiap babak sejarahnya dibentuk oleh
                gotong royong warganya.
              </p>

              <div className="glass mt-8 flex items-start gap-3 rounded-[22px] p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#e6efe1] text-[#356a4e]">
                  <BookOpen size={18} />
                </span>
                <p className="text-sm leading-6 text-[#62756a]">
                  Sejarah desa adalah cerita tentang orang-orang biasa yang
                  saling menjaga — bukan hanya tentang bangunan atau angka.
                </p>
              </div>
            </Reveal>

            <div className="relative">
              <div className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-[#1f4a37]/25 via-[#1f4a37]/15 to-transparent" />
              <div className="space-y-5">
                {sejarah.map((item, index) => (
                  <Reveal key={item.year} delay={index * 90}>
                    <div className="group relative flex gap-5">
                      <span className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/70 text-[10px] font-bold text-[#356a4e] shadow-sm backdrop-blur-xl transition group-hover:bg-[#1f4a37] group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="glass-card flex-1 rounded-[22px] p-5">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-[#e6efe1] px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-[#356a4e]">
                            {item.year}
                          </span>
                          <h3 className="text-base font-extrabold text-[#1b2f25]">
                            {item.title}
                          </h3>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-[#6b7e72]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POTENSI */}
      <section className="section">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Potensi Desa</span>
            <h2 className="display mt-4 text-[clamp(2.3rem,4.2vw,3.5rem)] text-[#1b2f25]">
              Kekayaan yang tumbuh dari{" "}
              <span className="display-italic text-[#78977c]">tanah sendiri.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-[#62756a]">
              Empat pilar potensi yang menjadi fokus pendampingan kami bersama
              warga.
            </p>
          </Reveal>

          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {potensi.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 90}>
                  <article className="glass-card group h-full overflow-hidden rounded-[26px]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#dfe8d8]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 24vw"
                        unoptimized
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12291f]/55 to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl">
                        {item.tag}
                      </span>
                      <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/20 text-white backdrop-blur-xl">
                        <Icon size={16} />
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-extrabold tracking-tight text-[#1b2f25]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[#6b7e72]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOKASI */}
      <section className="container-page pb-20 md:pb-24">
        <Reveal className="glass overflow-hidden rounded-[30px]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-7 sm:p-10">
              <span className="eyebrow">Lokasi & Akses</span>
              <h2 className="display mt-4 text-[clamp(2rem,3.6vw,3rem)] text-[#1b2f25]">
                Mudah dijangkau,{" "}
                <span className="display-italic text-[#78977c]">
                  sulit dilupakan.
                </span>
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: Compass,
                    label: "Dari pusat kecamatan",
                    value: "± 12 menit · 6,4 km",
                  },
                  {
                    icon: Compass,
                    label: "Dari ibu kota kabupaten",
                    value: "± 45 menit · 24 km",
                  },
                  {
                    icon: CalendarDays,
                    label: "Akses transportasi",
                    value: "Jalan aspal · angkutan desa",
                  },
                ].map((row) => {
                  const Icon = row.icon;
                  return (
                    <div
                      key={row.label}
                      className="flex items-center gap-3 border-b border-[#1f4a37]/10 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-white/60 text-[#356a4e]">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9aa99b]">
                          {row.label}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-[#1b2f25]">
                          {row.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-8"
              >
                Lihat di Google Maps <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="relative min-h-[320px] overflow-hidden border-t border-[#1f4a37]/10 bg-[#dfe8d8] lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#eef3e8,transparent_55%),radial-gradient(circle_at_75%_80%,#c9dbc4,transparent_60%)]" />
              <div className="grid-lines absolute inset-0 opacity-70" />
              <svg
                className="absolute inset-0 h-full w-full text-[#8aa892]/50"
                viewBox="0 0 600 420"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M-20 300 C 90 250, 130 330, 230 280 S 380 200, 470 250 S 560 320, 640 270"
                  stroke="currentColor"
                  strokeWidth="16"
                  strokeLinecap="round"
                  opacity="0.35"
                />
                <path
                  d="M120 -20 C 160 90, 90 150, 150 230 S 220 340, 190 460"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                  opacity="0.3"
                />
              </svg>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="relative flex h-16 w-16 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#356a4e]/20" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white/80 bg-[#1f4a37] text-white shadow-xl">
                    <MapPin size={24} />
                  </span>
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-[18px] border border-white/80 bg-white/70 p-4 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#829184]">
                  Titik kumpul kegiatan
                </p>
                <p className="mt-1 text-sm font-bold text-[#1b2f25]">
                  Balai Desa Sukamaju
                </p>
                <p className="mt-0.5 text-xs text-[#6b7e72]">
                  Jl. Raya Desa No. 01, Kecamatan Cikarang
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container-page pb-20 md:pb-24">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-white/70 bg-white/40 px-7 py-8 backdrop-blur-xl sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-[#e6efe1] text-[#356a4e]">
              <Sprout size={22} />
            </span>
            <div>
              <h2 className="text-lg font-extrabold text-[#1b2f25]">
                Kenali orang-orang di balik perjalanan ini
              </h2>
              <p className="mt-1 text-sm text-[#6b7e72]">
                Tim mahasiswa yang belajar dan bertumbuh bersama warga desa.
              </p>
            </div>
          </div>
          <Link href="/anggota" className="btn btn-primary shrink-0">
            Lihat Anggota <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
