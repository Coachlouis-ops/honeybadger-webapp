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
          (Registration Number: 2026/102722/07), a private company incorporated in the Republic of South Africa.
        </p>

        {/* 1 */}
        <h2 className="text-white font-semibold">1. Detailed Description of Goods and/or Services</h2>
        <p>
          Honey Badger Technologies (PTY) LTD is a South African technology company operating in the software development and digital services industry.
        </p>
        <p>
          The company designs, develops, maintains, and supports custom software solutions, mobile applications, web applications, business management systems, enterprise software, e-commerce platforms, automation systems, artificial intelligence solutions, cloud-based platforms, digital infrastructure, and related technology services.
        </p>
        <p>
          The information on this website provides details regarding the company’s services, capabilities, products, projects, and technology solutions.
        </p>

        {/* 2 */}
        <h2 className="text-white font-semibold">2. Delivery Policy</h2>
        <p>
          Delivery timeframes vary depending on the nature, scope, and complexity of each project.
        </p>
        <p>
          Project timelines, milestones, implementation schedules, maintenance arrangements, and support services are agreed upon individually with each client before work commences.
        </p>
        <p>
          Deliverables may include software deployment, cloud hosting, application access, documentation, source code, system configuration, implementation services, maintenance, or technical support.
        </p>

        {/* 3 */}
        <h2 className="text-white font-semibold">3. Export Restriction</h2>
        <p>
          Unless otherwise agreed in writing, services are primarily offered to clients within South Africa.
          Honey Badger Technologies (PTY) LTD reserves the right to provide services internationally where legally permitted.
        </p>

        {/* 4 */}
        <h2 className="text-white font-semibold">4. Returns and Refunds Policy</h2>
        <p>
          The provision of services is subject to project agreements, availability of resources, and agreed specifications.
        </p>
        <p>
          Refund requests for software development, consulting, or digital services are assessed case-by-case based on work completed, contractual obligations, and applicable South African law.
        </p>
        <p>
          Where Honey Badger Technologies is unable to deliver agreed services due to circumstances within its control, appropriate remedies will be discussed with the client.
        </p>

        {/* 5 */}
        <h2 className="text-white font-semibold">5. Customer Privacy Policy</h2>
        <p>
          Honey Badger Technologies (PTY) LTD takes all reasonable steps to protect personal information in accordance with the Protection of Personal Information Act (POPIA).
        </p>
        <p>
          Personal data is processed only for legitimate business purposes including communication, project delivery, support, quotations, contractual obligations, and compliance.
        </p>
        <p>
          Please refer to our Privacy Policy for more information.
        </p>

        {/* 6 */}
        <h2 className="text-white font-semibold">6. Quotations, Agreements and Payments</h2>
        <p>
          Quotations, proposals, invoices, and payment terms are issued directly to clients prior to work commencing.
        </p>
        <p>
          Payment structures, milestones, and deposits are governed by individual client agreements.
        </p>

        {/* 7 */}
        <h2 className="text-white font-semibold">7. Website Security</h2>
        <p>
          Reasonable technical and organisational measures are implemented to secure this website.
        </p>
        <p>
          However, uninterrupted access and complete security cannot be guaranteed.
        </p>

        {/* 8 */}
        <h2 className="text-white font-semibold">8. Customer Information</h2>
        <p>
          Client information is stored securely and used strictly for project delivery, support, administration, invoicing, and legal compliance.
        </p>
        <p>
          Confidential information will not be disclosed unless required by law or with client consent.
        </p>

        {/* 9 */}
        <h2 className="text-white font-semibold">9. Merchant Outlet Country and Transaction Currency</h2>
        <p>
          Merchant outlet country: South Africa.
        </p>
        <p>
          All transactions are processed in South African Rand (ZAR) unless otherwise agreed.
        </p>

        {/* 10 */}
        <h2 className="text-white font-semibold">10. Responsibility</h2>
        <p>
          Honey Badger Technologies (PTY) LTD accepts responsibility for delivery of services, support, and contractual obligations undertaken with clients.
        </p>

        {/* 11 */}
        <h2 className="text-white font-semibold">11. Country of Domicile</h2>
        <p>
          This website is governed by the laws of the Republic of South Africa.
        </p>
        <p>
          Domicilium citandi et executandi:
          <br />
          71 Duke Close<br />
          Silver Stream Estate<br />
          Pretoria, Gauteng, 0081<br />
          South Africa
        </p>

        {/* 12 */}
        <h2 className="text-white font-semibold">12. Intellectual Property</h2>
        <p>
          All intellectual property on this website, including content, systems, branding, and software, remains the property of Honey Badger Technologies (PTY) LTD unless otherwise agreed in writing.
        </p>

        {/* 13 */}
        <h2 className="text-white font-semibold">13. Variation</h2>
        <p>
          Honey Badger Technologies (PTY) LTD may update these Terms from time to time. Continued use of the website constitutes acceptance of updated Terms.
        </p>

        {/* 14 */}
        <h2 className="text-white font-semibold">14. Company Information</h2>
        <p>
          Honey Badger Technologies (PTY) LTD<br />
          Registration Number: 2026/102722/07<br />
          Private Company incorporated in South Africa.
        </p>

        {/* 15 */}
        <h2 className="text-white font-semibold">15. Contact Details</h2>
        <p>
          71 Duke Close<br />
          Silver Stream Estate<br />
          Pretoria, Gauteng, 0081<br />
          South Africa
        </p>
        <p>
          Email: info@honeybadgertech.co.za<br />
          Telephone: +27 082 837 0266
        </p>

      </div>

    </main>
  );
}