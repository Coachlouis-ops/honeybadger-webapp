"use client";

export default function AboutPage() {
  return (
    <main className="bg-[#0b071d] text-white px-6 md:px-16 py-16">

      {/* HERO */}
      <section className="max-w-5xl">
        <p className="text-purple-400 text-sm mb-4">WHO WE ARE</p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Built Tough.<br />Built to <span className="text-purple-500">Last.</span>
        </h1>

        <p className="text-gray-300 mt-6 max-w-3xl">
          Honey Badger Technologies is a South African technology company that builds the platforms, systems, and products that power serious businesses. We don't do half-measures — we build things that work, scale, and endure.
        </p>
      </section>

      {/* MISSION */}
      <section className="mt-16 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Technology that moves businesses forward — not just ticks boxes.
          </h2>

          <p className="text-gray-300">
            Too many projects deliver software that technically works but doesn't actually solve the problem. We embed deeply in your operational context and build systems that fix it properly.
          </p>

          <p className="text-gray-300 mt-4">
            Our work spans business systems, digital platforms, AI automation, and integrations — always focused on measurable impact.
          </p>
        </div>

        <img
          src="/about_1.png"
          alt="Team working"
          className="w-full h-[300px] md:h-[400px] object-cover rounded"
        />

      </section>

      {/* PRINCIPLES */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-10">Our Principles</h2>

        <div className="grid md:grid-cols-4 gap-6 text-sm">

          <div className="border border-purple-700 p-4">
            <h4 className="text-purple-400 mb-2">01</h4>
            <p>Depth Over Speed</p>
          </div>

          <div className="border border-purple-700 p-4">
            <h4 className="text-purple-400 mb-2">02</h4>
            <p>Architecture First</p>
          </div>

          <div className="border border-purple-700 p-4">
            <h4 className="text-purple-400 mb-2">03</h4>
            <p>Ownership Mentality</p>
          </div>

          <div className="border border-purple-700 p-4">
            <h4 className="text-purple-400 mb-2">04</h4>
            <p>Honest Partnership</p>
          </div>

        </div>
      </section>

      {/* STORY */}
      <section className="mt-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            From a small team with a clear point of view.
          </h2>

          <p className="text-gray-300">
            Founded to build systems that actually work in production — not just deliver projects. We measure success by outcomes.
          </p>

          <div className="mt-6 space-y-3 text-sm text-gray-300">
            <p><span className="text-purple-400">2016</span> Founded in South Africa</p>
            <p><span className="text-purple-400">2018</span> Digital products expansion</p>
            <p><span className="text-purple-400">2020</span> AI & Data practice</p>
            <p><span className="text-purple-400">2022</span> International clients</p>
            <p><span className="text-purple-400">2024</span> 50+ platforms delivered</p>
          </div>
        </div>

        <img
          src="/about_2.png"
          alt="Office team"
          className="w-full h-[300px] md:h-[400px] object-cover rounded"
        />

      </section>

      {/* FOOT NOTES */}
      <section className="mt-20 grid md:grid-cols-3 gap-6 text-sm">

        <div>
          <h4 className="font-bold mb-2">South Africa Based</h4>
          <p className="text-gray-300">Operating locally and internationally.</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Full-Stack Capability</h4>
          <p className="text-gray-300">End-to-end technology delivery.</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Long-Term Partnerships</h4>
          <p className="text-gray-300">We build relationships, not just software.</p>
        </div>

      </section>

    </main>
  );
}