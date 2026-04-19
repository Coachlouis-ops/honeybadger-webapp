"use client";

import { useRouter } from "next/navigation";

export default function SolutionsPage() {
  const router = useRouter();

  return (
    <main className="bg-[#0b071d] text-white px-6 md:px-16 py-16">

      {/* BACK BUTTON */}
      <button
        onClick={() => router.push("/")}
        className="mb-6 text-sm text-purple-400"
      >
        ← Back to Home
      </button>

      {/* HERO */}
      <section className="max-w-5xl">
        <p className="text-purple-400 text-sm mb-4">WHAT WE BUILD</p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Solutions That <span className="text-purple-500">Scale.</span>
        </h1>

        <p className="text-gray-300 mt-6 max-w-3xl">
          We don't build generic software. Every platform, system, and product we deliver is engineered for your specific operational context — designed to grow with your business and generate measurable returns.
        </p>
      </section>

      {/* SECTION BLOCK */}
      <div className="mt-16 space-y-10">

        {/* 01 */}
        <div className="border border-purple-700 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">01 Business Support Systems</h2>

          <p className="text-gray-300 mb-4">
            End-to-end systems that manage operations, finance, and internal workflows.
            This includes ERP systems, billing engines, and operational dashboards built around real business processes.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-purple-400 mb-2">Capabilities</h4>
              <ul className="space-y-1 text-gray-300">
                <li>ERP Systems (Custom Built)</li>
                <li>Billing & Revenue Management</li>
                <li>Customer Lifecycle Management</li>
                <li>Order & Fulfilment Management</li>
                <li>Workflow Automation</li>
                <li>Real-time Reporting</li>
              </ul>
            </div>

            <div>
              <h4 className="text-purple-400 mb-2">Industries</h4>
              <p className="text-gray-300">
                Manufacturing • Retail • Furniture • Telecoms • Enterprise
              </p>
            </div>
          </div>
        </div>

        {/* 02 */}
        <div className="border border-purple-700 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">02 Digital Platforms & Products</h2>

          <p className="text-gray-300 mb-4">
            Revenue-generating digital platforms designed for scale.
            These include marketplaces, SaaS products, and consumer-facing applications used globally.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-purple-400 mb-2">Capabilities</h4>
              <ul className="space-y-1 text-gray-300">
                <li>SaaS Development</li>
                <li>Marketplaces</li>
                <li>Web Applications</li>
                <li>Mobile Applications</li>
                <li>API Development</li>
                <li>Payment Integration (Stripe / PayFast)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-purple-400 mb-2">Industries</h4>
              <p className="text-gray-300">
                E-commerce • Sports • Retail • Services • Global Platforms
              </p>
            </div>
          </div>
        </div>

        {/* 03 */}
        <div className="border border-purple-700 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">03 AI-Driven Solutions</h2>

          <p className="text-gray-300 mb-4">
            Intelligent systems that automate decision-making and improve operational efficiency.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-purple-400 mb-2">Capabilities</h4>
              <ul className="space-y-1 text-gray-300">
                <li>Predictive Analytics</li>
                <li>Process Automation</li>
                <li>Natural Language Processing (NLP)</li>
                <li>Recommendation Engines</li>
                <li>Data Analysis Pipelines</li>
              </ul>
            </div>

            <div>
              <h4 className="text-purple-400 mb-2">Industries</h4>
              <p className="text-gray-300">
                Retail • Finance • Logistics • Healthcare • Operations
              </p>
            </div>
          </div>
        </div>

        {/* 04 */}
        <div className="border border-purple-700 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">04 System Integration & APIs</h2>

          <p className="text-gray-300 mb-4">
            Connecting multiple systems into a single unified architecture,
            ensuring data flows seamlessly across platforms.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-purple-400 mb-2">Capabilities</h4>
              <ul className="space-y-1 text-gray-300">
                <li>REST & GraphQL APIs</li>
                <li>Legacy System Integration</li>
                <li>Microservices Architecture</li>
                <li>Database Synchronisation</li>
                <li>Cloud Infrastructure Integration</li>
              </ul>
            </div>

            <div>
              <h4 className="text-purple-400 mb-2">Industries</h4>
              <p className="text-gray-300">
                Enterprise • Government • Logistics • Finance
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* PROCESS */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-10">Our Process</h2>

        <div className="grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="text-purple-400 mb-2">01 Discovery</h4>
            <p className="text-gray-300">
              Understanding business requirements, workflows, and constraints.
            </p>
          </div>

          <div>
            <h4 className="text-purple-400 mb-2">02 Architecture</h4>
            <p className="text-gray-300">
              Designing scalable systems before development begins.
            </p>
          </div>

          <div>
            <h4 className="text-purple-400 mb-2">03 Build</h4>
            <p className="text-gray-300">
              Structured, iterative development aligned with real-world usage.
            </p>
          </div>

          <div>
            <h4 className="text-purple-400 mb-2">04 Deploy</h4>
            <p className="text-gray-300">
              Launch, optimise, and support ongoing growth.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}