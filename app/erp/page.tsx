"use client";

import { useRouter } from "next/navigation";

export default function ERPPage() {
  const router = useRouter();

  return (
    <main className="bg-[#0b071d] text-white px-6 md:px-16 py-16">

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
          A custom-built enterprise system designed to manage core business operations
          including sales, invoicing, payments, and internal workflows.
        </p>
      </section>

      {/* FEATURES */}
      <section className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="border border-purple-700 p-6 rounded">
          <h3 className="font-bold mb-2">Quotation & Invoice Management</h3>
          <p className="text-gray-300 text-sm">
            Full lifecycle document system from quote to invoice with payment tracking.
          </p>
        </div>

        <div className="border border-purple-700 p-6 rounded">
          <h3 className="font-bold mb-2">Sales Team Tracking</h3>
          <p className="text-gray-300 text-sm">
            Monitor performance across multiple sales representatives and teams.
          </p>
        </div>

        <div className="border border-purple-700 p-6 rounded">
          <h3 className="font-bold mb-2">Multi-Company Support</h3>
          <p className="text-gray-300 text-sm">
            Separate operational flows for different business units within one system.
          </p>
        </div>

        <div className="border border-purple-700 p-6 rounded">
          <h3 className="font-bold mb-2">Custom Workflow Automation</h3>
          <p className="text-gray-300 text-sm">
            Tailored processes designed around real business operations.
          </p>
        </div>

      </section>

    </main>
  );
}