import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import CustomCursor from "../components/CustomCursor";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import EngineeringFocus from "../components/EngineeringFocus";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import StructuredData from "../components/StructuredData";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <StructuredData />
      <AnimatedBackground />
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Experience />
      <EngineeringFocus />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
