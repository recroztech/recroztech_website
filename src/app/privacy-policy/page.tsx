import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="mesh-bg" />
      <div className="relative z-10">
        <Navbar />
        <main className="min-h-screen pt-28 pb-20">
          <section className="max-w-4xl mx-auto px-6">
            <p className="font-mono text-sm text-cyan mb-3">{"// privacy policy"}</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold">Privacy Policy</h1>
            <p className="mt-6 text-lavender-dim leading-relaxed">
              At Recroz Tech, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information provided through our website.
            </p>

            <div className="mt-10 space-y-8 text-lavender-dim leading-relaxed">
              <div>
                <h2 className="font-display text-xl font-semibold text-lavender">Information we collect</h2>
                <p className="mt-2">We may collect your name, email address, company name, and project details when you contact us through our website or submit a form.</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-lavender">How we use it</h2>
                <p className="mt-2">We use your information to respond to inquiries, discuss your project requirements, and provide the services you request.</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-lavender">Data protection</h2>
                <p className="mt-2">We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse.</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-lavender">Contact us</h2>
                <p className="mt-2">If you have any questions about this Privacy Policy, please contact us at recroztech@gmail.com.</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
