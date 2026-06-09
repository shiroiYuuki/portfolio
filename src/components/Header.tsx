import React, { useState } from 'react';
import { Terminal, Menu, X, Globe, Code, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Sandbox', href: '#sandbox' },
    { label: 'Connect', href: '#connect' }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#030008]/85 backdrop-blur-md border-b border-purple-950/40 px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#overview" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2c54ac] to-indigo-600 rounded-lg filter blur-md opacity-50 group-hover:opacity-85 transition-opacity" />
            <div className="relative w-10 h-10 bg-slate-950 border border-indigo-500/30 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(44,84,172,0.4)]">
              <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 fill-indigo-400 group-hover:fill-indigo-300 transition-colors" xmlns="http://www.w3.org/2000/svg">
                <title>Kali Linux</title>
                <path d="M12.778 5.943s-1.97-.13-5.327.92c-3.42 1.07-5.36 2.587-5.36 2.587s5.098-2.847 10.852-3.008zm7.351 3.095l.257-.017s-1.468-1.78-4.278-2.648c1.58.642 2.954 1.493 4.021 2.665zm.42.74c.039-.068.166.217.263.337.004.024.01.039-.045.027-.005-.025-.013-.032-.013-.032s-.135-.08-.177-.137c-.041-.057-.049-.157-.028-.195zm3.448 8.479s.312-3.578-5.31-4.403a18.277 18.277 0 0 0-2.524-.187c-4.506.06-4.67-5.197-1.275-5.462 1.407-.116 3.087.643 4.73 1.408-.007.204.002.385.136.552.134.168.648.35.813.445.164.094.691.43 1.014.85.07-.131.654-.512.654-.512s-.14.003-.465-.119c-.326-.122-.713-.49-.722-.511-.01-.022-.015-.055.06-.07.059-.049-.072-.207-.13-.265-.058-.058-.445-.716-.454-.73-.009-.016-.012-.031-.04-.05-.085-.027-.46.04-.46.04s-.575-.283-.774-.893c.003.107-.099.224 0 .469-.3-.127-.558-.344-.762-.88-.12.305 0 .499 0 .499s-.707-.198-.82-.85c-.124.293 0 .469 0 .469s-1.153-.602-3.069-.61c-1.283-.118-1.55-2.374-1.43-2.754 0 0-1.85-.975-5.493-1.406-3.642-.43-6.628-.065-6.628-.065s6.45-.31 11.617 1.783c.176.785.704 2.094.989 2.723-.815.563-1.733 1.092-1.876 2.97-.143 1.878 1.472 3.53 3.474 3.58 1.9.102 3.214.116 4.806.942 1.52.84 2.766 3.4 2.89 5.703.132-1.709-.509-5.383-3.5-6.498 4.181.732 4.549 3.832 4.549 3.832zM12.68 5.663l-.15-.485s-2.484-.441-5.822-.204C3.37 5.211 0 6.38 0 6.38s6.896-1.735 12.68-.717Z" />
              </svg>
            </div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white transition-opacity group-hover:opacity-90">
            Yuuki<span className="text-purple-500">.Onion</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="font-mono text-xs text-purple-300/80 hover:text-purple-100 transition-colors uppercase tracking-widest hover:text-glow-purple"
            >
              {item.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.contact.saweria}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black px-4 py-1.5 rounded-lg text-xs font-display font-black shadow-[0_0_15px_rgba(245,158,11,0.35)] hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all cursor-pointer border border-amber-400/20 active:scale-95 animate-pulse"
          >
            <span>Support via Saweria</span>
            <Heart size={12} className="fill-black text-black" />
          </a>
          <a
            href={PERSONAL_INFO.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-gradient-to-r from-purple-950 to-purple-900 hover:from-purple-900 hover:to-purple-800 text-purple-200 border border-purple-800/40 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all border-glow-purple-hover cursor-pointer"
          >
            <span>GitHub</span>
            <Code size={12} className="text-purple-400" />
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1.5 text-purple-300 hover:text-purple-100 focus:outline-none cursor-pointer"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#05010c] border-b border-purple-950/80 p-5 mt-[1px] flex flex-col gap-4 animate-fade-in shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="font-mono text-sm text-purple-300 hover:text-purple-100 py-1 border-b border-purple-950/40"
            >
              {item.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.contact.saweria}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-display font-black py-2.5 rounded-lg text-xs transition-all shadow-[0_0_12px_rgba(245,158,11,0.2)]"
          >
            <span>Support via Saweria</span>
            <Heart size={12} className="fill-black text-black" />
          </a>
          <a
            href={PERSONAL_INFO.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-purple-900/60 hover:bg-purple-800/80 text-purple-200 border border-purple-800/40 py-2.5 rounded-lg text-xs font-mono transition-all"
          >
            <span>GitHub Profile</span>
            <Code size={12} className="text-purple-400" />
          </a>
        </div>
      )}
    </header>
  );
}
