import React, { useId, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface Props {
  onOpenDesk: () => void;
}

export const SovereignCrest: React.FC<{ className?: string; inverted?: boolean }> = ({
  className = 'h-8 w-8',
  inverted = false,
}) => {
  const boxId = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <rect
        id={boxId}
        x="2"
        y="2"
        width="60"
        height="60"
        rx="12"
        fill={inverted ? '#0D2F6E' : '#002366'}
        stroke="#CCA862"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <rect x="18" y="18" width="28" height="28" stroke="#FFFFFF" strokeWidth="1.9" />
      <rect
        x="18"
        y="18"
        width="28"
        height="28"
        transform="rotate(45 32 32)"
        stroke="#CCA862"
        strokeWidth="1.9"
      />
      <circle cx="32" cy="32" r="4.8" fill="#002366" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="1.9" fill="#CCA862" />
    </svg>
  );
};

export const SovereignHeader: React.FC<Props> = ({ onOpenDesk }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: '#overview', label: 'About' },
    { href: '#verticals', label: 'Verticals' },
    { href: '#governance', label: 'Governance' },
    { href: '#footprint', label: 'Footprint' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[54px] max-w-[1280px] items-center justify-between gap-3 px-4 sm:h-[68px] sm:px-6 lg:px-8">
        {/* Compact Brand Identity */}
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <SovereignCrest className="h-7 w-7 shrink-0 sm:h-9 sm:w-9" />
          <span className="truncate text-[14px] font-bold tracking-[0.1em] text-navy-900 uppercase sm:text-[16px] sm:tracking-[0.12em]">
            Iman Global
          </span>
        </a>

        {/* Short, Clean Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link-corporate text-[12px] font-semibold tracking-[0.06em] text-slate-700 uppercase transition-colors hover:text-navy-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Compact Action */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onOpenDesk}
            className="inline-flex items-center justify-center rounded-md bg-navy-900 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-white uppercase transition-colors hover:bg-navy-800 sm:px-4 sm:py-2 sm:text-[12px]"
          >
            Contact
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle navigation menu"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-navy-900 hover:bg-slate-50 md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-2.5 shadow-lg md:hidden">
          <nav className="flex flex-col divide-y divide-slate-100">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-[12.5px] font-semibold tracking-[0.06em] text-slate-700 uppercase hover:text-navy-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
