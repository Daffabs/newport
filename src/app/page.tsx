import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import QAProjects from "@/components/QAProjects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Organization from "@/components/Organization";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#F1F5F9] relative selection:bg-[#38BDF8] selection:text-[#0F172A]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <QAProjects />
      <Skills />
      <Education />
      <Certificates />
      <Organization />
      <Contact />
      <Footer />
    </main>
  );
}
