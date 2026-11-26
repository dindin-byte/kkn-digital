import type { ReactNode } from "react";

type MetaItem = {
  value: string;
  label: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  meta?: MetaItem[];
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  meta,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 sm:pt-36 md:pb-16 md:pt-44">
      <div className="page-glow -right-40 top-10 h-[26rem] w-[26rem] bg-[#c8dcc3]/60" />
      <div className="page-glow -left-52 top-48 h-[22rem] w-[22rem] bg-[#e2e9d6]/70" />
      <div className="grid-lines pointer-events-none absolute inset-x-0 top-0 h-[26rem] opacity-60" />

      <div className="container-page relative">
        <div className="grid gap-8 lg:grid-cols-[1.28fr_0.72fr] lg:items-end">
          <div className="animate-fade-up">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="display mt-5 text-[clamp(2.85rem,6.4vw,5.6rem)] text-[#1b2f25]">
              {title}
            </h1>
          </div>

          <div className="animate-fade-up delay-2 lg:pb-2">
            <p className="max-w-md text-[15px] leading-8 text-[#62756a]">
              {description}
            </p>
            {children}
          </div>
        </div>

        {meta && meta.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-5 border-t border-[#1f4a37]/10 pt-6">
            {meta.map((item) => (
              <div key={item.label}>
                <p className="display text-3xl text-[#1f4a37]">{item.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#829184]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
