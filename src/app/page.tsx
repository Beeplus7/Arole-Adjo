'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';

// ─── Marquee data ────────────────────────────────────────────
const MARQUEE_GROUPS = [
  { name: 'Circle MK2 • Manchester', pot: '£250', members: 5, trust: 94, status: 'LIVE' },
  { name: 'Egbe Omo Yoruba • Oldham', pot: '£500', members: 10, trust: 91, status: 'LIVE' },
  { name: 'Ibadan UK Circle', pot: '£1,000', members: 8, trust: 88, status: 'ACTIVE' },
  { name: 'Leeds Ladies Ajo', pot: '£250', members: 6, trust: 82, status: 'LIVE' },
  { name: 'Birmingham Egbe West', pot: '£750', members: 12, trust: 89, status: 'LIVE' },
  { name: 'Sheffield Oduduwa', pot: '£500', members: 9, trust: 79, status: 'ACTIVE' },
];

// ─── Waitlist modal ──────────────────────────────────────────
function WaitlistModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', city: '' });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error: sbErr } = await supabase.from('waitlist').insert({
      name: form.name, email: form.email.toLowerCase(), city: form.city, role: 'member',
    });
    setLoading(false);
    if (sbErr) {
      setError(sbErr.code === '23505' ? 'Already on the list — we\'ll be in touch.' : 'Something went wrong. Try WhatsApp.');
      return;
    }
    setDone(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[#2B1B12]/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#FDFCF8] rounded-[28px] p-8 w-full max-w-[440px] shadow-[0_40px_80px_rgba(0,0,0,0.25)]">
        <button onClick={onClose} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#2B1B12]/8 flex items-center justify-center text-[#2B1B12]/60 hover:bg-[#2B1B12]/15 transition-colors text-lg leading-none">×</button>
        {done ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#D4A017] flex items-center justify-center mx-auto mb-5 text-2xl">🐚</div>
            <p className="playfair text-2xl font-bold text-[#2B1B12] mb-2">You&apos;re in.</p>
            <p className="text-[14px] text-[#2B1B12]/60 leading-relaxed">We&apos;ll reach out on WhatsApp when Manchester launches. Stay ready.</p>
          </div>
        ) : (
          <>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#2B1B12]/50 mb-1">Join 5,000 Waitlist • Free</p>
            <p className="playfair text-[26px] font-bold text-[#2B1B12] leading-tight mb-6">Your circle is one step away</p>
            <form onSubmit={submit} className="space-y-4">
              <input required type="text" placeholder="Full name" value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#2B1B12]/15 text-[14px] bg-white focus:outline-none focus:border-[#D4A017]/60 transition-colors" />
              <input required type="email" placeholder="Email address" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#2B1B12]/15 text-[14px] bg-white focus:outline-none focus:border-[#D4A017]/60 transition-colors" />
              <input required type="text" placeholder="Your city (e.g. Oldham, Manchester)" value={form.city}
                onChange={e => setForm({ ...form, city: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#2B1B12]/15 text-[14px] bg-white focus:outline-none focus:border-[#D4A017]/60 transition-colors" />
              {error && <p className="text-[13px] text-red-600 bg-red-50 rounded-xl px-4 py-2">{error}</p>}
              <button type="submit" disabled={loading}
                className="w-full h-[48px] rounded-full bg-[#D4A017] text-[#2B1B12] font-semibold text-[14px] shadow-[0_8px_24px_rgba(212,160,23,0.35)] hover:bg-[#C89612] transition-colors disabled:opacity-60">
                {loading ? 'Joining...' : 'Join Waitlist — Free'}
              </button>
              <p className="text-center text-[11px] text-[#2B1B12]/40">No email spam. One circle test. You can leave with your stake.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Phone Mockup ────────────────────────────────────────────
function PhoneMockup() {
  return (
    <div className="relative w-[300px] sm:w-[332px] h-[640px] rounded-[44px] bg-[#0E0E0E] p-[10px] shadow-[0_30px_80px_rgba(0,0,0,0.35),_0_0_0_1px_rgba(255,255,255,0.1)_inset] z-10">
      <div className="w-full h-full rounded-[34px] bg-[#FDFCF8] overflow-hidden flex flex-col relative">
        {/* Notch */}
        <div className="h-[28px] flex items-center justify-center">
          <div className="w-[88px] h-[18px] rounded-full bg-black/90" />
        </div>

        {/* App content */}
        <div className="px-5 pt-2 pb-4 flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#2B1B12] flex items-center justify-center">
                <span className="playfair text-[#D4A017] text-[10px] font-bold">AA</span>
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-widest text-[#2B1B12]">AROLE ADJO</p>
                <p className="text-[10px] opacity-60 -mt-0.5 text-[#2B1B12]">Manchester MK2</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-[#2B1B12] font-semibold">LIVE</span>
            </div>
          </div>

          {/* Pot card */}
          <div className="mt-5 rounded-[18px] bg-[#2B1B12] text-[#FDFCF8] p-4 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#D4A017]/20" />
            <p className="text-[10px] tracking-widest opacity-60">POT STATUS • LOCKED VAULT</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="playfair text-[28px] font-bold text-[#D4A017]">£150</span>
              <span className="text-[13px] opacity-60">/ £250</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-[#D4A017] w-[60%]" />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-[10px] opacity-60">Auto-debit in 5 days • GoCardless</p>
              <span className="text-[10px] bg-[#D4A017] text-[#2B1B12] px-2 py-0.5 rounded-full font-bold">NEXT: YOU</span>
            </div>
          </div>

          {/* Trust score card */}
          <div className="mt-3 rounded-[14px] border border-[#2B1B12]/10 p-3 bg-white flex items-center justify-between">
            <div>
              <p className="text-[10px] tracking-widest opacity-60 text-[#2B1B12]">TRUST SCORE</p>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="playfair text-[22px] font-bold text-[#2B1B12]">84</span>
                <span className="text-[11px] opacity-40 text-[#2B1B12]">/100</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] bg-[#D4A017] text-[#2B1B12] px-2 py-0.5 rounded-full font-bold">HIGH</span>
              <p className="text-[10px] opacity-60 mt-1 text-[#2B1B12]">Silver → Gold at 90</p>
            </div>
          </div>

          {/* Guarantor */}
          <div className="mt-3 rounded-[14px] border border-[#D4A017]/30 p-3 bg-[#FDF8EC] flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#2B1B12] flex items-center justify-center">
              <span className="playfair text-[#D4A017] text-[10px] font-bold">CA</span>
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-[#2B1B12]">Guarantor Active</p>
              <p className="text-[10px] opacity-60 text-[#2B1B12]">Chief Ade • Co-signed</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>

          {/* Members */}
          <div className="mt-3 space-y-2">
            {[
              { name: 'Chief Ade', status: 'Collected', week: 1, done: true },
              { name: 'Sisi T', status: 'Collected', week: 2, done: true },
              { name: 'YOU', status: 'Next →', week: 3, done: false },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${m.done ? 'bg-[#D4A017] text-[#2B1B12]' : 'bg-[#2B1B12] text-[#D4A017]'}`}>
                  {m.done ? '✓' : m.name.charAt(0)}
                </div>
                <p className="text-[11px] font-semibold text-[#2B1B12] flex-1">{m.name}</p>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${m.done ? 'bg-emerald-100 text-emerald-700' : 'bg-[#D4A017] text-[#2B1B12]'}`}>{m.status}</span>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-auto border-t border-black/5 pt-3 flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[#2B1B12] opacity-60">No admin touch</span>
            </div>
            <span className="text-[#D4A017] font-semibold">🐚 Cowrie Secured</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Floating cards around phone ─────────────────────────────
function FloatingCards() {
  return (
    <>
      {/* Top-left: staked deposit */}
      <div className="absolute left-[2%] top-[12%] lg:left-[4%] z-20 max-w-[44%]" style={{ animation: 'float 4s ease-in-out infinite' }}>
        <div className="rounded-full bg-white border border-[#2B1B12]/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-3 py-2 flex items-center gap-2 text-[11px]">
          <div className="w-7 h-7 rounded-full bg-[#FDF0D5] grid place-items-center text-base">🐚</div>
          <div>
            <p className="font-semibold leading-none text-[#2B1B12]">Staked £50</p>
            <p className="opacity-60 leading-none mt-1 text-[#2B1B12]">Locked in Modulr</p>
          </div>
        </div>
      </div>

      {/* Top-right: trust score */}
      <div className="absolute right-[1%] top-[20%] z-20" style={{ animation: 'floatSlow 5s ease-in-out infinite' }}>
        <div className="rounded-2xl bg-[#2B1B12] text-white shadow-[0_12px_32px_rgba(0,0,0,0.25)] px-4 py-3 min-w-[138px]">
          <p className="text-[10px] tracking-widest opacity-60">TRUST SCORE</p>
          <div className="flex items-end gap-2 mt-1">
            <span className="playfair text-[28px] leading-none font-bold text-[#D4A017]">84</span>
            <span className="text-[11px] mb-1 opacity-70">/100</span>
            <span className="ml-auto text-[10px] bg-[#D4A017] text-[#2B1B12] px-2 py-0.5 rounded-full font-bold">HIGH</span>
          </div>
          <div className="mt-2 h-1 rounded-full bg-white/15">
            <div className="h-1 rounded-full bg-[#D4A017] w-[84%]" />
          </div>
        </div>
      </div>

      {/* Bottom-right: guarantor */}
      <div className="absolute right-[2%] bottom-[12%] z-20 max-w-[56%]" style={{ animation: 'float 4.5s ease-in-out infinite 1s' }}>
        <div className="rounded-full bg-white border border-[#D4A017]/30 shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-3.5 py-2.5 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#2B1B12] text-white grid place-items-center">
            <span className="playfair text-[#D4A017] font-bold text-[10px]">CA</span>
          </div>
          <div className="text-[11px]">
            <p className="font-bold text-[#2B1B12]">Chief Ade • Co-signed</p>
            <p className="opacity-60 text-[#2B1B12]">Guarantor Active</p>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Stats bar ───────────────────────────────────────────────
function StatsBar() {
  return (
    <div className="rounded-[28px] bg-[#2B1B12] text-[#FDFCF8] px-6 lg:px-10 py-8 lg:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mt-12 lg:mt-16">
      <p className="playfair text-[22px] lg:text-[30px] leading-[1.1] font-semibold max-w-[520px]">
        This month in Manchester — the numbers speak.
      </p>
      <div className="flex items-center gap-8 lg:gap-10">
        {[
          { val: '£42k', label: 'Rotated' },
          { val: '128+', label: 'Members' },
          { val: '0', label: 'Defaults' },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-8 lg:gap-10">
            {i > 0 && <div className="w-px h-10 bg-white/10" />}
            <div>
              <p className="playfair text-[28px] font-bold leading-none text-[#D4A017]">{s.val}</p>
              <p className="text-[11px] tracking-widest opacity-60 mt-1">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Marquee ─────────────────────────────────────────────────
function Marquee() {
  const doubled = [...MARQUEE_GROUPS, ...MARQUEE_GROUPS];
  return (
    <div className="relative bg-white border-y border-[#2B1B12]/[0.06] py-14 lg:py-[88px] overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] tracking-[0.2em] font-semibold opacity-60 text-[#2B1B12]">THE CULTURAL PULSE</p>
            <p className="playfair mt-3 text-[32px] lg:text-[52px] leading-[0.95] tracking-[-0.02em] font-bold text-[#2B1B12]">
              Thousands of skits,<br className="hidden lg:block" /> one wound:{' '}
              <span className="text-[#D4A017]">we solved.</span>
            </p>
          </div>
          <p className="text-[13px] max-w-[420px] opacity-60 leading-[1.6] text-[#2B1B12]">
            Trusted circles broken by japa. We watched every video — 2,847 of them, 1.2M mentions. Then we built the lock.
          </p>
        </div>

        {/* Viral stats */}
        <div className="flex gap-10 mb-10">
          {[
            { val: '2,847', label: 'VIDEOS TRACKED' },
            { val: '1.2M', label: 'MENTIONS' },
            { val: '1 problem', label: 'NO TRUST LAYER' },
          ].map((s, i) => (
            <div key={i}>
              <p className="playfair text-[28px] font-bold text-[#2B1B12]">{s.val}</p>
              <p className="text-[10px] tracking-widest opacity-50 text-[#2B1B12] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling cards */}
      <div className="relative mt-4">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-[12%] bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-[12%] bg-gradient-to-l from-white to-transparent z-10" />
        <div className="overflow-hidden">
          <div className="flex w-[200%] will-change-transform" style={{ animation: 'marquee 28s linear infinite' }}>
            {doubled.map((g, i) => (
              <div key={i} className="w-[300px] sm:w-[340px] shrink-0 mx-3 rounded-[20px] border border-[#2B1B12]/10 bg-[#FDFCF8] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                <div className="h-[148px] relative bg-[#2B1B12] overflow-hidden">
                  <div className="absolute inset-0 adire-bg opacity-40" />
                  <div className="absolute inset-0 p-3 flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="px-2 py-1 rounded-full bg-white/15 backdrop-blur">{g.status}</span>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
                        <span>LIVE</span>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <p className="text-[12px] leading-tight opacity-90 max-w-[75%]">{g.name}</p>
                      <div className="w-9 h-9 rounded-full bg-white/90 text-[#2B1B12] grid place-items-center">
                        <span className="text-base">🐚</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[13px] font-semibold text-[#2B1B12]">{g.pot} pot</p>
                      <p className="text-[11px] opacity-60 text-[#2B1B12]">{g.members} members</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[13px] font-bold text-[#D4A017]">{g.trust}</p>
                      <p className="text-[11px] opacity-60 text-[#2B1B12]">Trust</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-[11px] text-[#2B1B12] opacity-70">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>GoCardless • No admin touch</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Brand / Logo section ─────────────────────────────────────
function BrandSection() {
  return (
    <section className="relative py-16 lg:py-[112px] overflow-hidden">
      <div className="absolute inset-0 bg-[#FDFCF8]" />
      <div className="absolute inset-0 adire-bg opacity-[0.06]" />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="text-center max-w-[780px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#2B1B12]/10 text-[11px] tracking-widest text-[#2B1B12]">
            <span>🐚</span>
            <span>AROLE ADJO — MORE THAN A LOGO</span>
          </div>
          <p className="playfair mt-6 text-[36px] lg:text-[56px] leading-[0.95] font-bold tracking-[-0.02em] text-[#2B1B12]">
            The bowl, the cowrie,<br />the five.
          </p>
          <p className="mt-4 opacity-60 text-[14px] leading-[1.6] text-[#2B1B12]">
            A symbol that cannot be faked. Every circle is a village, every deposit is a cowrie, every rotation is trust made visible.
          </p>
          <p className="mt-2 text-[11px] tracking-widest opacity-40 text-[#2B1B12]">GOLD FOIL • 5 PEOPLE • BOWL • COWRIE</p>
        </div>

        {/* Central logo orb */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,_rgba(212,160,23,0.22),_transparent_65%)] blur-xl" />
            <div className="relative w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] rounded-full bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10),_0_0_0_1px_rgba(212,160,23,0.18)_inset] grid place-items-center p-10"
              style={{ animation: 'logoShimmer 4s ease-in-out infinite' }}>
              <div className="pointer-events-none absolute inset-0 rounded-full border border-[#D4A017]/25" />
              <div className="pointer-events-none absolute inset-[18px] rounded-full border border-dashed border-[#2B1B12]/10" />
              <div className="text-center">
                <div className="text-7xl lg:text-8xl">🐚</div>
                <p className="playfair text-[#2B1B12] font-bold text-xl mt-3 tracking-[0.15em]">AROLE ADJO</p>
                <p className="text-[10px] tracking-widest opacity-40 mt-1 text-[#2B1B12]">EST. MMXXV • MANCHESTER</p>
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#2B1B12] text-white px-4 py-1.5 text-[10px] tracking-widest shadow-lg whitespace-nowrap">
              GOLD FOIL • TRUST IS HEIRLOOM
            </div>
          </div>
        </div>

        {/* Brand cards */}
        <div className="mt-16 lg:mt-20 grid lg:grid-cols-3 gap-6 max-w-[1040px] mx-auto">
          {[
            { bg: 'bg-[#2B1B12]', icon: '📱', color: 'text-[#D4A017]', title: 'APP ICON • iOS / ANDROID', desc: 'Gold on deep brown, rounded superellipse. Instant trust at a glance.' },
            { bg: 'bg-white border border-[#2B1B12]/10', icon: '💳', color: 'text-[#2B1B12]', title: 'BUSINESS CARD • LETTERPRESS', desc: 'Debossed cowrie texture, edge-painted gold. Feels like money you keep.' },
            { bg: 'bg-[#F6E8BF] border border-[#D4A017]/30', icon: '📦', color: 'text-[#B8860B]', title: 'GOLD FOIL PACKAGING', desc: 'Foil-stamped circle on textured canvas. Mouthwatering in hand.' },
          ].map((card, i) => (
            <div key={i} className={`rounded-[20px] ${card.bg} p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)] relative overflow-hidden`}>
              {i === 2 && <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[#D4A017]/20" />}
              <p className={`text-[11px] tracking-widest opacity-60 relative ${i === 0 ? 'text-white' : 'text-[#2B1B12]'}`}>{card.title}</p>
              <div className={`mt-4 w-[84px] h-[84px] rounded-[22px] ${i === 0 ? 'bg-white' : 'bg-[#2B1B12]'} p-2 shadow-[0_8px_24px_rgba(0,0,0,0.3)] flex items-center justify-center relative`}>
                <span className="text-4xl">{card.icon}</span>
              </div>
              <p className={`mt-4 text-[12px] opacity-70 relative ${i === 0 ? 'text-white' : 'text-[#2B1B12]'}`}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Anti-Japa / Trust Section ────────────────────────────────
function AntiJapaSection({ onWaitlist }: { onWaitlist: () => void }) {
  const LOCKS = [
    {
      num: '01', title: '£50 locked deposit', tag: 'Non-negotiable • FCA segregated',
      desc: 'You stake before you collect. No stake, no circle. Your cowrie sits locked in Modulr segregated account.',
      sub: ['70 = £250', '90+ = £1000'],
    },
    {
      num: '02', title: 'Trust Score → pot size', tag: 'POT VAULT • Modulr • Segregated',
      desc: '70 → £250 pot, 80 → £500, 90+ → £1000. You earn bigger circles by paying on time. No shortcuts.',
      sub: ['CHAINS • 4-WAY LOCKED', 'NO ADMIN TOUCH'],
    },
    {
      num: '03', title: 'Chief Ade co-signs', tag: 'Human guarantee • Not just KYC',
      desc: 'If you japa, guarantor covers pot instantly. Family, leader, or verified elder. Social collateral > legal chase.',
      sub: [],
    },
    {
      num: '04', title: 'GoCardless + 2% pool', tag: 'MONEY FLOW • NO ADMIN TOUCH • FCA REGULATED',
      desc: 'No manual begging. Direct debit pulls, insurance pays if debit fails. Admin never asks for money.',
      sub: ['2% pool • Covers defaults'],
    },
  ];

  return (
    <section className="relative bg-[#2B1B12] text-[#FDFCF8] py-16 lg:py-[96px] overflow-hidden">
      <div className="absolute inset-0 adire-bg opacity-[0.08]" />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] tracking-widest">
            <span>🔒</span>
            <span>JAPA IMPOSSIBLE</span>
          </div>
          <p className="playfair mt-5 text-[34px] lg:text-[54px] leading-[0.95] font-bold">
            We did not add trust.<br />
            We removed the ability<br />
            <span className="text-[#D4A017]">to run.</span>
          </p>
          <p className="mt-4 text-[14px] leading-[1.6] opacity-70 max-w-[520px]">
            Your money never touches admin. Modulr holds it, GoCardless moves it, guarantor backs it. Four locks. No exit.
          </p>
        </div>

        {/* 4-lock grid */}
        <div className="mt-12 lg:mt-16 relative">
          <div className="relative mx-auto max-w-[1080px]">
            <div className="grid lg:grid-cols-[1fr_320px_1fr] gap-6 items-center">
              {/* Left locks */}
              <div className="space-y-5 order-2 lg:order-1">
                {LOCKS.slice(0, 2).map((lock, i) => (
                  <div key={i} className="rounded-[20px] bg-white/[0.06] border border-white/10 p-5 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D4A017] text-[#2B1B12] grid place-items-center font-bold">{lock.num}</div>
                      <p className="font-semibold flex items-center gap-2">{lock.title}</p>
                    </div>
                    <p className="mt-3 text-[13px] leading-[1.5] opacity-75">{lock.desc}</p>
                    <div className="mt-3 flex gap-2 flex-wrap">
                      {lock.sub.map((s, j) => (
                        <span key={j} className="text-[11px] px-2 py-1 rounded-full bg-white/10">{s}</span>
                      ))}
                      <span className="text-[11px] px-2 py-1 rounded-full bg-[#D4A017] text-[#2B1B12] font-bold">{lock.tag.split(' • ')[0]}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Centre orb */}
              <div className="order-1 lg:order-2 flex flex-col items-center">
                <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px]">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#D4A017_0%,_#B8860B_35%,_#2B1B12_72%)] shadow-[0_0_0_8px_rgba(212,160,23,0.15),_0_20px_60px_rgba(0,0,0,0.5)]" />
                  <div className="absolute inset-[12px] rounded-full border border-white/10" />
                  <div className="absolute inset-[22px] rounded-full border border-dashed border-white/15" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <div className="text-5xl">🐚</div>
                      <p className="playfair text-[#D4A017] font-bold text-lg mt-2">AROLE ADJO</p>
                      <p className="text-[10px] tracking-widest opacity-60 mt-1">4-WAY LOCKED</p>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] tracking-widest opacity-40 mt-4 text-center">CHAINS • 4-WAY LOCKED • NO ADMIN TOUCH</p>
                <p className="text-[12px] opacity-60 mt-2 text-center max-w-[260px] leading-relaxed">
                  If admin tries to touch funds: impossible. Modulr account is in Arole Adjo Ltd name, payouts are programmatic.
                </p>
              </div>

              {/* Right locks */}
              <div className="space-y-5 order-3">
                {LOCKS.slice(2).map((lock, i) => (
                  <div key={i} className="rounded-[20px] bg-white/[0.06] border border-white/10 p-5 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white text-[#2B1B12] grid place-items-center font-bold">{lock.num}</div>
                      <p className="font-semibold">{lock.title}</p>
                    </div>
                    <p className="mt-3 text-[13px] leading-[1.5] opacity-75">{lock.desc}</p>
                    <div className="mt-3 flex gap-2 flex-wrap">
                      {lock.sub.map((s, j) => (
                        <span key={j} className="text-[11px] px-2 py-1 rounded-full bg-white/10">{s}</span>
                      ))}
                      <span className="text-[11px] px-2 py-1 rounded-full bg-[#D4A017] text-[#2B1B12] font-bold">{lock.tag.split(' • ')[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Founder */}
        <div className="mt-16 lg:mt-20 border-t border-white/10 pt-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#D4A017] flex items-center justify-center">
              <span className="playfair text-[#2B1B12] font-bold text-xl">OK</span>
            </div>
            <div>
              <p className="font-semibold text-[15px]">Olabamiji Kolabalogun</p>
              <p className="text-[12px] opacity-60">A son of Ibadan, building for the diaspora that never stopped contributing.</p>
              <p className="text-[11px] tracking-widest opacity-40 mt-1">BUILT WITH HERITAGE • FROM IBADAN TO OLDHAM</p>
            </div>
          </div>
          <button onClick={onWaitlist}
            className="inline-flex h-[48px] px-7 rounded-full bg-[#D4A017] text-[#2B1B12] font-semibold text-[14px] items-center gap-2 shadow-[0_8px_24px_rgba(212,160,23,0.35)] hover:bg-[#C89612] transition-colors whitespace-nowrap">
            Join 5,000 Waitlist — Free
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────
function Footer({ onWaitlist }: { onWaitlist: () => void }) {
  return (
    <footer id="waitlist" className="bg-[#FDFCF8] border-t border-[#2B1B12]/[0.06] py-16 px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-12 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#2B1B12] flex items-center justify-center">
                <span className="playfair text-[#D4A017] font-bold text-[11px] tracking-[0.15em]">AA</span>
              </div>
              <span className="playfair font-bold tracking-[0.18em] text-[13px] text-[#2B1B12]">AROLE ADJO</span>
            </div>
            <p className="text-[13px] text-[#2B1B12]/60 leading-relaxed max-w-[380px] mb-4">
              The heirloom of trust. Ajo reimagined for Yoruba communities across the UK — secure, automated, and built on real community.
            </p>
            <p className="text-[11px] tracking-[0.15em] text-[#D4A017]/70 uppercase mb-1">Ibadan × Oldham × Manchester</p>
            <p className="text-[11px] text-[#2B1B12]/40">
              Built by <span className="text-[#2B1B12]/70 font-medium">Olabamiji Kola-Balogun</span> — From Manchester, UK.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#2B1B12]/40 mb-2">Quick Links</p>
            {[
              { label: 'How it Works', href: '/how-it-works' },
              { label: 'Groups', href: '/groups' },
              { label: 'Trust & Security', href: '/trust-security' },
              { label: 'For Leaders', href: '/for-leaders' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Our Story', href: '/our-story' },
              { label: 'FAQ', href: '/faq' },
              { label: 'Legal', href: '/legal' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="text-[13px] text-[#2B1B12]/60 hover:text-[#D4A017] transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
        <div className="border-t border-[#2B1B12]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-[#2B1B12]/40">
            © 2026 • House of Chief Abdul Gani Kolabalogun • Built with trust as heirloom
          </p>
          <div className="flex gap-6">
            <Link href="/legal" className="text-[11px] text-[#2B1B12]/40 hover:text-[#D4A017] transition-colors">Privacy</Link>
            <Link href="/legal" className="text-[11px] text-[#2B1B12]/40 hover:text-[#D4A017] transition-colors">Terms</Link>
            <Link href="/trust-security" className="text-[11px] text-[#2B1B12]/40 hover:text-[#D4A017] transition-colors">Trust & Security</Link>
          </div>
        </div>
        <p className="text-center text-[11px] text-[#2B1B12]/30 mt-4">No admin touches money • Privacy • FCA compliant</p>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function HomePage() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2B1B12] selection:bg-[#D4A017]/30 overflow-x-hidden">
      {showWaitlist && <WaitlistModal onClose={() => setShowWaitlist(false)} />}

      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#FDFCF8]/85 border-b border-[#2B1B12]/[0.06] overflow-hidden max-w-[100vw]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2B1B12] flex items-center justify-center ring-1 ring-[#2B1B12]/10">
              <span className="playfair text-[#D4A017] font-bold text-[11px] tracking-widest">AA</span>
            </div>
            <span className="playfair tracking-[0.18em] text-[13px] font-bold">AROLE ADJO</span>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide">
            {['How it Works', 'Groups', 'Trust & Security', 'For Leaders', 'Our Story'].map(item => (
              <Link key={item} href={`/${item.toLowerCase().replace(/[^a-z]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`}
                className="opacity-70 hover:opacity-100 transition-opacity font-medium">
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setShowWaitlist(true)}
              className="hidden md:inline-flex h-9 px-5 rounded-full bg-[#2B1B12] text-[#FDFCF8] text-[13px] font-medium items-center hover:bg-black transition-colors">
              Launch App
            </button>
            <button onClick={() => setShowWaitlist(true)}
              className="inline-flex h-9 px-5 rounded-full border border-[#2B1B12]/20 text-[13px] font-medium items-center hover:border-[#2B1B12] transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden max-w-[100vw]">
        <div className="absolute inset-0 adire-bg opacity-[0.18]" />
        <div className="absolute inset-0 adire-overlay" />

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8 pt-10 lg:pt-[64px] pb-12 lg:pb-[96px] grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-8 items-center overflow-hidden">
          {/* Left copy */}
          <div className={`relative z-10 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            {/* Trending badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-white px-3 py-1.5 text-[11px] tracking-wide shadow-sm"
              style={{ animation: 'pulseGold 2.2s infinite' }}>
              <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
              <span className="font-semibold">🔥 Trending Now:</span>
              <span className="opacity-80">#AjoMakeItBig — Admin Cannot Japa Again</span>
            </div>

            {/* Headline */}
            <h1 className="playfair mt-7 text-[40px] sm:text-[54px] lg:text-[72px] leading-[0.92] tracking-[-0.03em] font-[700]">
              <span className="block">The Heirloom</span>
              <span className="block">of Trust</span>
              <span className="block text-[#D4A017]">Admin Cannot</span>
              <span className="block text-[#B8860B]">Japa Again.</span>
            </h1>

            <p className="mt-6 max-w-[520px] text-[16px] lg:text-[17px] leading-[1.6] opacity-70">
              Rotating savings circles — Ajo reimagined.{' '}
              <span className="font-semibold opacity-90 text-[#2B1B12]">No one runs. £42,000 rotated in Manchester this month.</span>{' '}
              Secure, automated, built on real Yoruba community trust.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => setShowWaitlist(true)}
                className="inline-flex h-[48px] px-7 rounded-full bg-[#D4A017] text-[#2B1B12] font-semibold text-[14px] items-center gap-2 shadow-[0_8px_24px_rgba(212,160,23,0.35)] hover:bg-[#C89612] transition-colors">
                <div className="w-6 h-6 rounded-full bg-[#2B1B12] text-[#FDFCF8] grid place-items-center text-[12px]">🐚</div>
                Join Waitlist • Free
              </button>
              <button onClick={() => setShowWaitlist(true)}
                className="inline-flex h-[48px] px-6 rounded-full border border-[#2B1B12]/15 bg-white/80 backdrop-blur text-[14px] font-medium items-center gap-2 hover:border-[#2B1B12]/30">
                <div className="w-7 h-7 rounded-full bg-[#2B1B12] text-white grid place-items-center">
                  <svg className="w-3.5 h-3.5 fill-white ml-[1px]" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                Live Demo
              </button>
            </div>

            {/* Social proof avatars */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {['#D4A017','#B8860B','#2B1B12','#8B6914','#C89612'].map((c, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white grid place-items-center text-[11px] font-bold text-white"
                    style={{ backgroundColor: c }}>
                    {['A','S','F','T','U'][i]}
                  </div>
                ))}
              </div>
              <p className="text-[12.5px] leading-[1.35] text-[#2B1B12]">
                <span className="font-semibold">128+ trusted members</span>
                <br /><span className="opacity-60 flex items-center gap-1">★ <span className="text-[#D4A017]">★ ★ ★ ★</span> • Gold-verified circles</span>
              </p>
            </div>

            {/* Mini stats */}
            <div className="mt-8 lg:mt-10 grid grid-cols-3 max-w-[460px] border-t border-[#2B1B12]/10 pt-5">
              {[{ val: '£42k', label: 'ROTATED' }, { val: '0', label: 'DEFAULTS' }, { val: '4.8★', label: 'TRUST RATING' }].map((s, i) => (
                <div key={i} className={`${i > 0 ? 'pl-5 border-l border-[#2B1B12]/10' : ''}`}>
                  <p className="playfair text-[20px] font-bold text-[#2B1B12]">{s.val}</p>
                  <p className="text-[11px] uppercase tracking-widest opacity-60 text-[#2B1B12]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — phone + floating cards */}
          <div className={`relative lg:h-[680px] flex items-center justify-center overflow-hidden max-w-full transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute w-[420px] h-[420px] max-w-[90vw] rounded-full bg-[radial-gradient(circle_at_center,_rgba(212,160,23,0.22),_transparent_65%)] blur-[1px] pointer-events-none" />
            <FloatingCards />
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <StatsBar />
      </div>

      {/* Marquee */}
      <Marquee />

      {/* Brand */}
      <BrandSection />

      {/* Anti-Japa */}
      <AntiJapaSection onWaitlist={() => setShowWaitlist(true)} />

      {/* Footer */}
      <Footer onWaitlist={() => setShowWaitlist(true)} />
    </div>
  );
}
