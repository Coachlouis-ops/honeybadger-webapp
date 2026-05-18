"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setShowCookies(true);
  }, []);

  return (
    <main className="bg-[#0b071d] text-white">

      {/* ================= HEADER ================= */}
<header className="w-full border-b border-purple-800 px-4 py-4">

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

  <nav className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
    <button onClick={() => router.push("/")}>Home</button>
    <button onClick={() => router.push("/solutions")}>Solutions</button>
    <button onClick={() => router.push("/portfolio")}>Portfolio</button>
    <button onClick={() => router.push("/about")}>About</button>

    <button onClick={() => router.push("/privacy")}>Privacy</button>
    <button onClick={() => router.push("/terms")}>Terms</button>

    <a
      onClick={() => router.push("/contact")}
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
            TECHNOLOGY • DIGITAL PLATFORMS • GLOBAL PRODUCTS
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            We Build & Operate <span className="text-purple-500">Revenue-Generating Platforms</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-lg">
            Honey Badger Technologies develops, owns, and operates digital platforms used by customers globally.
            Our platforms generate revenue through subscriptions, digital products, and transaction-based models.
          </p>

          <p className="mt-4 text-gray-400 max-w-lg text-sm">
            Our flagship platform, Teez Golf Challenges, is a global skill-based competition platform where players
            purchase digital tokens to enter challenges, compete, and win rewards.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              onClick={() => router.push("/contact")}
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

      {/* ================= IT SERVICES ================= */}
      <section className="px-8 py-20 border-t border-purple-800">
        <h2 className="text-4xl font-bold mb-4">
          IT Support & Technology Services
        </h2>

        <p className="text-gray-300 max-w-4xl mb-12 leading-relaxed">
          From small businesses to growing enterprises, we design, install,
          manage, and support complete IT environments built for stability,
          security, and long-term scalability. Our focus is practical technology
          solutions that improve operational efficiency, reduce downtime, and
          keep businesses running without interruption.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* END USER SUPPORT */}
          <div className="border border-purple-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              End-User Support
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Remote and onsite technical support</li>
              <li>• Desktop and laptop troubleshooting</li>
              <li>• Printer and peripheral support</li>
              <li>• Email and connectivity issues</li>
              <li>• Software installation and configuration</li>
              <li>• Office workstation setup</li>
              <li>• Ongoing technical maintenance</li>
            </ul>
          </div>

          {/* MICROSOFT 365 */}
          <div className="border border-purple-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Microsoft 365 Solutions
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Microsoft 365 setup and migration</li>
              <li>• Business email configuration</li>
              <li>• Outlook support and synchronization</li>
              <li>• Teams and SharePoint integration</li>
              <li>• User licensing and permissions</li>
              <li>• OneDrive cloud management</li>
              <li>• Security and compliance configuration</li>
            </ul>
          </div>

          {/* NETWORK */}
          <div className="border border-purple-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Network & Infrastructure
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Business WiFi deployment</li>
              <li>• Router and firewall configuration</li>
              <li>• LAN and WAN management</li>
              <li>• Structured network installations</li>
              <li>• VPN and remote access solutions</li>
              <li>• Network monitoring and optimization</li>
              <li>• Server environment support</li>
            </ul>
          </div>

          {/* SECURITY */}
          <div className="border border-purple-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Cybersecurity & Access Control
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Endpoint protection deployment</li>
              <li>• Firewall and network security</li>
              <li>• Multi-factor authentication setup</li>
              <li>• User access control management</li>
              <li>• Threat detection and prevention</li>
              <li>• Security audits and assessments</li>
              <li>• Device security policies</li>
            </ul>
          </div>

          {/* BACKUP */}
          <div className="border border-purple-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Data Backup & Recovery
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Automated backup systems</li>
              <li>• Cloud backup solutions</li>
              <li>• Disaster recovery planning</li>
              <li>• File restoration services</li>
              <li>• Backup monitoring and verification</li>
              <li>• Business continuity solutions</li>
            </ul>
          </div>

          {/* OPTIMIZATION */}
          <div className="border border-purple-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              System Optimization
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Performance diagnostics</li>
              <li>• Slow system optimization</li>
              <li>• Hardware fault detection</li>
              <li>• Software conflict resolution</li>
              <li>• Stability and uptime improvements</li>
              <li>• Preventative maintenance</li>
              <li>• System health monitoring</li>
            </ul>
          </div>

        </div>

        {/* SKILLS */}
        <div className="mt-16 border border-purple-700 rounded-lg p-8">
          <h3 className="text-3xl font-bold mb-6">
            Technical Skills & Expertise
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-gray-300">

            <div>
              <h4 className="font-bold text-white mb-3">
                Business IT Environments
              </h4>

              <ul className="space-y-2 text-sm">
                <li>• Complete IT environment management</li>
                <li>• Remote workforce support</li>
                <li>• IT consulting and planning</li>
                <li>• Multi-device ecosystems</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3">
                Cloud & Networking
              </h4>

              <ul className="space-y-2 text-sm">
                <li>• Microsoft 365</li>
                <li>• SharePoint & OneDrive</li>
                <li>• VPN solutions</li>
                <li>• Firewall management</li>
                <li>• WiFi optimization</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3">
                Hardware & Security
              </h4>

              <ul className="space-y-2 text-sm">
                <li>• Desktop and laptop support</li>
                <li>• Device deployment</li>
                <li>• Endpoint security</li>
                <li>• Threat prevention</li>
                <li>• Backup protection strategies</li>
              </ul>
            </div>

          </div>

          {/* CERTIFICATIONS */}
<div className="mt-10">
  <h4 className="text-2xl font-bold mb-6 text-white">
    Certifications & Technical Standards
  </h4>

  <div className="bg-white rounded-xl p-4 flex justify-center">
    <img
      src="/certifications.png"
      alt="Technology Certifications"
      className="max-w-full h-auto rounded-lg"
    />
  </div>
</div>

          <p className="text-gray-400 text-sm mt-8 leading-relaxed">
            Our approach is proactive rather than reactive — identifying
            weaknesses, inefficiencies, and potential failures before they
            disrupt operations.
          </p>
        </div>
      </section>

    {/* ================= PLATFORMS ================= */}
<section className="px-8 pb-20">
  <h2 className="text-4xl font-bold mb-10">Current Live Platforms</h2>

  <div className="space-y-10">

    {/* TEEZ - FLAGSHIP */}
    <div className="border border-purple-500 p-6 rounded-lg">
      <img src="/teez_logo.png" className="h-16 mb-4" />

      <h3 className="text-2xl font-bold mb-2">Teez Golf Challenges</h3>

      <p className="text-sm text-purple-400 mb-2">
        Target Market: Global amateur and professional golfers
      </p>

      <p className="text-gray-300 mb-4">
        A global skill-based golf competition platform where players enter challenges using digital tokens,
        compete based on performance, and earn rewards. The platform operates on a digital entry system and
        does not involve betting or gambling.
      </p>

      <a href="https://www.teezgolfchallenges.com" target="_blank" className="text-purple-400">
        Visit Platform →
      </a>
    </div>

    {/* VECTOR CARTS */}
    <div className="border border-purple-700 p-6 rounded-lg">
      <img src="/vector_logo.png" className="h-16 mb-4" />

      <h3 className="text-2xl font-bold mb-2">Vector Carts</h3>

      <p className="text-sm text-purple-400 mb-2">
        Target Market: Golf estates, resorts, and private buyers
      </p>

      <p className="text-gray-300 mb-4">
        A digital platform showcasing and selling premium electric golf carts.
      </p>

      <a href="https://vectorcarts.co.za" target="_blank" className="text-purple-400">
        Visit Website →
      </a>
    </div>

    {/* MBT WEBSITE (FIXED NAME) */}
    <div className="border border-purple-700 p-6 rounded-lg">
      <img src="/mbt_website.png" className="h-16 mb-4" />

      <h3 className="text-2xl font-bold mb-2">Middelburg Bearings Website</h3>

      <p className="text-sm text-purple-400 mb-2">
        Target Market: Industrial and mechanical supply clients
      </p>

      <p className="text-gray-300 mb-4">
        A business website providing product listings and supplier access.
      </p>

      <a href="https://middelburgbearingsandtransmission.com" target="_blank" className="text-purple-400">
        Visit Website →
      </a>
    </div>

    {/* MBT WEB APP (ADDED) */}
    <div className="border border-purple-700 p-6 rounded-lg">
      <img src="/middelburg_web.png" className="h-16 mb-4" />

      <h3 className="text-2xl font-bold mb-2">Middelburg Bearings Web App</h3>

      <p className="text-sm text-purple-400 mb-2">
        Target Market: Industrial customers and procurement teams
      </p>

      <p className="text-gray-300 mb-4">
        A web-based platform allowing customers to browse, order, and manage supplier interactions online.
      </p>

      <a href="https://middelburgbearingsandtransmission.co.za" target="_blank" className="text-purple-400">
        Open Web App →
      </a>
    </div>

    {/* MBT ANDROID */}
    <div className="border border-purple-700 p-6 rounded-lg">
      <img src="/middelburg_app.png" className="h-16 mb-4" />

      <h3 className="text-2xl font-bold mb-2">Middelburg Bearings App</h3>

      <p className="text-sm text-purple-400 mb-2">
        Target Market: Existing industrial customers and field buyers
      </p>

      <p className="text-gray-300 mb-4">
        A mobile application enabling product browsing and ordering.
      </p>

      <a href="https://play.google.com/store/apps/details?id=com.middelburgbearings.app&pcampaignid=web_share" target="_blank" className="text-purple-400">
        View on Play Store →
      </a>
    </div>

    {/* JOY APP */}
    <div className="border border-purple-700 p-6 rounded-lg">
      <img src="/joy_app.png" className="h-16 mb-4" />

      <h3 className="text-2xl font-bold mb-2">Joy Furniture App</h3>

      <p className="text-sm text-purple-400 mb-2">
        Target Market: Retail furniture customers
      </p>

      <p className="text-gray-300 mb-4">
        A mobile platform for browsing and engaging with furniture products.
      </p>

      <a href="https://play.google.com/store/apps/details?id=com.honeybadger.joyfurniture2024&pcampaignid=web_share" target="_blank" className="text-purple-400">
        View on Play Store →
      </a>
    </div>

    {/* FURNISEARCH (FIXED NAME) */}
    <div className="border border-purple-700 p-6 rounded-lg">
      <img src="/furnisearch_web.png" className="h-16 mb-4" />

      <h3 className="text-2xl font-bold mb-2">Furnisearch</h3>

      <p className="text-sm text-purple-400 mb-2">
        Target Market: Furniture buyers and suppliers
      </p>

      <p className="text-gray-300 mb-4">
        A furniture search and lead-generation platform connecting customers with suppliers.
      </p>

      <a href="https://www.furnisearch.co.za" target="_blank" className="text-purple-400">
        Visit Platform →
      </a>
    </div>

{/* ERP SYSTEM */}
<div className="border border-purple-700 p-6 rounded-lg">
  <img src="/appshortcut.png" className="h-16 mb-4" />

  <h3 className="text-2xl font-bold mb-2">Furniture ERP System</h3>

  <p className="text-sm text-purple-400 mb-2">
    Internal business management platform
  </p>

  <p className="text-gray-300 mb-4">
    A custom-built enterprise system used to manage quotations, invoices, payments, stock,
    and sales team performance across multiple business units.
  </p>

  <button
    onClick={() => router.push("/erp")}
    className="text-purple-400"
  >
    View System →
  </button>
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

  <button
  onClick={() => router.push("/contact")}
  className="bg-purple-600 px-6 py-3 rounded cursor-pointer"
>
  Start a Conversation →
</button>
      </section>

    {/* ================= FOOTER ================= */}
<footer className="px-8 py-16 border-t border-purple-200 bg-purple-50 text-black grid md:grid-cols-3 gap-10">

  <div>
    <h3 className="font-bold mb-4">HONEY BADGER TECHNOLOGIES PTY LTD</h3>
    <p className="text-gray-600">
      Developing and operating global digital platforms.
    </p>
  </div>

  <div>
    <h4 className="font-bold mb-4">Solutions</h4>
    <ul className="space-y-2 text-gray-600">
      <li>Digital Products</li>
      <li>AI Solutions</li>
      <li>Mobile Applications</li>
      <li>E-commerce Systems</li>
    </ul>
  </div>

  <div>
    <h4 className="font-bold mb-4">Company</h4>

    <ul className="space-y-2 text-gray-600 mb-6">
      <li onClick={() => router.push("/portfolio")} className="cursor-pointer">Portfolio</li>
      <li onClick={() => router.push("/contact")} className="cursor-pointer">Contact</li>
      <li onClick={() => router.push("/privacy")} className="cursor-pointer">Privacy Policy</li>
      <li onClick={() => router.push("/terms")} className="cursor-pointer">Terms & Conditions</li>
    </ul>

    {/* PAYMENT LOGOS */}
    <div className="flex items-center gap-4 flex-wrap">

      <img src="/Payfast logo.svg" className="h-8 object-contain" />
      <img src="/Visa.png" className="h-7 object-contain" />
      <img src="/Master Card.png" className="h-7 object-contain" />
      <img src="/American Express Logo.png" className="h-7 object-contain" />
      <img src="/Diners Club Logo.png" className="h-7 object-contain" />
      <img src="/instantEFT_hi-Res_logo.png" className="h-7 object-contain" />

    </div>
  </div>

</footer>


      {/* ================= COOKIE BANNER ================= */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 w-full bg-black border-t border-purple-800 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 z-50">
          <p className="text-sm text-gray-300 max-w-xl">
            We use cookies to improve your experience, analyse traffic, and support our platforms.
          </p>

          <button
            onClick={() => {
              localStorage.setItem("cookiesAccepted", "true");
              setShowCookies(false);
            }}
            className="bg-purple-600 px-6 py-2 rounded"
          >
            Accept
          </button>
        </div>
      )}

    </main>
  );
}