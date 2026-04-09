"use client";

export default function PortfolioPage() {
  return (
    <main className="bg-[#0b071d] text-white px-6 md:px-16 py-16">

      {/* HERO */}
      <section className="max-w-5xl">
        <p className="text-purple-400 text-sm mb-4">CASE STUDIES</p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Work That <span className="text-purple-500">Delivers.</span>
        </h1>

        <p className="text-gray-300 mt-6 max-w-3xl">
          A selection of platforms, systems, and products we've built. Real problems. Measurable outcomes.
        </p>
      </section>

      {/* FEATURED */}
      <section className="mt-16 space-y-10">

        {/* PROJECT 1 */}
        <div className="grid md:grid-cols-2 gap-6 border border-purple-700 rounded overflow-hidden">
          <img src="/port_1.png" className="w-full h-[250px] object-cover" />

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Fan Engagement & Performance Analytics Platform
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Unified fan and analytics system for sports organisation.
            </p>

            <div className="flex gap-6 text-sm">
              <div><span className="text-purple-400">3.2x</span><br/>Engagement</div>
              <div><span className="text-purple-400">60%</span><br/>Faster Data</div>
              <div><span className="text-purple-400">40%</span><br/>Revenue</div>
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="grid md:grid-cols-2 gap-6 border border-purple-700 rounded overflow-hidden">
          <img src="/port_2.png" className="w-full h-[250px] object-cover" />

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Multi-Channel E-Commerce Infrastructure
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Scalable commerce system replacing legacy platform.
            </p>

            <div className="flex gap-6 text-sm">
              <div><span className="text-purple-400">99.9%</span><br/>Uptime</div>
              <div><span className="text-purple-400">2.8x</span><br/>Conversion</div>
              <div><span className="text-purple-400">55%</span><br/>Cart Drop</div>
            </div>
          </div>
        </div>

      </section>

      {/* MORE PROJECTS */}
      <section className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="border border-purple-700 rounded overflow-hidden">
          <img src="/port_3.png" className="w-full h-[200px] object-cover" />
          <div className="p-4">
            <h4 className="font-bold">AI-Powered Automation</h4>
            <p className="text-sm text-gray-300">Automation across operations</p>
          </div>
        </div>

        <div className="border border-purple-700 rounded overflow-hidden">
          <img src="/port_4.png" className="w-full h-[200px] object-cover" />
          <div className="p-4">
            <h4 className="font-bold">BSS Platform Modernisation</h4>
            <p className="text-sm text-gray-300">Unified enterprise system</p>
          </div>
        </div>

      </section>

    </main>
  );
}