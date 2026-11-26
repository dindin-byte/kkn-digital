import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Camera, Images } from "lucide-react";

import GalleryGrid from "../../../src/components/gallery-grid";
import PageHero from "../../../src/components/page-hero";
import Reveal from "../../../src/components/reveal";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Kumpulan foto kegiatan dan momen pengabdian KKN Digital bersama warga desa.",
};

export default function GaleriPage() {
  return (
    <main className="overflow-hidden">
      <PageHero
        eyebrow="Galeri Kegiatan"
        title={
          <>
            Momen yang{" "}
            <span className="display-italic text-[#78977c]">
              layak dikenang.
            </span>
          </>
        }
        description="Kumpulan foto dari lapangan — senyum warga, kerja bersama, dan hal-hal kecil yang membuat perjalanan pengabdian ini berarti."
        meta={[
          { value: "120+", label: "Foto" },
          { value: "24", label: "Kegiatan" },
          { value: "05", label: "Kategori" },
          { value: "90+", label: "Hari" },
        ]}
      />

      <section className="container-page pb-16 md:pb-20">
        <GalleryGrid />
      </section>

      {/* CTA */}
      <section className="container-page pb-20 md:pb-24">
        <Reveal className="glass-dark relative overflow-hidden rounded-[32px] px-7 py-12 text-white sm:px-12 md:py-16">
          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-[#7c9e7f]/20 blur-[70px]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="eyebrow eyebrow-plain text-[#b9d0b5]">
                Arsip visual
              </span>
              <h2 className="display mt-4 max-w-xl text-[clamp(2rem,4vw,3.3rem)] text-white">
                Setiap foto menyimpan{" "}
                <span className="display-italic text-[#b9d0b5]">
                  cerita tersendiri.
                </span>
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-white/60">
                Baca cerita lengkap di balik kegiatan yang kami dokumentasikan —
                lengkap dengan refleksi dan pelajaran yang kami bawa pulang.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-self-end">
              <Link href="/kegiatan" className="btn btn-light">
                <Camera size={16} /> Lihat Kegiatan
              </Link>
              <Link
                href="/artikel"
                className="btn border border-white/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/15"
              >
                <Images size={16} /> Baca Artikel
              </Link>
            </div>
          </div>

          <div className="relative z-10 mt-10 flex items-center gap-3 text-xs font-medium text-[#d5e5d4]">
            <span className="h-px w-10 bg-[#b8d1b8]" />
            Kuliah Kerja Nyata · 2026
            <ArrowUpRight size={14} />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
