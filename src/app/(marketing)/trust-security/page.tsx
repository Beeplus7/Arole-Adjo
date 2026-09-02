'use client';

import Link from 'next/link';
import { Shield, Lock, CreditCard, TrendingUp, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const LOCKS = [
  {
    num: '01', title: 'Staked Wallet', sub: 'Your Cowrie — £50 Locked Deposit',
    icon: Lock, color: 'bg-[#D4A017]',
    body: 'Before you can collect £250 pot, you lock £50 in vault. Can\'t withdraw until you complete circle. If you japa after collecting, £50 goes to cover pot.',
    tag: 'STAKE SECURES POT',
    detail: [
      { label: 'AROLE WALLET', sub: 'Available £0.00' },
      { label: 'Locked', sub: '£50.00 secured' },
    ],
  },
  {
    num: '02', title: 'Guarantor', sub: 'Chief Ade Co-Signs — Social Collateral',
    icon: Shield, color: 'bg-[#2B1B12]',
    body: 'Every member invites a guarantor — someone with Trust 80+ who vouches. If you default, guarantor\'s trust drops + covers first £50. No one wants to shame their guarantor.',
    tag: 'FLOW • INVITE → VOUCH → SECURED',
    detail: [
      { label: 'You invite', sub: 'Chief Ade • Trust 94' },
      { label: 'Instant notify', sub: 'Trust at stake' },
    ],
  },
  {
    num: '03', title: 'Tiered Trust', sub: 'Trust Score Gates Pot Size',
    icon: TrendingUp, color: 'bg-[#D4A017]',
    body: 'Need 2 small circles completed before unlocking bigger. Prevents new account from joining £1000 pot and japa. You: 70 → Member+. Elder: 90+.',
    tag: 'TRUST GATES ACCESS',
    detail: [
      { label: '0–69', sub: 'Risky / Blocked' },
      { label: '70–89', sub: 'Member • Up to £500' },
      { label: '90+', sub: 'Elder • Up to £1000+' },
    ],
  },
  {
    num: '04', title: 'Auto-Debit + Insurance', sub: 'GoCardless + 2% Insurance Pool',
    icon: CreditCard, color: 'bg-[#2B1B12]',
    body: 'Direct Debit mandate signed at onboarding. Every Monday 8am, £50 auto-debits → Modulr segregated client account (FCA regulated) → Auto-payout at 9am. Admin never touches money.',
    tag: 'MONEY PATH • NO ADMIN POCKET',
    detail: [
      { label: '8:00 AM', sub: 'Auto-debit £50' },
      { label: '8:05', sub: 'Segregated vault' },
      { label: '9:00 AM', sub: 'Payout £250 → you' },
    ],
  },
];

const VIRAL_PATTERNS = [
  { title: 'Admin moves pot to personal Monzo', how: 'Modulr holds all funds. Admin has zero access. Segregated FCA account.' },
  { title: 'Admin disappears after collecting', how: 'Locked deposit forfeited. Guarantor liable. Trust Score zeroed. Village Drum records permanently.' },
  { title: 'Admin changes payout order', how: 'Sequence locked at circle creation. No unilateral changes. Smart contract logic.' },
];

export default function TrustSecurityPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2B1B12] selection:bg-[#D4A017]/20">

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-14 lg:pt-24 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2B1B12] text-[#FDFCF8] text-[11px] font-semibold tracking-widest">
              <Shield className="w-3.5 h-3.5 text-[#D4A017]" />
              <span>TRUST & SECURITY • 4 LOCKS</span>
            </div>
            <h1 className="playfair text-[40px] lg:text-[72px] leading-[0.95] font-bold tracking-[-0.02em] mt-6 text-[#2B1B12]">
              Admin Cannot<br />
              <span className="text-[#D4A017]">Japa Again</span>
            </h1>
            <p className="mt-5 text-[16px] lg:text-[18px] leading-[1.6] text-[#2B1B12]/70 max-w-[48ch]">
              <span className="text-[#2B1B12] font-medium">Admin never holds money. Modulr does. Auto-debit does. Code does.</span>{' '}
              Each lock alone stops 90% of defaults. Together, they make disappearing mathematically and socially impossible.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2B1B12]/10 bg-white text-[13px] font-medium">
                <div className="w-2 h-2 rounded-full bg-[#15803D] animate-pulse" />
                <span>No human touch</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2B1B12]/10 bg-white text-[13px] font-medium">
                <CheckCircle className="w-4 h-4 text-[#15803D]" />
                <span>FCA ring-fenced</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2B1B12]/10 bg-white text-[13px] font-medium">
                <Shield className="w-4 h-4 text-[#D4A017]" />
                <span>Zero japa</span>
              </div>
            </div>
            {/* Mini stats */}
            <div className="mt-10 grid grid-cols-3 gap-3 max-w-[420px]">
              {[{ val: '0', label: 'JAPA CASES' }, { val: '4', label: 'LOCKS ACTIVE' }, { val: '£512k', label: 'PROTECTED' }].map(s => (
                <div key={s.label} className="rounded-2xl bg-white border border-[#2B1B12]/[0.06] p-4">
                  <p className="playfair text-[22px] font-bold text-[#2B1B12]">{s.val}</p>
                  <p className="text-[11px] tracking-widest uppercase text-[#2B1B12]/50 font-semibold mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vault diagram */}
          <div className="relative lg:ml-auto w-full max-w-[520px]">
            <div className="relative rounded-[32px] bg-white border border-[#2B1B12]/10 shadow-[0_20px_80px_rgba(43,27,18,0.12)] p-6 lg:p-8 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,160,23,0.15),transparent_60%)]" />
              <div className="relative">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[11px] tracking-[0.14em] font-bold text-[#2B1B12]/40">VAULT CORE • MODULR</span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#15803D]/10 text-[#15803D] text-[11px] font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                    FCA RING-FENCED
                  </div>
                </div>

                {/* Central vault orb */}
                <div className="relative mx-auto w-[240px] h-[240px] rounded-full bg-[#2B1B12] grid place-items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_20px_40px_rgba(0,0,0,0.25)]">
                  {/* Lock icons on compass points */}
                  {[
                    { pos: 'absolute -top-3 left-1/2 -translate-x-1/2', icon: Lock },
                    { pos: 'absolute top-1/2 -right-3 -translate-y-1/2', icon: Shield },
                    { pos: 'absolute -bottom-3 left-1/2 -translate-x-1/2', icon: CreditCard },
                    { pos: 'absolute top-1/2 -left-3 -translate-y-1/2', icon: TrendingUp },
                  ].map((item, i) => (
                    <div key={i} className={`${item.pos} w-9 h-9 rounded-full bg-[#D4A017] grid place-items-center shadow-lg border-2 border-white`}>
                      <item.icon className="w-4 h-4 text-[#2B1B12]" />
                    </div>
                  ))}
                  <div className="w-[168px] h-[168px] rounded-full bg-[#FDFCF8] border-[6px] border-[#D4A017]/30 grid place-items-center">
                    <div className="text-center">
                      <p className="playfair text-[36px] font-bold leading-none text-[#2B1B12]">£250</p>
                      <p className="text-[11px] tracking-widest font-bold text-[#2B1B12]/50 mt-1">SEGREGATED POT</p>
                      <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#15803D]/10 text-[#15803D] text-[10px] font-bold">
                        <CheckCircle className="w-3 h-3" /> Locked
                      </div>
                    </div>
                  </div>
                </div>

                {/* Admin blocked */}
                <div className="mt-6 grid grid-cols-2 gap-2 text-[11px] font-semibold">
                  {['No access', 'No Monzo', 'No Japa route', 'BLOCKED'].map(t => (
                    <div key={t} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#D4A017]/20 grid place-items-center">
                        <div className="w-2 h-2 rounded-full bg-[#D4A017]" />
                      </div>
                      <span className="text-[#2B1B12]/70">{t}</span>
                    </div>
                  ))}
                </div>

                {/* Admin outside label */}
                <div className="mt-6 rounded-2xl bg-red-50 border border-red-200 p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-red-200 grid place-items-center relative">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white grid place-items-center text-[10px] font-bold">✕</div>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-red-700">ADMIN OUTSIDE VAULT</p>
                    <p className="text-[11px] text-red-500 mt-0.5">No access • No Monzo • No Japa route</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What went viral */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-[11px] font-semibold tracking-widest mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            WHAT WENT VIRAL • 3 real patterns from UK WhatsApp groups 2022–2024
          </div>
          <h2 className="playfair text-[32px] lg:text-[48px] font-bold text-[#2B1B12]">
            How they japa&apos;d. How we <span className="text-[#D4A017]">blocked it.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          {VIRAL_PATTERNS.map((p, i) => (
            <div key={i} className="rounded-[20px] overflow-hidden border border-[#2B1B12]/8">
              <div className="bg-red-50 border-b border-red-100 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span className="text-[11px] font-bold text-red-600 tracking-widest">BEFORE</span>
                </div>
                <p className="font-bold text-[15px] text-[#2B1B12]">{p.title}</p>
              </div>
              <div className="bg-[#FDFCF8] p-5">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                  <p className="text-[13px] text-[#2B1B12]/70 leading-relaxed">{p.how}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Locks detail */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-12">
          <h2 className="playfair text-[32px] lg:text-[52px] font-bold text-[#2B1B12]">
            The 4 Locks — <span className="text-[#D4A017]">explained</span>
          </h2>
          <p className="mt-3 text-[14px] text-[#2B1B12]/60 max-w-[520px] mx-auto">
            Each lock alone stops 90% of defaults. Together, disappearing is mathematically and socially impossible.
          </p>
        </div>
        <div className="space-y-6">
          {LOCKS.map((lock, i) => (
            <div key={i} className={`grid lg:grid-cols-[1fr_2fr] border border-[#2B1B12]/8 rounded-[20px] overflow-hidden ${i % 2 === 1 ? '' : ''}`}>
              <div className={`${lock.color} p-8 flex flex-col justify-between`}>
                <div>
                  <span className="playfair text-[48px] font-light text-white/20">{lock.num}</span>
                  <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mt-3 mb-4">
                    <lock.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="playfair text-[22px] font-bold text-white">{lock.title}</h3>
                  <p className="text-[12px] text-white/60 mt-1">{lock.sub}</p>
                </div>
                <span className="mt-6 inline-block text-[10px] tracking-widest font-bold text-white/50 border border-white/20 rounded-full px-3 py-1">{lock.tag}</span>
              </div>
              <div className="bg-[#FDFCF8] p-8">
                <p className="text-[15px] leading-[1.65] text-[#2B1B12]/70 mb-6">{lock.body}</p>
                <div className="grid grid-cols-3 gap-3">
                  {lock.detail.map((d, j) => (
                    <div key={j} className="rounded-xl bg-white border border-[#2B1B12]/8 p-3 text-center">
                      <p className="text-[11px] tracking-widest opacity-50 text-[#2B1B12]">{d.label}</p>
                      <p className="text-[12px] font-bold text-[#2B1B12] mt-1">{d.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Money flow timeline */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-[#2B1B12] rounded-[28px] p-8 lg:p-12">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#D4A017]/70 mb-2">MONEY PATH • NO ADMIN POCKET</p>
          <h2 className="playfair text-[28px] lg:text-[40px] font-bold text-[#FDFCF8] mb-8">
            Every pound is traceable,<br />ring-fenced, and <span className="text-[#D4A017]">auto-routed.</span>
          </h2>
          <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-3 items-center">
            {[
              { num: '1', label: 'Your Bank', sub: 'You' },
              { num: '2', label: 'GoCardless', sub: 'Auto-debit 8am' },
              { num: '3', label: 'Modulr Vault', sub: 'Segregated FCA' },
              { num: '4', label: 'Auto Payout', sub: '9am to member' },
            ].map((step, i, arr) => (
              <div key={step.num} className="contents">
                <div className="rounded-xl bg-white text-[#2B1B12] px-4 py-3 flex items-center gap-3 border border-[#2B1B12]/10">
                  <div className="w-8 h-8 rounded-full bg-[#2B1B12] text-white grid place-items-center text-[12px] font-bold shrink-0">{step.num}</div>
                  <div>
                    <p className="text-[13px] font-semibold">{step.label}</p>
                    <p className="text-[11px] opacity-60">{step.sub}</p>
                  </div>
                </div>
                {i < arr.length - 1 && <div className="hidden lg:flex items-center justify-center opacity-40 text-white text-lg">→</div>}
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12px] text-white/50">
            Village Drum records every step — immutable SHA-256 hash chain. Even Arole Adjo cannot edit it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-16 text-center">
        <p className="playfair text-[28px] lg:text-[40px] font-bold text-[#2B1B12] mb-4">
          No Monzo pot. No begging. No japa story.<br />
          <span className="text-[#D4A017]">Just code, FCA vault, and community stake.</span>
        </p>
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <Link href="/contact" className="h-[48px] px-7 rounded-full bg-[#2B1B12] text-[#D4A017] font-semibold text-[14px] inline-flex items-center gap-2 hover:bg-black transition">
            Join Waitlist <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/how-it-works" className="h-[48px] px-7 rounded-full border border-[#2B1B12]/20 text-[#2B1B12] font-semibold text-[14px] inline-flex items-center gap-2 hover:border-[#2B1B12]/40 transition">
            How It Works
          </Link>
        </div>
      </section>
    </div>
  );
}
