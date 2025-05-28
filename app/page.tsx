"use client";

import Hero from "../components/Hero";
import Features from "../components/Features";
import Companies from "../components/Companies";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Video from "../components/video"
import Panels from "@/components/scroll";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Video/>
      <Panels/>
      {/* <Features /> */}
      <Companies />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}