import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditionsPage() {
  return (
    <>
      <div className="mesh-bg" />
      <div className="relative z-10">
        <Navbar />
        <main className="min-h-screen pt-28 pb-20">
          <section className="max-w-4xl mx-auto px-6">
            <p className="font-mono text-sm text-cyan mb-3">{"// terms & conditions"}</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold">Terms & Conditions</h1>
            <p className="mt-6 text-lavender-dim leading-relaxed">
              These terms outline the agreement between Recroz Tech and its clients when using our website or engaging our services. By using this website, you agree to the following terms.
            </p>

            <div className="mt-10 space-y-8 text-lavender-dim leading-relaxed">
              <div>
                <h2 className="font-display text-xl font-semibold text-lavender">Services</h2>
                <p className="mt-2">Recroz Tech provides IT services, software development, web and mobile solutions, and related consulting services based on agreed project scope and timelines.</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-lavender">Client responsibilities</h2>
                <p className="mt-2">Clients are responsible for providing accurate project information, timely feedback, and necessary approvals throughout the engagement.</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-lavender">Intellectual property</h2>
                <p className="mt-2">Any deliverables created specifically for a client project remain subject to the agreed commercial terms and ownership arrangement between the parties.</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-lavender">Contact us</h2>
                <p className="mt-2">For any questions about these terms, please contact us at recroztech@gmail.com.</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
