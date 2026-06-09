import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Terminal, 
  Globe, 
  Cpu, 
  Sparkles, 
  Users, 
  ShieldAlert, 
  Mail, 
  Github, 
  ExternalLink,
  Copy,
  Check,
  Quote
} from 'lucide-react';
import { PERSONAL_INFO, EXPERTISE_ITEMS } from '../data';
import TechPlayground from './TechPlayground';

export default function SplitSection() {
  const [copied, setCopied] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  // Dynamic Icon Renderer
  const renderIcon = (name: string, className: string = "text-purple-400") => {
    switch (name) {
      case 'Code': return <Code className={className} size={18} />;
      case 'Terminal': return <Terminal className={className} size={18} />;
      case 'Globe': return <Globe className={className} size={18} />;
      case 'Cpu': return <Cpu className={className} size={18} />;
      case 'Sparkles': return <Sparkles className={className} size={18} />;
      case 'Users': return <Users className={className} size={18} />;
      case 'ShieldAlert': return <ShieldAlert className={className} size={18} />;
      default: return <Code className={className} size={18} />;
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.discord);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* 2-Column Core Layout (Desktop Split) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
        
        {/* Left Hand Column: Expertise Field */}
        <div className="lg:col-span-5">
          
          {/* EXPERTISE SUBSYSTEM */}
          <div id="expertise">
            <h2 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-purple-400 mb-2 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 shadow-[0_0_8px_#a855f7]"></span>
              <span>Expertise Field</span>
            </h2>
            <p className="font-mono text-[10px] text-zinc-500 ml-4 mb-6 uppercase tracking-wider">Aesthetic Tech Competencies</p>
            
            <div className="space-y-3.5">
              {EXPERTISE_ITEMS.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-purple-500/40 hover:bg-zinc-900/60 backdrop-blur-sm transition-all duration-300 group shadow-md"
                >
                  <div className="p-2.5 bg-black/40 border border-white/5 rounded-lg shrink-0 group-hover:scale-105 transition-transform">
                    {renderIcon(item.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-gray-200 group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Hand Column: Sandbox Tech Interactive Playground */}
        <div id="sandbox" className="lg:col-span-7 lg:sticky lg:top-24 space-y-4">
          <h2 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-purple-400 mb-2 flex lg:hidden items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 shadow-[0_0_8px_#a855f7]"></span>
            <span>Tech Playground</span>
          </h2>
          <p className="font-mono text-[10px] text-zinc-500 ml-4 mb-6 uppercase tracking-wider lg:hidden">Interactive Technical Sandbox</p>
          <TechPlayground />
        </div>

      </div>

      {/* Side-by-Side Channels and Contact Subsystem */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-16">
        {/* CONTACT SUBSYSTEM */}
        <div id="connect" className="space-y-4">
          <h2 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-purple-400 mb-2 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 shadow-[0_0_8px_#a855f7]"></span>
            <span>Connect</span>
          </h2>
          <p className="font-mono text-[10px] text-zinc-500 ml-4 mb-6 uppercase tracking-wider">Ping the developer</p>

          <div className="space-y-3.5">
            {/* Email Card Interaction */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 font-mono text-xs text-gray-300 backdrop-blur-sm shadow-sm hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/5">
                  <Mail size={14} className="text-purple-400" />
                </div>
                <span className="select-text text-[11px] sm:text-xs text-gray-300">{PERSONAL_INFO.contact.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 bg-zinc-800/50 hover:bg-purple-950/60 rounded border border-white/5 text-purple-400 hover:text-purple-200 cursor-pointer transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>

            {/* GitHub Link Card */}
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-purple-500/50 hover:bg-zinc-900/60 backdrop-blur-sm transition-all duration-300 font-mono text-xs text-gray-300 group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/5 group-hover:bg-purple-950/40 transition-colors">
                  <Github size={14} className="text-purple-400" />
                </div>
                <span className="text-[11px] sm:text-xs text-gray-300">@shiroiYuuki</span>
              </div>
              <div className="p-1.5 bg-zinc-800/50 border border-white/5 rounded text-purple-400 group-hover:text-purple-200 transition-colors">
                <ExternalLink size={14} />
              </div>
            </a>

            {/* Discord Copy Card */}
            <div
              onClick={handleCopyDiscord}
              className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-indigo-500/50 hover:bg-zinc-900/60 backdrop-blur-sm transition-all duration-300 font-mono text-xs text-gray-300 group shadow-sm cursor-pointer"
              title="Click to copy Discord ID"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/5 group-hover:bg-indigo-950/40 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-indigo-400 group-hover:text-indigo-300 transition-colors" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.03c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.03A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.46-.63.87-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs text-gray-200 block font-bold font-display group-hover:text-indigo-400 transition-colors">Discord Account</span>
                  <span className="text-[9px] text-zinc-500 block">yuuki_neko</span>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopyDiscord();
                }}
                className="p-1.5 bg-zinc-800/50 hover:bg-indigo-950/60 rounded border border-white/5 text-indigo-400 hover:text-indigo-200 cursor-pointer transition-colors"
                title="Copy Discord ID"
              >
                {copiedDiscord ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        </div>

        {/* MEDIA CHANNELS SUBSYSTEM */}
        <div id="media-channels" className="space-y-4">
          <h2 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-purple-400 mb-2 flex items-center">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 shadow-[0_0_8px_#ec4899]"></span>
            <span>TikTok & YouTube Channels</span>
          </h2>
          <p className="font-mono text-[10px] text-zinc-500 ml-4 mb-6 uppercase tracking-wider">Official Tech Video Broadcasts</p>

          <div className="grid grid-cols-1 gap-3.5">
            {/* TikTok Link Card */}
            <a
              href={PERSONAL_INFO.contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-pink-500/50 hover:bg-zinc-900/60 backdrop-blur-sm transition-all duration-300 font-mono text-xs text-gray-300 group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/5 group-hover:bg-pink-950/40 group-hover:border-pink-500/30 transition-all duration-300">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-pink-400 group-hover:text-pink-300 transition-colors" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.94 1.18 2.27 2 3.74 2.36v3.91a8.88 8.88 0 0 1-5.34-1.89c-.04 1.35-.02 2.7-.03 4.05a7.48 7.48 0 0 1-2.91 5.92A7.47 7.47 0 0 1 5.7 18.06a7.48 7.48 0 0 1-1.07-8.13 7.46 7.46 0 0 1 6.36-4.22c.01 1.41.01 2.82.01 4.23a3.52 3.52 0 0 0-2.3 1.39A3.54 3.54 0 0 0 12.01 16a3.53 3.53 0 0 0 4.19-2.37c.05-.28.08-.57.08-.86V0h-3.76z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs text-gray-200 group-hover:text-pink-400 transition-colors block font-bold font-display">TikTok Creator Hub</span>
                  <span className="text-[9px] text-zinc-500 block">@yuutech.onion</span>
                </div>
              </div>
              <div className="p-1.5 bg-zinc-800/50 border border-white/5 rounded text-pink-400 group-hover:text-pink-300 transition-colors">
                <ExternalLink size={14} />
              </div>
            </a>

            {/* YouTube Link Card */}
            <a
              href={PERSONAL_INFO.contact.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-500/50 hover:bg-zinc-900/60 backdrop-blur-sm transition-all duration-300 font-mono text-xs text-gray-300 group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/5 group-hover:bg-red-950/40 group-hover:border-red-500/30 transition-all duration-300">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-red-500 group-hover:text-red-400 transition-colors" fill="currentColor">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11c-.51 1.871-.51 5.776-.51 5.776s0 3.905.51 5.776a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11c.51-1.871.51-5.776.51-5.776s0-3.905-.51-5.776zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs text-gray-200 group-hover:text-red-400 transition-colors block font-bold font-display">YouTube Channel</span>
                  <span className="text-[9px] text-zinc-500 block">@YuuTech-onion</span>
                </div>
              </div>
              <div className="p-1.5 bg-zinc-800/50 border border-white/5 rounded text-red-500 group-hover:text-red-400 transition-colors">
                <ExternalLink size={14} />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Saweria Special Support Block */}
      <div className="w-full mt-12 bg-gradient-to-br from-amber-950/20 via-zinc-950/80 to-black border border-amber-500/20 hover:border-amber-500/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md transition-all duration-300 relative overflow-hidden group shadow-xl">
        {/* Glow decorative behind */}
        <div className="absolute top-1/2 right-10 w-44 h-44 bg-amber-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-amber-500/10 transition-colors duration-500"></div>
        <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-amber-950/10 blur-[40px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-5 sm:gap-6 flex-col sm:flex-row text-center sm:text-left z-10 w-full md:w-auto">
          {/* EXTREMELY BIG SAWERIA CUSTOM BRAND LOGO */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-950/40 flex items-center justify-center border border-amber-500/30 group-hover:border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.1)] group-hover:scale-105 transition-all duration-500 shrink-0">
            {/* High-fidelity custom glowing layered vector heart/coin support icon */}
            <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-11 sm:h-11 text-amber-400 font-bold drop-shadow-[0_0_10px_rgba(245,158,11,0.6)] animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" fill="currentColor" className="text-amber-500/20" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25V15m-1.875-1.875H13.87" stroke="currentColor" strokeWidth="2.0" className="text-amber-300" />
            </svg>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-amber-500 font-bold block">Creator Funding</span>
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-wide">
              Support this Creator via Saweria
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-xl leading-relaxed">
              Every system contribution supports development servers, continuous technological curation, and cool sandbox projects. Click the button to send support through Saweria!
            </p>
          </div>
        </div>

        {/* Big Interactive Button */}
        <a
          href={PERSONAL_INFO.contact.saweria}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto px-6 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 border border-amber-400/30 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-black font-display font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-300 z-10 shrink-0"
        >
          <span>Support Yuuki</span>
          <ExternalLink size={15} strokeWidth={2.5} />
        </a>
      </div>

      {/* Quote Banner Widget (at the absolute bottom) */}
      <div className="w-full mt-10 bg-gradient-to-br from-purple-950/40 to-black border border-purple-500/20 rounded-2xl p-8 flex flex-col justify-between">
        <div className="bg-black/60 p-6 rounded-xl border-l-4 border-purple-500 shadow-lg">
          <p className="text-white font-serif italic text-lg sm:text-xl leading-relaxed mb-4 select-text">
            "{PERSONAL_INFO.quote.text}"
          </p>
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1.5px] bg-purple-500"></span>
            <p className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">— {PERSONAL_INFO.quote.author}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
