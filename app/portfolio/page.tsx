"use client";

import { useRouter } from "next/navigation";

export default function PortfolioPage() {
  const router = useRouter();

  return (
    <main className="bg-[#0b071d] text-white px-6 md:px-16 py-16">

      {/* HERO */}
      <section className="max-w-5xl">
        <p className="text-purple-400 text-sm mb-4">PORTFOLIO</p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Real Platforms. <span className="text-purple-500">Real Deployment.</span>
        </h1>

        <p className="text-gray-300 mt-6 max-w-3xl">
          A selection of live systems, platforms, and applications currently in operation.
        </p>
      </section>

      {/* ================= PLATFORMS ================= */}
<section className="mt-16 space-y-10">

{/* ERP SYSTEM */}
<div className="border border-purple-500 p-6 rounded-lg">
  <img src="/appshortcut.png" className="h-16 mb-4" />

  <h3 className="text-2xl font-bold mb-2">Furniture ERP System</h3>

  <p className="text-sm text-purple-400 mb-2">
    Internal enterprise system
  </p>

  <p className="text-gray-300 mb-4">
    A custom-built ERP platform used to manage quotations, invoicing, payments, and sales operations across multiple business units.
    Designed for real-world workflows and daily operational control.
  </p>

  <button
    onClick={() => router.push("/erp")}
    className="text-purple-400"
  >
    View System →
  </button>
</div>

        {/* TEEZ */}
        <div className="border border-purple-500 p-6 rounded-lg">
          <img src="/teez_logo.png" className="h-16 mb-4" />

          <h3 className="text-2xl font-bold mb-2">Teez Golf Challenges</h3>

          <p className="text-sm text-purple-400 mb-2">
            Global golf competition platform
          </p>

          <p className="text-gray-300 mb-4">
            Skill-based golf competition gaming platform.
          </p>

          <a href="https://www.teezgolfchallenges.com" target="_blank" className="text-purple-400">
            Visit Platform →
          </a>
        </div>

        {/* VECTOR */}
        <div className="border border-purple-700 p-6 rounded-lg">
          <img src="/vector_logo.png" className="h-16 mb-4" />

          <h3 className="text-2xl font-bold mb-2">Vector Carts</h3>

          <p className="text-sm text-purple-400 mb-2">
            E-commerce platform
          </p>

          <p className="text-gray-300 mb-4">
            Platform for showcasing and selling premium electric golf carts.
          </p>

          <a href="https://vectorcarts.co.za" target="_blank" className="text-purple-400">
            Visit Website →
          </a>
        </div>

        {/* MBT WEBSITE */}
        <div className="border border-purple-700 p-6 rounded-lg">
          <img src="/mbt_website.png" className="h-16 mb-4" />

          <h3 className="text-2xl font-bold mb-2">Middelburg Bearings Website</h3>

          <p className="text-sm text-purple-400 mb-2">
            Industrial business website
          </p>

          <p className="text-gray-300 mb-4">
            Product listing and supplier access platform for industrial clients.
          </p>

          <a href="https://middelburgbearingsandtransmission.com" target="_blank" className="text-purple-400">
            Visit Website →
          </a>
        </div>

        {/* MBT WEB APP */}
        <div className="border border-purple-700 p-6 rounded-lg">
          <img src="/middelburg_web.png" className="h-16 mb-4" />

          <h3 className="text-2xl font-bold mb-2">Middelburg Bearings Web App</h3>

          <p className="text-sm text-purple-400 mb-2">
            Procurement & ordering platform
          </p>

          <p className="text-gray-300 mb-4">
            Web-based system for browsing products, placing orders, and managing supplier interactions.
          </p>

          <a href="https://middelburgbearingsandtransmission.co.za" target="_blank" className="text-purple-400">
            Open Web App →
          </a>
        </div>

        {/* MBT APP */}
        <div className="border border-purple-700 p-6 rounded-lg">
          <img src="/middelburg_app.png" className="h-16 mb-4" />

          <h3 className="text-2xl font-bold mb-2">Middelburg Bearings App</h3>

          <p className="text-sm text-purple-400 mb-2">
            Mobile ordering platform
          </p>

          <p className="text-gray-300 mb-4">
            Mobile app for industrial customers to browse and place orders on the go.
          </p>

          <a href="https://play.google.com/store/apps/details?id=com.middelburgbearings.app&pcampaignid=web_share" target="_blank" className="text-purple-400">
            View on Play Store →
          </a>
        </div>

        {/* JOY */}
        <div className="border border-purple-700 p-6 rounded-lg">
          <img src="/joy_app.png" className="h-16 mb-4" />

          <h3 className="text-2xl font-bold mb-2">Joy Furniture App</h3>

          <p className="text-sm text-purple-400 mb-2">
            Retail mobile platform
          </p>

          <p className="text-gray-300 mb-4">
            Mobile platform for browsing and engaging with furniture products.
          </p>

          <a href="https://play.google.com/store/apps/details?id=com.honeybadger.joyfurniture2024&pcampaignid=web_share" target="_blank" className="text-purple-400">
            View on Play Store →
          </a>
        </div>

        {/* FURNISEARCH */}
        <div className="border border-purple-700 p-6 rounded-lg">
          <img src="/furnisearch_web.png" className="h-16 mb-4" />

          <h3 className="text-2xl font-bold mb-2">Furnisearch</h3>

          <p className="text-sm text-purple-400 mb-2">
            Lead generation platform
          </p>

          <p className="text-gray-300 mb-4">
            Platform connecting furniture buyers with suppliers through search and lead generation.
          </p>

          <a href="https://www.furnisearch.co.za" target="_blank" className="text-purple-400">
            Visit Platform →
          </a>
        </div>

      </section>

      {/* CTA */}
      <section className="mt-20 border-t border-purple-800 pt-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-4xl font-bold">
            The right platform changes <span className="text-purple-500">everything.</span>
          </h2>
          <p className="text-gray-300 mt-4">
            Let’s build yours.
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