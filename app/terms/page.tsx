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

      <div className="space-y-6 text-sm text-gray-300 max-w-4xl">

        <p>
          This website is operated by <strong>Honey Badger Technologies (PTY) LTD</strong> 
          (Registration Number: 2026/102722/07), a private company registered in South Africa.
        </p>

        {/* 1 */}
        <h2 className="text-white font-semibold">1. Description of Services</h2>
        <p>
          Honey Badger Technologies develops and operates digital platforms, including Teez Golf Challenges,
          providing access to skill-based competitions, memberships, and digital services.
        </p>

        {/* 2 */}
        <h2 className="text-white font-semibold">2. Availability</h2>
        <p>
          Services are subject to availability. In cases of unavailability, customers will be refunded
          in full within 30 days.
        </p>

        {/* 3 */}
        <h2 className="text-white font-semibold">3. Delivery Policy</h2>
        <p>
          Digital services such as memberships and tokens are delivered immediately upon successful payment
          confirmation. Delivery is confirmed via system access and/or email notification.
        </p>

        {/* 4 */}
        <h2 className="text-white font-semibold">4. Export Restriction</h2>
        <p>
          The offering on this website is available to South African clients only.
        </p>

        {/* 5 */}
        <h2 className="text-white font-semibold">5. Returns & Refunds Policy</h2>
        <p>
          All digital purchases are final. Refunds are only issued in cases of system error, duplicate
          transactions, or where required by law.
        </p>

        {/* 6 */}
        <h2 className="text-white font-semibold">6. Payment Methods</h2>
        <p>
          Payment may be made via Visa, MasterCard, American Express or other supported methods.
        </p>

        <p>
          Card transactions will be acquired for Honey Badger Technologies (PTY) LTD via PayFast,
          the approved payment gateway for South African acquiring banks.
        </p>

        <p>
          PayFast uses Secure Socket Layer (SSL) encryption and no card details are stored on this website.
        </p>

        {/* 7 */}
        <h2 className="text-white font-semibold">7. Customer Data</h2>
        <p>
          Customer details are stored separately from card details which are entered on PayFast’s secure site.
          Honey Badger Technologies complies with the Protection of Personal Information Act (POPIA).
        </p>

        {/* 8 */}
        <h2 className="text-white font-semibold">8. Privacy Policy</h2>
        <p>
          We take all reasonable steps to protect personal information.
          PayFast privacy policy can be accessed at https://payfast.io/privacy-policy/
        </p>

        {/* 9 */}
        <h2 className="text-white font-semibold">9. Responsibility</h2>
        <p>
          Honey Badger Technologies takes responsibility for all aspects relating to transactions,
          including customer service, dispute resolution, and delivery of services.
        </p>

        {/* 10 */}
        <h2 className="text-white font-semibold">10. Country of Domicile</h2>
        <p>
          This website is governed by the laws of South Africa.
        </p>

        {/* 11 */}
        <h2 className="text-white font-semibold">11. Currency</h2>
        <p>
          All transactions are processed in South African Rand (ZAR).
        </p>

        {/* 12 */}
        <h2 className="text-white font-semibold">12. Platform Usage</h2>
        <p>
          Platforms operated by Honey Badger Technologies may include subscription services, digital products,
          and skill-based competition environments such as Teez Golf Challenges.
        </p>

        {/* 13 */}
        <h2 className="text-white font-semibold">13. Digital Products & Tokens</h2>
        <p>
          Digital tokens and credits are access tools only and do not represent currency or financial instruments.
          Tokens are non-refundable and non-transferable.
        </p>

        {/* 14 */}
        <h2 className="text-white font-semibold">14. No Gambling</h2>
        <p>
          Honey Badger Technologies does not operate gambling services. All competitions are skill-based.
        </p>

        {/* 15 */}
        <h2 className="text-white font-semibold">15. Liability</h2>
        <p>
          Services are provided "as is". Honey Badger Technologies is not liable for loss of data,
          revenue, or interruptions.
        </p>

        {/* 16 */}
        <h2 className="text-white font-semibold">16. Fraud & Misuse</h2>
        <p>
          Accounts may be suspended or terminated for misuse or fraudulent activity.
        </p>

        {/* 17 */}
        <h2 className="text-white font-semibold">17. Company Information</h2>
        <p>
          Company Name: Honey Badger Technologies (PTY) LTD<br />
          Registration Number: 2026/102722/07<br />
          Address: 71 Duke Close, Silver Stream Estate, Pretoria, Gauteng, 0081<br />
          Email: info@honeybadgertech.co.za<br />
          Phone: +27 082 837 0266
        </p>

        {/* 18 */}
        <h2 className="text-white font-semibold">18. Variation</h2>
        <p>
          These Terms may be updated at any time without prior notice.
        </p>

      </div>

    </main>
  );
}