import Link from "next/link";
import {
  ArrowUpRight,
  Heart,
  Leaf,
  Mail,
  MapPin,
} from "lucide-react";

import InstagramIcon from "./instagram-icon";

const footerLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil Desa", href: "/profil" },
  { label: "Anggota", href: "/anggota" },
  { label: "Program Kerja", href: "/program-kerja" },
  { label: "Kegiatan", href: "/kegiatan" },
  { label: "Artikel", href: "/artikel" },
  { label: "Galeri", href: "/galeri" },
];

// Resolved once at build/module load so prerendering stays deterministic.
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#12291f] text-white">
      <div className="pointer-events-none absolute -right-40 -top-48 h-[30rem] w-[30rem] rounded-full bg-[#7fa387]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-56 -left-40 h-[32rem] w-[32rem] rounded-full bg-[#a9c7a9]/15 blur-[130px]" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-page relative">
        {/* Collaboration CTA */}
        <div className="grid gap-8 border-b border-white/10 py-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:py-16">
          <div>
            <p className="eyebrow eyebrow-plain text-[#a9bda6]">
              Mari Berkolaborasi
            </p>
            <h2 className="display mt-4 max-w-2xl text-4xl text-white sm:text-5xl lg:text-6xl">
              Setiap perubahan besar dimulai dari{" "}
              <span className="display-italic text-[#b9d0b5]">
                kebersamaan.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-sm text-sm leading-7 text-white/55">
              Punya ide, cerita, atau ingin bekerja sama? Kami terbuka untuk
              kolaborasi yang memberi dampak nyata bagi masyarakat.
            </p>
            <a
              href="mailto:hello@kkndigital.id"
              className="btn btn-light mt-6 w-fit"
            >
              Mulai Percakapan
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Main footer */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-[15px] border border-white/15 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-xl">
                <Leaf size={21} />
              </span>
              <span>
                <span className="block text-lg font-extrabold tracking-tight">
                  KKN Digital
                </span>
                <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
                  Community Project · 2026
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              Ruang digital untuk mengenalkan potensi desa, mendokumentasikan
              kegiatan, dan berbagi cerita tentang pengabdian kepada masyarakat.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs text-white/65 backdrop-blur-xl">
                <MapPin size={13} />
                Desa Binaan, Indonesia
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs text-white/65 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9fc4a2]" />
                Sedang berlangsung
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
              Navigasi
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-1 text-sm text-white/60 transition hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
              Terhubung
            </h3>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
              Ikuti perjalanan dan cerita kegiatan KKN melalui kanal resmi kami.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram KKN Digital"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/12 bg-white/[0.07] text-white/80 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/15"
              >
                <InstagramIcon />
              </a>
              <a
                href="mailto:hello@kkndigital.id"
                aria-label="Email KKN Digital"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/12 bg-white/[0.07] text-white/80 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/15"
              >
                <Mail size={18} />
              </a>
            </div>

            <p className="mt-7 text-xs leading-6 text-white/35">
              Senin — Jumat
              <br />
              08.00 — 17.00 WIB
            </p>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none border-t border-white/10 pt-8"
        >
          <p className="display bg-gradient-to-b from-white/[0.13] to-white/[0.02] bg-clip-text text-[clamp(3.2rem,14vw,12rem)] leading-[0.8] tracking-[-0.05em] text-transparent">
            KKN Digital
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {CURRENT_YEAR} KKN Digital. Seluruh hak cipta
            dilindungi.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-white/40">
            Dibuat dengan
            <Heart size={12} className="fill-rose-400 text-rose-400" />
            untuk masyarakat
          </p>
        </div>
      </div>
    </footer>
  );
}
