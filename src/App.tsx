import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SplitSection from './components/SplitSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-gray-300 select-none flex flex-col relative overflow-x-hidden">
      
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/25 blur-[120px] rounded-full -mr-48 -mt-48 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/15 blur-[100px] rounded-full -ml-24 -mb-24 z-0"></div>
      </div>

      {/* Floating Header Navigation */}
      <Header />

      {/* Main Page Core Content */}
      <main className="flex-1 relative z-10">
        
        {/* HERO HEADER */}
        <Hero />

        {/* DETAILS SECTION (Expertise list, Contact credentials, Interactive Playground Sandbox and Quote block) */}
        <SplitSection />

      </main>

      {/* FOOTER BLOCK */}
      <Footer />

    </div>
  );
}
