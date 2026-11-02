import React from 'react';
import { Sun, Leaf, Handshake } from 'lucide-react';
import { INFRASTRUCTURE_PILLARS } from '../data/mandateData';

export const InfrastructureMandateSection: React.FC = () => {
  const icons = [Sun, Leaf, Handshake];

  return (
    <section
      id="infrastructure"
      className="border-t border-slate-200/80 bg-navy-50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Clean 2-Column Editorial Split */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="text-[11.5px] font-semibold tracking-[0.16em] text-gold-600 uppercase">
              Infrastructure &amp; Clean Energy Mandate
            </p>
            <h2 className="mt-2 text-3xl font-light leading-tight tracking-tight text-navy-900 sm:text-4xl">
              South Asia Infrastructure &amp;{' '}
              <strong className="font-bold">Renewable Energy</strong>
            </h2>
            <div className="mt-4 h-[3px] w-12 bg-gold-500" />

            <p className="mt-6 text-[16px] leading-[1.8] text-slate-600 sm:text-[16.5px]">
              Iman Global actively directs private equity into utility-scale solar and clean
              energy infrastructure across South Asia, with a primary concentration on Pakistan.
              Driven by favorable macroeconomic tailwinds and a structural demand for reliable
              energy, our mandate focuses on building long-term, yield-generating energy assets.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-card">
              <img
                src="/assets/pakistan-solar-mandate.jpg"
                alt="Utility-scale solar photovoltaic power infrastructure in South Asia"
                className="aspect-[16/10] w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 Clear, Easy-to-Read Mandate Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {INFRASTRUCTURE_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx] || Sun;
            return (
              <article
                key={pillar.title}
                className="rounded-xl border border-slate-200 border-t-[3px] border-t-navy-900 bg-white p-7 shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-900">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-[19px] font-bold text-navy-900">{pillar.title}</h3>

                <p className="mt-2.5 text-[15px] leading-[1.75] text-slate-600">{pillar.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
