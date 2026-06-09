import React from 'react';
import { Terminal, Github, Mail, ShieldAlert } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Brand & copy */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <div className="bg-zinc-900 border border-zinc-800 p-1.5 rounded flex items-center justify-center" id="kali-logo-container">
              <svg
                id="kali-logo-svg"
                viewBox="0 0 500 500"
                className="text-purple-400 w-4 h-4 transition-transform duration-300 hover:scale-110"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="m9.833 36.432s173.14-5.632 250.66 29.439c19.157 6.4 15.83 11.521 15.83 11.521s-5.121 47.103 31.232 57.344c36.352 10.239 58.367 6.399 108.54 36.863-1.792-5.632-1.282-9.984-1.282-9.984s11.01 9.984 14.339 15.615c3.328 5.632 10.751 1.281 13.825 3.071 3.07 1.793 15.102 21.248 15.102 21.248v4.608s11.007 13.825 23.808 14.848c-6.4 5.12-14.848 11.52-14.848 11.52s-11.009-14.591-39.424-28.671c-4.352-4.609-4.863-13.825-4.863-13.825s1.279-3.583-31.233-15.103c-32.512-11.521-65.279-28.671-100.35-6.912-35.07 21.759-52.735 107.78 70.912 115.96 15.522 2.244 39.636 8.599 56.063 22.272 42.751 29.696 87.293 104.96 78.334 146.86-7.422-18.352-15.103-80.304-76.543-125.61-19.198-17.921-28.927-20.991-59.646-27.395-30.72-6.397-75.264-1.79-103.42-41.727-28.159-39.935 0-92.413 15.873-100.35 3.839-3.071 13.055-11.008 13.055-11.008s-19.2-45.567-19.162-63.998c-71.46-44.807-256.81-43.784-256.81-43.784l-6.145-0.768 6.148-2.048z"
                />
                <path
                  d="m265.78 102.04s-116.19 13.605-214.5 75.848c79.853-34.008 56.568-24.287 79.853-34.008 23.286-9.72 72.845-24.8 138.52-28.608-1.45-2.79-3.87-13.23-3.87-13.23z"
                />
              </svg>
            </div>
            <span className="font-display font-bold text-xs tracking-wider text-white">
              {PERSONAL_INFO.name.toUpperCase()} <span className="text-[10px] text-purple-500 font-mono">/ ID SYSTEM</span>
            </span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
            &copy; {new Date().getFullYear()} Digital Identity System
          </div>
        </div>

        {/* Middle Side: Localized node & coordinates */}
        <div className="text-center text-[10px] uppercase tracking-[0.3em] text-zinc-500/80 space-y-1">
          <div>Localized: Indonesia Node // 6.2088° S, 106.8456° E</div>
          <div className="font-mono text-[9px] text-purple-400/50">Active Sandbox Date // {new Date().toLocaleDateString('en-CA')}</div>
        </div>

        {/* Right Side: GitHub/Mail anchors + Version */}
        <div className="flex flex-col items-center md:items-end gap-3.5">
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-zinc-900 hover:bg-purple-950/40 text-purple-400 hover:text-purple-200 rounded-lg border border-zinc-800 transition-all cursor-pointer"
              title="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="p-2 bg-zinc-900 hover:bg-purple-950/40 text-purple-400 hover:text-purple-200 rounded-lg border border-zinc-800 transition-all cursor-pointer"
              title="Email"
            >
              <Mail size={14} />
            </a>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-mono">V 2.0.4-LTS</span>
        </div>

      </div>
    </footer>
  );
}
