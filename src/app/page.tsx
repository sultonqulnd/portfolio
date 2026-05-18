import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
