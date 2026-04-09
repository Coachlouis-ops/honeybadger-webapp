"use client";

import { useRouter } from "next/navigation";

export default function SolutionsPage() {
  const router = useRouter();

  return (
    <main className="bg-[#0b071d] text-white px-6 md:px-16 py-16">

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
            End-to-end BSS platforms that modernise how businesses operate.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-purple-400 mb-2">Capabilities</h4>
              <ul className="space-y-1 text-gray-300">
                <li>Billing & Revenue Management</li>
                <li>Customer Lifecycle Management</li>
                <li>Order & Fulfilment Management</li>
                <li>Workflow Automation</li>
                <li>Third-party API Integration</li>
                <li>Real-time Reporting</li>
              </ul>
            </div>

            <div>
              <h4 className="text-purple-400 mb-2">Industries</h4>
              <p className="text-gray-300">Telecoms • Finance • SaaS • Enterprise</p>
            </div>
          </div>
        </div>

        {/* 02 */}
        <div className="border border-purple-700 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">02 Digital Platforms & Products</h2>

          <p className="text-gray-300 mb-4">
            Platforms that create new revenue streams and competitive advantages.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-purple-400 mb-2">Capabilities</h4>
              <ul className="space-y-1 text-gray-300">
                <li>SaaS Development</li>
                <li>Marketplaces</li>
                <li>Web Apps</li>
                <li>Mobile Apps</li>
                <li>API Development</li>
              </ul>
            </div>

            <div>
              <h4 className="text-purple-400 mb-2">Industries</h4>
              <p className="text-gray-300">E-commerce • Media • Retail • Services</p>
            </div>
          </div>
        </div>

        {/* 03 */}
        <div className="border border-purple-700 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">03 AI-Driven Solutions</h2>

          <p className="text-gray-300 mb-4">
            AI systems that create real operational advantage.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-purple-400 mb-2">Capabilities</h4>
              <ul className="space-y-1 text-gray-300">
                <li>Predictive Analytics</li>
                <li>Automation</li>
                <li>NLP</li>
                <li>Recommendation Engines</li>
              </ul>
            </div>

            <div>
              <h4 className="text-purple-400 mb-2">Industries</h4>
              <p className="text-gray-300">Retail • Finance • Logistics • Healthcare</p>
            </div>
          </div>
        </div>

        {/* 04 */}
        <div className="border border-purple-700 p-6 rounded">
          <h2 className="text-2xl font-bold mb-4">04 System Integration & APIs</h2>

          <p className="text-gray-300 mb-4">
            Connecting systems into a unified architecture.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-purple-400 mb-2">Capabilities</h4>
              <ul className="space-y-1 text-gray-300">
                <li>REST & GraphQL APIs</li>
                <li>Legacy Integration</li>
                <li>Microservices</li>
                <li>Data Sync</li>
              </ul>
            </div>

            <div>
              <h4 className="text-purple-400 mb-2">Industries</h4>
              <p className="text-gray-300">Enterprise • Government • Logistics</p>
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
            <p className="text-gray-300">Understand business and technical context.</p>
          </div>

          <div>
            <h4 className="text-purple-400 mb-2">02 Architecture</h4>
            <p className="text-gray-300">Design systems before development.</p>
          </div>

          <div>
            <h4 className="text-purple-400 mb-2">03 Build</h4>
            <p className="text-gray-300">Iterative agile delivery.</p>
          </div>

          <div>
            <h4 className="text-purple-400 mb-2">04 Deploy</h4>
            <p className="text-gray-300">Launch and scale with support.</p>
          </div>
        </div>
      </section>

    </main>
  );
}