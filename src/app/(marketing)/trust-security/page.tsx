'use client';

import Link from 'next/link';
import { Shield, Lock, CreditCard, Users, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const LAYERS = [
  {
    icon: Lock,
    number: '01',
    title: 'Staked Wallet',
    subtitle: 'Skin in the game before day one',
    color: '#D4A017',
    detail: [
      'Every member locks a security deposit before joining any circle',
      'Minimum deposit: £50 (scales with pot size)',
      'Deposit held in escrow — not accessible during active circle',
      'Released in full on circle completion with on-time record',
      'Forfeited (partially or fully) on confirmed default',
    ],
    why: 'People don\'t japa when they have money on the table. The deposit is the first signal of commitment.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Guarantor Rule',
    subtitle: 'Elder accountability, not just technology',
    color: '#D4A017',
    detail: [
      'Every circle requires a Guarantor — an Elder member (Trust 90+)',
      'Guarantor co-signs the circle terms before activation',
      'If any member defaults, Guarantor is automatically notified within 1 hour',
      'Guarantor covers the shortfall from their own wallet if member cannot',
      'Guarantor earns reputation for every successful circle they back',
    ],
    why: 'Technology enforces, but community accountability seals it. When Chief Ade co-signs, nobody tests him.',
  },
  {
    icon: CreditCard,
    number: '03',
    title: 'Auto-Debit (Direct Debit Mandate)',
    subtitle: 'Payment is not optional',
    color: '#D4A017',
    detail: [
      'Every member signs a Direct Debit mandate at signup',
      'Contribution fires automatically on the agreed date',
      'No manual payment means no opportunity to delay or avoid',
      'Failed debit triggers instant alert to member + Guarantor',
      'Two consecutive failed debits activates default protocol',
    ],
    why: '"I forgot to pay" is not a sentence that exists in Arole Adjo. The system pays for you.',
  },
  {
    icon: Shield,
    number: '04',
    title: 'Circle Insurance',
    subtitle: 'The final safety net',
    color: '#D4A017',
    detail: [
      'All circles above £500 pot are automatically insurance-covered',
      'Insurance covers up to 2 member defaults per circle',
      'Payout to remaining members protected even if guarantor cannot cover',
      'Claims processed within 48 hours of confirmed default',
      'Insurance funded by a 0.5% reserve from platform fee',
    ],
    why: 'Even if everything else fails — deposit gone, guarantor unable — your money is covered. No exceptions.',
  },
];

const INCIDENTS = [
  {
    headline: 'What happened to Ola Best',
    amount: '£12,000',
    members: 18,
    year: '2023',
    location: 'Manchester',
    what: 'Admin collected contributions for 3 months then disappeared with the pooled funds. No contract, no guarantor, no record.',
    howWeStopIt: 'Our system has no single admin wallet. Funds held in regulated escrow. Auto-debit means no collection moment to exploit.',
  },
  {
    headline: 'The Leeds WhatsApp Ajo collapse',
    amount: '£8,500',
    members: 12,
    year: '2024',
    location: 'Leeds',
    what: 'Group ran entirely on WhatsApp. Admin changed payout order without consent. Members had no legal recourse.',
    howWeStopIt: 'Sequence locked at circle creation. No admin can modify order after members sign. All changes require full member consensus.',
  },
];

export default function TrustSecurityPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto text-center mb-20">
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2B1B12]/50 block mb-4">Anti-Japa Layer</span>
        <h1 className="font-display text-5xl md:text-7xl font-light text-[#2B1B12] leading-[1.05] mb-6">
          Four locks.<br />
          <span className="italic font-medium text-[#D4A017]">No way out.</span>
        </h1>
        <p className="font-sans text-[15px] text-[#2B1B12]/60 leading-relaxed max-w-[560px] mx-auto">
          We studied every viral Ajo collapse of the last five years. Every method of disappearing. Then we built a system that closes every exit — technically, legally, and socially.
        </p>
      </section>

      {/* Four Layers */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto mb-24">
        <div className="space-y-8">
          {LAYERS.map((layer, i) => (
            <div key={i} className="grid md:grid-cols-[1fr_2fr] gap-0 border border-[#2B1B12]/8 rounded-2xl overflow-hidden hover:border-[#D4A017]/30 transition-colors">
              {/* Left: number + icon */}
              <div className="bg-[#2B1B12] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="font-display text-6xl font-light text-[#D4A017]/30">{layer.number}</span>
                  <div className="w-12 h-12 rounded-full bg-[#D4A017]/15 flex items-center justify-center mt-4 mb-4">
                    <layer.icon size={22} className="text-[#D4A017]" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-[#FDFCF8] mb-1">{layer.title}</h2>
                  <p className="font-sans text-[12px] text-[#FDFCF8]/50">{layer.subtitle}</p>
                </div>
              </div>

              {/* Right: detail */}
              <div className="bg-[#FDFCF8] p-8 md:p-10">
                <ul className="space-y-3 mb-6">
                  {layer.detail.map((d, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle size={14} className="text-[#D4A017] shrink-0 mt-0.5" />
                      <span className="font-sans text-[14px] text-[#2B1B12]/70 leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#D4A017]/8 border-l-2 border-[#D4A017] pl-4 py-3 rounded-r-lg">
                  <p className="font-display text-[15px] italic text-[#2B1B12]/80">{layer.why}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Prevent */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto mb-24">
        <div className="text-center mb-12">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2B1B12]/50 block mb-3">Real Incidents. Real Losses.</span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#2B1B12]">
            Why this <span className="italic">had to be built</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {INCIDENTS.map((inc, i) => (
            <div key={i} className="border border-red-200 rounded-2xl overflow-hidden">
              <div className="bg-red-50 p-6 border-b border-red-100">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={14} className="text-red-500" />
                  <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-red-500">Documented Incident</span>
                </div>
                <h3 className="font-display text-xl font-medium text-[#2B1B12] mb-2">{inc.headline}</h3>
                <div className="flex gap-4">
                  <span className="font-sans text-[12px] text-red-600 font-semibold">{inc.amount} lost</span>
                  <span className="font-sans text-[12px] text-[#2B1B12]/50">{inc.members} members</span>
                  <span className="font-sans text-[12px] text-[#2B1B12]/50">{inc.location}, {inc.year}</span>
                </div>
              </div>
              <div className="p-6 bg-[#FDFCF8]">
                <p className="font-sans text-[13px] text-[#2B1B12]/60 mb-4 leading-relaxed">{inc.what}</p>
                <div className="flex items-start gap-2">
                  <Shield size={13} className="text-[#D4A017] shrink-0 mt-0.5" />
                  <p className="font-sans text-[13px] text-[#2B1B12] font-medium leading-relaxed">{inc.howWeStopIt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 max-w-[700px] mx-auto text-center">
        <h2 className="font-display text-4xl font-light text-[#2B1B12] mb-4">
          Your money is <span className="italic">protected</span>
        </h2>
        <p className="font-sans text-[14px] text-[#2B1B12]/60 mb-8">Four locks. Zero exits. Join with confidence.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full bg-[#2B1B12] text-[#D4A017] hover:bg-[#3d2518] transition-colors">
          Join Waitlist <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
