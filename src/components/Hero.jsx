import React, { useEffect, useRef, useState } from 'react';
import { personal } from '../data';

const ROLES = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'Problem Solver',
  'Software Engineering Enthusiast',
];

function useTyped() {
  const [text, setText] = useState('');
  const state = useRef({ ri: 0, ci: 0, del: false });

  useEffect(() => {
    let timer;
    function tick() {
      const { ri, ci, del } = state.current;
      const cur = ROLES[ri];
      if (!del) {
        setText(cur.slice(0, ci + 1));
        if (ci + 1 >= cur.length) {
          state.current.del = true;
          timer = setTimeout(tick, 2000);
          return;
        }
        state.current.ci++;
      } else {
        setText(cur.slice(0, ci - 1));
        if (ci - 1 <= 0) {
          state.current.del = false;
          state.current.ri = (ri + 1) % ROLES.length;
          state.current.ci = 0;
          timer = setTimeout(tick, 120);
          return;
        }
        state.current.ci--;
      }
      timer = setTimeout(tick, del ? 38 : 78);
    }
    tick();
    return () => clearTimeout(timer);
  }, []);

  return text;
}

function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const pts = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.3 + 0.3, o: Math.random() * 0.28 + 0.07,
    }));
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(184,204,110,${p.o})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 85) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(184,204,110,${0.05 * (1 - d / 85)})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);
  return <canvas ref={canvasRef} id="hero-canvas" />;
}

const HERO_STATS = [
  { val: '🏆 SIH 2025', label: 'National Winner' },
  { val: '250+', label: 'DSA Problems' },
  { val: '10+', label: 'Full Stack Projects' },
  { val: '8.5', label: 'CGPA' },
];

export default function Hero() {
  const typed = useTyped();

  const handleDownload = (e) => {
    e.preventDefault();
    window.open('/resume.pdf', '_blank')
  };

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden', background: 'var(--color-bg)',
    }}>
      {/* BG orbs */}
      <div className="hero-orb orb1" style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        filter: 'blur(80px)', opacity: 0.12,
        width: 'min(480px,70vw)', height: 'min(480px,70vw)',
        background: 'radial-gradient(circle,rgba(184,204,110,0.14) 0%,transparent 70%)',
        top: '-80px', right: '-60px',
      }} />
      <div className="hero-orb orb2" style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        filter: 'blur(80px)', opacity: 0.1,
        width: 'min(320px,50vw)', height: 'min(320px,50vw)',
        background: 'radial-gradient(circle,rgba(232,164,74,0.1) 0%,transparent 70%)',
        bottom: '40px', left: '-40px',
      }} />
      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.5,
        backgroundImage: 'linear-gradient(rgba(184,204,110,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(184,204,110,0.025) 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <ParticleCanvas />

      {/* Content — LEFT ALIGNED (not centered) */}
      <div style={{
        position: 'relative', zIndex: 1, width: '100%',
        maxWidth: 1080, margin: '0 auto',
        padding: 'clamp(80px,12vw,110px) clamp(20px,5vw,40px) 60px',
        /* NO textAlign: center */
      }}>
        {/* Badge */}
        <div className="fade-up" style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: 'rgba(184,204,110,0.1)', border: '1px solid rgba(184,204,110,0.22)',
          padding: '5px 14px', borderRadius: 50, fontSize: 11,
          color: 'var(--color-accent)', fontWeight: 700, marginBottom: 24,
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>
          <span className="pulse-dot" style={{ width: 5, height: 5, background: 'var(--color-accent)', borderRadius: '50%' }} />
          Available for Internships · India 2025
        </div>

        {/* Title — left aligned */}
        <h1 className="fade-up delay-1" style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: 16,
          fontSize: 'clamp(34px,5.5vw,70px)',
          textAlign: 'left',
        }}>
          Hi, I'm<br />
          <span className="gradient-name">{personal.name}</span>
        </h1>

        {/* Typed role — left aligned */}
        <div className="fade-up delay-2" style={{
          display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
          fontFamily: 'Syne, sans-serif', fontWeight: 600,
          fontSize: 'clamp(16px,2.2vw,28px)', color: 'var(--color-fg3)',
          marginBottom: 22, minHeight: 40, textAlign: 'left',
        }}>
          <span style={{ fontWeight: 300, color: 'var(--color-fg3)' }}>I build as a</span>
          <span style={{ color: 'var(--color-accent)' }}>{typed}</span>
          <span className="blink" style={{ color: 'var(--color-accent)' }}>|</span>
        </div>

        {/* Description */}
        <p className="fade-up delay-2" style={{
          fontSize: 'clamp(14px,1.6vw,17px)', color: 'var(--color-fg2)',
          maxWidth: 540, lineHeight: 1.75, marginBottom: 34, fontWeight: 300,
          textAlign: 'left',
        }}>
          {personal.brand}
        </p>

        {/* CTAs */}
        <div className="fade-up delay-3" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48, justifyContent: 'flex-start' }}>
          <button onClick={() => handleNav('projects')} style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '11px 22px', borderRadius: 10, fontSize: 13, fontWeight: 700,
            background: 'var(--color-accent)', color: '#111310', border: 'none',
            cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >⚡ View Projects</button>

          <button onClick={handleDownload} style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '11px 22px', borderRadius: 10, fontSize: 13, fontWeight: 600,
            background: 'transparent', color: 'var(--color-fg)',
            border: '1px solid var(--color-border2)', cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border2)'; e.currentTarget.style.color = 'var(--color-fg)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >↓ Download Resume</button>

          <button onClick={() => handleNav('contact')} style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '11px 22px', borderRadius: 10, fontSize: 13, fontWeight: 600,
            background: 'transparent', color: 'var(--color-fg)',
            border: '1px solid var(--color-border2)', cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border2)'; e.currentTarget.style.color = 'var(--color-fg)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >✉ Contact Me</button>
        </div>

        {/* Stats */}
        <div className="fade-up delay-4" style={{ display: 'flex', gap: 'clamp(20px,4vw,40px)', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
          {HERO_STATS.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="gradient-text" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(16px,1.8vw,22px)', lineHeight: 1 }}>{s.val}</span>
              <span style={{ fontSize: 11, color: 'var(--color-fg3)', fontWeight: 500, marginTop: 3 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}