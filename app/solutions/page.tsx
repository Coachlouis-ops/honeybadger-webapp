"use client";

import { useRouter } from "next/navigation";

export default function SolutionsPage() {
  const router = useRouter();

  return (
    <main className="bg-[#0b071d] text-white px-6 md:px-16 py-16">

      {/* HERO */}
      <section className="max-w-5xl">
        <p className="text-purple-400 text-sm mb-4">WHAT WE DO</p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          We Build & Operate <span className="text-purple-500">Real Systems.</span>
        </h1>

        <p className="text-gray-300 mt-6 max-w-3xl">
          Honey Badger Technologies develops and operates production-grade platforms and internal systems.
          These are not concepts — they are live environments handling real users, transactions, and business operations.
        </p>
      </section>

      {/* ================= BUSINESS SYSTEMS ================= */}
      <section className="mt-16 border border-purple-700 p-6 rounded">
        <h2 className="text-2xl font-bold mb-4">01 Business Support Systems</h2>

        <p className="text-gray-300 mb-6">
          Internal systems designed to run real business operations — from sales to financial tracking and reporting.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-sm">

          <div>
            <h4 className="text-purple-400 mb-2">Capabilities</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Quotation & Invoice Management</li>
              <li>Payment Tracking</li>
              <li>Sales Team Performance</li>
              <li>Workflow Automation</li>
              <li>Multi-company Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-purple-400 mb-2">Live System</h4>
            <p className="text-gray-300 mb-4">
              Custom-built Furniture ERP system used to manage real operational workflows.
            </p>

            <button
              onClick={() => router.push("/erp")}
              className="text-purple-400"
            >
              View ERP System →
            </button>
          </div>

        </div>
      </section>

      {/* ================= DIGITAL PLATFORMS ================= */}
      <section className="mt-10 border border-purple-700 p-6 rounded">
        <h2 className="text-2xl font-bold mb-4">02 Digital Platforms</h2>

        <p className="text-gray-300 mb-6">
          Revenue-generating platforms built for global and local markets.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-sm">

          <div>
            <h4 className="text-purple-400 mb-2">Capabilities</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Web Applications</li>
              <li>Mobile Applications</li>
              <li>Subscription Systems</li>
              <li>Payment Integrations</li>
              <li>Marketplace & Lead Platforms</li>
            </ul>
          </div>

          <div>
            <h4 className="text-purple-400 mb-2">Live Platforms</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Teez Golf Challenges (Global Platform)</li>
              <li>Furnisearch (Lead Generation Platform)</li>
              <li>Vector Carts (E-commerce Platform)</li>
            </ul>

            <button
              onClick={() => router.push("/portfolio")}
              className="text-purple-400 mt-4"
            >
              View Platforms →
            </button>
          </div>

        </div>
      </section>

      {/* ================= AI ================= */}
      <section className="mt-10 border border-purple-700 p-6 rounded">
        <h2 className="text-2xl font-bold mb-4">03 AI-Driven Systems</h2>

        <p className="text-gray-300 mb-6">
          Automation and intelligence layers integrated into operational systems.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-sm">

          <div>
            <h4 className="text-purple-400 mb-2">Capabilities</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Process Automation</li>
              <li>Data Analysis</li>
              <li>Workflow Optimisation</li>
              <li>Decision Support Systems</li>
            </ul>
          </div>

          <div>
            <h4 className="text-purple-400 mb-2">Application</h4>
            <p className="text-gray-300">
              AI is embedded into business systems to reduce manual work and improve operational speed.
            </p>
          </div>

        </div>
      </section>

      {/* ================= INTEGRATION ================= */}
      <section className="mt-10 border border-purple-700 p-6 rounded">
        <h2 className="text-2xl font-bold mb-4">04 System Integration</h2>

        <p className="text-gray-300 mb-6">
          Connecting multiple systems into one unified operational flow.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-sm">

          <div>
            <h4 className="text-purple-400 mb-2">Capabilities</h4>
            <ul className="space-y-1 text-gray-300">
              <li>API Development</li>
              <li>Payment Gateways (Stripe, PayFast)</li>
              <li>Firebase & Cloud Systems</li>
              <li>Database Architecture</li>
            </ul>
          </div>

          <div>
            <h4 className="text-purple-400 mb-2">Outcome</h4>
            <p className="text-gray-300">
              Systems operate as a single environment instead of disconnected tools.
            </p>
          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-10">Execution Model</h2>

        <div className="grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="text-purple-400 mb-2">01 Design</h4>
            <p className="text-gray-300">Structure the system before build.</p>
          </div>

          <div>
            <h4 className="text-purple-400 mb-2">02 Build</h4>
            <p className="text-gray-300">Develop real working systems.</p>
          </div>

          <div>
            <h4 className="text-purple-400 mb-2">03 Deploy</h4>
            <p className="text-gray-300">Launch into production.</p>
          </div>

          <div>
            <h4 className="text-purple-400 mb-2">04 Operate</h4>
            <p className="text-gray-300">Maintain and scale systems.</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mt-20 border-t border-purple-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-3xl font-bold">
            Ready to build a <span className="text-purple-500">real system?</span>
          </h2>
          <p className="text-gray-300 mt-2">
            Let’s discuss your platform or business system.
          </p>
        </div>

        <button
          onClick={() => router.push("/contact")}
          className="bg-purple-600 px-6 py-3 rounded"
        >
          Start a Conversation →
        </button>

      </section>

    </main>
  );
}