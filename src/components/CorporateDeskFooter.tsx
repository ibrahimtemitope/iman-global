import React, { useState } from 'react';
import { Check, Copy, Mail, Send, X } from 'lucide-react';
import { SovereignCrest } from './SovereignHeader';

interface Props {
  deskOpen: boolean;
  onCloseDesk: () => void;
  onOpenDesk: () => void;
}

export const CorporateDeskFooter: React.FC<Props> = ({
  deskOpen,
  onCloseDesk,
  onOpenDesk,
}) => {
  const [copied, setCopied] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [mandateTopic, setMandateTopic] = useState('Pakistan Solar & Clean Energy Co-Investment');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard?.writeText('contact@imanglobal.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleCompose = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Corporate Desk Inquiry] ${mandateTopic}${orgName ? ` — ${orgName}` : ''}`
    );
    const body = encodeURIComponent(
      `Dear Iman Global Corporate Desk,\n\nOrganization / Principal: ${
        orgName || 'N/A'
      }\nMandate Area: ${mandateTopic}\n\nInquiry Summary:\n${message}\n`
    );
    window.location.href = `mailto:contact@imanglobal.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <footer className="bg-navy-950 text-white">
        {/* Clean Corporate Desk Contact Band */}
        <div className="border-b border-white/10">
          <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-[11.5px] font-semibold tracking-[0.16em] text-gold-400 uppercase">
                  Institutional &amp; Operational Inquiries
                </p>
                <h2 className="mt-2 text-2xl font-light text-white sm:text-3xl">
                  Connect With the <strong className="font-bold">Corporate Desk</strong>
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-300">
                  For utility-scale solar partnerships in South Asia, institutional co-investment
                  mandates, or cross-border digital portfolio inquiries, contact our UAE corporate
                  desk directly.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
                <button
                  type="button"
                  onClick={onOpenDesk}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-[12.5px] font-bold tracking-[0.08em] text-navy-900 uppercase transition-colors hover:bg-gold-50"
                >
                  <Mail className="h-4 w-4" />
                  <span>Send Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3.5 text-[13px] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/10"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-gold-400" />
                      <span>Copied Email</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-gold-400" />
                      <span>contact@imanglobal.com</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Official Holding Footer */}
        <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-start gap-3.5">
              <SovereignCrest inverted className="h-10 w-10 shrink-0" />
              <div>
                <p className="text-[16px] font-bold tracking-[0.12em] text-white uppercase">
                  Iman Global Holding
                </p>
                <p className="mt-0.5 text-[13.5px] text-slate-300">
                  Registered Free Zone Authority | United Arab Emirates
                </p>
                <p className="mt-0.5 text-[13px] font-medium text-gold-400">
                  Shariah Governance: AAOIFI Aligned
                </p>
              </div>
            </div>

            <div className="text-left md:text-right">
              <p className="text-[13.5px] text-slate-200">
                Corporate Desk:{' '}
                <a
                  href="mailto:contact@imanglobal.com"
                  className="font-semibold text-white underline decoration-gold-400/60 underline-offset-4 hover:text-gold-200"
                >
                  contact@imanglobal.com
                </a>
              </p>
              <p className="mt-1.5 text-[13px] text-slate-400">
                © 2026 Iman Global. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Clean White Corporate Desk Modal */}
      {deskOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 text-slate-800 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] text-gold-600 uppercase">
                  Iman Global Holding · UAE
                </p>
                <h3 className="mt-0.5 text-[21px] font-bold text-navy-900">
                  Corporate Desk Inquiry
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseDesk}
                aria-label="Close modal"
                className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50 hover:text-navy-900"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleCompose} className="mt-5 space-y-4">
              <div>
                <label className="block text-[12px] font-semibold tracking-[0.06em] text-navy-900 uppercase">
                  Organization / Principal Name
                </label>
                <input
                  type="text"
                  required
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="e.g., Meridian Solar EPC / Family Office"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-[14.5px] text-slate-800 placeholder-slate-400 focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[12px] font-semibold tracking-[0.06em] text-navy-900 uppercase">
                  Mandate Area
                </label>
                <select
                  value={mandateTopic}
                  onChange={(e) => setMandateTopic(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-[14.5px] text-slate-800 focus:border-navy-900 focus:outline-none"
                >
                  <option>Pakistan Solar &amp; Clean Energy Co-Investment</option>
                  <option>Utility-Scale EPC &amp; Technical Partnership</option>
                  <option>Cross-Border Digital &amp; Consumer Platforms</option>
                  <option>Emerging Africa Infrastructure Pipeline</option>
                  <option>General Institutional Governance Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-semibold tracking-[0.06em] text-navy-900 uppercase">
                  Inquiry Summary
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide a brief summary of your project, capital mandate, or operational proposal..."
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-[14.5px] text-slate-800 placeholder-slate-400 focus:border-navy-900 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 px-6 py-3.5 text-[12.5px] font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-navy-800"
              >
                <Send className="h-4 w-4" />
                <span>Compose Email to contact@imanglobal.com</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
