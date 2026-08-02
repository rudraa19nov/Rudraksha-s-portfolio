import React, { useState } from 'react';
import { techStack } from '../data';

const DOT = { green: '#B8CC6E', amber: '#E8A44A', blue: '#6AB0CC', rose: '#D4756A' };

export default function TechStack() {
  const [hov, setHov] = useState(null);
  return (
    <section id="tech" style={{ padding: '80px 0', background: 'var(--color-bg2)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 clamp(20px,5vw,40px)' }}>
        <div className="section-label">Tech Stack</div>
        <h2 className="section-title" style={{ marginBottom: 8 }}>Tools I <span>wield</span></h2>
        <p style={{ fontSize: 15, color: 'var(--color-fg2)', maxWidth: 480, lineHeight: 1.7, marginBottom: 44, fontWeight: 300 }}>
          A curated toolkit for building scalable, production-grade applications.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {techStack.map((cat, ci) => (
            <div key={ci}>
              <h3 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-fg3)', marginBottom: 12 }}>
                {cat.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.items.map((item, ii) => {
                  const key = `${ci}-${ii}`;
                  const isHov = hov === key;
                  return (
                    <div
                      key={ii}
                      onMouseEnter={() => setHov(key)}
                      onMouseLeave={() => setHov(null)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 7,
                        padding: '9px 15px', borderRadius: 10, fontSize: 13, fontWeight: 500,
                        cursor: 'default', userSelect: 'none',
                        background: isHov ? 'rgba(184,204,110,0.08)' : 'var(--color-card)',
                        border: `1px solid ${isHov ? 'rgba(184,204,110,0.3)' : 'var(--color-border)'}`,
                        color: isHov ? 'var(--color-accent)' : 'var(--color-fg)',
                        transform: isHov ? 'translateY(-3px)' : 'translateY(0)',
                        transition: 'all 0.2s',
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: DOT[cat.dot] || DOT.green, flexShrink: 0 }} />
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
