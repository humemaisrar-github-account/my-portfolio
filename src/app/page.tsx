"use client" 

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills"; 
import About from "@/components/About";
import Contact from "@/components/Contact";
 
export default function home(){
  return (
   <main>
    <section id="hero" >
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>
   
      <section id="contact">
        <Contact />
      </section>
 
   </main>
  );
}











































































 
 