import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhatIs } from "./components/WhatIs";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { GettingStarted } from "./components/GettingStarted";
import { Packages } from "./components/Packages";
import { Links } from "./components/Links";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen antialiased" style={{ backgroundColor: '#374161' }}>
      <Header />
      <main>
        <Hero />
        <WhatIs />
        <HowItWorks />
        <Features />
        <GettingStarted />
        <Packages />
        <Links />
      </main>
      <Footer />
    </div>
  );
}