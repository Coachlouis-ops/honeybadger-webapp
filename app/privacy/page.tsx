export default function PrivacyPage() {
  return (
    <main className="bg-[#0b071d] text-white px-6 py-16 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <p className="text-gray-400 mb-6">
        This Privacy Policy explains how Honey Badger Technologies PTY LTD collects, uses,
        and protects your information when you interact with our websites, platforms, and services.
      </p>

      {/* ================= DATA COLLECTION ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
        <p className="text-gray-300">
          We may collect personal information including your name, email address, and any
          information submitted through contact forms or platform usage.
        </p>
      </section>

      {/* ================= HOW DATA IS USED ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
        <p className="text-gray-300">
          Your information is used to provide services, respond to enquiries, improve platform
          performance, and communicate important updates related to our services.
        </p>
      </section>

      {/* ================= EMAIL HANDLING ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. Email Communication</h2>
        <p className="text-gray-300">
          We use secure third-party services such as Resend to send transactional and
          communication emails. Your email information is not sold or shared for marketing purposes.
        </p>
      </section>

      {/* ================= PAYMENTS ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. Payments</h2>
        <p className="text-gray-300">
          Payments on our platforms are handled by secure third-party providers such as Stripe
          and PayFast. Honey Badger Technologies does not store full payment card details.
        </p>
      </section>

      {/* ================= DATA STORAGE ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. Data Storage</h2>
        <p className="text-gray-300">
          Data is securely stored using cloud-based infrastructure including databases and
          services such as Firebase. We take reasonable steps to protect your data from
          unauthorized access or misuse.
        </p>
      </section>

      {/* ================= COOKIES ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
        <p className="text-gray-300">
          Our website uses cookies to enhance user experience, analyse traffic, and improve
          functionality. By using our site, you consent to the use of cookies.
        </p>
      </section>

      {/* ================= USER RIGHTS ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
        <p className="text-gray-300">
          You may request access, correction, or deletion of your personal information at any time
          by contacting us directly.
        </p>
      </section>

      {/* ================= THIRD PARTIES ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. Third-Party Services</h2>
        <p className="text-gray-300">
          Our platforms may integrate with third-party services for functionality and performance.
          These services have their own privacy policies and terms.
        </p>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
        <p className="text-gray-300">
          For any privacy-related queries, please contact us at:
        </p>
        <p className="text-purple-400 mt-2">
          info@honeybadgertech.com
        </p>
      </section>

      {/* ================= LEGAL ================= */}
      <section>
        <h2 className="text-2xl font-bold mb-4">10. Updates</h2>
        <p className="text-gray-300">
          We may update this Privacy Policy from time to time. Continued use of our services
          constitutes acceptance of any changes.
        </p>
      </section>

    </main>
  );
}