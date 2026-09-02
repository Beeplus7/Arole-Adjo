'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';

const FAQS = [
  { id: 1, cat: 'Money & Safety', q: 'What if someone no pay Monday?', a: 'Auto-retry Tuesday 8am via GoCardless. Notify guarantor immediately. Trust -10. After 2 misses, guarantor covers £50 + insurance pool covers rest. Member suspended from collecting until arrears cleared. Village Drum records. 0 japa cases so far.', tags: ['japa','default','pay','monday','guarantor'] },
  { id: 2, cat: 'Money & Safety', q: 'Can leader or admin run away with pot?', a: 'Impossible. Leader never holds money. All money goes to Modulr segregated client account (FCA regulated, ring-fenced). Even if Arole Adjo company fails, your money is separate and returned. Payout is automated 9am. Leader\'s job is trust, not treasury.', tags: ['japa','leader','run','pot','admin','modulr'] },
  { id: 3, cat: 'Money & Safety', q: 'Is my money safe? Are you FCA regulated?', a: 'We use Modulr (FCA authorised e-money institution) for segregated accounts. Your money is not in our business account. We operate as technology layer, not bank. Full FCA compliance note in Legal. Money is ring-fenced.', tags: ['safe','fca','modulr','regulated'] },
  { id: 4, cat: 'Money & Safety', q: 'What is locked deposit?', a: '£25–£50 depending on pot size, locked before you can collect. Returned when you complete circle. If you japa after collecting, it covers part of pot.', tags: ['locked','deposit','japa'] },
  { id: 5, cat: 'Joining & Leaving', q: 'How do I join a village?', a: 'Browse Groups Directory, request to join, need 1 vouch from existing member with Trust 70+, and guarantor. Leader approves in 24h. Start with Starter £100–£250 pot.', tags: ['join','village','vouch','guarantor'] },
  { id: 6, cat: 'Joining & Leaving', q: 'Can I withdraw early or leave circle?', a: 'You can leave before you collect pot — locked deposit returned minus £5 admin. After you collect, you must complete contributions until circle ends. Emergency: Request Need-Based vote, village can vote to help.', tags: ['withdraw','leave','early','circle'] },
  { id: 7, cat: 'Joining & Leaving', q: 'How many circles can I join?', a: 'Up to 3 active at same time if Trust 70+. Elders 90+ can join 5. We limit to prevent over-commitment.', tags: ['circles','how many','trust','elder'] },
  { id: 8, cat: 'Payouts', q: 'When do I get my pot?', a: 'Every week (or bi-weekly/monthly depending on circle). Timeline shows exact date. Payout 9am auto to your bank. Instant option for £2.99 fee if you need now.', tags: ['payout','when','pot','9am'] },
  { id: 9, cat: 'Payouts', q: 'Can I receive payout in Nigeria?', a: 'Yes. 40% of our UK users do. Choose Naija bank at payout, we use Paystack + FX spread 1.9% on market rate, shown before confirm. Arrives in Naira in 2 hours.', tags: ['nigeria','naija','paystack','naira'] },
  { id: 10, cat: 'Payouts', q: 'What is the fee? 2.5%?', a: 'Only when you receive pot. £250 pot → fee £6.25 → you get £243.75. No monthly fee for members. Leader SaaS £29/mo optional for premium analytics.', tags: ['fee','2.5','price'] },
  { id: 11, cat: 'Trust Score', q: 'How is Trust Score calculated?', a: 'On-time pays +40, Completed circles +30, Guarantor vouches +15, Village reviews +15 = 100. Start 70 as Member, 90+ Elder unlocks £1000+ pots.', tags: ['trust','score','calculated'] },
  { id: 12, cat: 'Trust Score', q: 'How do I increase Trust Score?', a: 'Pay on time (biggest), complete circles, get vouched by Elders, no defaults. Guardian badge (0 defaults) gives +10.', tags: ['increase','trust','guardian'] },
  { id: 13, cat: 'UK + Naija', q: 'I live in UK but family in Naija — can they join?', a: 'Yes, if they have UK bank for auto-debit or Naija bank via Paystack. Many Ibadan Sons UK village has members in both UK and Ibadan. KYC: NIN/BVN or UK address + selfie.', tags: ['uk','naija','family','ibadan'] },
  { id: 14, cat: 'UK + Naija', q: 'What about Oldham/Manchester meetups?', a: 'Yes! Villages host monthly physical meetings — Oldham Market Women meet at market, Egbe Manchester at community hall. App + physical = trust. Check Groups Directory for next meetup.', tags: ['oldham','manchester','meetup','physical'] },
];

const CATS = ['All', 'Money & Safety', 'Joining & Leaving', 'Payouts', 'Trust Score', 'UK + Naija'];

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');
  const [open, setOpen] = useState<Set<number>>(new Set([1]));
  const [whatsappDraft, setWhatsappDraft] = useState('');
  const [copied, setCopied] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return FAQS.filter(f => {
      if (cat !== 'All' && f.cat !== cat) return false;
      if (!q) return true;
      return `${f.q} ${f.a} ${f.tags.join(' ')} ${f.cat}`.toLowerCase().includes(q);
    });
  }, [search, cat]);

  const grouped = useMemo(() => {
    const g: Record<string, typeof FAQS> = {};
    filtered.forEach(f => { if (!g[f.cat]) g[f.cat] = []; g[f.cat].push(f); });
    return g;
  }, [filtered]);

  const toggle = (id: number) => {
    setOpen(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const draftWhatsApp = () => {
    const msg = `Hi Arole Adjo — I have a question about ajo:\n\n${search || 'Please ask your question here'}\n\nFrom Oldham/Manchester area.`;
    setWhatsappDraft(msg);
    navigator.clipboard?.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2B1B12] antialiased selection:bg-[#D4A017]/20">

      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-5 lg:px-8 pt-14 lg:pt-20 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4A017]/25 bg-white text-[11px] tracking-widest shadow-sm mb-6 text-[#2B1B12]">
          <div className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
          FAQ • VILLAGE TRUTH
        </div>
        <h1 className="playfair text-[40px] lg:text-[64px] leading-[0.95] tracking-[-0.02em] text-[#2B1B12]">
          Ask the <span className="text-[#D4A017]">Village</span>
        </h1>
        <p className="mt-5 text-[16px] leading-[1.6] opacity-70 max-w-[520px] mx-auto">
          Everything Yoruba community asked from Oldham to Ibadan. If you don&apos;t see your question, WhatsApp us — we answer in 2 hours.
        </p>
        <p className="mt-2 text-[12px] opacity-40 text-[#2B1B12]">FCA authorised EMI • Funds ring-fenced • Not held by Arole Adjo Ltd</p>

        {/* Search */}
        <div className="mt-8 relative max-w-[600px] mx-auto">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2B1B12]/40" />
          <input type="text" placeholder="Search — e.g. japa, payout, Nigeria..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="w-full h-[52px] pl-12 pr-5 rounded-full bg-white border border-[#2B1B12]/10 text-[15px] placeholder:text-[#2B1B12]/35 focus:outline-none focus:border-[#D4A017]/60 focus:ring-4 focus:ring-[#D4A017]/10 transition" />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#2B1B12]/40 hover:text-[#2B1B12] transition text-[18px] leading-none">×</button>
          )}
        </div>

        {/* Category pills */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {CATS.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`text-[12px] font-semibold px-4 py-2 rounded-full border transition ${cat === c ? 'bg-[#2B1B12] text-[#D4A017] border-[#2B1B12]' : 'bg-white border-[#2B1B12]/10 text-[#2B1B12]/60 hover:border-[#2B1B12]/30'}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="mx-auto max-w-[760px] px-5 lg:px-8 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="playfair text-[24px] text-[#2B1B12]/40 mb-3">No question matches.</p>
            <p className="text-[14px] opacity-50 text-[#2B1B12] mb-6">Try different words, or ask us directly on WhatsApp.</p>
            <button onClick={draftWhatsApp}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-[#D4A017] text-[#2B1B12] font-semibold text-[13px] hover:bg-[#c49a14] transition">
              Ask on WhatsApp <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="mb-10">
              <h2 className="playfair text-[22px] font-bold text-[#2B1B12] mb-4 pb-3 border-b border-[#2B1B12]/8">{category}</h2>
              <div className="space-y-2">
                {items.map(item => (
                  <div key={item.id} className="border border-[#2B1B12]/8 rounded-[16px] overflow-hidden">
                    <button onClick={() => toggle(item.id)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#2B1B12]/2 transition">
                      <span className="playfair text-[16px] font-semibold text-[#2B1B12] pr-6">{item.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#2B1B12]/40 shrink-0 transition-transform ${open.has(item.id) ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all ${open.has(item.id) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} grid`}>
                      <div className="overflow-hidden">
                        <div className="px-6 pb-5">
                          <p className="text-[14px] text-[#2B1B12]/65 leading-relaxed">{item.a}</p>
                          <div className="mt-3 flex gap-2 flex-wrap">
                            {item.tags.slice(0, 4).map(t => (
                              <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4A017]/10 text-[#8a6a0e] cursor-pointer hover:bg-[#D4A017]/20 transition"
                                onClick={() => setSearch(t)}>
                                #{t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      {/* WhatsApp CTA */}
      <section className="mx-auto max-w-[760px] px-5 lg:px-8 pb-16">
        <div className="bg-[#2B1B12] rounded-[24px] p-8 text-center">
          <p className="text-[11px] tracking-widest text-[#D4A017]/70 mb-3">IYA ALAJO IS LISTENING</p>
          <p className="playfair text-[24px] font-bold text-[#FDFCF8] mb-2">Still have a question?</p>
          <p className="text-[13px] text-[#FDFCF8]/60 mb-2">Ask like you&apos;re in compound — clear, human.</p>
          <p className="text-[11px] text-[#FDFCF8]/40 mb-6">Oldham 10am–6pm • Ibadan 11am–7am WAT</p>

          <div className="max-w-[440px] mx-auto">
            <textarea rows={3} placeholder="Type your question here..."
              value={whatsappDraft}
              onChange={e => setWhatsappDraft(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 text-[14px] focus:outline-none focus:border-[#D4A017]/60 transition resize-none mb-3" />
            <button onClick={draftWhatsApp}
              className="w-full h-11 rounded-full bg-[#D4A017] text-[#2B1B12] font-semibold text-[13px] hover:bg-[#c49a14] transition">
              {copied ? 'Copied! Paste in WhatsApp ✓' : 'Draft copied — paste in WhatsApp. We reply in 2 hours.'}
            </button>
          </div>
        </div>
      </section>

      {/* Ready to join */}
      <section className="mx-auto max-w-[760px] px-5 lg:px-8 pb-20 text-center">
        <p className="playfair text-[24px] font-bold text-[#2B1B12] mb-3">Ready to join?</p>
        <p className="text-[14px] opacity-60 mb-6 text-[#2B1B12]">Starter pots from £100. Need 1 vouch.</p>
        <Link href="/groups"
          className="inline-flex items-center gap-2 h-[48px] px-8 rounded-full bg-[#2B1B12] text-[#D4A017] font-semibold text-[14px] hover:bg-black transition">
          Browse Villages <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="mt-8 text-[11px] opacity-30 text-[#2B1B12]">
          Arole Adjo is a technology layer for rotating savings. Money held in Modulr segregated client account (FCA authorised EMI, ring-fenced). We are not a bank. GoCardless for collections. 0 japa cases.
        </p>
      </section>
    </div>
  );
}
