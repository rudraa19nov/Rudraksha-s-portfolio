import React, { useRef, useState, useEffect } from 'react';
import { terminalCommands } from '../data';

const HELP = [
  { cmd: 'about',        desc: '— Who am I' },
  { cmd: 'education',    desc: '— Academic background' },
  { cmd: 'contact',      desc: '— Get in touch' },
  { cmd: 'achievements', desc: '— Awards & milestones' },
  { cmd: 'skills',       desc: '— Tech stack' },
  { cmd: 'projects',     desc: '— My builds' },
  { cmd: 'whoami',       desc: '— Quick summary' },
  { cmd: 'clear',        desc: '— Clear terminal' },
  { cmd: 'sudo hire me', desc: '— ???', special: true },
];

const ALL_CMDS = HELP.map(h => h.cmd);

export default function Terminal() {
  const [lines, setLines] = useState([
    { type: 'welcome', text: "Welcome to Rudraksha's portfolio terminal." },
    { type: 'info',    text: "Type 'help' to see available commands." },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const print = (entries) => setLines(prev => [...prev, ...entries]);

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!raw.trim()) return;
    setHistory(h => [raw, ...h]);
    setHistIdx(-1);

    // Always show the prompt line
    const promptLine = { type: 'prompt', text: raw };

    if (cmd === 'clear') { setLines([]); return; }

    if (cmd === 'help') {
      print([promptLine, { type: 'help' }]);
      return;
    }

    if (cmd === 'whoami') {
      print([promptLine, { type: 'json', text: terminalCommands.whoami }]);
      return;
    }

    if (cmd === 'sudo hire me' || cmd === 'sudo hire-me') {
      print([promptLine, { type: 'special', text: '🎉 sudo: granting full hire permissions...' }]);
      setTimeout(() => {
        print([{ type: 'info', text: 'Redirecting to contact section...' }]);
        setTimeout(() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 600);
      }, 700);
      return;
    }

    if (cmd === 'ls' || cmd === 'dir') {
      print([promptLine, { type: 'val', text: 'about  education  contact  achievements  skills  projects  whoami' }]);
      return;
    }

    const key = cmd.replace('cat ', '');
    if (terminalCommands[key] || terminalCommands[cmd]) {
      const data = terminalCommands[cmd] || terminalCommands[key];
      print([promptLine, { type: 'json', text: data }]);
      return;
    }

    print([promptLine, { type: 'error', text: `command not found: ${raw}. Type 'help' for commands.` }]);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') { run(input); setInput(''); return; }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (histIdx < history.length - 1) { const ni = histIdx + 1; setHistIdx(ni); setInput(history[ni]); }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdx > 0) { const ni = histIdx - 1; setHistIdx(ni); setInput(history[ni]); }
      else { setHistIdx(-1); setInput(''); }
      return;
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      const match = ALL_CMDS.find(c => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  const renderLine = (line, i) => {
    const mono = { fontFamily: "'JetBrains Mono',monospace", fontSize: 13, lineHeight: 1.65 };

    if (line.type === 'prompt') return (
      <div key={i} style={{ ...mono, marginBottom: 3 }}>
        <span style={{ color: '#B8CC6E' }}>❯ </span>
        <span style={{ color: '#E8E6DF' }}>{line.text}</span>
      </div>
    );
    if (line.type === 'welcome') return (
      <div key={i} style={{ ...mono, color: '#9A9890', marginBottom: 3 }}>
        Welcome to <span style={{ color: '#B8CC6E', fontWeight: 700 }}>Rudraksha's portfolio terminal</span>.
      </div>
    );
    if (line.type === 'info') return (
      <div key={i} style={{ ...mono, color: '#9A9890', marginBottom: 3 }}>{line.text}</div>
    );
    if (line.type === 'error') return (
      <div key={i} style={{ ...mono, color: '#D4756A', marginBottom: 3 }}>{line.text}</div>
    );
    if (line.type === 'val') return (
      <div key={i} style={{ ...mono, color: '#9ABA6E', marginBottom: 3 }}>{line.text}</div>
    );
    if (line.type === 'special') return (
      <div key={i} style={{ ...mono, color: '#E8A44A', fontWeight: 700, marginBottom: 3 }}>{line.text}</div>
    );
    if (line.type === 'json') return (
      <pre key={i} style={{ ...mono, color: '#9ABA6E', margin: '3px 0 6px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{line.text}</pre>
    );
    if (line.type === 'help') return (
      <div key={i} style={{ marginBottom: 6 }}>
        <div style={{ ...mono, color: '#5A6850', marginBottom: 4 }}>Available commands:</div>
        {HELP.map((h, j) => (
          <div key={j} style={{ ...mono, marginBottom: 2 }}>
            <span style={{ color: h.special ? '#E8A44A' : '#B8CC6E', minWidth: 130, display: 'inline-block' }}>{h.cmd}</span>
            <span style={{ color: '#5A6850' }}>{h.desc}</span>
          </div>
        ))}
      </div>
    );
    return null;
  };

  return (
    <section id="terminal" style={{ padding: '80px 0', background: 'var(--color-bg3)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 clamp(20px,5vw,40px)' }}>
        <div className="section-label">Explore Interactively</div>
        <h2 className="section-title" style={{ marginBottom: 8 }}>Type a <span>command</span></h2>
        <p style={{ fontSize: 14, color: 'var(--color-fg2)', marginBottom: 28, fontWeight: 300 }}>
          Try: <code style={{ color: 'var(--color-accent)', fontFamily: "'JetBrains Mono',monospace" }}>about</code>
          {' '}or{' '}
          <code style={{ color: 'var(--color-warm)', fontFamily: "'JetBrains Mono',monospace" }}>sudo hire me</code>
        </p>

        <div className="terminal-wrap" style={{ maxWidth: 720 }} onClick={() => inputRef.current?.focus()}>
          {/* Title bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '11px 16px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {['#FF5F57','#FEBC2E','#28C840'].map(c => (
                <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: 'rgba(255,255,255,0.3)', marginLeft: 6 }}>
              terminal — rudraksha@portfolio
            </span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'rgba(255,255,255,0.18)', marginLeft: 'auto' }}>
              type 'help' for commands
            </span>
          </div>

          {/* Body */}
          <div ref={bodyRef} className="term-body">
            {lines.map((l, i) => renderLine(l, i))}
          </div>

          {/* Input */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
            <span style={{ color: '#B8CC6E', fontFamily: "'JetBrains Mono',monospace", fontSize: 13, flexShrink: 0 }}>❯</span>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="type a command..."
              autoComplete="off" autoCorrect="off" spellCheck={false}
              style={{
                flex: 1, background: 'none', border: 'none', outline: 'none',
                color: '#E8E6DF', fontFamily: "'JetBrains Mono',monospace",
                fontSize: 13, caretColor: '#B8CC6E',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
