import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="mesh-bg" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Work />
          <Process />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
