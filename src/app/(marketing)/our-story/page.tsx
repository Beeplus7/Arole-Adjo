import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function OurStoryPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <section className="px-6 md:px-10 max-w-[800px] mx-auto text-center mb-16">
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2B1B12]/50 block mb-4">Our Story</span>
        <h1 className="font-display text-5xl md:text-7xl font-light text-[#2B1B12] leading-[1.05] mb-6">
          Ibadan to<br />
          <span className="italic font-medium text-[#D4A017]">Oldham</span>
        </h1>
        <p className="font-display text-xl font-light italic text-[#2B1B12]/50">
          From the house of Chief Abdul Gani Kolabalogun — a story of trust carried across continents.
        </p>
      </section>

      {/* Story body */}
      <section className="px-6 md:px-10 max-w-[680px] mx-auto">
        <div className="space-y-8 font-sans text-[16px] text-[#2B1B12]/75 leading-[1.8]">

          <div className="border-l-2 border-[#D4A017] pl-6 py-2">
            <p className="font-display text-2xl font-light italic text-[#2B1B12]">
              &ldquo;I grew up watching my father run Ajo. Every Friday, the community came. The pot went to whoever needed it most that week. Nobody questioned it. Trust was the contract.&rdquo;
            </p>
          </div>

          <p>
            In Ibadan, in the house of Chief Abdul Gani Kolabalogun, Ajo was not a financial product. It was a rhythm. A weekly gathering where community members placed their contributions — cash, into a physical pot — and one person would collect. No bank. No contract. Just names on a list and a chief who everyone knew would not steal.
          </p>

          <p>
            I came to Oldham in the early 2000s. Manchester was cold in a way Ibadan never prepared me for. The Nigerian community was here — Yoruba people in Oldham, Salford, Stretford, Hulme — but the Ajo was different. It ran on WhatsApp. It ran on trust in whoever started the group. And when that trust broke — and it broke more than once — there was no chief to call. The money was gone. The friendships were gone. Sometimes families were torn apart over £2,000.
          </p>

          <div className="bg-[#2B1B12] rounded-2xl p-8 my-10">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#D4A017]/70 mb-3">The viral trend that broke something</p>
            <p className="font-display text-xl font-light text-[#FDFCF8] leading-relaxed">
              Between 2021 and 2024, over forty documented cases of Ajo admin fraud were reported in UK Nigerian communities. Conservative estimate: over £400,000 lost. The actual number is higher — most victims don&apos;t report out of shame.
            </p>
          </div>

          <p>
            I built Arole Adjo because the problem isn&apos;t Ajo. Ajo works. The problem is that digital Ajo gave the old system&apos;s vulnerabilities — the single admin, the single wallet, the single point of disappearance — without giving it the old system&apos;s enforcement. There was no Chief Abdul Gani to guarantee with his reputation. There was no community that would make life impossible for a thief.
          </p>

          <p>
            We rebuilt the enforcement. The guarantor replaces the chief. The staked deposit replaces community shame. The auto-debit replaces Friday obligation. The rotation engine replaces the handwritten list.
          </p>

          <p>
            But we kept everything that made the original work: the rotating structure, the community trust score, the village drum (public record), the leader who earns respect and now earns 2%. We kept the soul. We just made it harder to betray.
          </p>

          <div className="border-l-2 border-[#D4A017] pl-6 py-2">
            <p className="font-display text-xl font-light italic text-[#2B1B12]">
              &ldquo;Adjo is not about money. It&apos;s about people who decided to trust each other more than the system trusted them.&rdquo;
            </p>
            <p className="font-sans text-[12px] text-[#2B1B12]/40 mt-2">— Yoruba proverb, adapted</p>
          </div>

          <p>
            Arole Adjo. Arole means lineage — the thing you carry forward. Adjo is the trust, the Monday child, the new beginning. Together: the heritage of trust, digitised, made unbreakable, ready for the next generation of Yoruba diaspora across Britain.
          </p>

          <p className="font-sans text-[14px] text-[#2B1B12]/50 border-t border-[#2B1B12]/10 pt-6">
            Built in Oldham, Manchester. Rooted in Ibadan. For every Nigerian who ever lost money to an Ajo that disappeared — and for every one who didn&apos;t, because their chief was trustworthy, and now we can give everyone that same chief.
          </p>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full bg-[#2B1B12] text-[#D4A017] hover:bg-[#3d2518] transition-colors">
            Join the community <ArrowRight size={14} />
          </Link>
          <Link href="/stories" className="inline-flex items-center justify-center gap-2 font-sans text-[12px] tracking-[0.15em] uppercase px-8 py-4 rounded-full border border-[#2B1B12]/20 text-[#2B1B12] hover:border-[#2B1B12]/40 transition-colors">
            Read Ajo Stories <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
