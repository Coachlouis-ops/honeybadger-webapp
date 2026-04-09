"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="bg-[#0b071d] text-white">

      {/* ================= HEADER ================= */}
<header className="w-full border-b border-purple-800 px-4 py-4">

  {/* TOP: LOGO + NAME CENTERED */}
  <div className="flex flex-col items-center text-center">
    <img
      src="/maindash_1.png"
      alt="Honey Badger Technologies PTY. LTD"
      className="h-28 md:h-20 w-auto object-contain mb-2"
    />

    <div className="font-bold leading-tight text-sm">
      HONEY BADGER TECHNOLOGIES <br />
      <span className="text-purple-400">PTY. LTD</span>
    </div>
  </div>

  {/* NAV BELOW */}
  <nav className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
    <button onClick={() => router.push("/")}>Home</button>
    <button onClick={() => router.push("/solutions")}>Solutions</button>
    <button onClick={() => router.push("/portfolio")}>Portfolio</button>
    <button onClick={() => router.push("/about")}>About</button>

    <a
      href="mailto:info@honeybadgertech.com"
      className="bg-purple-600 px-3 py-1 rounded"
    >
      Contact
    </a>
  </nav>

</header>

      {/* ================= HERO ================= */}
      <section className="px-8 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-purple-400 mb-4 text-sm">
            TECHNOLOGY • PLATFORMS • AI
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Build <span className="text-purple-500">Bold.</span><br />
            Scale <span className="text-purple-500">Fast.</span> Win Big.
          </h1>

          <p className="mt-6 text-gray-300 max-w-lg">
            We develop business support systems, digital platforms, and AI-driven
            solutions that improve operational efficiency and create new digital revenue streams.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="mailto:info@honeybadgertech.com"
              className="border border-purple-500 px-6 py-3 rounded"
            >
              Get In Touch
            </a>
          </div>
        </div>

       <img
  src="/main_2.png"
  alt="Technology systems"
  className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
/>
      </section>

      {/* ================= STATS ================= */}
      <section className="grid grid-cols-2 md:grid-cols-4 text-center py-10 border-t border-b border-purple-800">
        <div>
          <h2 className="text-3xl font-bold text-purple-500">50+</h2>
          <p>Projects Delivered</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-purple-500">12+</h2>
          <p>Industries Served</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-purple-500">99%</h2>
          <p>Uptime SLA</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-purple-500">8+</h2>
          <p>Years Building</p>
        </div>
      </section>

      {/* ================= CORE ================= */}
      <section className="px-8 py-20">
        <h2 className="text-4xl font-bold mb-10">Core Capabilities</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-purple-700 p-6 rounded">
            <h3 className="text-xl font-bold mb-3">Business Support Systems</h3>
            <p className="text-gray-300">
              End-to-end BSS platforms that streamline operations and automate billing.
            </p>
          </div>

          <div className="border border-purple-700 p-6 rounded">
            <h3 className="text-xl font-bold mb-3">Digital Products & Platforms</h3>
            <p className="text-gray-300">
              Custom web and mobile platforms that create new digital revenue streams.
            </p>
          </div>

          <div className="border border-purple-700 p-6 rounded">
            <h3 className="text-xl font-bold mb-3">AI-Driven Solutions</h3>
            <p className="text-gray-300">
              Intelligent systems that automate workflows and deliver insights.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-8 py-20 border-t border-purple-800 flex justify-between items-center flex-col md:flex-row gap-6">
        <div>
          <h2 className="text-4xl font-bold">
            The right platform changes <span className="text-purple-500">everything.</span>
          </h2>
          <p className="text-gray-300 mt-4">
            Let's talk about your next platform or digital transformation.
          </p>
        </div>

        <a
          href="https://wa.me/27828370266"
          target="_blank"
          className="bg-purple-600 px-6 py-3 rounded"
        >
          Start a Conversation →
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="px-8 py-16 border-t border-purple-800 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="font-bold mb-4">HONEY BADGER TECHNOLOGIES</h3>
          <p className="text-gray-400">
            Building scalable digital platforms and AI-driven systems.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Solutions</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Digital Products</li>
            <li>AI Solutions</li>
            <li>Mobile Applications</li>
            <li>E-commerce Systems</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Portfolio</li>
            <li>Industries</li>
            <li>
              <a href="mailto:info@honeybadgertech.com">Contact</a>
            </li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </footer>

    </main>
  );
}