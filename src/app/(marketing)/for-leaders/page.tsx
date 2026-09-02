'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, CheckCircle, X, Crown } from 'lucide-react';

const LEADER_DO = [
  'Vouch for member character — you know them personally',
  'Resolve disputes with fairness — you are the elder',
  'Bring your existing community — church, market, egbe',
  'Review applications in 24h — keep trust high',
];
const LEADER_DONT = [
  'Touch member funds — Modulr holds everything',
  'Chase payment — GoCardless auto-debits',
  'Set payout schedule — engine calculates',
  'Keep ledger — Village Drum records immutably',
];

const REQUIREMENTS = [
  { label: 'Trust Score 80+', sub: 'Silver tier minimum' },
  { label: 'UK resident', sub: 'KYC verified address' },
  { label: 'Community vouching', sub: '2 Elder guarantors' },
  { label: 'Clean record', sub: '0 defaults, 0 disputes' },
  { label: 'One interview', sub: 'WhatsApp 30min max' },
];

export default function ForLeadersPage() {
  const [circles, setCircles] = useState(12);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', city: 'Manchester', villageName: '', memberCount: '150', experience: '', ledBefore: 'yes', g1: '', g2: '', why: '',
  });

  const perPayout = 250;
  const earning = Math.round(circles * perPayout * 0.02);
  const yearly = earning * 12;

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2B1B12] antialiased selection:bg-[#D4A017]/20">

      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-5 md:px-8 pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FFF2C2] border border-[#D4A017]/20 text-[11px] tracking-[0.14em] font-semibold text-[#2B1B12]">
              <Crown className="w-3.5 h-3.5 text-[#D4A017]" />
              ALAJO AGBA PROGRAMME
            </div>
            <h1 className="playfair mt-6 text-[40px] md:text-[64px] leading-[0.95] tracking-tight text-[#2B1B12]">
              Rise<br /><span className="italic font-light text-[#D4A017]">to Alajo Agba</span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[18px] leading-[1.6] opacity-70 max-w-[520px]">
              You already lead Egbe, church, market women. Now get paid for it. Create a village, bring your people, earn <strong>2% on every payout</strong> — automatically. No begging, no chasing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#apply" className="px-7 py-3.5 rounded-full bg-[#2B1B12] text-white text-[13px] font-semibold tracking-wide flex items-center gap-2 hover:bg-black transition">
                <Crown className="w-4 h-4 text-[#D4A017]" /> Apply Now — 24h Review
              </a>
              <a href="#dashboard" className="px-7 py-3.5 rounded-full bg-white border border-[#EDE8DF] text-[13px] font-semibold tracking-wide hover:border-[#2B1B12] transition text-[#2B1B12]">
                See Leader Dashboard
              </a>
            </div>
            <div className="mt-8 p-4 rounded-2xl bg-white border border-[#EDE8DF] flex gap-4 max-w-[520px]">
              <div className="w-10 h-10 rounded-full bg-[#F6EFE0] flex items-center justify-center text-[#D4A017] shrink-0">🎙️</div>
              <div className="text-[13px] leading-[1.5] text-[#2B1B12]">
                <span className="font-semibold">&ldquo;Before I was chasing people on WhatsApp. Now GoCardless debits, Modulr pays, I just lead.&rdquo;</span>
                <p className="opacity-60 mt-1">— Iya Alajo, now earning £300/mo</p>
              </div>
            </div>
          </div>

          {/* Dashboard preview */}
          <div id="dashboard" className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-[#D4A017]/15 to-transparent rounded-[32px] blur-2xl" />
            <div className="relative bg-white rounded-[28px] border border-[#EDE8DF] shadow-[0_20px_60px_rgba(43,27,18,0.12)] overflow-hidden">
              <div className="h-[56px] px-6 flex items-center justify-between border-b border-[#F0EADF]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4A017]" />
                  <span className="text-[12px] tracking-[0.14em] font-semibold text-[#2B1B12]">VILLAGE COMMAND CENTER • LIVE</span>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] font-semibold">● Online • Oldham Market</span>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                {/* Earnings */}
                <div className="col-span-2 rounded-2xl bg-[#2B1B12] text-[#FDFCF8] p-5 flex justify-between items-center">
                  <div>
                    <p className="text-[11px] tracking-[0.14em] opacity-60">THIS MONTH</p>
                    <p className="mt-1 playfair text-[34px] leading-none text-[#D4A017]">£{earning}<span className="text-[16px] opacity-60">.40</span></p>
                    <div className="mt-2 inline-flex items-center gap-1 text-[11px] bg-[#D4A017] text-[#2B1B12] px-2 py-1 rounded-full font-semibold">
                      ↑ From {circles} active circles
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-14 h-14 rounded-full border-[3px] border-[#D4A017]/30 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#D4A017] flex items-center justify-center playfair text-[16px] text-[#2B1B12] font-bold">96</div>
                    </div>
                    <p className="text-[10px] tracking-widest opacity-60 mt-1">TRUST SCORE</p>
                  </div>
                </div>

                {/* Villages stats */}
                <div className="rounded-2xl bg-[#FDFCF8] border border-[#EDE8DF] p-4">
                  <p className="text-[11px] opacity-50 tracking-widest text-[#2B1B12]">VILLAGES</p>
                  <p className="mt-1 text-[22px] playfair text-[#2B1B12]">3</p>
                  <p className="mt-1 text-[11px] opacity-60 text-[#2B1B12]">Oldham, Failsworth, Chadderton</p>
                </div>
                <div className="rounded-2xl bg-[#FDFCF8] border border-[#EDE8DF] p-4">
                  <p className="text-[11px] opacity-50 tracking-widest text-[#2B1B12]">MEMBERS</p>
                  <p className="mt-1 text-[22px] playfair text-[#2B1B12]">89</p>
                  <p className="mt-1 text-[11px] opacity-60 text-[#2B1B12]">+86 this month</p>
                  <div className="mt-2 flex -space-x-2">
                    {['#D4A017','#B8860B','#2B1B12','#8B6914'].map((c,i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-semibold" style={{ backgroundColor: c }}>
                        {['A','B','T','S'][i]}
                      </div>
                    ))}
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-white text-[10px] flex items-center justify-center font-semibold text-[#2B1B12]">+</div>
                  </div>
                </div>

                {/* Active circles */}
                <div className="col-span-2 rounded-2xl bg-white border border-[#EDE8DF] p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] tracking-widest opacity-60 text-[#2B1B12]">ACTIVE CIRCLES</p>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#FFF2C2] text-[#2B1B12]">{circles} running</span>
                  </div>
                  <input type="range" min={1} max={100} value={circles} onChange={e => setCircles(Number(e.target.value))}
                    className="w-full h-1 accent-[#D4A017]"
                    style={{ background: `linear-gradient(to right, #D4A017 ${circles}%, #e5e7eb ${circles}%)` }}
                  />
                  <div className="mt-2 flex justify-between text-[10px] opacity-40 text-[#2B1B12]">
                    <span>5 circles</span><span>100 circles</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                    {[
                      { label: 'EST. MONTHLY', val: `£${earning}` },
                      { label: 'PER YEAR', val: `£${yearly.toLocaleString()}` },
                      { label: 'PER PAYOUT', val: `£${perPayout * 0.02}` },
                    ].map(s => (
                      <div key={s.label} className="rounded-xl bg-[#FDFCF8] border border-[#EDE8DF] p-2">
                        <p className="text-[9px] tracking-widest opacity-50 text-[#2B1B12]">{s.label}</p>
                        <p className="playfair font-bold text-[14px] mt-0.5 text-[#2B1B12]">{s.val}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-center opacity-40 mt-2 text-[#2B1B12]">Modulr • GoCardless • FCA Compliant • Village Drum Ledger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2% model */}
      <section className="bg-[#2B1B12] py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#D4A017]/70 mb-3">THE 2% LEADER MODEL</p>
            <h2 className="playfair text-[32px] lg:text-[48px] font-bold text-[#FDFCF8]">
              You earn because you vouch,<br />you resolve disputes, you bring trust.
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Pot breakdown */}
            <div className="rounded-[20px] bg-white/5 border border-white/10 p-6">
              <p className="text-[11px] tracking-widest text-[#D4A017]/70 mb-4">POT BREAKDOWN • £250 example</p>
              {[
                { label: 'MEMBER GETS', val: '£243.75', pct: '97.5%', color: 'bg-[#D4A017]' },
                { label: 'TECH', val: '£1.25', pct: '0.5%', color: 'bg-white/20' },
                { label: 'YOU', val: '£5', pct: '2%', color: 'bg-emerald-500' },
              ].map(row => (
                <div key={row.label} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                  <div>
                    <p className="text-[11px] tracking-widest opacity-50 text-white">{row.label}</p>
                    <p className="playfair text-[20px] font-bold text-[#FDFCF8] mt-0.5">{row.val}</p>
                  </div>
                  <span className={`text-[12px] px-3 py-1 rounded-full font-bold ${row.color} ${row.color === 'bg-[#D4A017]' ? 'text-[#2B1B12]' : 'text-white'}`}>{row.pct}</span>
                </div>
              ))}
              <p className="text-[11px] opacity-50 text-white mt-4">£4 to you, £1 to Arole Adjo. 20% platform split keeps lights on.</p>
            </div>

            {/* Do / Don't */}
            <div className="rounded-[20px] bg-white/5 border border-white/10 p-6">
              <p className="text-[11px] tracking-widest text-[#D4A017]/70 mb-4">YOUR JOB IS TRUST, NOT TREASURY</p>
              <div className="space-y-3">
                <p className="text-[11px] tracking-widest opacity-60 text-white">DO ✓</p>
                {LEADER_DO.map(d => (
                  <div key={d} className="flex gap-2 text-[12px] text-white/80">
                    <CheckCircle className="w-3.5 h-3.5 text-[#D4A017] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
                <p className="text-[11px] tracking-widest opacity-60 text-white mt-4">DON&apos;T ✗</p>
                {LEADER_DONT.map(d => (
                  <div key={d} className="flex gap-2 text-[12px] text-white/60">
                    <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="rounded-[20px] bg-white/5 border border-white/10 p-6">
              <p className="text-[11px] tracking-widest text-[#D4A017]/70 mb-4">REQUIREMENTS & TRUST</p>
              <p className="playfair text-[18px] font-bold text-[#FDFCF8] mb-4">Earn the right to lead</p>
              <div className="space-y-3">
                {REQUIREMENTS.map(r => (
                  <div key={r.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#D4A017]/15 grid place-items-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#D4A017]" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#FDFCF8]">{r.label}</p>
                      <p className="text-[11px] opacity-60 text-white">{r.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-3 rounded-xl bg-[#D4A017]/10 border border-[#D4A017]/20">
                <p className="text-[12px] font-medium text-[#D4A017]">Already leading elsewhere?</p>
                <p className="text-[11px] opacity-70 text-white mt-1">Migrate your village in 1 day. Trust scores carry over, guarantors stay.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="mx-auto max-w-[1280px] px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#2B1B12]/50 mb-3">APPLICATION</p>
            <h2 className="playfair text-[32px] lg:text-[48px] font-bold text-[#2B1B12]">
              Apply as <span className="text-[#D4A017]">Alajo Agba</span>
            </h2>
            <p className="mt-3 text-[14px] text-[#2B1B12]/60">24h review. WhatsApp only. No corporate form.</p>
          </div>

          {submitted ? (
            <div className="rounded-[28px] bg-[#2B1B12] text-[#FDFCF8] p-10 text-center">
              <div className="text-5xl mb-5">👑</div>
              <p className="playfair text-[28px] font-bold text-[#D4A017] mb-3">Application received, Alajo Agba.</p>
              <p className="text-[14px] opacity-70 leading-relaxed max-w-[440px] mx-auto">
                We&apos;ll WhatsApp you within 24 hours. Your guarantors will get a quick check. Get your village list ready — migration takes 1 day.
              </p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { label: 'FULL NAME *', key: 'name', placeholder: 'Adeola Kolabalogun', required: true },
                  { label: 'PHONE *', key: 'phone', placeholder: '+44 7700 000000', required: true },
                ].map(f => (
                  <div key={f.key}>
                    <label className="text-[11px] tracking-widest opacity-50 text-[#2B1B12] block mb-2">{f.label}</label>
                    <input required={f.required} placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-[#2B1B12]/15 text-[14px] bg-white focus:outline-none focus:border-[#D4A017]/50 transition text-[#2B1B12]" />
                  </div>
                ))}
              </div>
              <div>
                <label className="text-[11px] tracking-widest opacity-50 text-[#2B1B12] block mb-2">CITY *</label>
                <select value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}
                  className="w-full h-11 px-4 rounded-xl border border-[#2B1B12]/15 text-[14px] bg-white text-[#2B1B12] focus:outline-none focus:border-[#D4A017]/50 transition">
                  {['Manchester','Oldham','London','Birmingham','Leeds','Liverpool'].map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[11px] tracking-widest opacity-50 text-[#2B1B12] block mb-2">VILLAGE NAME YOU WANT TO LEAD</label>
                <input placeholder="Egbe Omo Yoruba Manchester"
                  value={form.villageName} onChange={e => setForm({ ...form, villageName: e.target.value })}
                  className="w-full h-11 px-4 rounded-xl border border-[#2B1B12]/15 text-[14px] bg-white focus:outline-none focus:border-[#D4A017]/50 transition text-[#2B1B12]" />
              </div>
              <div>
                <label className="text-[11px] tracking-widest opacity-50 text-[#2B1B12] block mb-2">WHY SHOULD YOUR VILLAGE TRUST YOU?</label>
                <textarea rows={4} placeholder="Tell us about your community leadership..."
                  value={form.why} onChange={e => setForm({ ...form, why: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#2B1B12]/15 text-[14px] bg-white focus:outline-none focus:border-[#D4A017]/50 transition resize-none text-[#2B1B12]" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { label: 'GUARANTOR 1 • NAME + PHONE', key: 'g1', placeholder: 'Chief Ade • +44 7700...' },
                  { label: 'GUARANTOR 2 • NAME + PHONE', key: 'g2', placeholder: 'Alhaja B • +44 7700...' },
                ].map(f => (
                  <div key={f.key}>
                    <label className="text-[11px] tracking-widest opacity-50 text-[#2B1B12] block mb-2">{f.label}</label>
                    <input placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-[#2B1B12]/15 text-[14px] bg-white focus:outline-none focus:border-[#D4A017]/50 transition text-[#2B1B12]" />
                  </div>
                ))}
              </div>
              <p className="text-[11px] opacity-50 text-[#2B1B12]">By applying you agree to village charter • No spam • WhatsApp only for review</p>
              <button type="submit"
                className="w-full h-12 rounded-full bg-[#2B1B12] text-[#D4A017] font-semibold text-[14px] hover:bg-black transition flex items-center justify-center gap-2">
                <Crown className="w-4 h-4" /> Apply Now — 24h Review
              </button>
              <div className="text-center">
                <Link href="/contact" className="text-[12px] opacity-60 hover:opacity-100 transition text-[#2B1B12]">Join as Member First → Build Trust 80+</Link>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
