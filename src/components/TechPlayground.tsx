import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Globe, Code, Play, Check, Copy, RefreshCw, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function TechPlayground() {
  const [activeTab, setActiveTab] = useState<'terminal' | 'network' | 'editor'>('terminal');

  return (
    <div className="w-full bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[520px] backdrop-blur-sm hover:border-purple-500/30 transition-all">
      {/* Sandbox Header */}
      <div className="bg-[#05030a] px-4 py-3 border-b border-zinc-800/80 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600/80 shadow-[0_0_8px_rgba(168,85,247,0.5)] inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400/80 shadow-[0_0_8px_rgba(168,85,247,0.5)] inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500/80 shadow-[0_0_8px_rgba(59,130,246,0.5)] inline-block"></span>
          </span>
          <span className="text-xs font-mono text-purple-300 select-none ml-2">yuuki@onion-playground:~</span>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex bg-[#0d091a] p-1 rounded-lg border border-purple-950">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs transition-all cursor-pointer ${
              activeTab === 'terminal'
                ? 'bg-purple-950 text-purple-200 shadow-sm border border-purple-800/50'
                : 'text-purple-400 hover:text-purple-200'
            }`}
          >
            <Terminal size={13} />
            <span>Terminal</span>
          </button>
          <button
            onClick={() => setActiveTab('network')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs transition-all cursor-pointer ${
              activeTab === 'network'
                ? 'bg-purple-950 text-purple-200 shadow-sm border border-purple-800/50'
                : 'text-purple-400 hover:text-purple-200'
            }`}
          >
            <Globe size={13} />
            <span>Network</span>
          </button>
          <button
            onClick={() => setActiveTab('editor')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs transition-all cursor-pointer ${
              activeTab === 'editor'
                ? 'bg-purple-950 text-purple-200 shadow-sm border border-purple-800/50'
                : 'text-purple-400 hover:text-purple-200'
            }`}
          >
            <Code size={13} />
            <span>Code Sandbox</span>
          </button>
        </div>
      </div>

      {/* Sandbox Window Content */}
      <div className="flex-1 p-4 overflow-hidden relative select-none font-mono">
        <AnimatePresence mode="wait">
          {activeTab === 'terminal' && (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="h-full flex flex-col"
            >
              <TerminalWidget />
            </motion.div>
          )}

          {activeTab === 'network' && (
            <motion.div
              key="network"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="h-full flex flex-col"
            >
              <NetworkWidget />
            </motion.div>
          )}

          {activeTab === 'editor' && (
            <motion.div
              key="editor"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="h-full flex flex-col"
            >
              <EditorWidget />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ============================================================================
   1. LINUX TERMINAL WIDGET
   ============================================================================ */
function TerminalWidget() {
  const currentDate = new Date().toLocaleDateString('en-CA');
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output'; text: string; isCode?: boolean }>>([
    { type: 'output', text: 'Welcome to Fedora Linux Workstation Environment (x86_64)' },
    { type: 'output', text: 'System load: 0.12, Mem: 4.2GB/16GB, Temp: 42°C' },
    { type: 'output', text: "Type 'help' to see available interactive shell commands." },
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const command = inputVal.trim();
    if (!command) return;

    const newHistory = [...history, { type: 'input' as const, text: command }];
    const cmdLower = command.toLowerCase();

    let outputText = '';

    switch (cmdLower) {
      case 'help':
        outputText = `Available commands:
  about    - Fetch objective of Yuuki.Onion
  skills   - List expertise and stack focus
  journey  - Print current learning milestones
  neofetch - Display system overview & core stats
  clear    - Clear terminal history`;
        break;
      case 'about':
        outputText = `${PERSONAL_INFO.name}: Just a tech enthusiast who enjoys coding, learning Linux, servers, and exploring open-source repositories. Dedicated to constant training in technology.`;
        break;
      case 'skills':
        outputText = `--- Expertise ---
- Programming   : Python, C++, HTML, CSS
- Linux Kernel  : Bash scripts, service orchestration
- Networking    : OSI Layers, TCP/IP, secure tunnels
- IoT           : Smart automation, microcontrollers`;
        break;
      case 'journey':
        outputText = `--- Mileposts ---
* Python Fundamentals         [IN PROGRESS]
* Linux Shell Automation      [IN PROGRESS]
* TCP/IP & Router Sandbox     [COMPLETE]
* C++ Fundamentals            [COMPLETE]`;
        break;
      case 'neofetch':
        outputText = `   /\_/\     yuuki@onion-linux
  ( o.o )    -----------------
   > ^ <     OS: Fedora Linux Workstation
             Kernel: Linux 6.13-yuuki-onion
             Shell: zsh 5.9
             IDE: VSCode
             Favorite OS: Fedora Linux Distro
             Color Vibe: Onyx-Purple-Blue Accent
             Date: ${currentDate} (Real-time)`;
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        outputText = `shell: command not found: '${command}'. Type 'help' for possible instructions.`;
        break;
    }

    setHistory([...newHistory, { type: 'output' as const, text: outputText }]);
    setInputVal('');
  };

  return (
    <div className="h-full flex flex-col text-xs text-purple-200">
      {/* Scrollable Output */}
      <div className="flex-1 overflow-y-auto mb-2 space-y-2 pr-1 select-text">
        {history.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap leading-relaxed">
            {line.type === 'input' ? (
              <div className="flex items-center gap-1 text-purple-400">
                <span className="text-blue-400">⚡ yuuki@onion:~$</span>
                <span>{line.text}</span>
              </div>
            ) : (
              <div className="text-purple-200 pl-2 border-l border-purple-900/60 font-mono">
                {line.text}
              </div>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input row */}
      <form onSubmit={handleCommand} className="flex items-center gap-1.5 border-t border-purple-950 pt-2.5 bg-opacity-70">
        <span className="text-blue-400 shrink-0 font-bold">⚡ yuuki@onion:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help' and press Enter..."
          className="flex-1 bg-transparent text-purple-100 outline-none border-none font-mono focus:ring-0 placeholder-purple-800/80 p-0"
          autoFocus
        />
      </form>
    </div>
  );
}

/* ============================================================================
   2. GLOWING NETWORK WIDGET
   ============================================================================ */
interface Node {
  id: number;
  ip: string;
  label: string;
  x: number;
  y: number;
  status: 'active' | 'glowing';
}

interface Edge {
  from: number;
  to: number;
  active: boolean;
}

function NetworkWidget() {
  const [nodes, setNodes] = useState<Node[]>([
    { id: 1, ip: '10.0.4.1', label: 'OnionGate', x: 50, y: 50, status: 'glowing' },
    { id: 2, ip: '10.0.4.24', label: 'SubServer_A', x: 250, y: 70, status: 'active' },
    { id: 3, ip: '10.0.4.30', label: 'Storage_Pool', x: 120, y: 220, status: 'active' },
    { id: 4, ip: '10.0.8.2', label: 'AI_Broker_Node', x: 380, y: 150, status: 'glowing' },
    { id: 5, ip: '192.168.1.12', label: 'DevLaptop', x: 280, y: 280, status: 'active' },
  ]);

  const [edges, setEdges] = useState<Edge[]>([
    { from: 1, to: 2, active: true },
    { from: 1, to: 3, active: true },
    { from: 2, to: 4, active: true },
    { from: 3, to: 5, active: true },
    { from: 4, to: 5, active: true },
    { from: 2, to: 5, active: false },
  ]);

  const [activePackets, setActivePackets] = useState<Array<{ id: number; edgeIdx: number; progress: number }>>([]);
  const [sysLog, setSysLog] = useState<string>('SYS_NET: VPN handshake successful. Security: ACTIVE.');

  // Simulation packets
  useEffect(() => {
    const interval = setInterval(() => {
      // randomly spawn packet
      if (activePackets.length < 5) {
        const edgeIdx = Math.floor(Math.random() * edges.length);
        const randomId = Date.now() + Math.random();
        setActivePackets((prev) => [...prev, { id: randomId, edgeIdx, progress: 0 }]);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [edges, activePackets]);

  // Packet animation loop
  useEffect(() => {
    const frame = requestAnimationFrame(function animate() {
      setActivePackets((prev) => {
        let changed = false;
        const next = prev
          .map((packet) => {
            if (packet.progress >= 1) {
              changed = true;
              return null; // remove
            }
            return { ...packet, progress: packet.progress + 0.01 };
          })
          .filter(Boolean) as typeof prev;
        
        if (changed && prev.length > 0) {
          // Log random activity logs
          const logs = [
            'SECURE_ROUTE: IP 10.0.4.24 package decrypted successfully.',
            'AI_BROKER: Prompt embedding request routed. Latency 14ms.',
            'LINUX_SYS: SSH shell requested from Node 5. Handshake accepted.',
            'PORT_SCAN_GUARD: Anti-recon scan blocked on ports 22, 80, 443.',
            'NET_SYNC: Synchronizing dynamic subnet configs with Gateway.',
          ];
          setSysLog(`NET_LOG: ${logs[Math.floor(Math.random() * logs.length)]}`);
        }
        return next;
      });
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const triggerPing = () => {
    // Glow all nodes momentarily
    setNodes((prev) => prev.map((n) => ({ ...n, status: 'glowing' })));
    setSysLog('NET_PING: Broadcast ping transmitted. 5/5 hosts responsive. 0% packet loss.');
    setTimeout(() => {
      setNodes((prev) => prev.map((n, i) => ({ ...n, status: i % 2 === 0 ? 'glowing' : 'active' })));
    }, 800);
  };

  return (
    <div className="h-full flex flex-col text-xs font-mono text-purple-200">
      <div className="flex justify-between items-center bg-[#0d091a] px-3 py-1.5 rounded-lg border border-purple-900/30 mb-3">
        <span className="text-[10px] text-purple-400">ACTIVE NETWORKING NODES: 5 HOSTS</span>
        <button
          onClick={triggerPing}
          className="flex items-center gap-1.5 bg-purple-900/50 hover:bg-purple-800 text-[10px] text-purple-100 px-2 py-0.5 rounded border border-purple-700/60 cursor-pointer transition-colors"
        >
          <RefreshCw size={10} className="animate-spin-slow" />
          <span>Transmit Ping</span>
        </button>
      </div>

      <div className="flex-1 bg-[#040108] border border-purple-950 rounded-lg overflow-hidden relative">
        <svg className="w-full h-full absolute inset-0">
          {/* Render Connections */}
          {edges.map((edge, idx) => {
            const fromNode = nodes.find((n) => n.id === edge.from)!;
            const toNode = nodes.find((n) => n.id === edge.to)!;
            return (
              <line
                key={idx}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke={edge.from === 1 ? '#581c87' : '#2e1065'}
                strokeWidth={edge.active ? 1.5 : 1}
                strokeDasharray={!edge.active ? '4 4' : undefined}
              />
            );
          })}

          {/* Render Active Packets flying */}
          {activePackets.map((packet) => {
            const edge = edges[packet.edgeIdx];
            if (!edge) return null;
            const fromNode = nodes.find((n) => n.id === edge.from)!;
            const toNode = nodes.find((n) => n.id === edge.to)!;

            const fromX = fromNode.x;
            const fromY = fromNode.y;
            const toX = toNode.x;
            const toY = toNode.y;

            const currentX = fromX + (toX - fromX) * packet.progress;
            const currentY = fromY + (toY - fromY) * packet.progress;

            return (
              <circle
                key={packet.id}
                cx={`${currentX}%`}
                cy={`${currentY}%`}
                r="3"
                fill="#a855f7"
                className="shadow-[0_0_8px_#a855f7]"
              />
            );
          })}
        </svg>

        {/* Nodes layer style absolute positions */}
        {nodes.map((node) => (
          <div
            key={node.id}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer"
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                node.status === 'glowing'
                  ? 'bg-purple-900 border-2 border-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]'
                  : 'bg-[#0f0426] border border-purple-900 group-hover:border-purple-600'
              }`}
            >
              <Cpu className="text-purple-300 w-3.5 h-3.5" />
            </div>
            {/* Tooltip */}
            <div className="absolute top-7 bg-[#0b061c] px-2 py-1 border border-purple-900 rounded text-[9px] text-purple-200 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg whitespace-nowrap">
              <span className="font-bold text-purple-300">{node.label}</span>
              <br />
              <span className="text-blue-400 font-mono text-[8px]">{node.ip}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Network log message */}
      <div className="mt-2.5 px-3 py-2 bg-[#0a0514] border border-purple-950 rounded text-[10px] text-purple-400 flex items-center gap-1.5 select-text">
        <span className="inline-block w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_6px_#a855f7] shrink-0 animate-pulse"></span>
        <span className="font-mono text-[10px] truncate">{sysLog}</span>
      </div>
    </div>
  );
}

/* ============================================================================
   3. CODE SANDBOX WORKFLOW
   ============================================================================ */
function EditorWidget() {
  const [isCompiling, setIsCompiling] = useState(false);
  const [codeOutput, setCodeOutput] = useState<string>('// Select Run Code to execute the C++ program.');
  const [codeSnippet] = useState(`#include <iostream>
#include <vector>
#include <string>
#include <thread>
#include <chrono>

using namespace std;

void typeWriter(const string& text, int delay = 35) {
    for(char c : text) {
        cout << c << flush;
        this_thread::sleep_for(chrono::milliseconds(delay));
    }
    cout << endl;
}

int main() {

    typeWriter("[BOOT] Initializing Yuuki.Onion Environment...");
    typeWriter("[OK] Python Learning Stack Loaded");
    typeWriter("[OK] Linux Workspace Ready");
    typeWriter("[OK] Networking Fundamentals Loaded");
    typeWriter("[OK] Web Development Toolkit Loaded");
    typeWriter("[OK] AI Research Modules Loaded");

    cout << "\\n========================================\\n";
    cout << "          SYSTEM PROFILE\\n";
    cout << "========================================\\n";

    cout << "Alias   : Yuuki.Onion\\n";
    cout << "Status  : Learning & Building Projects\\n";

    cout << "\\nCurrent Focus:\\n";
    cout << "  > Python\\n";
    cout << "  > Linux\\n";
    cout << "  > Networking\\n";
    cout << "  > Web Development\\n";
    cout << "  > Artificial Intelligence\\n";

    cout << "\\nMission:\\n";
    cout << "  Build -> Learn -> Break -> Fix -> Repeat\\n";

    cout << "\\nSystem Status : ONLINE\\n";
    cout << "========================================\\n";

    return 0;
}`);

  const handleRunCode = () => {
    setIsCompiling(true);
    setCodeOutput('Compiling C++ code snippet (g++ -O3 -std=c++17)...');

    const outputSequence = [
      { text: "\nExecuting ./yuuki_onion...\n", delay: 800 },
      { text: "[BOOT] Initializing Yuuki.Onion Environment...\n", delay: 400 },
      { text: "[OK] Python Learning Stack Loaded\n", delay: 250 },
      { text: "[OK] Linux Workspace Ready\n", delay: 250 },
      { text: "[OK] Networking Fundamentals Loaded\n", delay: 250 },
      { text: "[OK] Web Development Toolkit Loaded\n", delay: 250 },
      { text: "[OK] AI Research Modules Loaded\n", delay: 250 },
      { text: "\n========================================\n", delay: 150 },
      { text: "          SYSTEM PROFILE\n", delay: 100 },
      { text: "========================================\n", delay: 100 },
      { text: "Alias   : Yuuki.Onion\n", delay: 100 },
      { text: "Status  : Learning & Building Projects\n", delay: 100 },
      { text: "\nCurrent Focus:\n", delay: 100 },
      { text: "  > Python\n", delay: 100 },
      { text: "  > Linux\n", delay: 100 },
      { text: "  > Networking\n", delay: 100 },
      { text: "  > Web Development\n", delay: 100 },
      { text: "  > Artificial Intelligence\n", delay: 100 },
      { text: "\nMission:\n", delay: 100 },
      { text: "  Build -> Learn -> Break -> Fix -> Repeat\n", delay: 100 },
      { text: "\nSystem Status : ONLINE\n", delay: 100 },
      { text: "========================================\n", delay: 100 }
    ];

    let currentStep = 0;
    
    setTimeout(() => {
      setCodeOutput('Compilation successful. Linking files...\n');
      
      const runSequence = () => {
        if (currentStep < outputSequence.length) {
          const step = outputSequence[currentStep];
          setCodeOutput((prev) => prev + step.text);
          currentStep++;
          setTimeout(runSequence, step.delay);
        } else {
          setIsCompiling(false);
        }
      };

      setTimeout(runSequence, 300);
    }, 1200);
  };

  return (
    <div className="h-full flex flex-col md:flex-row gap-3 text-xs leading-relaxed">
      {/* Editor Panel */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex justify-between items-center bg-[#0d091a] px-3 py-1.5 rounded-t-lg border-t border-x border-purple-900/40">
          <span className="text-[10px] text-purple-300 font-mono">yuuki_onion.cpp</span>
          <button
            onClick={handleRunCode}
            disabled={isCompiling}
            className={`flex items-center gap-1 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-900/60 text-purple-50 font-bold px-2 py-0.5 rounded transition-colors cursor-pointer text-[10px] border border-purple-500/70`}
          >
            <Play size={10} className={isCompiling ? 'animate-pulse' : ''} />
            <span>{isCompiling ? 'Executing...' : 'Run Code'}</span>
          </button>
        </div>
        <div className="flex-1 overflow-auto bg-[#040108] border border-purple-950 p-3 rounded-b-lg font-mono text-[11px] text-purple-300 select-text max-h-[170px] md:max-h-none">
          <pre className="text-purple-400">
            {codeSnippet}
          </pre>
        </div>
      </div>

      {/* Output Console */}
      <div className="w-full md:w-56 shrink-0 flex flex-col">
        <div className="bg-[#0b071a] px-3 py-1.5 rounded-t-lg border-t border-x border-purple-900/40">
          <span className="text-[10px] text-purple-400 font-mono">Console STDOUT</span>
        </div>
        <div className="flex-1 bg-[#020104] border border-purple-950 p-3 rounded-b-lg font-mono text-[10px] text-blue-400 select-text overflow-y-auto max-h-[110px] md:max-h-none h-full whitespace-pre-wrap">
          {codeOutput}
        </div>
      </div>
    </div>
  );
}
