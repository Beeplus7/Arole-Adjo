'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Shield, Star, CheckCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const LEADER_BENEFITS = [
  {
    icon: TrendingUp,
    title: '2% on every rotation',
    desc: 'You earn 2% of the pot each time a member collects. Run a £500 weekly circle with 10 members for 10 weeks — that\'s £100 back to you, passively.',
  },
  {
    icon: Star,
    title: 'Elder Trust Badge',
    desc: 'Verified leaders display the "Alajo Agba" badge — a gold-tier mark of community authority. Your reputation, formally recognised.',
  },
  {
    icon: Users,
    title: 'Dashboard & Analytics',
    desc: 'Full visibility of all your circles: who\'s next, who\'s paid, trust scores per member, alerts before problems arise.',
  },
  {
    icon: Shield,
    title: 'Liability protection',
    desc: 'Because you\'re operating through Arole Adjo\'s regulated infrastructure, your personal liability as a group leader is clearly defined and limited.',
  },
];

const EARNINGS_EXAMPLES = [
  { pot: 250, members: 5, frequency: 'Weekly', weeks: 5, leaderEarning: 25 },
  { pot: 500, members: 10, frequency: 'Weekly', weeks: 10, leaderEarning: 100 },
  { pot: 1000, members: 10, frequency: 'Monthly', weeks: 10, leaderEarning: 200 },
  { pot: 2000, members: 15, frequency: 'Monthly', weeks: 15, leaderEarning: 600 },
];

const REQUIREMENTS = [
  'Trust Score of 90 or above (Elder tier)',
  'Minimum 3 completed circles as a regular member',
  'UK resident with verified address',
  'Clean payment record — zero defaults in 24 months',
  'Agree to Alajo Agba Code of Conduct',
  'Attend one online onboarding session (45 minutes)',
];

const FAQS = [
  {
    q: 'What if a member in my circle defaults?',
    a: 'You are notified immediately. As guarantor, you have 48 hours to arrange coverage before insurance activates. Your 2% earnings are protected regardless of outcome for your first three incidents.',
  },
  {
    q: 'Can I run multiple circles simultaneously?',
    a: 'Yes, up to 5 simultaneous circles for Silver Leader, up to 20 for Gold Leader. Each circle has its own dashboard and earns independently.',
  },
  {
    q: 'Is the 2% income taxable?',
    a: 'Yes — it is community management income and should be declared. We provide an annual earnings statement for your tax return.',
  },
  {
    q: 'Can I set my own circle rules?',
    a: 'Within our framework: yes. You control pot size, frequency, member limit, sequence mode, and deposit requirement. Core anti-japa layers are mandatory and cannot be removed.',
  },
];

export default function ForLeadersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [calcPot, setCalcPot] = useState(500);
  const [calcMembers, setCalcMembers] = useState(10);

  const earning = calcPot * calcMembers * 0.02;

  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4A017]/25 bg-[#D4A017]/[0.07] mb-8">
          <Star size={11} className="text-[#D4A017]" />
          <span className="font-sans text-[10px] tracking-[0.2em] text-[#2B1B12]/70 uppercase">Alajo Agba Programme</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-light text-[#2B1B12] leading-[1.05] mb-6">
          Lead your village.<br />
          <span className="italic font-medium text-[#D4A017]">Earn your 2%.</span>
        </h1>
        <p className="font-sans text-[15px] text-[#2B1B12]/60 leading-relaxed max-w-[560px] mx-auto">
          Alajo Agba — the respected savings leader — has always existed in Yoruba culture. We give that role a formal badge, a dashboard, and an income.
        </p>
      </section>

      {/* Benefits */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto mb-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {LEADER_BENEFITS.map((b, i) => (
            <div key={i} className="bg-[#FDFCF8] border border-[#2B1B12]/8 rounded-2xl p-7 hover:border-[#D4A017]/30 transition-colors group paper-texture">
              <div className="w-11 h-11 rounded-full bg-[#2B1B12] flex items-center justify-center mb-5 group-hover:bg-[#D4A017] transition-colors">
                <b.icon size={18} className="text-[#D4A017] group-hover:text-[#2B1B12] transition-colors" />
              </div>
              <h3 className="font-display text-[18px] font-medium text-[#2B1B12] mb-2">{b.title}</h3>
              <p className="font-sans text-[13px] text-[#2B1B12]/60 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="px-6 md:px-10 max-w-[900px] mx-auto mb-24">
        <div className="bg-[#2B1B12] rounded-2xl p-8 md:p-12">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#D4A017]/70 mb-2">Earnings Calculator</p>
          <h2 className="font-display text-3xl font-light text-[#FDFCF8] mb-8">
            How much could <span className="italic font-medium text-[#D4A017]">you earn?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#FDFCF8]/50 block mb-3">
                Pot Size per Member: <span className="text-[#D4A017]">£{calcPot}</span>
              </label>
              <input
                type="range" min={100} max={2000} step={50}
                value={calcPot}
                onChange={(e) => setCalcPot(Number(e.target.value))}
                className="w-full accent-[#D4A017]"
              />
              <div className="flex justify-between font-sans text-[10px] text-[#FDFCF8]/30 mt-1">
                <span>£100</span><span>£2,000</span>
              </div>
            </div>
            <div>
              <label className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#FDFCF8]/50 block mb-3">
                Members in Circle: <span className="text-[#D4A017]">{calcMembers}</span>
              </label>
              <input
                type="range" min={3} max={20} step={1}
                value={calcMembers}
                onChange={(e) => setCalcMembers(Number(e.target.value))}
                className="w-full accent-[#D4A017]"
              />
              <div className="flex justify-between font-sans text-[10px] text-[#FDFCF8]/30 mt-1">
                <span>3</span><span>20</span>
              </div>
            </div>
          </div>

          <div className="bg-[#FDFCF8]/5 border border-[#FDFCF8]/10 rounded-xl p-6 text-center">
            <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-[#FDFCF8]/40 mb-2">Your leader earning per circle</p>
            <p className="font-display text-5xl font-medium text-[#D4A017]">£{earning.toFixed(0)}</p>
            <p className="font-sans text-[12px] text-[#FDFCF8]/40 mt-2">
              {calcMembers} members × £{calcPot} pot × 2% = £{earning.toFixed(0)}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3 mt-6">
            {EARNINGS_EXAMPLES.map((ex, i) => (
              <button
                key={i}
                onClick={() => { setCalcPot(ex.pot); setCalcMembers(ex.members); }}
                className="bg-[#FDFCF8]/5 hover:bg-[#FDFCF8]/10 border border-[#FDFCF8]/10 rounded-xl p-3 text-center transition-colors"
              >
                <p className="font-display text-[#D4A017] text-[15px] font-medium">£{ex.leaderEarning}</p>
                <p className="font-sans text-[9px] text-[#FDFCF8]/40 mt-0.5">£{ex.pot} × {ex.members}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#2B1B12]/50 block mb-4">Requirements</span>
            <h2 className="font-display text-4xl font-light text-[#2B1B12] mb-6">
              Who can <span className="italic font-medium">apply?</span>
            </h2>
            <ul className="space-y-4">
              {REQUIREMENTS.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-[#D4A017] shrink-0 mt-0.5" />
                  <span className="font-sans text-[14px] text-[#2B1B12]/70 leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/contact?role=leader" className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full bg-[#2B1B12] text-[#D4A017] hover:bg-[#3d2518] transition-colors">
                Apply to be a Leader <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#2B1B12]/50 block mb-4">Leader FAQ</span>
            <h2 className="font-display text-4xl font-light text-[#2B1B12] mb-6">
              Questions <span className="italic font-medium">answered</span>
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="border border-[#2B1B12]/8 rounded-xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#2B1B12]/3 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-display text-[16px] font-medium text-[#2B1B12] pr-4">{faq.q}</span>
                    <ChevronDown size={16} className={`text-[#2B1B12]/40 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="font-sans text-[13px] text-[#2B1B12]/60 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
