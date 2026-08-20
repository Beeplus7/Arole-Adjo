'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Users, Shield, RotateCcw, ArrowRight, CheckCircle, Clock, Wallet } from 'lucide-react';

const TIMELINE_WEEKS = [
  { week: 1, name: 'Chief Ade', amount: '£250', status: 'collected', badge: 'Elder' },
  { week: 2, name: 'Sisi T', amount: '£250', status: 'collected', badge: 'Gold' },
  { week: 3, name: 'Alabi', amount: '£250', status: 'active', badge: 'Silver' },
  { week: 4, name: 'Funmi', amount: '£250', status: 'upcoming', badge: 'Silver' },
  { week: 5, name: 'You', amount: '£250', status: 'upcoming', badge: 'New' },
];

const PHASES = [
  {
    icon: Users,
    number: '01',
    title: 'Create Your Circle',
    subtitle: 'Gather your people',
    color: '#D4A017',
    steps: [
      'Name your circle (e.g. "Egbe Omo Yoruba Manchester")',
      'Set the pot size: £250, £500, £1000 or custom',
      'Choose contribution frequency: weekly, bi-weekly, monthly',
      'Set how many members (minimum 3, maximum 20)',
      'Choose payout sequence: trust-based, random, or agreed order',
    ],
    note: 'You can start with as few as 3 trusted people. The engine handles the rest.',
  },
  {
    icon: Shield,
    number: '02',
    title: 'Set the Trust Rules',
    subtitle: 'The Anti-Japa Layer activates',
    color: '#D4A017',
    steps: [
      'Each member locks a security deposit (min £50) before joining',
      'Assign a Guarantor — Elder member who co-signs the circle',
      'Auto-Debit mandate set up via Direct Debit — no manual payments',
      'Circle insurance activates for pots above £500',
      'All rules locked. No admin can change terms mid-circle.',
    ],
    note: 'If any member disappears, their guarantor is immediately liable. The pot is always covered.',
  },
  {
    icon: RotateCcw,
    number: '03',
    title: 'Auto-Rotate & Collect',
    subtitle: 'The engine runs itself',
    color: '#D4A017',
    steps: [
      'Auto-debit fires on the agreed day — every member, every cycle',
      'Pot fills automatically when all contributions arrive',
      'Rotation engine pays out to the next person in sequence',
      'Village Drum records every transaction publicly within the circle',
      'Trust scores update in real-time based on payment behaviour',
    ],
    note: 'You receive a notification when your payout is 48hrs away. The money moves with no human touching it.',
  },
];

function TimelineAnimation() {
  const [activeWeek, setActiveWeek] = useState(3);

  return (
    <div className="bg-[#2B1B12] rounded-2xl p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#FDFCF8]/50">Egbe Omo Yoruba • Live Timeline</p>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
          <span className="font-sans text-[10px] text-[#D4A017]/80">LIVE</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative mb-8">
        <div className="h-1 bg-[#FDFCF8]/10 rounded-full">
          <div
            className="h-1 bg-[#D4A017] rounded-full transition-all duration-500"
            style={{ width: `${((activeWeek - 1) / (TIMELINE_WEEKS.length - 1)) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-3">
          {TIMELINE_WEEKS.map((w) => (
            <button
              key={w.week}
              onClick={() => setActiveWeek(w.week)}
              className={`flex flex-col items-center gap-1 transition-all ${
                activeWeek === w.week ? 'scale-110' : 'opacity-50 hover:opacity-80'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold transition-colors ${
                  w.status === 'collected'
                    ? 'bg-[#D4A017] text-[#2B1B12]'
                    : w.status === 'active'
                    ? 'bg-[#FDFCF8] text-[#2B1B12]'
                    : 'bg-[#FDFCF8]/15 text-[#FDFCF8]'
                }`}
              >
                {w.status === 'collected' ? '✓' : w.week}
              </div>
              <span className="font-sans text-[9px] text-[#FDFCF8]/50 hidden md:block">{w.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active week detail */}
      {TIMELINE_WEEKS.filter((w) => w.week === activeWeek).map((w) => (
        <div key={w.week} className="bg-[#FDFCF8]/5 rounded-xl p-5 border border-[#FDFCF8]/10">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#FDFCF8]/40">Week {w.week}</p>
              <p className="font-display text-xl font-medium text-[#FDFCF8]">{w.name}</p>
            </div>
            <div className="text-right">
              <p className="font-display text-2xl font-medium text-[#D4A017]">{w.amount}</p>
              <span className={`font-sans text-[10px] uppercase tracking-[0.1em] px-2 py-0.5 rounded-full ${
                w.status === 'collected' ? 'bg-[#D4A017]/20 text-[#D4A017]' :
                w.status === 'active' ? 'bg-green-500/20 text-green-400' :
                'bg-[#FDFCF8]/10 text-[#FDFCF8]/50'
              }`}>
                {w.status === 'collected' ? 'Collected' : w.status === 'active' ? 'This Week' : 'Upcoming'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#FDFCF8]/50">
            <Clock size={12} />
            <span className="font-sans text-[11px]">
              {w.status === 'collected' ? 'Auto-debited + paid out on time' :
               w.status === 'active' ? 'Auto-debit fires in 24hrs • Pot ready' :
               'Queued in rotation engine'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto text-center mb-20">
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2B1B12]/50 block mb-4">The Mechanism</span>
        <h1 className="font-display text-5xl md:text-7xl font-light text-[#2B1B12] leading-[1.05] mb-6">
          Three steps.<br />
          <span className="italic font-medium">Centuries of trust.</span>
        </h1>
        <p className="font-sans text-[15px] text-[#2B1B12]/60 leading-relaxed max-w-[560px] mx-auto">
          Ajo has existed for generations. We&apos;ve taken the same principle — people pooling trust — and wrapped it in technology that makes disappearing impossible.
        </p>
      </section>

      {/* Live Timeline */}
      <section className="px-6 md:px-10 max-w-[900px] mx-auto mb-24">
        <div className="mb-5">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#2B1B12]/50 mb-1">Live Example</p>
          <p className="font-display text-2xl font-light text-[#2B1B12]">Watch a circle rotate in real-time</p>
        </div>
        <TimelineAnimation />
      </section>

      {/* Phase breakdown */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto">
        <div className="space-y-16">
          {PHASES.map((phase, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-6xl font-light text-[#D4A017]/30">{phase.number}</span>
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#2B1B12]/40">{phase.subtitle}</p>
                    <h2 className="font-display text-3xl font-medium text-[#2B1B12]">{phase.title}</h2>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {phase.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-[#D4A017] shrink-0 mt-0.5" />
                      <span className="font-sans text-[14px] text-[#2B1B12]/70 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#D4A017]/8 border border-[#D4A017]/20 rounded-xl p-4">
                  <p className="font-display text-[15px] italic text-[#2B1B12]/80">{phase.note}</p>
                </div>
              </div>
              <div className="bg-[#2B1B12]/4 border border-[#2B1B12]/8 rounded-2xl p-8 flex items-center justify-center min-h-[280px]">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#2B1B12] flex items-center justify-center mx-auto mb-4">
                    <phase.icon size={28} className="text-[#D4A017]" />
                  </div>
                  <p className="font-display text-xl font-medium text-[#2B1B12]">{phase.title}</p>
                  <p className="font-sans text-[12px] text-[#2B1B12]/50 mt-1">{phase.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 max-w-[700px] mx-auto text-center mt-24">
        <h2 className="font-display text-4xl font-light text-[#2B1B12] mb-4">
          Ready to start your <span className="italic">circle?</span>
        </h2>
        <p className="font-sans text-[14px] text-[#2B1B12]/60 mb-8">Join the waitlist. Your group is waiting.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full bg-[#2B1B12] text-[#D4A017] hover:bg-[#3d2518] transition-colors">
            Join Waitlist <ArrowRight size={14} />
          </Link>
          <Link href="/groups" className="inline-flex items-center justify-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full border border-[#2B1B12]/20 text-[#2B1B12] hover:border-[#2B1B12]/40 transition-colors">
            Browse Groups <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
