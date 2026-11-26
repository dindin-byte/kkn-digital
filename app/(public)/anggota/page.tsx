import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  Users,
} from "lucide-react";

import PageHero from "../../../src/components/page-hero";
import Reveal from "../../../src/components/reveal";
import InstagramIcon from "../../../src/components/instagram-icon";

const anggota = [
  {
    nama: "Nama Ketua",
    jabatan: "Project Leader",
    prodi: "Program Studi",
    bidang: "Koordinator",
    foto:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    nomor: "01",
    instagram: "#",
  },
  {
    nama: "Nama Anggota 2",
    jabatan: "Vice Leader",
    prodi: "Program Studi",
    bidang: "Koordinator",
    foto:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    nomor: "02",
    instagram: "#",
  },
  {
    nama: "Nama Anggota 3",
    jabatan: "Secretary",
    prodi: "Program Studi",
    bidang: "Administrasi",
    foto:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
    nomor: "03",
    instagram: "#",
  },
  {
    nama: "Nama Anggota 4",
    jabatan: "Treasurer",
    prodi: "Program Studi",
    bidang: "Administrasi",
    foto:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85",
    nomor: "04",
    instagram: "#",
  },
  {
    nama: "Nama Anggota 5",
    jabatan: "Creative Division",
    prodi: "Program Studi",
    bidang: "Kreatif",
    foto:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    nomor: "05",
    instagram: "#",
  },
  {
    nama: "Nama Anggota 6",
    jabatan: "Documentation",
    prodi: "Program Studi",
    bidang: "Kreatif",
    foto:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
    nomor: "06",
    instagram: "#",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Berpikir terbuka",
    text: "Ide terbaik bisa datang dari siapa saja, termasuk dari obrolan di teras rumah warga.",
  },
  {
    icon: HeartHandshake,
    title: "Berkolaborasi",
    text: "Kami bekerja bersama warga, bukan untuk warga. Setiap keputusan dibicarakan bersama.",
  },
  {
    icon: Sparkles,
    title: "Bertumbuh bersama",
    text: "Keberhasilan program diukur dari seberapa mandiri warga setelah kami pulang.",
  },
];

export const metadata: Metadata = {
  title: "Anggota",
  description:
    "Kenali tim mahasiswa di balik perjalanan pengabdian KKN Digital.",
};

export default function AnggotaPage() {
  return (
    <main className="overflow-hidden">
      <PageHero
        eyebrow="The People Behind The Journey"
        title={
          <>
            Tim kecil,{" "}
            <span className="display-italic text-[#78977c]">
              dampak yang berarti.
            </span>
          </>
        }
        description="Di balik setiap langkah pengabdian, ada orang-orang yang membawa ide, semangat, dan tujuan yang sama untuk menciptakan perubahan."
      >
        <div className="mt-7 flex items-center gap-4">
          <div className="flex -space-x-3">
            {anggota.slice(0, 4).map((orang) => (
              <span
                key={orang.nomor}
                className="relative h-10 w-10 overflow-hidden rounded-full border-[3px] border-[#f6f7f1]"
              >
                <Image
                  src={orang.foto}
                  alt={orang.nama}
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
              {anggota.length} orang, satu tujuan
            </p>
            <p className="text-xs text-[#829184]">Satu perjalanan bermakna</p>
          </div>
        </div>
      </PageHero>

      {/* TEAM GRID */}
      <section className="container-page pb-16 md:pb-20">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-5 border-t border-[#1f4a37]/10 pt-7">
          <div>
            <span className="eyebrow">Our Members</span>
            <h2 className="display mt-3 text-[clamp(2rem,3.6vw,2.9rem)] text-[#1b2f25]">
              Meet the people.
            </h2>
          </div>

          <div className="glass-pill text-[#526b59]">
            <Users size={15} className="text-[#63846b]" />
            <span className="text-xs font-semibold">
              06 Anggota aktif
            </span>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {anggota.map((orang, index) => (
            <Reveal key={orang.nomor} delay={(index % 3) * 90}>
              <article className="glass-card group h-full rounded-[28px] p-2.5">
                <div className="relative aspect-[4/4.5] overflow-hidden rounded-[21px] bg-[#e6ebe2]">
                  <Image
                    src={orang.foto}
                    alt={orang.nama}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                    unoptimized
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12291f]/65 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 flex h-9 items-center rounded-full border border-white/30 bg-white/20 px-3.5 text-[10px] font-bold tracking-[0.16em] text-white backdrop-blur-xl">
                    NO. {orang.nomor}
                  </span>

                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
                        KKN Team
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {orang.jabatan}
                      </p>
                    </div>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-xl transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#294a37]">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-5">
                  <h3 className="text-xl font-extrabold tracking-tight text-[#1b2f25]">
                    {orang.nama}
                  </h3>

                  <div className="mt-2.5 flex items-center gap-2 text-sm text-[#829184]">
                    <GraduationCap size={15} />
                    {orang.prodi}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#1f4a37]/10 pt-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#9aa99b]">
                        Bidang
                      </p>
                      <p className="mt-1 text-xs font-semibold text-[#54715a]">
                        {orang.bidang}
                      </p>
                    </div>

                    <a
                      href={orang.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Instagram ${orang.nama}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1f4a37]/10 bg-white/60 text-[#356a4e] shadow-sm transition duration-300 hover:scale-105 hover:bg-[#1f4a37] hover:text-white"
                    >
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#edf1e7]/65" />
        <div className="page-glow -left-32 top-16 h-[22rem] w-[22rem] bg-[#c7dbc2]/50" />

        <div className="container-page relative">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Cara kami bekerja</span>
            <h2 className="display mt-4 text-[clamp(2.3rem,4.2vw,3.5rem)] text-[#1b2f25]">
              Nilai yang kami bawa{" "}
              <span className="display-italic text-[#78977c]">
                ke lapangan.
              </span>
            </h2>
          </Reveal>

          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={index * 100}>
                  <div className="glass-card h-full rounded-[26px] p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#e6efe1] text-[#356a4e]">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-6 text-lg font-extrabold text-[#1b2f25]">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#6b7e72]">
                      {value.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-24">
        <Reveal className="glass-dark relative overflow-hidden rounded-[34px] px-8 py-14 text-white md:px-14 md:py-18">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-[#7c9e7f]/25 blur-[70px]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <span className="eyebrow eyebrow-plain text-[#b9d0b5]">
                Together We Grow
              </span>
              <h2 className="display mt-4 max-w-2xl text-[clamp(2.1rem,4.4vw,3.6rem)] text-white">
                Satu tim, satu tujuan,{" "}
                <span className="display-italic text-[#b9d0b5]">
                  banyak kemungkinan.
                </span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/60">
                Setiap individu membawa keunikan dan kontribusi yang menjadikan
                perjalanan pengabdian ini lebih bermakna.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <Link href="/program-kerja" className="btn btn-light">
                Lihat Program Kami <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
