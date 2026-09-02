'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle, ArrowRight, Info } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter Village', tag: 'New', forWho: 'New members, small circles',
    potRange: 'Up to £250', fee: '2.5% per payout', feeExample: '£6.25 on £250',
    youGet: '£243.75', youGetSub: 'on £250 pot',
    cta: 'Join a Village', ctaStyle: 'border border-[#2B1B12]/15 text-[#2B1B12] hover:bg-black hover:text-white',
    highlight: false,
    features: ['Modulr segregated account', 'GoCardless auto-debit', 'Village Drum ledger', 'Guarantor system', '4 anti-japa locks'],
  },
  {
    name: 'Trusted Village', tag: 'Most Popular', forWho: 'Most Yoruba families in UK',
    potRange: '£250 — £500', fee: '2.5% per payout', feeExample: '£12.50 on £500',
    youGet: '£487.50', youGetSub: 'on £500 pot',
    cta: 'Join a Village', ctaStyle: 'bg-[#2B1B12] text-[#D4A017] hover:bg-black',
    highlight: true,
    features: ['Everything in Starter +', 'Priority payout processing', 'Need-Based sequence mode', 'Bidding mode unlocked', 'Inter-city village access', 'Village review system'],
  },
  {
    name: 'Elder Village', tag: 'Business', forWho: 'Established villages, business circles',
    potRange: '£500 — £1000+', fee: '2.5% + £29/mo leader SaaS', feeExample: '£25 on £1000',
    youGet: '£975', youGetSub: 'on £1000 pot',
    cta: 'Apply as Elder', ctaStyle: 'bg-[#D4A017] text-[#2B1B12] hover:bg-[#c49a14]',
    highlight: false,
    features: ['Everything +', 'Advanced Village Drum analytics', 'API access for village automation', 'Priority 1h support', 'Custom village branding', 'Alajo Agba 2% auto-split'],
    note: 'Leader earns 2% separately',
  },
];

const COMPARISON = [
  { feature: 'Funds held by admin', old: '❌ Yes — Japa risk', arole: '✅ Modulr vault only' },
  { feature: 'Manual payment chasing', old: '❌ WhatsApp every week', arole: '✅ GoCardless auto-debit' },
  { feature: 'Payout record', old: '❌ Screenshots deleted', arole: '✅ Village Drum SHA-256' },
  { feature: 'If admin disappears', old: '❌ Money gone. Court. Stress.', arole: '✅ Impossible — 4 locks' },
  { feature: 'Trust verification', old: '❌ "I know them" only', arole: '✅ Score + guarantor + KYC' },
  { feature: 'FCA compliance', old: '❌ None', arole: '✅ Modulr FCA regulated' },
];

export default function PricingPage() {
  const [pot, setPot] = useState(250);
  const [members, setMembers] = useState(5);
  const contrib = Math.round(pot / members);
  const fee = pot * 0.025;
  const youReceive = pot - fee;

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2B1B12]">

      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 pt-14 pb-10 lg:pt-20 lg:pb-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2B1B12]/10 bg-white text-[12px] tracking-wide text-[#2B1B12]">
            <span>💰</span> No Japa Fees.
          </div>
          <h1 className="playfair mt-6 text-[42px] lg:text-[72px] leading-[0.95] tracking-[-0.02em] max-w-[720px] text-[#2B1B12]">
            Simple pricing.<br /><span className="italic font-normal text-[#D4A017]">No surprises.</span>
          </h1>
          <p className="mt-5 max-w-[560px] text-[16px] lg:text-[17px] leading-[1.6] opacity-70">
            We only earn when you receive your pot. No monthly fee. No signup fee. No admin touching your money.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 pb-8">
        <div className="grid lg:grid-cols-3 gap-5">
          {PLANS.map((plan, i) => (
            <div key={i} className={`rounded-[24px] border bg-white p-7 flex flex-col relative ${plan.highlight ? 'border-[#D4A017] shadow-[0_20px_60px_rgba(212,160,23,0.18)] border-[1.5px]' : 'border-[#2B1B12]/10'}`}>
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase text-white bg-[#D4A017]">
                  Most Popular
                </div>
              )}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-bold text-[18px] text-[#2B1B12]">{plan.name}</p>
                  <p className="text-[13px] opacity-60 mt-1 text-[#2B1B12]">{plan.forWho}</p>
                </div>
                <span className="text-[11px] tracking-widest uppercase opacity-50 border px-2.5 py-1 rounded-full text-[#2B1B12]">{plan.tag}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className={`rounded-xl p-3.5 ${plan.highlight ? 'bg-[#FDF1C9] border border-[#F1D98A]' : 'bg-[#F7F3EA]'}`}>
                  <p className="text-[11px] uppercase tracking-wide opacity-60 text-[#2B1B12]">Pot Range</p>
                  <p className="font-semibold text-[14px] mt-1 text-[#2B1B12]">{plan.potRange}</p>
                  <p className="text-[12px] opacity-60 mt-0.5 text-[#2B1B12]">{plan.feeExample}</p>
                </div>
                <div className={`rounded-xl p-3.5 ${plan.highlight ? 'bg-[#D4A017] text-[#2B1B12]' : 'bg-[#2B1B12] text-white'}`}>
                  <p className="text-[11px] uppercase tracking-wide opacity-60">You Get</p>
                  <p className="font-bold text-[16px] mt-1">{plan.youGet}</p>
                  <p className="text-[12px] opacity-60 mt-0.5">{plan.youGetSub}</p>
                </div>
              </div>

              <div className="mb-5">
                <p className="text-[12px] font-semibold text-[#2B1B12] opacity-60 mb-1">Fee: {plan.fee}</p>
              </div>

              <div className="space-y-2.5 text-[13.5px] flex-1 mb-6">
                {plan.features.map(f => (
                  <div key={f} className="flex gap-2.5 items-center">
                    <div className={`h-5 w-5 rounded-full grid place-items-center shrink-0 ${plan.highlight ? 'bg-[#D4A017]' : 'bg-[#F3EAD2]'}`}>
                      <CheckCircle className={`h-3 w-3 ${plan.highlight ? 'text-[#2B1B12]' : 'text-[#2B1B12]/60'}`} />
                    </div>
                    <span className="text-[#2B1B12]/80">{f}</span>
                  </div>
                ))}
              </div>

              {plan.note && (
                <div className="mt-auto mb-3 rounded-[16px] bg-[#2B1B12] text-[#FDFCF8] px-4 py-3 flex gap-3 items-start">
                  <Info className="h-4 w-4 mt-0.5 shrink-0 opacity-60" />
                  <p className="text-[13px] leading-[1.5]">{plan.note}</p>
                </div>
              )}

              <Link href="/contact"
                className={`mt-auto w-full h-11 rounded-full font-semibold text-[13.5px] flex items-center justify-center gap-2 transition ${plan.ctaStyle}`}>
                {plan.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
        <div className="rounded-[28px] border border-[#2B1B12]/10 bg-white overflow-hidden">
          <div className="p-8 lg:p-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase opacity-50 mb-2 text-[#2B1B12]">Calculate What You Get</p>
              <h2 className="playfair text-[28px] lg:text-[40px] font-bold text-[#2B1B12] mb-6">
                Drag to see your<br /><span className="text-[#D4A017]">real payout</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-[12px] font-semibold text-[#2B1B12]/60 tracking-widest uppercase">Pot Size</label>
                    <span className="text-[13px] font-bold text-[#2B1B12]">£{pot}</span>
                  </div>
                  <input type="range" min={100} max={1000} step={50} value={pot} onChange={e => setPot(Number(e.target.value))}
                    className="w-full h-1 accent-[#D4A017]"
                    style={{ background: `linear-gradient(to right, #D4A017 ${((pot-100)/900)*100}%, #e5e7eb ${((pot-100)/900)*100}%)` }}
                  />
                  <div className="flex justify-between text-[10px] opacity-40 mt-1 text-[#2B1B12]"><span>£100</span><span>£1000</span></div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-[12px] font-semibold text-[#2B1B12]/60 tracking-widest uppercase">Members</label>
                    <span className="text-[13px] font-bold text-[#2B1B12]">{members}</span>
                  </div>
                  <input type="range" min={3} max={20} step={1} value={members} onChange={e => setMembers(Number(e.target.value))}
                    className="w-full h-1 accent-[#D4A017]"
                    style={{ background: `linear-gradient(to right, #D4A017 ${((members-3)/17)*100}%, #e5e7eb ${((members-3)/17)*100}%)` }}
                  />
                  <div className="flex justify-between text-[10px] opacity-40 mt-1 text-[#2B1B12]"><span>3</span><span>20</span></div>
                </div>
                <div className="rounded-xl bg-[#FDFCF8] border border-[#2B1B12]/8 p-4">
                  <p className="text-[11px] opacity-50 tracking-widest text-[#2B1B12]">Contribution auto-calc:</p>
                  <p className="text-[15px] font-bold text-[#2B1B12] mt-1">£{contrib}/week × {members} members = £{pot} pot</p>
                </div>
              </div>
            </div>

            {/* Result card */}
            <div className="rounded-[20px] bg-[#2B1B12] text-[#FDFCF8] p-8">
              <p className="text-[10px] tracking-[0.2em] uppercase opacity-50 mb-4">Your Village Maths</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-[13px] opacity-60">Pot size</span>
                  <span className="playfair text-[20px] font-bold">£{pot}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-[13px] opacity-60">Platform fee (2.5%)</span>
                  <span className="text-[16px] font-semibold text-red-400">− £{fee.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between py-4 bg-[#D4A017]/10 rounded-xl px-4">
                  <div>
                    <span className="text-[11px] tracking-widest opacity-70">You Receive</span>
                    <p className="text-[11px] opacity-50 mt-0.5">when your turn comes</p>
                  </div>
                  <span className="playfair text-[36px] font-bold text-[#D4A017]">£{youReceive.toFixed(2)}</span>
                </div>
                <div className="text-center">
                  <p className="text-[11px] opacity-50">Circle: Standard payout 9am after collection. Instant £2.99 optional.</p>
                </div>
                {['No signup fee', 'No monthly fee'].map(t => (
                  <div key={t} className="flex items-center gap-2 text-[12px]">
                    <CheckCircle className="w-4 h-4 text-[#D4A017]" />
                    <span className="opacity-70">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-10">
          <h2 className="playfair text-[28px] lg:text-[40px] font-bold text-[#2B1B12]">
            Not all Ajo is equal.
          </h2>
          <p className="mt-3 text-[14px] opacity-60 max-w-[480px] mx-auto text-[#2B1B12]">
            See why Yoruba families are leaving WhatsApp groups for Arole Adjo — fixed 2.5%, no Japa story.
          </p>
        </div>
        <div className="rounded-[20px] border border-[#2B1B12]/8 overflow-hidden">
          <div className="grid grid-cols-3 bg-[#2B1B12] text-white px-6 py-3">
            {['Feature', 'Old WhatsApp Ajo', 'Arole Adjo'].map(h => (
              <span key={h} className="text-[11px] tracking-widest uppercase opacity-60">{h}</span>
            ))}
          </div>
          {COMPARISON.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FDFCF8]'}`}>
              <span className="text-[13px] font-medium text-[#2B1B12]">{row.feature}</span>
              <span className="text-[13px] text-red-600">{row.old}</span>
              <span className="text-[13px] text-emerald-700">{row.arole}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 lg:py-16 text-center">
        <p className="playfair text-[20px] opacity-60 text-[#2B1B12] mb-2">Live in UK</p>
        <h2 className="playfair text-[32px] lg:text-[48px] font-bold text-[#2B1B12] mb-4">
          £42,000 rotated in Manchester.<br /><span className="text-[#D4A017]">No hidden fees. Just trust.</span>
        </h2>
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <Link href="/groups" className="h-[48px] px-7 rounded-full bg-[#2B1B12] text-[#D4A017] font-semibold text-[14px] inline-flex items-center gap-2 hover:bg-black transition">
            See Groups <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="h-[48px] px-7 rounded-full border border-[#2B1B12]/20 text-[#2B1B12] font-semibold text-[14px] inline-flex items-center gap-2 hover:border-[#2B1B12]/40 transition">
            Join Waitlist
          </Link>
        </div>
      </section>
    </div>
  );
}
