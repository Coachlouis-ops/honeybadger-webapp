"use client";

import { useRouter } from "next/navigation";

export default function TermsPage() {
  const router = useRouter();

  return (
    <main className="bg-[#0b071d] text-white px-6 md:px-16 py-16">

      <button onClick={() => router.push("/")} className="mb-6 text-sm text-purple-400">
        ← Back to Home
      </button>

      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <div className="space-y-4 text-sm text-gray-300 max-w-4xl">

        <p>
          These Terms govern the use of services, platforms, and systems operated by
          <strong> Honey Badger Technologies (PTY) LTD</strong> (Registration: 2026/102722/07).
        </p>

        <p>
          Honey Badger Technologies develops, owns, and operates digital platforms and software systems.
          These platforms may include subscription-based services, digital products, and transaction-based environments.
        </p>

        <h2 className="text-white font-semibold mt-6">Platform Usage</h2>
        <p>
          Users may access and interact with platforms operated by Honey Badger Technologies.
          Each platform may have its own specific rules and terms.
        </p>

        <h2 className="text-white font-semibold mt-6">Payments</h2>
        <p>
          Payments are processed securely through third-party providers including Stripe and PayFast.
          All payments are final once completed and are subject to the terms of those providers.
        </p>

        <h2 className="text-white font-semibold mt-6">Digital Products & Tokens</h2>
        <p>
          Certain platforms may use digital credits, tokens, or access-based systems.
          These are digital access tools and do not represent currency, stored value, or financial instruments.
        </p>

        <h2 className="text-white font-semibold mt-6">No Gambling</h2>
        <p>
          Honey Badger Technologies does not operate gambling services.
          Any competition-based platform operated is skill-based and not dependent on chance.
        </p>

        <h2 className="text-white font-semibold mt-6">Liability</h2>
        <p>
          Services are provided "as is". Honey Badger Technologies is not liable for loss of data,
          revenue, or platform interruption.
        </p>

        <h2 className="text-white font-semibold mt-6">Fraud & Misuse</h2>
        <p>
          Accounts may be suspended or terminated for misuse, fraud, or system manipulation.
        </p>

        <h2 className="text-white font-semibold mt-6">Governing Law</h2>
        <p>
          These Terms are governed by the laws of South Africa.
        </p>

        <h2 className="text-white font-semibold mt-6">Contact</h2>
        <p>
          info@honeybadgertech.com | admin@teezgolfchallenges.com
        </p>

      </div>

    </main>
  );
}