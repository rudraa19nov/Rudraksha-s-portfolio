import React, { useRef, useState, useEffect } from 'react';
import { stats } from '../data';

function countUp(el, target, isFloat) {
  let cur = 0;
  const inc = target / 100;
  const t = setInterval(() => {
    cur = Math.min(cur + inc, target);
    if (el) el.textContent = isFloat ? cur.toFixed(1) : Math.floor(cur) + (target === 250 ? '+' : target === 10 ? '+' : '');
    if (cur >= target) clearInterval(t);
  }, 16);
}

const ACHIEVEMENTS = [
  { icon: '🥇', text: 'SIH 2025 National Hackathon Winner — Krishi Sakhi AgriTech' },
  { icon: '💻', text: 'Built 10+ production-grade full-stack MERN applications' },
  { icon: '🧠', text: 'Strong CS fundamentals — DSA, OOP, DBMS, OS, CN' },
  { icon: '📈', text: 'Consistent learner maintaining 8.5 CGPA at BIET Jhansi' },
];

export default function Achievements() {
  const sectionRef = useRef(null);
  const statRefs = useRef({});
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !counted) {
        setCounted(true);
        stats.forEach(s => {
          if (s.value !== null && statRefs.current[s.id]) {
            countUp(statRefs.current[s.id], s.value, s.isFloat);
          }
        });
      }
    }, { threshold: 0.3 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [counted]);

  return (
    <section id="achievements" style={{ padding: '80px 0', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 clamp(20px,5vw,40px)' }}>
        <div className="section-label">Achievements</div>
        <h2 className="section-title" style={{ marginBottom: 40 }}>By the <span>numbers</span></h2>

        {/* Stats grid */}
        <div ref={sectionRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 14, marginBottom: 32 }}>
          {stats.map((s) => (
            <div key={s.id} className="glass-card hover-lift" style={{ borderRadius: 16, padding: '22px 16px', textAlign: 'center', cursor: 'default', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 34, lineHeight: 1, marginBottom: 8 }}>
                {s.emoji ? (
                  <span>{s.emoji}</span>
                ) : (
                  <span className="gradient-text" ref={el => statRefs.current[s.id] = el}>0{s.suffix}</span>
                )}
              </div>
              <div style={{ fontSize: 11, color: 'var(--color-fg3)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Achievement list */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 10 }}>
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="glass-card hover-lift" style={{ borderRadius: 12, padding: '13px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 32, height: 32, background: 'linear-gradient(135deg,rgba(184,204,110,0.15),rgba(232,164,74,0.1))', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{a.icon}</span>
              <span style={{ fontSize: 13, color: 'var(--color-fg2)' }}>{a.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
