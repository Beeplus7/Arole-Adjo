import Link from 'next/link';

export default function LegalPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="px-6 md:px-10 max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2B1B12]/50 block mb-4">Legal</span>
          <h1 className="font-display text-5xl font-light text-[#2B1B12] mb-4">
            Terms, Privacy &<br />
            <span className="italic font-medium">Compliance</span>
          </h1>
          <p className="font-sans text-[14px] text-[#2B1B12]/60">Last updated: August 2025</p>
        </div>

        {/* Nav */}
        <div className="flex gap-3 mb-12 flex-wrap">
          {['Terms of Service', 'Privacy Policy', 'FCA Compliance'].map((s) => (
            <a key={s} href={`#${s.toLowerCase().replace(/ /g, '-')}`}
              className="font-sans text-[11px] tracking-[0.1em] uppercase px-4 py-2 rounded-full border border-[#2B1B12]/15 text-[#2B1B12]/60 hover:border-[#2B1B12]/30 transition-colors">
              {s}
            </a>
          ))}
        </div>

        <div className="prose prose-sm max-w-none space-y-16">

          {/* Terms */}
          <section id="terms-of-service">
            <h2 className="font-display text-3xl font-medium text-[#2B1B12] mb-6 pb-3 border-b border-[#2B1B12]/10">Terms of Service</h2>
            <div className="space-y-6 font-sans text-[14px] text-[#2B1B12]/70 leading-relaxed">
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">1. The Platform</h3>
                <p>Arole Adjo ("the Platform", "we", "us") is a community savings facilitation service operated by Arole Adjo Ltd, registered in England and Wales. The Platform facilitates rotating savings circles (Ajo) between consenting community members.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">2. Eligibility</h3>
                <p>You must be: (a) 18 years or older; (b) a UK resident with a valid UK bank account; (c) able to pass our identity verification process. We reserve the right to refuse membership at our discretion.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">3. Circle Participation</h3>
                <p>By joining a Circle, you agree to: (a) contribute the agreed amount on the agreed date via Direct Debit; (b) maintain a security deposit for the full duration of the circle; (c) not withdraw early under any circumstances; (d) accept that failure to contribute constitutes a default.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">4. Fees</h3>
                <p>The Platform charges a 2.5% fee on each payout received. This fee is disclosed before you join any circle and is deducted automatically at payout. No other fees are charged unless explicitly agreed.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">5. Default & Guarantor</h3>
                <p>A default is triggered by two consecutive failed Direct Debit collections. On default: (a) the member&apos;s security deposit is partially or fully forfeited; (b) the assigned Guarantor is notified and liable to cover the shortfall; (c) Circle insurance activates where applicable; (d) the defaulting member&apos;s Trust Score is adjusted.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">6. Escrow & Funds</h3>
                <p>All member contributions are held in segregated escrow accounts, separate from Arole Adjo Ltd operating funds. In the event of company insolvency, member escrow funds are protected and not available to creditors.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">7. Limitation of Liability</h3>
                <p>Arole Adjo Ltd is not liable for losses arising from: member default beyond the coverage provided by deposit, guarantor, and insurance layers; losses from member misrepresentation; or force majeure events. Our maximum liability to any member is limited to the amount of fees paid in the 12 months preceding the claim.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">8. Governing Law</h3>
                <p>These terms are governed by the laws of England and Wales. Any disputes shall be submitted to the exclusive jurisdiction of the courts of England and Wales.</p>
              </div>
            </div>
          </section>

          {/* Privacy */}
          <section id="privacy-policy">
            <h2 className="font-display text-3xl font-medium text-[#2B1B12] mb-6 pb-3 border-b border-[#2B1B12]/10">Privacy Policy</h2>
            <div className="space-y-6 font-sans text-[14px] text-[#2B1B12]/70 leading-relaxed">
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">Data We Collect</h3>
                <p>Name, email, phone number, UK address, bank account details (for Direct Debit), identity documents (NIN, BVN, or UK ID for KYC), transaction history, Trust Score, and circle participation history.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">Why We Collect It</h3>
                <p>To operate the platform, facilitate payments, verify identity, prevent fraud, calculate trust scores, and communicate with you about your circles. We do not sell your data to third parties.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">Data Sharing</h3>
                <p>Your data is shared only with: (a) payment processors (for Direct Debit); (b) identity verification providers (for KYC); (c) your Circle members and leader (name, trust score, and payment status only); (d) insurance providers (where applicable); (e) regulatory bodies where legally required.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">Your Rights (UK GDPR)</h3>
                <p>You have the right to: access your data, correct inaccurate data, request deletion (subject to legal retention requirements), object to processing, and data portability. Contact: privacy@aroleadjo.com.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">Retention</h3>
                <p>Transaction records are retained for 7 years as required by UK financial regulations. Identity documents are retained for 5 years post-membership. Trust score history is retained indefinitely in anonymised form.</p>
              </div>
            </div>
          </section>

          {/* FCA */}
          <section id="fca-compliance">
            <h2 className="font-display text-3xl font-medium text-[#2B1B12] mb-6 pb-3 border-b border-[#2B1B12]/10">FCA Compliance Note</h2>
            <div className="space-y-6 font-sans text-[14px] text-[#2B1B12]/70 leading-relaxed">
              <div className="bg-[#D4A017]/8 border border-[#D4A017]/20 rounded-xl p-5">
                <p className="font-sans font-semibold text-[#2B1B12] mb-2">Important notice</p>
                <p>Arole Adjo Ltd is not currently authorised by the Financial Conduct Authority (FCA). We are in the process of applying for FCA authorisation as a payment institution under the Payment Services Regulations 2017. During this period, we operate under applicable exemptions for community savings arrangements and do not offer regulated financial products or credit.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">What this means for you</h3>
                <p>Rotating savings circles (Ajo/Esusu/ROSCA) have operated in communities across the world for centuries and are a recognised form of community savings. As a non-credit, non-investment product, they do not require FCA authorisation in most cases. However, as we scale and add payment facilitation features, we are proactively seeking authorisation.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">FSCS protection</h3>
                <p>As Arole Adjo is not FCA authorised, member funds are not protected by the Financial Services Compensation Scheme (FSCS). We protect member funds through segregated escrow, deposit requirements, guarantor obligations, and circle insurance — but this is not equivalent to FSCS protection.</p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-[#2B1B12] mb-2">AML & KYC</h3>
                <p>We conduct identity verification on all members (Know Your Customer) and apply Anti-Money Laundering checks in line with UK regulations. Suspicious activity is reported to the National Crime Agency (NCA) as required by law.</p>
              </div>
              <p className="text-[13px] text-[#2B1B12]/50">
                For regulatory queries: compliance@aroleadjo.com
              </p>
            </div>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-[#2B1B12]/10 text-center">
          <p className="font-sans text-[12px] text-[#2B1B12]/40 mb-4">Questions about our legal documents?</p>
          <Link href="/contact" className="font-sans text-[12px] tracking-[0.1em] uppercase text-[#D4A017] hover:opacity-70 transition-opacity">
            Contact us →
          </Link>
        </div>
      </section>
    </div>
  );
}
