import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Handshake,
  ListChecks,
  Target,
} from "lucide-react";

import PageHero from "../../../src/components/page-hero";
import ProgramCatalog from "../../../src/components/program-catalog";
import Reveal from "../../../src/components/reveal";

const steps = [
  {
    icon: Compass,
    title: "Pemetaan kebutuhan",
    text: "Kami mendengar langsung dari warga, kelompok tani, dan perangkat desa sebelum menyusun program.",
  },
  {
    icon: ListChecks,
    title: "Perencanaan bersama",
    text: "Program disusun bersama agar sesuai prioritas desa, bukan sekadar kebutuhan mahasiswa.",
  },
  {
    icon: Handshake,
    title: "Pendampingan",
    text: "Setiap program dijalankan dengan pendampingan warga agar pengetahuan tetap tinggal di desa.",
  },
  {
    icon: Target,
    title: "Evaluasi & keberlanjutan",
    text: "Kami menutup program dengan evaluasi dan rencana lanjutan yang bisa dikelola warga sendiri.",
  },
];

export const metadata: Metadata = {
  title: "Program Kerja",
  description:
    "Katalog program kerja KKN Digital lintas bidang: pendidikan, lingkungan, ekonomi, kesehatan, dan digital.",
};

export default function ProgramKerjaPage() {
  return (
    <main className="overflow-hidden">
      <PageHero
        eyebrow="Program Kerja"
        title={
          <>
            Program yang tumbuh dari{" "}
            <span className="display-italic text-[#78977c]">kebutuhan warga.</span>
          </>
        }
        description="Delapan program lintas bidang yang dirancang bersama masyarakat — dari pendidikan dan lingkungan hingga ekonomi digital."
        meta={[
          { value: "08", label: "Total program" },
          { value: "03", label: "Selesai" },
          { value: "04", label: "Berjalan" },
          { value: "01", label: "Rencana" },
        ]}
      />

      <section className="container-page pb-16 md:pb-20">
        <ProgramCatalog />
      </section>

      {/* APPROACH */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#edf1e7]/65" />
        <div className="page-glow -right-32 top-10 h-[24rem] w-[24rem] bg-[#c7dbc2]/50" />

        <div className="container-page relative">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Cara kami menyusun program</span>
            <h2 className="display mt-4 text-[clamp(2.3rem,4.2vw,3.5rem)] text-[#1b2f25]">
              Bukan sekadar daftar,{" "}
              <span className="display-italic text-[#78977c]">
                tetapi arah bersama.
              </span>
            </h2>
          </Reveal>

          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 90}>
                  <div className="glass-card h-full rounded-[26px] p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#e6efe1] text-[#356a4e]">
                        <Icon size={20} />
                      </span>
                      <span className="display text-2xl text-[#b6c8b3]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-base font-extrabold text-[#1b2f25]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#6b7e72]">
                      {step.text}
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
        <Reveal className="glass flex flex-col items-start justify-between gap-6 rounded-[28px] px-7 py-9 sm:flex-row sm:items-center">
          <div>
            <span className="eyebrow">Ikuti prosesnya</span>
            <h2 className="display mt-3 text-2xl text-[#1b2f25] sm:text-3xl">
              Lihat bagaimana program ini berjalan di lapangan.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-[#6b7e72]">
              Dokumentasi kegiatan, cerita warga, dan progres setiap program
              kami rangkum dalam halaman kegiatan.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/kegiatan" className="btn btn-primary">
              Lihat Kegiatan <ArrowUpRight size={16} />
            </Link>
            <Link href="/artikel" className="btn btn-ghost">
              Baca Artikel
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
