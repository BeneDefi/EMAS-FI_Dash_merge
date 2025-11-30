import React from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { CryptoTicker } from "../components/sections/CryptoTicker";
import { About } from "../components/sections/About";
import { Features } from "../components/sections/Features";
import { Tokenomics } from "../components/sections/Tokenomics";
import { Team } from "../components/sections/Team";
import { HowItWorks } from "../components/sections/HowItWorks";
import { PitchDeck } from "../components/sections/PitchDeck";

export const Home = () => {
  return (
    <div className="flex flex-col items-center relative bg-readdylinkwhite-cod-gray overflow-x-hidden">
      <Header />
      <Hero />
      <CryptoTicker />
      <section className="relative w-full bg-gradient-to-br from-[#13100f] via-[#1a1612] to-[#13100f]" id="features">
        <About />
        <Features />
      </section>
      <Tokenomics />
      <Team />
      <HowItWorks />
      <PitchDeck />
      <Footer />

      {/* Background gradient effect */}
      <div className="absolute w-[400px] sm:w-[600px] lg:w-[768px] h-[400px] sm:h-[600px] lg:h-[768px] top-0 -left-24 sm:-left-32 lg:-left-48 rounded-full blur-[50px] sm:blur-[60px] lg:blur-[75px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,215,0,0.3)_0%,rgba(255,215,0,0)_70%)] opacity-5" />
    </div>
  );
};
