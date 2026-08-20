'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { brand } from '@/lib/brand';
import { ArrowRight, Shield, Users, RotateCcw, CheckCircle } from 'lucide-react';

// ─── Cowrie SVG ───────────────────────────────────────────────
function CowrieSeal() {
  return (
    <div className="cowrie-pulse w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#2B1B12] flex items-center justify-center shadow-[0_8px_32px_rgba(43,27,18,0.4)]">
      <div className="w-16 h-16 md:w-22 md:h-22 rounded-full border-2 border-[#D4A017]/60 flex items-center justify-center">
        <span className="font-display font-bold text-[#D4A017] text-2xl md:text-3xl tracking-[0.1em]">AA</span>
      </div>
    </div>
  );
}

// ─── 5 People Row ─────────────────────────────────────────────
const PEOPLE = [
  { name: 'Chief Ade', tier: 'Elder', color: '#D4A017' },
  { name: 'Sisi T', tier: 'Gold', color: '#D4A017' },
  { name: 'Alabi', tier: 'Silver', color: '#B8860B' },
  { name: 'Funmi', tier: 'Silver', color: '#B8860B' },
  { name: 'You', tier: 'New', color: '#2B1B12' },
];

function PeopleRow() {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-4 mt-8">
      {PEOPLE.map((p, i) => (
        <div key={i} className="flex flex-col items-center gap-1.5">
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-[#FDFCF8] text-[11px] font-semibold font-sans border-2"
            style={{ backgroundColor: p.color, borderColor: p.color }}
          >
            {p.name.charAt(0)}
          </div>
          <span className="font-sans text-[9px] tracking-[0.1em] text-[#2B1B12]/50 uppercase">{p.name}</span>
        </div>
      ))}
      <div className="hidden md:flex items-center gap-1 ml-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017]/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017]/30" />
      </div>
    </div>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────
function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-[#2B1B12]/10 py-10 border-y border-[#2B1B12]/10 my-16">
      {brand.stats.map((s, i) => (
        <div key={i} className="flex flex-col items-center gap-1 px-6">
          <span className="font-display text-3xl md:text-4xl font-medium text-[#2B1B12]">{s.value}</span>
          <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-[#2B1B12]/50">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── How It Works Preview ─────────────────────────────────────
const STEPS = [
  { icon: Users, step: '01', title: 'Create a Circle', desc: 'Gather 5 trusted people. Set the pot size, contribution, and frequency.' },
  { icon: Shield, step: '02', title: 'Set Trust Rules', desc: 'Guarantors co-sign. Deposits lock. Auto-debit activates. Nobody japa.' },
  { icon: RotateCcw, step: '03', title: 'Auto-Rotate & Collect', desc: 'Each cycle, one person collects the full pot. The engine runs itself.' },
];

function HowItWorksPreview() {
  return (
    <section className="py-20 px-6 md:px-10 paper-texture">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2B1B12]/50 block mb-3">The Mechanism</span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-[#2B1B12]">
            Simple as it has<br />
            <span className="italic font-medium">always been</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <div key={s.step} className="bg-[#FDFCF8] rounded-2xl p-8 border border-[#2B1B12]/8 hover:border-[#D4A017]/40 transition-colors group">
              <div className="flex items-center gap-4 mb-5">
                <span className="font-display text-[#D4A017] text-4xl font-light">{s.step}</span>
                <div className="w-10 h-10 rounded-full bg-[#2B1B12]/5 flex items-center justify-center group-hover:bg-[#D4A017]/10 transition-colors">
                  <s.icon size={18} className="text-[#2B1B12]/60 group-hover:text-[#D4A017] transition-colors" />
                </div>
              </div>
              <h3 className="font-display text-xl font-medium text-[#2B1B12] mb-3">{s.title}</h3>
              <p className="font-sans text-[14px] text-[#2B1B12]/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/how-it-works" className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase text-[#2B1B12]/60 hover:text-[#D4A017] transition-colors">
            See full walkthrough <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Anti-Japa Section ────────────────────────────────────────
const TRUST_LAYERS = [
  { title: 'Staked Wallet', desc: 'Every member locks a security deposit before joining. Skin in the game.' },
  { title: 'Guarantor Rule', desc: 'Chief Ade co-signs. If a member disappears, the guarantor covers the pot.' },
  { title: 'Auto-Debit', desc: 'Direct Debit mandate activated at setup. No manual payment needed — or possible to skip.' },
  { title: 'Insurance Layer', desc: 'Circle-level insurance covers catastrophic defaults. Your money is protected.' },
];

function AntiJapaSection() {
  return (
    <section className="py-20 px-6 md:px-10 bg-[#2B1B12]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D4A017]/70 block mb-4">Anti-Japa Layer</span>
            <h2 className="font-display text-4xl md:text-6xl font-light text-[#FDFCF8] leading-[1.05] mb-6">
              Admin Cannot<br />
              <span className="italic font-medium text-[#D4A017]">Japa Again</span>
            </h2>
            <p className="font-sans text-[14px] text-[#FDFCF8]/60 leading-relaxed mb-8 max-w-[420px]">
              The viral trend of Ajo admins disappearing with community funds ends here. We&apos;ve built four interlocking layers that make running away technically impossible.
            </p>
            <Link href="/trust-security" className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase text-[#D4A017] hover:opacity-70 transition-opacity">
              How we built it <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {TRUST_LAYERS.map((layer, i) => (
              <div key={i} className="bg-[#FDFCF8]/5 border border-[#FDFCF8]/10 rounded-xl p-5 hover:border-[#D4A017]/30 transition-colors">
                <CheckCircle size={16} className="text-[#D4A017] mb-3" />
                <h4 className="font-display text-[16px] font-medium text-[#FDFCF8] mb-2">{layer.title}</h4>
                <p className="font-sans text-[12px] text-[#FDFCF8]/50 leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof ─────────────────────────────────────────────
const TESTIMONIALS = [
  { name: 'Adeola B.', location: 'Oldham, Manchester', quote: 'First time I done Ajo without fear. My £250 landed exactly on week 3, no drama.' },
  { name: 'Chief T. Wale', location: 'Birmingham', quote: 'As a leader, the guarantor system protects my reputation. My members trust me more, not less.' },
  { name: 'Funmi A.', location: 'Leeds', quote: 'The trust score showed my group I was serious. Joined a £500 pot within two months.' },
];

function SocialProof() {
  return (
    <section className="py-20 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2B1B12]/50 block mb-3">Village Drum</span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#2B1B12]">
            What the circle <span className="italic">says</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-[#FDFCF8] border border-[#2B1B12]/8 rounded-2xl p-7 paper-texture">
              <p className="font-display text-[18px] font-light italic text-[#2B1B12] leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2B1B12] flex items-center justify-center">
                  <span className="font-display font-bold text-[#D4A017] text-[11px]">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-sans text-[13px] font-medium text-[#2B1B12]">{t.name}</p>
                  <p className="font-sans text-[11px] text-[#2B1B12]/50">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-24 px-6 md:px-10 bg-[#2B1B12] paper-texture">
      <div className="max-w-[800px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4A017]/25 bg-[#D4A017]/[0.08] mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
          <span className="font-sans text-[10px] tracking-[0.2em] text-[#D4A017]/80 uppercase">Now accepting waitlist — Oldham & Manchester</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl font-light text-[#FDFCF8] leading-[1.05] mb-6">
          Your circle is<br />
          <span className="italic font-medium text-[#D4A017]">waiting for you</span>
        </h2>
        <p className="font-sans text-[15px] text-[#FDFCF8]/60 leading-relaxed mb-10 max-w-[480px] mx-auto">
          Join the waitlist. Be first in your city. No hidden fees. No japa. Just trust, rotating the way it always should have.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full bg-[#D4A017] text-[#2B1B12] font-semibold hover:bg-[#F3D07A] transition-colors shimmer"
          >
            Join Waitlist <ArrowRight size={14} />
          </Link>
          <Link
            href="https://app.aroleadjo.com"
            className="inline-flex items-center justify-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full border border-[#FDFCF8]/20 text-[#FDFCF8] hover:border-[#FDFCF8]/50 transition-colors"
          >
            Launch App
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────
export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-10 text-center paper-texture pt-24 pb-16">
        {/* Background gold glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4A017]/[0.06] blur-[120px]" />
        </div>

        <div className={`relative z-10 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4A017]/25 bg-[#D4A017]/[0.07] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="font-sans text-[10px] tracking-[0.2em] text-[#2B1B12]/70 uppercase">
              £42k rotated in Manchester • 0 defaults
            </span>
          </div>

          {/* Cowrie */}
          <div className="flex justify-center mb-8">
            <CowrieSeal />
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-8xl font-light text-[#2B1B12] leading-[1.0] tracking-[-0.02em] mb-4">
            Admin Cannot<br />
            <span className="italic font-medium text-[#D4A017]">Japa Again</span>
          </h1>

          <p className="font-display text-xl md:text-2xl font-light italic text-[#2B1B12]/50 mb-6">
            The Heirloom of Trust
          </p>

          <p className="font-sans text-[15px] text-[#2B1B12]/60 leading-relaxed max-w-[520px] mx-auto mb-10">
            Rotating savings circles — Ajo reimagined. Secure, automated, and built on real Yoruba community trust. No admin can walk away with your money again.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full bg-[#2B1B12] text-[#D4A017] hover:bg-[#3d2518] transition-colors shimmer"
            >
              Join Waitlist <ArrowRight size={14} />
            </Link>
            <Link
              href="https://app.aroleadjo.com"
              className="inline-flex items-center justify-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full border border-[#2B1B12]/20 text-[#2B1B12] hover:border-[#2B1B12]/50 transition-colors"
            >
              Launch App
            </Link>
          </div>

          {/* 5 People */}
          <PeopleRow />
          <p className="font-sans text-[11px] text-[#2B1B12]/40 mt-3 tracking-[0.1em]">128+ trusted members across UK</p>
        </div>
      </section>

      {/* Stats */}
      <div className="px-6 md:px-10 max-w-[1280px] mx-auto">
        <StatsBar />
      </div>

      {/* How It Works preview */}
      <HowItWorksPreview />

      {/* Anti-Japa */}
      <AntiJapaSection />

      {/* Social Proof */}
      <SocialProof />

      {/* CTA */}
      <CTASection />
    </div>
  );
}
