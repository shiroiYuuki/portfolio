import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Cpu, Binary } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import profileAvatar from '../assets/images/profile_avatar_new_1780914306569.png';
const userGooglePhoto = "https://youtu.be/dQw4w9WgXcQ?si=vVoBure2by0juaih";

export default function Hero() {
  return (
    <section id="overview" className="relative pt-12 md:pt-20 pb-16 md:pb-24 px-4 overflow-hidden cyber-grid border-b border-purple-950/20">
      {/* Absolute Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/3 w-[250px] h-[250px] bg-blue-900/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Futuristic Cyberpulser Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 relative"
        >
          {/* Pulsing ring outlines */}
          <div className="absolute inset-0 bg-purple-600 rounded-full filter blur-xl opacity-20 animate-pulse" />
          <div className="absolute -inset-4 border border-purple-500/20 rounded-full animate-ping duration-1000 opacity-20 pointer-events-none" />
          <div className="absolute -inset-8 border border-purple-800/10 rounded-full pointer-events-none" />

          {/* Core Avatar */}
          <div className="relative w-24 h-24 bg-[#0a0515] border-2 border-purple-500 rounded-full flex items-center justify-center overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.45)] cursor-pointer group">
            <a href={userGooglePhoto} target="_blank" rel="noopener noreferrer" className="w-full h-full block">
              <img 
                src={profileAvatar} 
                alt="Yuuki.Onion Profile" 
                className="w-full h-full object-cover select-none transition-transform group-hover:scale-110 duration-300"
                referrerPolicy="no-referrer"
              />
            </a>
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-[#030008] border border-purple-500 rounded-full flex items-center justify-center z-10 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_6px_#a855f7] animate-pulse"></span>
            </div>
          </div>
        </motion.div>

        {/* Primary Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl tracking-tighter text-slate-100 mb-6"
        >
          <span className="bg-gradient-to-b from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
            Yuuki
          </span>
          <span className="text-purple-500">.</span>
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent text-glow-purple">
            Onion
          </span>
        </motion.h1>

        {/* Tagline Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-sm sm:text-base text-purple-300/95 tracking-wide max-w-2xl mb-8 font-medium border border-purple-950/40 px-5 py-2.5 rounded-xl bg-[#070312]/60 backdrop-blur-sm"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sans text-sm sm:text-base leading-relaxed text-slate-400 max-w-3xl mb-12 font-normal whitespace-pre-line"
        >
          {PERSONAL_INFO.description}
        </motion.p>

        {/* Minor Tech Flags */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          <span className="font-mono text-xs text-purple-400/90 flex items-center gap-1.5 bg-[#0e0721]/50 border border-purple-950 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            <span>Linux Enthusiast</span>
          </span>
          <span className="font-mono text-xs text-blue-400/90 flex items-center gap-1.5 bg-[#070b21]/50 border border-blue-950 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span>OSI & Protocols</span>
          </span>
          <span className="font-mono text-xs text-purple-400/90 flex items-center gap-1.5 bg-[#0e0721]/50 border border-purple-950 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            <span>tech Lover</span>
          </span>
          <span className="font-mono text-xs text-purple-400/90 flex items-center gap-1.5 bg-[#0e0721]/50 border border-purple-950 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            <span>Python & C++</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
