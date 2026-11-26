"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  CircleDashed,
  Clock3,
  HeartPulse,
  Leaf,
  MonitorSmartphone,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";

type Status = "Selesai" | "Berjalan" | "Rencana";

type Program = {
  number: string;
  title: string;
  category: "Pendidikan" | "Lingkungan" | "Ekonomi" | "Kesehatan" | "Digital";
  description: string;
  progress: number;
  status: Status;
  metric: string;
  lead: string;
  icon: LucideIcon;
};

const programs: Program[] = [
  {
    number: "01",
    title: "Ruang Belajar Digital",
    category: "Pendidikan",
    description:
      "Kelas pendampingan literasi digital dan pembelajaran kreatif untuk siswa sekolah dasar.",
    progress: 100,
    status: "Selesai",
    metric: "120+ siswa",
    lead: "Divisi Pendidikan",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Pojok Baca Desa",
    category: "Pendidikan",
    description:
      "Membangun ruang baca komunitas dengan koleksi buku dan kegiatan membaca bersama.",
    progress: 68,
    status: "Berjalan",
    metric: "1 ruang baca",
    lead: "Divisi Pendidikan",
    icon: Users,
  },
  {
    number: "03",
    title: "Desa Bersih & Hijau",
    category: "Lingkungan",
    description:
      "Aksi kebersihan lingkungan, penanaman pohon, dan edukasi pengelolaan sampah rumah tangga.",
    progress: 75,
    status: "Berjalan",
    metric: "18 titik aksi",
    lead: "Divisi Lingkungan",
    icon: Leaf,
  },
  {
    number: "04",
    title: "Bank Sampah Warga",
    category: "Lingkungan",
    description:
      "Merancang sistem bank sampah sederhana yang dikelola oleh kader desa secara mandiri.",
    progress: 20,
    status: "Rencana",
    metric: "2 dusun",
    lead: "Divisi Lingkungan",
    icon: CircleDashed,
  },
  {
    number: "05",
    title: "UMKM Naik Kelas",
    category: "Ekonomi",
    description:
      "Pendampingan branding, foto produk, dan pemasaran digital untuk pelaku usaha lokal.",
    progress: 60,
    status: "Berjalan",
    metric: "24 UMKM",
    lead: "Divisi Ekonomi",
    icon: Store,
  },
  {
    number: "06",
    title: "Pasar Rakyat Digital",
    category: "Ekonomi",
    description:
      "Pasar rakyat yang mengintegrasikan produk lokal dengan sistem pembayaran digital.",
    progress: 100,
    status: "Selesai",
    metric: "32 transaksi",
    lead: "Divisi Ekonomi",
    icon: MonitorSmartphone,
  },
  {
    number: "07",
    title: "Posyandu Sehat",
    category: "Kesehatan",
    description:
      "Pendampingan posyandu, edukasi gizi keluarga, dan pemeriksaan kesehatan berkala.",
    progress: 55,
    status: "Berjalan",
    metric: "4 posyandu",
    lead: "Divisi Kesehatan",
    icon: HeartPulse,
  },
  {
    number: "08",
    title: "Website Profil Desa",
    category: "Digital",
    description:
      "Membangun website resmi desa untuk publikasi potensi, kegiatan, dan layanan warga.",
    progress: 100,
    status: "Selesai",
    metric: "1 website",
    lead: "Divisi Digital",
    icon: MonitorSmartphone,
  },
];

const filters = [
  "Semua",
  "Pendidikan",
  "Lingkungan",
  "Ekonomi",
  "Kesehatan",
  "Digital",
] as const;

const statusStyles: Record<
  Status,
  { className: string; icon: typeof CheckCircle2 }
> = {
  Selesai: {
    className: "bg-[#e3f0e2] text-[#2c6a3f]",
    icon: CheckCircle2,
  },
  Berjalan: {
    className: "bg-[#e8efe1] text-[#356a4e]",
    icon: Clock3,
  },
  Rencana: {
    className: "bg-[#f1efe2] text-[#8a7a45]",
    icon: CircleDashed,
  },
};

export default function ProgramCatalog() {
  const [active, setActive] = useState<(typeof filters)[number]>("Semua");

  const filtered = useMemo(
    () =>
      active === "Semua"
        ? programs
        : programs.filter((program) => program.category === active),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((filter) => {
          const selected = active === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={selected}
              className={`rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
                selected
                  ? "bg-[#1f4a37] text-[#f8faf5] shadow-[0_12px_26px_-14px_rgba(18,41,31,0.8)]"
                  : "border border-white/80 bg-white/50 text-[#52675a] backdrop-blur-xl hover:border-[#1f4a37]/20 hover:bg-white/80 hover:text-[#1f4a37]"
              }`}
            >
              {filter}
            </button>
          );
        })}

        <span className="ml-auto text-xs font-semibold text-[#829184]">
          {filtered.length} program
        </span>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((program) => {
          const Icon = program.icon;
          const status = statusStyles[program.status];
          const StatusIcon = status.icon;

          return (
            <article
              key={program.number}
              className="glass-card group flex h-full flex-col rounded-[26px] p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#e6efe1] text-[#356a4e] transition duration-500 group-hover:-rotate-6 group-hover:bg-[#1f4a37] group-hover:text-white">
                  <Icon size={20} />
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] ${status.className}`}
                >
                  <StatusIcon size={12} />
                  {program.status}
                </span>
              </div>

              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#78977c]">
                {program.category} · {program.number}
              </p>
              <h3 className="mt-2 text-xl font-extrabold leading-snug tracking-tight text-[#1b2f25]">
                {program.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[#6b7e72]">
                {program.description}
              </p>

              <div className="mt-6">
                <div className="flex items-center justify-between text-[11px] font-semibold text-[#829184]">
                  <span>Progres</span>
                  <span className="text-[#356a4e]">{program.progress}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#1f4a37]/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#7fa387] to-[#1f4a37] transition-all duration-700"
                    style={{ width: `${program.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[#1f4a37]/10 pt-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#9aa99b]">
                    {program.lead}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#54715a]">
                    {program.metric}
                  </p>
                </div>

                <Link
                  href="/kegiatan"
                  aria-label={`Lihat kegiatan program ${program.title}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1f4a37]/10 bg-white/60 text-[#1f4a37] transition group-hover:bg-[#1f4a37] group-hover:text-white"
                >
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="glass mt-8 rounded-[24px] p-10 text-center">
          <p className="text-sm font-semibold text-[#62756a]">
            Belum ada program pada kategori ini.
          </p>
        </div>
      )}
    </div>
  );
}
