'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle, ArrowRight, Info } from 'lucide-react';

const FEE_INCLUDES = [
  'Rotation engine — auto-debit, auto-payout',
  'Staked wallet & escrow management',
  'Trust score tracking & reporting',
  'Guarantor co-sign infrastructure',
  'Circle insurance (pots £500+)',
  'Village Drum — transaction ledger',
  'Per-circle group chat',
  'UK-regulated payment processing',
  'Leader dashboard (for Alajo Agba)',
  'Customer support (WhatsApp + email)',
];

const FEE_NOT_INCLUDES = [
  'No monthly subscription',
  'No setup fee',
  'No deposit deduction (deposit is returned to you)',
  'No hidden conversion fee',
  'No premium tier to unlock core features',
];

const EXAMPLES = [
  { pot: 100, members: 5, frequency: 'Weekly', cycles: 5 },
  { pot: 250, members: 5, frequency: 'Weekly', cycles: 5 },
  { pot: 500, members: 10, frequency: 'Monthly', cycles: 10 },
  { pot: 1000, members: 10, frequency: 'Monthly', cycles: 10 },
  { pot: 2000, members: 15, frequency: 'Monthly', cycles: 15 },
];

export default function PricingPage() {
  const [pot, setPot] = useState(250);
  const [members, setMembers] = useState(5);

  const fee = pot * 0.025;
  const youReceive = pot - fee;
  const totalPlatformFee = fee * members;

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto text-center mb-20">
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2B1B12]/50 block mb-4">Pricing</span>
        <h1 className="font-display text-5xl md:text-7xl font-light text-[#2B1B12] leading-[1.05] mb-6">
          One fee.<br />
          <span className="italic font-medium text-[#D4A017]">No surprises.</span>
        </h1>
        <p className="font-sans text-[15px] text-[#2B1B12]/60 leading-relaxed max-w-[520px] mx-auto">
          We charge 2.5% when you collect your pot. That&apos;s it. No subscription, no setup fee, no hidden anything. You know the number before you join.
        </p>
      </section>

      {/* Main fee card */}
      <section className="px-6 md:px-10 max-w-[600px] mx-auto mb-16">
        <div className="gold-border rounded-2xl">
          <div className="bg-[#FDFCF8] rounded-[calc(1rem-1px)] p-10 text-center paper-texture">
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2B1B12]/40 block mb-4">Platform Fee</span>
            <div className="font-display text-8xl font-light text-[#2B1B12] mb-2">2.5<span className="text-5xl">%</span></div>
            <p className="font-sans text-[14px] text-[#2B1B12]/60 mb-6">Charged only when you receive your pot payout</p>
            <div className="bg-[#2B1B12] rounded-xl px-6 py-4 inline-block">
              <p className="font-sans text-[12px] text-[#FDFCF8]/60">£250 pot → <span className="text-[#D4A017] font-semibold">you receive £243.75</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="px-6 md:px-10 max-w-[900px] mx-auto mb-24">
        <div className="bg-[#2B1B12] rounded-2xl p-8 md:p-12">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#D4A017]/70 mb-2">Fee Calculator</p>
          <h2 className="font-display text-3xl font-light text-[#FDFCF8] mb-8">
            Calculate <span className="italic font-medium text-[#D4A017]">your exact number</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#FDFCF8]/50 block mb-3">
                Pot per member: <span className="text-[#D4A017]">£{pot}</span>
              </label>
              <input
                type="range" min={50} max={2000} step={50}
                value={pot}
                onChange={(e) => setPot(Number(e.target.value))}
                className="w-full accent-[#D4A017]"
              />
            </div>
            <div>
              <label className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#FDFCF8]/50 block mb-3">
                Members: <span className="text-[#D4A017]">{members}</span>
              </label>
              <input
                type="range" min={3} max={20} step={1}
                value={members}
                onChange={(e) => setMembers(Number(e.target.value))}
                className="w-full accent-[#D4A017]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#FDFCF8]/5 border border-[#FDFCF8]/10 rounded-xl p-5 text-center">
              <p className="font-sans text-[10px] tracking-[0.1em] uppercase text-[#FDFCF8]/40 mb-2">Pot Size</p>
              <p className="font-display text-3xl font-medium text-[#FDFCF8]">£{pot}</p>
            </div>
            <div className="bg-[#FDFCF8]/5 border border-[#D4A017]/30 rounded-xl p-5 text-center">
              <p className="font-sans text-[10px] tracking-[0.1em] uppercase text-[#D4A017]/70 mb-2">You Receive</p>
              <p className="font-display text-3xl font-medium text-[#D4A017]">£{youReceive.toFixed(2)}</p>
            </div>
            <div className="bg-[#FDFCF8]/5 border border-[#FDFCF8]/10 rounded-xl p-5 text-center">
              <p className="font-sans text-[10px] tracking-[0.1em] uppercase text-[#FDFCF8]/40 mb-2">Fee</p>
              <p className="font-display text-3xl font-medium text-[#FDFCF8]/50">£{fee.toFixed(2)}</p>
            </div>
          </div>

          <p className="font-sans text-[11px] text-[#FDFCF8]/30 text-center mt-4">
            {members} members × £{fee.toFixed(2)} fee = £{totalPlatformFee.toFixed(2)} total platform revenue per full rotation
          </p>
        </div>
      </section>

      {/* What it includes / doesn't include */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-light text-[#2B1B12] mb-6">
              What 2.5% <span className="italic font-medium">includes</span>
            </h2>
            <ul className="space-y-3">
              {FEE_INCLUDES.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-[#D4A017] shrink-0 mt-0.5" />
                  <span className="font-sans text-[14px] text-[#2B1B12]/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-light text-[#2B1B12] mb-6">
              What it <span className="italic font-medium">does not include</span>
            </h2>
            <ul className="space-y-3">
              {FEE_NOT_INCLUDES.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full border-2 border-[#2B1B12]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-0.5 bg-[#2B1B12]/40 rounded-full" />
                  </div>
                  <span className="font-sans text-[14px] text-[#2B1B12]/70">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-[#D4A017]/8 border border-[#D4A017]/20 rounded-xl p-5 flex items-start gap-3">
              <Info size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
              <p className="font-sans text-[13px] text-[#2B1B12]/70 leading-relaxed">
                Leader earnings (2%) come out of the platform fee — not an additional charge to members. If your circle has an Alajo Agba leader, the split is: 2% to leader, 0.5% to platform reserve (insurance fund).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples table */}
      <section className="px-6 md:px-10 max-w-[900px] mx-auto mb-24">
        <h2 className="font-display text-3xl font-light text-[#2B1B12] mb-8 text-center">
          Common circle <span className="italic font-medium">examples</span>
        </h2>
        <div className="border border-[#2B1B12]/8 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-5 bg-[#2B1B12] px-6 py-3">
            {['Pot', 'Members', 'Frequency', 'You Receive', 'Fee'].map((h) => (
              <span key={h} className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#FDFCF8]/50">{h}</span>
            ))}
          </div>
          {EXAMPLES.map((ex, i) => (
            <div key={i} className={`grid grid-cols-5 px-6 py-4 ${i % 2 === 0 ? 'bg-[#FDFCF8]' : 'bg-[#2B1B12]/3'}`}>
              <span className="font-display text-[15px] font-medium text-[#2B1B12]">£{ex.pot}</span>
              <span className="font-sans text-[13px] text-[#2B1B12]/70">{ex.members} people</span>
              <span className="font-sans text-[13px] text-[#2B1B12]/70">{ex.frequency}</span>
              <span className="font-display text-[15px] font-medium text-[#D4A017]">£{(ex.pot * 0.975).toFixed(2)}</span>
              <span className="font-sans text-[13px] text-[#2B1B12]/50">£{(ex.pot * 0.025).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 max-w-[600px] mx-auto text-center">
        <h2 className="font-display text-4xl font-light text-[#2B1B12] mb-4">
          No surprises. <span className="italic font-medium">Ever.</span>
        </h2>
        <p className="font-sans text-[14px] text-[#2B1B12]/60 mb-8">Your exact fee shown before you join any circle. Always.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full bg-[#2B1B12] text-[#D4A017] hover:bg-[#3d2518] transition-colors">
          Join Waitlist <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
