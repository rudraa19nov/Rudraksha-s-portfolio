import React from 'react';
import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '80px 0', background: 'var(--color-bg2)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 clamp(20px,5vw,40px)' }}>
        <div className="section-label">Experience</div>
        <h2 className="section-title" style={{ marginBottom: 8 }}>My <span>journey</span></h2>
        <p style={{ fontSize: 15, color: 'var(--color-fg2)', maxWidth: 480, lineHeight: 1.7, marginBottom: 44, fontWeight: 300 }}>
          Building experience through projects, national hackathons, and continuous learning.
        </p>

        <div className="timeline-line" style={{ position: 'relative', paddingLeft: 28 }}>
          {experience.map((item, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: 28, paddingLeft: 4 }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: -34, top: 4, width: 12, height: 12, borderRadius: '50%',
                background: item.highlight ? 'var(--color-warm)' : 'var(--color-accent)',
                boxShadow: item.highlight ? '0 0 12px rgba(232,164,74,0.5)' : '0 0 10px rgba(184,204,110,0.4)',
                border: '2px solid var(--color-bg2)',
              }} />

              <div className="glass-card" style={{
                borderRadius: 14, padding: '18px 20px',
                background: item.highlight ? 'rgba(232,164,74,0.05)' : 'var(--color-card)',
                borderColor: item.highlight ? 'rgba(232,164,74,0.2)' : 'var(--color-border)',
                transition: 'border-color 0.2s, background 0.2s',
              }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', color: item.highlight ? 'var(--color-warm)' : 'var(--color-accent)', marginBottom: 5 }}>{item.period}</p>
                <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--color-fg)', marginBottom: 3 }}>{item.title}</h3>
                <p style={{ fontSize: 12, color: 'var(--color-fg3)', marginBottom: 8 }}>{item.org}</p>
                <p style={{ fontSize: 13, color: 'var(--color-fg2)', lineHeight: 1.65, fontWeight: 300 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
