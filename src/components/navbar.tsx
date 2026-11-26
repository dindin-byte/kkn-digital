"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Leaf, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil Desa", href: "/profil" },
  { label: "Anggota", href: "/anggota" },
  { label: "Program Kerja", href: "/program-kerja" },
  { label: "Kegiatan", href: "/kegiatan" },
  { label: "Artikel", href: "/artikel" },
  { label: "Galeri", href: "/galeri" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const trueOpen = isOpen;
    // Small delay to let React settle, then apply overflow
    setTimeout(() => {
      document.body.style.overflow = trueOpen ? "hidden" : "";
    }, 50);
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        className={`glass-nav mx-auto flex max-w-[1240px] items-center justify-between gap-3 rounded-[24px] px-3 py-2.5 transition-all duration-500 sm:px-4 ${
          scrolled ? "shadow-[0_22px_60px_-26px_rgba(18,41,31,0.45)]" : ""
        }`}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="KKN Digital — Beranda"
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[14px] bg-[var(--sage-light)] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_10px_22px_-10px_rgba(18,41,31,0.4)]">
            <span className="pointer-events-none absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white/20 blur-[6px]" />
            <Leaf
              size={19}
              className="relative transition-transform duration-500 group-hover:-rotate-12"
            />
          </span>
          <span className="leading-none">
            <span className="block text-[15px] font-extrabold tracking-[-0.02em] text-[#1b2f25]">
              KKN Digital
            </span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#718477]">
              Desa Binaan · 2026
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3 py-2 text-[12.5px] font-semibold transition-all duration-300 ${
                  active
                    ? "bg-[var(--sage-light)] text-[#1b2f25] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_20px_-12px_rgba(18,41,31,0.4)]"
                    : "text-[#52675a] hover:bg-white/05 hover:text-[#1f4a37]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/galeri"
            className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/80 px-4 py-2.5 text-[12.5px] font-bold text-[#1b2f25] transition hover:border-white/20 hover:bg-white/30 sm:inline-flex"
          >
            Lihat Galeri
            <ArrowUpRight size={15} />
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-white/10 bg-white/80 text-[#1b2f25] transition hover:bg-white/90 lg:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mx-auto mt-2 max-w-[1240px] overflow-hidden rounded-[24px] transition-all duration-500 lg:hidden ${
          isOpen
            ? "glass-nav max-h-[560px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1 p-3">
          {navLinks.map((link, index) => {
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-[var(--sage-light)] text-[#1b2f25]"
                    : "text-[#52675a] hover:bg-white/05 hover:text-[#1f4a37]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`text-[10px] font-bold tracking-[0.18em] ${
                      active ? "text-white/50" : "text-[#a3b2a6]"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  {link.label}
                </span>
                <ArrowUpRight
                  size={15}
                  className={active ? "opacity-80" : "opacity-40"}
                />
              </Link>
            );
          })}

          <Link
            href="/galeri"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary mt-2 w-full"
          >
            Lihat Galeri
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
