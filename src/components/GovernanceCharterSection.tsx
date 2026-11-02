import React from 'react';
import { Lock, Scale, ShieldCheck } from 'lucide-react';
import { GOVERNANCE_CHARTER } from '../data/mandateData';

export const GovernanceCharterSection: React.FC = () => {
  const icons = [Scale, ShieldCheck, Lock];

  return (
    <section
      id="governance"
      className="border-t border-slate-200/80 bg-navy-50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Copy & 3 Governance Pillars */}
          <div className="lg:col-span-7">
            <p className="text-[11.5px] font-semibold tracking-[0.16em] text-gold-600 uppercase">
              Governance &amp; Shariah Compliance
            </p>
            <h2 className="mt-2 text-3xl font-light leading-tight tracking-tight text-navy-900 sm:text-4xl">
              Institutional Governance &amp;{' '}
              <strong className="font-bold">AAOIFI Alignment</strong>
            </h2>
            <div className="mt-4 h-[3px] w-12 bg-gold-500" />

            <p className="mt-6 text-[16px] leading-[1.8] text-slate-600 sm:text-[16.5px]">
              Operating as a value-driven family office and holding entity, Iman Global enforces
              rigorous corporate governance standards:
            </p>

            <div className="mt-8 space-y-4">
              {GOVERNANCE_CHARTER.map((item, idx) => {
                const Icon = icons[idx] || Scale;
                return (
                  <article
                    key={item.num}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-card"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-[18.5px] font-bold text-navy-900">{item.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-[1.75] text-slate-600">
                        {item.body}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Right UAE Architectural Frame */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2.5 shadow-card">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/assets/uae-hq-architecture.jpg"
                  alt="United Arab Emirates corporate financial district towers"
                  className="aspect-[4/4.6] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 via-navy-950/45 to-transparent p-6">
                  <p className="text-[11px] font-semibold tracking-[0.15em] text-gold-400 uppercase">
                    United Arab Emirates
                  </p>
                  <p className="mt-1 text-[17px] font-bold text-white">
                    Non-Speculative, Asset-Backed Equity Stewardship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
