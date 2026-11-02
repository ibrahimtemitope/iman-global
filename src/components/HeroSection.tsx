import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_VERTICALS } from '../data/mandateData';

interface Props {
  onOpenDesk: () => void;
}

export const HeroSection: React.FC<Props> = ({ onOpenDesk }) => {
  return (
    <>
      {/* Clean Full-Width Architectural Hero with Rich Dark Transparent Overlay */}
      <section id="top" className="relative overflow-hidden bg-navy-950">
        <img
          src="/assets/uae-daylight-hero.jpg"
          alt="United Arab Emirates financial district architecture"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Full Dark Transparent Readability Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(4, 14, 33, 0.88) 0%, rgba(4, 14, 33, 0.78) 55%, rgba(4, 14, 33, 0.58) 100%)',
          }}
        />

        <div className="relative mx-auto max-w-[1280px] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-7 bg-gold-400" />
              <span className="text-[11.5px] font-semibold tracking-[0.18em] text-gold-200 uppercase sm:text-[12px]">
                United Arab Emirates · Private Investment Holding
              </span>
            </div>

            <h1 className="mt-5 text-[2.15rem] font-light leading-[1.18] tracking-tight text-white drop-shadow-sm sm:text-[3.1rem] lg:text-[3.55rem]">
              Deploying Institutional Capital Across{' '}
              <strong className="font-bold text-white">
                Emerging Markets &amp; Infrastructure.
              </strong>
            </h1>

            <p className="mt-6 max-w-2xl text-[16px] leading-[1.8] text-white/90 sm:text-[17.5px]">
              Headquartered in the United Arab Emirates, Iman Global is a private investment
              holding entity focused on real-asset infrastructure, renewable energy deployment,
              and scalable digital enterprises across South Asia, the GCC, and high-growth
              frontier markets.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#verticals"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-[12.5px] font-bold tracking-[0.08em] text-navy-900 uppercase shadow-sm transition-colors hover:bg-gold-50"
              >
                <span>Business Verticals</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={onOpenDesk}
                className="inline-flex items-center gap-2 rounded-md border border-white/55 bg-navy-950/35 px-6 py-3.5 text-[12.5px] font-semibold tracking-[0.08em] text-white uppercase backdrop-blur-sm transition-colors hover:border-white hover:bg-white/15"
              >
                <span>Corporate Desk</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are + Bukhatir-Inspired Business Verticals Grid */}
      <section id="overview" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Clean Group Introduction */}
          <div className="grid items-start gap-8 border-b border-slate-200 pb-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-[11.5px] font-semibold tracking-[0.16em] text-gold-600 uppercase">
                Who We Are
              </p>
              <h2 className="mt-2 text-3xl font-light tracking-tight text-navy-900 sm:text-4xl">
                Iman <strong className="font-bold">Global Holding</strong>
              </h2>
              <div className="mt-4 h-[3px] w-12 bg-gold-500" />
            </div>

            <div className="lg:col-span-7">
              <p className="text-[16px] leading-[1.8] text-slate-600 sm:text-[16.5px]">
                Operating as a disciplined UAE holding entity and family office, Iman Global
                combines long-term capital allocation in utility-scale renewable energy with
                active ownership of profitable, cross-border digital platforms. Every mandate is
                structured through asset-backed, zero-debt equity in alignment with AAOIFI
                governance principles.
              </p>

              {/* Simple, High-Clarity Key Facts */}
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-slate-100 pt-7 sm:grid-cols-4">
                {[
                  { label: 'Headquarters', value: 'UAE Free Zone' },
                  { label: 'Energy Focus', value: 'Pakistan Solar' },
                  { label: 'Governance', value: 'AAOIFI Aligned' },
                  { label: 'Capital Model', value: 'Zero-Debt Equity' },
                ].map((fact) => (
                  <div key={fact.label}>
                    <p className="text-[11px] font-semibold tracking-[0.1em] text-slate-400 uppercase">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-[16px] font-bold text-navy-900 sm:text-[17px]">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business Verticals Visual Grid (Clean Modernized Conglomerate Cards) */}
          <div id="verticals" className="pt-14 sm:pt-16">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11.5px] font-semibold tracking-[0.16em] text-gold-600 uppercase">
                  Core Mandates
                </p>
                <h2 className="mt-1.5 text-3xl font-light tracking-tight text-navy-900 sm:text-4xl">
                  Business <strong className="font-bold">Verticals</strong>
                </h2>
              </div>
              <p className="max-w-md text-[14.5px] text-slate-500">
                Diversified exposure across defensive real-world energy assets and cash-generative
                international digital platforms.
              </p>
            </div>

            <div className="mt-9 grid gap-7 md:grid-cols-3">
              {BUSINESS_VERTICALS.map((v) => (
                <a
                  key={v.id}
                  href={v.href}
                  className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/30 hover:shadow-cardHover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={v.image}
                      alt={v.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                    <span className="absolute bottom-3.5 left-4 text-[11px] font-semibold tracking-[0.12em] text-gold-200 uppercase">
                      {v.subtitle}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="text-[20px] font-bold text-navy-900 group-hover:text-navy-800">
                        {v.title}
                      </h3>

                      <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                        {v.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2.5 text-[14.5px] text-slate-600"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.08em] text-navy-900 uppercase">
                      <span>Read Mandate</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
