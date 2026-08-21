'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    category: 'Safety & Trust',
    items: [
      {
        q: 'What if someone doesn\'t pay their contribution?',
        a: 'Three things happen immediately: (1) Auto-debit retries within 24hrs. (2) The member and their guarantor are notified. (3) If unresolved after 48hrs, the default protocol activates — guarantor covers the shortfall, or circle insurance kicks in for pots £500+. You will always receive your payout on time.',
      },
      {
        q: 'Can the admin disappear with my money?',
        a: 'No. There is no "admin wallet" on Arole Adjo. Contributions are held in regulated escrow — not accessible by any individual. Payouts go directly from escrow to the collecting member. There is no human who can touch your money in transit.',
      },
      {
        q: 'What is the security deposit and do I get it back?',
        a: 'You lock a minimum deposit (from £50) before joining. It stays in escrow for the duration of the circle. At completion, with a clean on-time record, it is returned in full. Partial or full forfeiture only applies if you default.',
      },
      {
        q: 'Is my money protected if Arole Adjo shuts down?',
        a: 'All member funds are held in segregated escrow accounts, separate from company operating funds. In the event of business failure, member funds are protected and returned. Full details in our Terms of Service.',
      },
    ],
  },
  {
    category: 'Payments & Payouts',
    items: [
      {
        q: 'Can I withdraw early — before my payout turn?',
        a: 'No. The circle rotation is locked at creation. Early withdrawal is not available — this is by design. It protects other members who are counting on the auto-debit to fill the pot. If you have an emergency, speak to your circle leader who may arrange a Guarantor advance at their discretion.',
      },
      {
        q: 'Can I receive payouts to a Nigerian account (Naija)?',
        a: 'Currently, payouts are to UK bank accounts only. We are building international payout support (Nigeria, Ghana) for launch in Q4 2025. You can add your UK account now and request a transfer notification when Naija payouts go live.',
      },
      {
        q: 'How long does a payout take to arrive?',
        a: 'Payouts are processed via Faster Payments (UK). You should receive funds within 2 hours of your rotation date. In rare cases, bank processing can take up to the next business day.',
      },
      {
        q: 'What currencies are supported?',
        a: 'GBP (£) only for now. Circle contributions and payouts are all in British pounds. Multi-currency support is on the roadmap.',
      },
    ],
  },
  {
    category: 'Joining & Groups',
    items: [
      {
        q: 'How do I join a circle?',
        a: 'You join a Group first (a community of people), then apply to join a Circle within that group. Some groups require a vouch from an existing member. Once accepted, you lock your deposit, sign the direct debit mandate, and you are in.',
      },
      {
        q: 'Can I start my own group?',
        a: 'Yes. Any verified member can create a Group and run Circles within it. To become an official Alajo Agba (verified leader) and earn 2% per rotation, you need a Trust Score of 90+ and at least 3 completed circles as a member.',
      },
      {
        q: 'What is the minimum and maximum circle size?',
        a: 'Minimum 3 members, maximum 20 members per circle. Pot size ranges from £50 to £10,000 per member. Circles above £2,000 per member require Gold Trust Tier and additional verification.',
      },
      {
        q: 'Can I be in multiple circles at the same time?',
        a: 'Yes. Most active members run 2–3 circles simultaneously. Each circle has its own timeline, pot, and auto-debit. Your wallet and trust score reflect all circles combined.',
      },
    ],
  },
  {
    category: 'Trust Score',
    items: [
      {
        q: 'What is the Trust Score and how does it work?',
        a: 'Your Trust Score (0–100) is a community reputation indicator, not a credit score. It goes up when you pay on time, complete circles, and vouch for members who perform well. It goes down on missed payments or defaults. Starting score for new members: 70.',
      },
      {
        q: 'Does my trust score go to a credit agency?',
        a: 'No. Your trust score exists only within Arole Adjo. It is not reported to Equifax, Experian, or any credit reference agency. It has no effect on your credit file.',
      },
      {
        q: 'How quickly can I increase my score?',
        a: 'One completed circle with zero missed payments adds approximately 8–12 points. Most members move from 70 (New) to 84 (Silver) within their first two circles. Elder tier (90+) typically takes 8–12 months of active, clean membership.',
      },
    ],
  },
  {
    category: 'Legal & Regulation',
    items: [
      {
        q: 'Is Arole Adjo FCA authorised?',
        a: 'Arole Adjo operates as a payment facilitation and community savings platform. We are currently in the FCA authorisation process. During this period, we operate under applicable exemptions for community savings schemes. Full regulatory details on our Legal page.',
      },
      {
        q: 'What happens if there is a dispute between members?',
        a: 'All disputes are handled through our in-platform resolution process first (Guarantor mediation → Platform review → Escalation). Full transaction records are available to all parties. For unresolved disputes, we provide full documentation for any legal proceedings.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="pt-28 pb-20">
      <section className="px-6 md:px-10 max-w-[1280px] mx-auto text-center mb-16">
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2B1B12]/50 block mb-4">FAQ</span>
        <h1 className="font-display text-5xl md:text-7xl font-light text-[#2B1B12] leading-[1.05] mb-6">
          Every question.<br />
          <span className="italic font-medium text-[#D4A017]">Honest answer.</span>
        </h1>
        <p className="font-sans text-[15px] text-[#2B1B12]/60 leading-relaxed max-w-[480px] mx-auto">
          No vague answers. No deflection. If you have a question not listed here, use WhatsApp — we reply within 2 hours.
        </p>
      </section>

      <section className="px-6 md:px-10 max-w-[900px] mx-auto">
        {FAQS.map((cat) => (
          <div key={cat.category} className="mb-12">
            <h2 className="font-display text-2xl font-medium text-[#2B1B12] mb-5 pb-3 border-b border-[#2B1B12]/8">
              {cat.category}
            </h2>
            <div className="space-y-2">
              {cat.items.map((item, i) => {
                const key = `${cat.category}-${i}`;
                return (
                  <div key={key} className="border border-[#2B1B12]/8 rounded-xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#2B1B12]/2 transition-colors"
                      onClick={() => setOpenItem(openItem === key ? null : key)}
                    >
                      <span className="font-display text-[16px] font-medium text-[#2B1B12] pr-6">{item.q}</span>
                      <ChevronDown size={16} className={`text-[#2B1B12]/40 shrink-0 transition-transform ${openItem === key ? 'rotate-180' : ''}`} />
                    </button>
                    {openItem === key && (
                      <div className="px-6 pb-5">
                        <p className="font-sans text-[14px] text-[#2B1B12]/65 leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="px-6 md:px-10 max-w-[600px] mx-auto mt-12 text-center">
        <div className="bg-[#2B1B12] rounded-2xl p-8">
          <p className="font-display text-2xl font-light text-[#FDFCF8] mb-3">Still have questions?</p>
          <p className="font-sans text-[14px] text-[#FDFCF8]/60 mb-6">WhatsApp us. Real person, real answer, within 2 hours.</p>
          <a
            href="https://wa.me/447000000000"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full bg-[#D4A017] text-[#2B1B12] font-semibold hover:bg-[#F3D07A] transition-colors"
          >
            Message on WhatsApp <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
