import React from 'react';
import { Check, Compass, ShoppingBag } from 'lucide-react';
import { DIGITAL_DIVISIONS } from '../data/mandateData';

export const DigitalPlatformsSection: React.FC = () => {
  const icons = [Compass, ShoppingBag];

  return (
    <section id="platforms" className="border-t border-slate-200/80 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Clean 2-Column Split */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-card">
              <img
                src="/assets/digital-platforms-vertical.jpg"
                alt="Modern cross-border logistics and e-commerce distribution facility"
                className="aspect-[16/11] w-full rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <p className="text-[11.5px] font-semibold tracking-[0.16em] text-gold-600 uppercase">
              Consumer &amp; Digital Platforms
            </p>
            <h2 className="mt-2 text-3xl font-light leading-tight tracking-tight text-navy-900 sm:text-4xl">
              Scalable Cross-Border <strong className="font-bold">Digital Brands</strong>
            </h2>
            <div className="mt-4 h-[3px] w-12 bg-gold-500" />

            <p className="mt-6 text-[16px] leading-[1.8] text-slate-600 sm:text-[16.5px]">
              Alongside physical infrastructure, Iman Global holds and operates a diversified
              portfolio of high-margin, cross-border digital consumer platforms and e-commerce
              brands. Serving customers across Europe, the Middle East, and global markets, our
              digital divisions specialize in:
            </p>
          </div>
        </div>

        {/* 2 Clear Division Cards */}
        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {DIGITAL_DIVISIONS.map((div, idx) => {
            const Icon = icons[idx] || Compass;
            return (
              <article
                key={div.title}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-navy-50/55 p-7 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] font-semibold tracking-[0.14em] text-gold-600 uppercase">
                      {div.category}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-navy-900 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-4 text-[21px] font-bold text-navy-900">{div.title}</h3>

                  <p className="mt-3 text-[15.5px] leading-[1.75] text-slate-600">{div.body}</p>
                </div>

                <ul className="mt-6 space-y-2 border-t border-slate-200/80 pt-5">
                  {div.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[14px] font-medium text-slate-700"
                    >
                      <Check className="h-4 w-4 shrink-0 text-navy-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
