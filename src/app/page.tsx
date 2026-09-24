import About from "@/app/components/About";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Certifications from "@/app/components/Certifications";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
       <Contact email="geethasujith04@gmail.com" />
      <Footer />
    </main>
  );
}
