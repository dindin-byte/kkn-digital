"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Photo = {
  src: string;
  alt: string;
  category: "Kegiatan" | "Pendidikan" | "Lingkungan" | "Ekonomi" | "Warga";
  ratio: string;
};

const photos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=85",
    alt: "Warga dan mahasiswa berkumpul dalam kegiatan desa",
    category: "Warga",
    ratio: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85",
    alt: "Siswa belajar bersama dengan laptop",
    category: "Pendidikan",
    ratio: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=85",
    alt: "Kegiatan menanam pohon bersama",
    category: "Lingkungan",
    ratio: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1000&q=85",
    alt: "Produk lokal yang dijual dalam pasar desa",
    category: "Ekonomi",
    ratio: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=85",
    alt: "Mahasiswa berdiskusi bersama warga",
    category: "Kegiatan",
    ratio: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85",
    alt: "Anak-anak belajar dengan gembira",
    category: "Pendidikan",
    ratio: "aspect-[1/1]",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=85",
    alt: "Pemandangan perbukitan hijau di sekitar desa",
    category: "Lingkungan",
    ratio: "aspect-[16/10]",
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85",
    alt: "Relawan bekerja bersama masyarakat",
    category: "Kegiatan",
    ratio: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=85",
    alt: "Warga dan mahasiswa berdiskusi bersama",
    category: "Warga",
    ratio: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1000&q=85",
    alt: "Sawah terasering di sekitar desa",
    category: "Lingkungan",
    ratio: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    alt: "Transaksi pembayaran digital",
    category: "Ekonomi",
    ratio: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
    alt: "Kebersamaan tim mahasiswa KKN",
    category: "Kegiatan",
    ratio: "aspect-[1/1]",
  },
];

const categories = [
  "Semua",
  "Kegiatan",
  "Pendidikan",
  "Lingkungan",
  "Ekonomi",
  "Warga",
] as const;

export default function GalleryGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      active === "Semua"
        ? photos
        : photos.filter((photo) => photo.category === active),
    [active],
  );

  const current = lightbox !== null ? filtered[lightbox] : null;

  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") {
        setLightbox((value) =>
          value === null ? null : (value + 1) % filtered.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setLightbox((value) =>
          value === null
            ? null
            : (value - 1 + filtered.length) % filtered.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, filtered.length]);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActive(category);
                setLightbox(null);
              }}
              aria-pressed={selected}
              className={`rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
                selected
                  ? "bg-[#1f4a37] text-[#f8faf5] shadow-[0_12px_26px_-14px_rgba(18,41,31,0.8)]"
                  : "border border-white/80 bg-white/50 text-[#52675a] backdrop-blur-xl hover:border-[#1f4a37]/20 hover:bg-white/80 hover:text-[#1f4a37]"
              }`}
            >
              {category}
            </button>
          );
        })}

        <span className="ml-auto text-xs font-semibold text-[#829184]">
          {filtered.length} foto
        </span>
      </div>

      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filtered.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setLightbox(index)}
            className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-[24px] border border-white/70 bg-white/40 p-2 text-left shadow-[0_18px_44px_-28px_rgba(18,41,31,0.45)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(18,41,31,0.55)]"
            aria-label={`Perbesar foto: ${photo.alt}`}
          >
            <div className={`relative w-full overflow-hidden rounded-[17px] bg-[#dfe8d8] ${photo.ratio}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                unoptimized
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12291f]/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <span className="absolute left-3.5 top-3.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white opacity-0 backdrop-blur-xl transition duration-500 group-hover:opacity-100">
                {photo.category}
              </span>

              <span className="absolute bottom-3.5 right-3.5 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white opacity-0 backdrop-blur-xl transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <Maximize2 size={15} />
              </span>
            </div>
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#081a12]/85 p-4 backdrop-blur-2xl"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Tutup foto"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20"
          >
            <X size={20} />
          </button>

          {filtered.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setLightbox((value) =>
                    value === null
                      ? null
                      : (value - 1 + filtered.length) % filtered.length,
                  );
                }}
                aria-label="Foto sebelumnya"
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20 sm:left-6"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setLightbox((value) =>
                    value === null ? null : (value + 1) % filtered.length,
                  );
                }}
                aria-label="Foto berikutnya"
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20 sm:right-6"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div
            className="relative flex max-h-[86vh] w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[68vh] w-full overflow-hidden rounded-[22px]">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="90vw"
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-white backdrop-blur-xl">
              <span className="text-xs text-white/75">{current.alt}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
                {current.category} · {(lightbox ?? 0) + 1}/{filtered.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
