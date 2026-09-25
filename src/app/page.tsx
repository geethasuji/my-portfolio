import About from "@/app/components/About";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Training from "@/app/components/Training";
import WhatIDo from "@/app/components/WhatIDo";
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
      <Training />
      <WhatIDo />
       <Contact email="geethasujith04@gmail.com" />
      <Footer />
    </main>
  );
}
