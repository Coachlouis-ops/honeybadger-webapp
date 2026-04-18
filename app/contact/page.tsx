"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Let’s Build <span className="text-purple-500">Something.</span>
        </h1>

        <p className="text-gray-300 mt-6 max-w-3xl">
          Whether you have a clear brief or just an idea, we're ready to talk.
          Tell us about your project and we'll get back to you within one business day.
        </p>
      </section>

      {/* CONTENT */}
      <section className="mt-16 grid md:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <div>
          <h2 className="text-xl font-bold mb-6">Contact Information</h2>

          <div className="space-y-6 text-sm">

            <div>
              <p className="text-purple-400">Email</p>
              <p>info@honeybadgertech.com</p>
            </div>

            <div>
              <p className="text-purple-400">Phone</p>
              <p>+27 82 837 0266</p>
            </div>

            <div>
              <p className="text-purple-400">Location</p>
              <p>Pretoria, South Africa</p>
              <p className="text-gray-400 text-xs">Serving local & global markets</p>
            </div>

          </div>

          <div className="mt-10">
            <h3 className="font-bold mb-4">We Can Help With</h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>Business Support Systems (BSS)</li>
              <li>Digital Platform Development</li>
              <li>AI & Machine Learning Solutions</li>
              <li>Web & Mobile Applications</li>
              <li>E-commerce Infrastructure</li>
              <li>System Integration & APIs</li>
            </ul>
          </div>
        </div>

        {/* FORM */}
        <div className="border border-purple-700 p-6 rounded">

          <div className="grid md:grid-cols-2 gap-4 mb-4">

            <input
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-transparent border border-purple-700 p-3 rounded"
            />

            <input
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-transparent border border-purple-700 p-3 rounded"
            />

          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">

            <input
              placeholder="Company"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="bg-transparent border border-purple-700 p-3 rounded"
            />

            <input
              placeholder="Area of Interest"
              value={form.interest}
              onChange={(e) => setForm({ ...form, interest: e.target.value })}
              className="bg-transparent border border-purple-700 p-3 rounded"
            />

          </div>

          <textarea
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-transparent border border-purple-700 p-3 rounded h-[150px] mb-4"
          />

          <button
            disabled={loading}
            onClick={async () => {
              setLoading(true);

              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(form),
                });

                if (!res.ok) throw new Error("Failed");

                alert("Message sent successfully");

                setForm({
                  name: "",
                  email: "",
                  company: "",
                  interest: "",
                  message: "",
                });
              } catch (err) {
                console.error(err);
                alert("Failed to send message");
              }

              setLoading(false);
            }}
            className="w-full bg-purple-600 py-3 rounded"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>

        </div>

      </section>

    </main>
  );
}