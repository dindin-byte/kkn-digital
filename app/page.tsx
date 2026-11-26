import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  GraduationCap,
  Heart,
  Leaf,
  MapPin,
  Quote,
  Sparkles,
  Sprout,
  TrendingUp,
  Users,
} from "lucide-react";

import Reveal from "../src/components/reveal";

const stats = [
  { value: "12", label: "Anggota aktif" },
  { value: "08", label: "Program kerja" },
  { value: "24", label: "Kegiatan" },
  { value: "01", label: "Desa binaan" },
];

const programs = [
  {
    number: "01",
    category: "Pendidikan",
    title: "Ruang Belajar Digital",
    description:
      "Pendampingan literasi digital dan kelas belajar kreatif untuk generasi muda desa.",
    metric: "120+ siswa",
    icon: BookOpen,
  },
  {
    number: "02",
    category: "Lingkungan",
    title: "Desa Bersih & Hijau",
    description:
      "Gerakan kebersihan, penanaman pohon, dan edukasi pengelolaan sampah bersama warga.",
    metric: "18 titik aksi",
    icon: Sprout,
  },
  {
    number: "03",
    category: "Ekonomi",
    title: "UMKM Naik Kelas",
    description:
      "Membantu pelaku usaha lokal go-digital melalui branding dan pemasaran online.",
    metric: "24 UMKM",
    icon: TrendingUp,
  },
];

const activities = [
  {
    category: "Ekonomi Kreatif",
    title: "Pasar Rakyat Digital",
    description:
      "Warga dan mahasiswa berkolaborasi menghadirkan pasar rakyat dengan pembayaran digital.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1400&q=85",
    location: "Balai Desa",
    date: "12 Juli 2026",
  },
  {
    category: "Pendidikan",
    title: "Kelas Belajar Bersama",
    description:
      "Sesi belajar interaktif untuk anak-anak desa dengan media pembelajaran digital.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85",
    location: "SD Negeri 01",
    date: "05 Juli 2026",
  },
  {
    category: "Lingkungan",
    title: "Menanam untuk Masa Depan",
    description:
      "Penanaman bibit pohon bersama warga di sepanjang aliran sungai desa.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=85",
    location: "Bantaran Sungai",
    date: "28 Juni 2026",
  },
];

const articles = [
  {
    category: "Cerita Lapangan",
    title: "Ketika Teknologi Bertemu dengan Kearifan Lokal",
    excerpt:
      "Bagaimana proses digitalisasi justru membuat kami semakin menghargai cara warga desa bekerja.",
    date: "18 Juli 2026",
    read: "6 menit",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "Refleksi",
    title: "Belajar Bukan Sekadar Memberi, Tetapi Mendengar",
    excerpt:
      "Pengalaman pertama kami duduk bersama kelompok tani dan memahami kebutuhan yang sesungguhnya.",
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
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative pb-16 pt-32 sm:pt-36 md:pb-24 md:pt-44">
        <div className="page-glow -left-48 top-16 h-[28rem] w-[28rem] bg-[#cfe0c9]/70" />
        <div className="page-glow -right-32 top-48 h-[24rem] w-[24rem] bg-[#e6ebd7]/80" />
        <div className="grid-lines pointer-events-none absolute inset-x-0 top-0 h-[34rem] opacity-50" />

        <div className="container-page relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
            <div className="animate-fade-up">
              <span className="glass-pill text-[10px] font-bold uppercase tracking-[0.2em] text-[#356a4e]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6f9a78] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#356a4e]" />
                </span>
                Kuliah Kerja Nyata · 2026
              </span>

              <h1 className="display mt-7 max-w-[15ch] text-[clamp(3.1rem,7vw,5.8rem)] text-[#1b2f25]">
                Mengabdi dengan hati,{" "}
                <span className="display-italic text-[#78977c]">
                  menumbuhkan
                </span>{" "}
                masa depan desa.
              </h1>

              <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#62756a]">
                Ruang digital untuk mengenal perjalanan, program kerja, dan
                kontribusi mahasiswa dalam membangun masyarakat yang lebih
                berdaya — dimulai dari hal-hal kecil yang nyata.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href="/program-kerja" className="btn btn-primary">
                  Jelajahi Program
                  <ArrowRight size={16} />
                </Link>
                <Link href="/profil" className="btn btn-ghost">
                  Kenali Desa
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-[#1f4a37]/10 pt-7">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
                    ].map((src) => (
                      <span
                        key={src}
                        className="relative h-10 w-10 overflow-hidden rounded-full border-[3px] border-[#f6f7f1]"
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="40px"
                          unoptimized
                          className="object-cover"
                        />
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1b2f25]">
                      12 mahasiswa, satu tujuan
                    </p>
                    <p className="text-xs text-[#829184]">
                      Belajar, berkolaborasi, berdampak.
                    </p>
                  </div>
                </div>

                <div className="hidden items-center gap-2 text-xs font-semibold text-[#62756a] sm:flex">
                  <Leaf size={14} className="text-[#78977c]" />
                  Desa Binaan · 2026
                </div>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="animate-fade-up delay-2 relative mx-auto w-full max-w-[540px] lg:mx-0">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#b9d0b5]/60 blur-2xl" />
              <div className="relative overflow-hidden rounded-[34px] border border-white/70 bg-[#dbe7d6] shadow-[0_40px_90px_-40px_rgba(18,41,31,0.55)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85"
                    alt="Hamparan sawah dan perbukitan hijau di sekitar desa binaan"
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a1e]/85 via-[#0f2a1e]/10 to-transparent" />

                  <div className="absolute left-5 top-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/85 backdrop-blur-xl">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c3e0bd]" />
                      Our Journey
                    </span>
                  </div>

                  <div className="absolute inset-x-5 bottom-5">
                    <div className="rounded-[24px] border border-white/20 bg-white/12 p-5 backdrop-blur-2xl">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                        Lokasi Pengabdian
                      </p>
                      <h2 className="display mt-2 text-2xl text-white">
                        Desa yang tumbuh bersama warganya.
                      </h2>
                      <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/15 pt-4">
                        <span className="flex items-center gap-2 text-xs text-white/75">
                          <MapPin size={14} />
                          Jawa Barat, Indonesia
                        </span>
                        <Link
                          href="/profil"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1f4a37] transition hover:rotate-45"
                          aria-label="Lihat profil desa"
                        >
                          <ArrowUpRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 top-1/3 hidden rounded-[20px] border border-white/80 bg-white/80 px-4 py-3 shadow-[0_24px_50px_-24px_rgba(18,41,31,0.45)] backdrop-blur-2xl sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#e6efe1] text-[#356a4e]">
                    <Users size={19} />
                  </span>
                  <div>
                    <p className="display text-2xl leading-none text-[#1f4a37]">
                      12
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#829184]">
                      Anggota
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 right-6 hidden items-center gap-2 rounded-full border border-white/80 bg-white/85 px-4 py-2.5 text-xs font-bold text-[#1f4a37] shadow-[0_18px_40px_-20px_rgba(18,41,31,0.45)] backdrop-blur-xl md:flex">
                <Sparkles size={14} className="text-[#78977c]" />
                Sejak Juni 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-[#1f4a37]/10 bg-white/35 py-5 backdrop-blur-xl">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[...Array(2)].map((_, group) => (
              <div
                key={group}
                className="flex shrink-0 items-center gap-10"
                aria-hidden={group === 1}
              >
                {[
                  "Pendidikan",
                  "Lingkungan",
                  "Ekonomi Kreatif",
                  "Kesehatan",
                  "Digitalisasi Desa",
                  "Budaya Lokal",
                ].map((item) => (
                  <span
                    key={`${group}-${item}`}
                    className="flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.24em] text-[#6d8174]"
                  >
                    {item}
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b6c8b3]" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-page py-10 md:py-14">
        <div className="glass grid grid-cols-2 gap-y-8 rounded-[28px] px-6 py-8 sm:px-10 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center md:text-left ${
                index !== 0
                  ? "md:border-l md:border-[#1f4a37]/10 md:pl-8"
                  : ""
              }`}
            >
              <p className="display text-4xl text-[#1f4a37] md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#829184]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="tentang" className="section">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <Reveal className="relative mx-auto w-full max-w-[500px] lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] border border-white/70 bg-[#dfe8d8] shadow-[0_36px_80px_-40px_rgba(18,41,31,0.5)]">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1100&q=85"
                  alt="Mahasiswa KKN berdiskusi bersama warga desa"
                  fill
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12291f]/45 to-transparent" />
              </div>

              <div className="absolute -bottom-8 -right-3 w-[62%] overflow-hidden rounded-[24px] border-[6px] border-[#f6f7f1] shadow-xl sm:-right-6">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=85"
                    alt="Kegiatan menanam bibit bersama warga"
                    fill
                    sizes="(max-width: 1024px) 55vw, 26vw"
                    unoptimized
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -left-3 top-8 rounded-[18px] border border-white/80 bg-white/80 px-4 py-3 shadow-[0_20px_44px_-24px_rgba(18,41,31,0.5)] backdrop-blur-2xl sm:-left-6">
                <p className="display text-3xl leading-none text-[#1f4a37]">
                  24
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#829184]">
                  Kegiatan
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="eyebrow">Tentang Kami</span>
              <h2 className="display mt-5 text-[clamp(2.4rem,4.6vw,3.9rem)] text-[#1b2f25]">
                Lebih dari sekadar{" "}
                <span className="display-italic text-[#78977c]">
                  program pengabdian.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#62756a]">
                Kami adalah mahasiswa yang hadir untuk belajar, berkolaborasi,
                dan memberikan kontribusi nyata. Melalui program yang tumbuh
                dari kebutuhan warga, kami ingin meninggalkan dampak yang
                bertahan jauh setelah KKN berakhir.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: GraduationCap,
                    title: "Belajar dari lapangan",
                    text: "Setiap program dimulai dari mendengar dan memahami kebutuhan warga.",
                  },
                  {
                    icon: Heart,
                    title: "Berkolaborasi dengan hati",
                    text: "Warga bukan objek program, tetapi mitra dalam setiap langkah.",
                  },
                  {
                    icon: Sprout,
                    title: "Menumbuhkan keberlanjutan",
                    text: "Kami merancang program agar terus berjalan setelah kami pulang.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-transparent p-1 transition hover:border-white/70 hover:bg-white/40"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-white/80 bg-white/60 text-[#356a4e] shadow-sm backdrop-blur-xl">
                        <Icon size={19} />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#1b2f25]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#7a8b7f]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link href="/anggota" className="link-arrow mt-8">
                Kenali tim kami <ArrowUpRight size={15} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="program" className="section relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#edf1e7]/70" />
        <div className="page-glow -right-24 top-24 h-[24rem] w-[24rem] bg-[#c7dbc2]/50" />

        <div className="container-page relative">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Apa yang kami kerjakan</span>
              <h2 className="display mt-4 text-[clamp(2.3rem,4.4vw,3.7rem)] text-[#1b2f25]">
                Program unggulan
              </h2>
              <p className="mt-3 max-w-lg text-[15px] leading-7 text-[#6b7e72]">
                Langkah kecil yang dirancang bersama warga untuk perubahan yang
                lebih besar.
              </p>
            </div>
            <Link href="/program-kerja" className="link-arrow">
              Semua program <ArrowUpRight size={15} />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Reveal key={program.number} delay={index * 100}>
                  <article className="glass-card group flex h-full flex-col rounded-[26px] p-7">
                    <div className="flex items-start justify-between">
                      <span className="display text-3xl text-[#b6c8b3]">
                        {program.number}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#e6efe1] text-[#356a4e] transition duration-500 group-hover:-rotate-6 group-hover:bg-[#1f4a37] group-hover:text-white">
                        <Icon size={20} />
                      </span>
                    </div>

                    <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#78977c]">
                      {program.category}
                    </p>
                    <h3 className="mt-2 text-xl font-extrabold leading-snug tracking-tight text-[#1b2f25]">
                      {program.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-[#6b7e72]">
                      {program.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between border-t border-[#1f4a37]/10 pt-5">
                      <span className="text-xs font-bold text-[#356a4e]">
                        {program.metric}
                      </span>
                      <Link
                        href="/program-kerja"
                        aria-label={`Lihat program ${program.title}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1f4a37]/10 bg-white/60 text-[#1f4a37] transition group-hover:bg-[#1f4a37] group-hover:text-white"
                      >
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="kegiatan" className="section">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Cerita perjalanan kami</span>
              <h2 className="display mt-4 text-[clamp(2.3rem,4.4vw,3.7rem)] text-[#1b2f25]">
                Kegiatan terbaru
              </h2>
            </div>
            <Link href="/kegiatan" className="link-arrow">
              Semua kegiatan <ArrowUpRight size={15} />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal>
              <Link
                href="/kegiatan"
                className="group relative block h-full overflow-hidden rounded-[30px] border border-white/70 shadow-[0_30px_70px_-36px_rgba(18,41,31,0.5)]"
              >
                <div className="relative aspect-[4/5] min-h-[420px] w-full bg-[#dfe8d8] sm:aspect-auto sm:h-full">
                  <Image
                    src={activities[0].image}
                    alt={activities[0].title}
                    fill
                    sizes="(max-width: 1024px) 92vw, 52vw"
                    unoptimized
                    className="object-cover transition duration-[900ms] group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a1e]/90 via-[#0f2a1e]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/85 backdrop-blur-xl">
                    {activities[0].category}
                  </span>
                  <h3 className="display mt-4 max-w-md text-3xl text-white sm:text-4xl">
                    {activities[0].title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
                    {activities[0].description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-white/60">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} /> {activities[0].date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {activities[0].location}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>

            <div className="grid gap-5">
              {activities.slice(1).map((activity, index) => (
                <Reveal key={activity.title} delay={100 + index * 100}>
                  <Link
                    href="/kegiatan"
                    className="glass-card group flex h-full gap-4 rounded-[26px] p-3.5 sm:gap-5"
                  >
                    <div className="relative h-32 w-28 shrink-0 overflow-hidden rounded-[18px] bg-[#dfe8d8] sm:h-40 sm:w-40">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        sizes="160px"
                        unoptimized
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center py-1 pr-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#78977c]">
                        {activity.category}
                      </p>
                      <h3 className="mt-2 text-lg font-extrabold leading-snug tracking-tight text-[#1b2f25]">
                        {activity.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#6b7e72]">
                        {activity.description}
                      </p>
                      <p className="mt-3 flex items-center gap-1.5 text-xs text-[#8b9b8e]">
                        <CalendarDays size={13} /> {activity.date}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="container-page">
        <Reveal className="glass relative overflow-hidden rounded-[30px] px-7 py-12 text-center sm:px-14 md:py-16">
          <Quote
            size={54}
            className="mx-auto text-[#b6c8b3]"
            strokeWidth={1.2}
          />
          <blockquote className="display mx-auto mt-6 max-w-3xl text-[clamp(1.7rem,3.4vw,2.7rem)] leading-[1.25] text-[#1b2f25]">
            “Pengabdian terbaik bukan tentang seberapa banyak yang kita beri,
            tetapi seberapa dalam kita{" "}
            <span className="display-italic text-[#78977c]">mendengar.</span>”
          </blockquote>
          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b6c8b3]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#829184]">
              Tim KKN Digital
            </p>
            <span className="h-px w-8 bg-[#b6c8b3]" />
          </div>
        </Reveal>
      </section>

      {/* ARTICLES */}
      <section className="section">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Catatan dari lapangan</span>
              <h2 className="display mt-4 text-[clamp(2.3rem,4.4vw,3.7rem)] text-[#1b2f25]">
                Artikel terbaru
              </h2>
            </div>
            <Link href="/artikel" className="link-arrow">
              Semua artikel <ArrowUpRight size={15} />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {articles.map((article, index) => (
              <Reveal key={article.title} delay={index * 100}>
                <Link
                  href="/artikel"
                  className="glass-card group flex h-full flex-col overflow-hidden rounded-[26px]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#dfe8d8]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 92vw, 33vw"
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
                      <span>{article.read} baca</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20 md:pb-24">
        <Reveal className="glass-dark relative overflow-hidden rounded-[34px] px-7 py-14 text-center text-white sm:px-12 md:py-20">
          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-[#7c9e7f]/25 blur-[70px]" />

          <div className="relative z-10">
            <span className="eyebrow eyebrow-plain justify-center text-[#b9d0b5]">
              Mari Berkolaborasi
            </span>
            <h2 className="display mx-auto mt-5 max-w-3xl text-[clamp(2.2rem,4.6vw,3.9rem)] text-white">
              Karena perubahan dimulai dari{" "}
              <span className="display-italic text-[#b9d0b5]">
                kebersamaan.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">
              Mari menjadi bagian dari perjalanan dan kontribusi positif untuk
              masyarakat.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:hello@kkndigital.id" className="btn btn-light">
                Hubungi Kami <ArrowRight size={16} />
              </a>
              <Link
                href="/program-kerja"
                className="btn border border-white/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/15"
              >
                Lihat Program <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
