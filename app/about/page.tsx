"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
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
        <p className="text-purple-400 text-sm mb-4">WHO WE ARE</p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Built Tough.<br />Built to <span className="text-purple-500">Last.</span>
        </h1>

        <p className="text-gray-300 mt-6 max-w-3xl">
          Honey Badger Technologies is a South African technology company that builds, owns, and operates
          digital platforms and systems used by businesses globally. Our focus is on creating scalable,
          revenue-generating products and operational systems that perform in real environments.
        </p>
      </section>

      {/* MISSION */}
      <section className="mt-16 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Technology that drives real business outcomes.
          </h2>

          <p className="text-gray-300">
            Most software projects fail because they are built without understanding real operational needs.
            We approach development differently — by embedding into the business context and engineering
            systems that directly support revenue, efficiency, and scalability.
          </p>

          <p className="text-gray-300 mt-4">
            Our work spans digital platforms, internal enterprise systems, automation, and integrations —
            always focused on measurable performance and long-term value.
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
            <p>Execution Over Theory</p>
          </div>

        </div>
      </section>

      {/* POSITIONING (REPLACES OLD TIMELINE) */}
      <section className="mt-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            We don’t just build software — we build platforms that operate.
          </h2>

          <p className="text-gray-300">
            Honey Badger Technologies develops and manages multiple live platforms across industries,
            including global digital products, e-commerce systems, and internal enterprise software.
          </p>

          <p className="text-gray-300 mt-4">
            Each platform is designed with a clear commercial model — whether through subscriptions,
            transactions, or lead generation — ensuring that the technology directly supports business growth.
          </p>

          <p className="text-gray-300 mt-4">
            Our flagship platform, Teez Golf Challenges, demonstrates this approach — a global system
            combining competition, digital assets, and user engagement at scale.
          </p>
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
          <h4 className="font-bold mb-2">Platform Ownership Model</h4>
          <p className="text-gray-300">We build and operate revenue-generating systems.</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">End-to-End Delivery</h4>
          <p className="text-gray-300">From architecture to deployment and scaling.</p>
        </div>

      </section>

    </main>
  );
}