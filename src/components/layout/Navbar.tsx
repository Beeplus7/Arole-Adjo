'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { brand } from '@/lib/brand';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FDFCF8]/90 backdrop-blur-xl border-b border-[#2B1B12]/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#2B1B12] flex items-center justify-center shrink-0">
            <span className="font-display font-bold text-[#D4A017] text-[11px] tracking-[0.15em]">
              AA
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold tracking-[0.18em] text-[13px] text-[#2B1B12]">
              AROLE ADJO
            </span>
            <span className="hidden md:inline h-3 w-px bg-[#2B1B12]/20" />
            <span className="hidden md:inline font-sans text-[10px] tracking-[0.2em] text-[#2B1B12]/50">
              AJO REIMAGINED
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {brand.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[11px] tracking-[0.15em] text-[#2B1B12]/60 hover:text-[#2B1B12] transition-colors uppercase"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="font-sans text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full border border-[#2B1B12]/20 text-[#2B1B12] hover:border-[#2B1B12]/50 transition-colors"
          >
            Join Waitlist
          </Link>
          <Link
            href="https://app.aroleadjo.com"
            className="font-sans text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full bg-[#2B1B12] text-[#D4A017] hover:bg-[#3d2518] transition-colors"
          >
            Launch App
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#2B1B12]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FDFCF8] border-t border-[#2B1B12]/10 px-6 py-6 flex flex-col gap-5">
          {brand.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#2B1B12]/70 hover:text-[#2B1B12]"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#2B1B12]/10 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-center font-sans text-[11px] tracking-[0.15em] uppercase px-5 py-3 rounded-full border border-[#2B1B12]/20 text-[#2B1B12]"
            >
              Join Waitlist
            </Link>
            <Link
              href="https://app.aroleadjo.com"
              onClick={() => setOpen(false)}
              className="text-center font-sans text-[11px] tracking-[0.15em] uppercase px-5 py-3 rounded-full bg-[#2B1B12] text-[#D4A017]"
            >
              Launch App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
