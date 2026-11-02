import React from 'react';
import { MapPin } from 'lucide-react';
import { GEOGRAPHIC_MANDATES } from '../data/mandateData';

export const GeographicFootprintSection: React.FC = () => {
  return (
    <section id="footprint" className="border-t border-slate-200/80 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11.5px] font-semibold tracking-[0.16em] text-gold-600 uppercase">
              Geographic Allocation
            </p>
            <h2 className="mt-2 text-3xl font-light tracking-tight text-navy-900 sm:text-4xl">
              Geographic <strong className="font-bold">Asset Footprint</strong>
            </h2>
            <div className="mt-4 h-[3px] w-12 bg-gold-500" />
          </div>

          <p className="max-w-md text-[15px] text-slate-500">
            Capital management and operating divisions positioned across four key international
            corridors.
          </p>
        </div>

        {/* All 4 Jurisdictions Visible Side-by-Side (Zero Hidden Tabs, Effortless to Read) */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {GEOGRAPHIC_MANDATES.map((m) => (
            <article
              key={m.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-7 shadow-card transition-shadow hover:shadow-cardHover sm:p-8"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold tracking-[0.12em] text-gold-600 uppercase">
                    <MapPin className="h-3.5 w-3.5 text-navy-900" />
                    {m.statusTag}
                  </span>
                </div>

                <h3 className="mt-3 text-[22px] font-bold text-navy-900">{m.region}</h3>

                <p className="mt-1 text-[14.5px] font-semibold text-navy-800/85">{m.role}</p>

                <p className="mt-3.5 text-[15px] leading-[1.75] text-slate-600">{m.summary}</p>
              </div>

              <ul className="mt-6 space-y-2 border-t border-slate-100 pt-4">
                {m.focusAreas.map((fa) => (
                  <li key={fa} className="flex items-center gap-2.5 text-[14px] text-slate-700">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    <span>{fa}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
