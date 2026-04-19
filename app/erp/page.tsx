"use client";

import { useRouter } from "next/navigation";

export default function ERPPage() {
  const router = useRouter();

  return (
    <main className="bg-[#0b071d] text-white px-6 md:px-16 py-16">

      {/* BACK */}
      <button
        onClick={() => router.push("/")}
        className="mb-6 text-sm text-purple-400"
      >
        ← Back to Home
      </button>

      {/* HERO */}
      <section className="max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Furniture <span className="text-purple-500">ERP System</span>
        </h1>

        <p className="text-gray-300 mt-6 max-w-3xl">
          A fully integrated enterprise system designed specifically for furniture businesses,
          controlling the complete operational lifecycle — from stock sourcing to sales,
          invoicing, payments, and financial reporting.
        </p>
      </section>

      {/* ERP LOGO */}
      <section className="mt-16 flex justify-center">
        <img
          src="/appshortcut.png"
          alt="Furniture ERP System"
          className="h-32 md:h-40 object-contain"
        />
      </section>

 {/* ERP DIAGRAM */}
<section className="mt-16">
  <h2 className="text-2xl font-bold mb-6">
    Operational Lifecycle Overview
  </h2>

  <p className="text-gray-300 max-w-3xl mb-6">
    The system connects the full business lifecycle — from customer enquiry to financial reporting — 
    ensuring complete visibility and control across operations.
  </p>

  <div className="border border-purple-700 rounded overflow-hidden">
    <img
      src="/erp_dia.png"
      alt="Furniture ERP Lifecycle Diagram"
      className="w-full object-cover"
    />
  </div>
</section>

      {/* EXPLANATION */}
      <section className="mt-16 grid md:grid-cols-3 gap-6">

        <div className="border border-purple-700 p-6 rounded">
          <h3 className="font-bold mb-2">Stock Flow Management</h3>
          <p className="text-gray-300 text-sm">
            Tracks inventory from supplier procurement through warehousing and final delivery.
            Ensures accurate stock levels, cost tracking, and product movement visibility.
          </p>
        </div>

        <div className="border border-purple-700 p-6 rounded">
          <h3 className="font-bold mb-2">Sales & Order Processing</h3>
          <p className="text-gray-300 text-sm">
            Handles customer quotes, order confirmations, and invoice generation. Seamlessly
            converts quotes into invoices while maintaining full audit trails.
          </p>
        </div>

        <div className="border border-purple-700 p-6 rounded">
          <h3 className="font-bold mb-2">Financial Management</h3>
          <p className="text-gray-300 text-sm">
            Tracks payments, outstanding balances, and revenue streams. Provides clear financial
            visibility with real-time reporting and reconciliation support.
          </p>
        </div>

      </section>

      {/* CORE FEATURES */}
      <section className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="border border-purple-700 p-6 rounded">
          <h3 className="font-bold mb-2">Quotation & Invoice Management</h3>
          <p className="text-gray-300 text-sm">
            Full lifecycle document system from quote to invoice with integrated payment tracking.
          </p>
        </div>

        <div className="border border-purple-700 p-6 rounded">
          <h3 className="font-bold mb-2">Sales Team Tracking</h3>
          <p className="text-gray-300 text-sm">
            Monitor performance across multiple sales representatives and teams with structured analytics.
          </p>
        </div>

        <div className="border border-purple-700 p-6 rounded">
          <h3 className="font-bold mb-2">Multi-Company Support</h3>
          <p className="text-gray-300 text-sm">
            Operate multiple business units within a single system while maintaining full data separation.
          </p>
        </div>

        <div className="border border-purple-700 p-6 rounded">
          <h3 className="font-bold mb-2">Custom Workflow Automation</h3>
          <p className="text-gray-300 text-sm">
            Processes are built around real-world operations, reducing manual work and increasing efficiency.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="mt-20 border-t border-purple-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-3xl font-bold">
            Built for real business <span className="text-purple-500">operations.</span>
          </h2>
          <p className="text-gray-300 mt-3">
            Designed from real industry workflows — not generic templates.
          </p>
        </div>

        <button
          onClick={() => router.push("/contact")}
          className="bg-purple-600 px-6 py-3 rounded"
        >
          Enquire About ERP →
        </button>

      </section>

    </main>
  );
}