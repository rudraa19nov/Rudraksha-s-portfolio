import React from 'react';
import { education } from '../data';

export default function Education() {
  return (
    <section id="education" style={{ padding: '80px 0', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 clamp(20px,5vw,40px)' }}>
        <div className="section-label">Education</div>
        <h2 className="section-title" style={{ marginBottom: 40 }}>Academic <span>foundation</span></h2>
        <div className="glass-card" style={{ borderRadius: 20, padding: 'clamp(20px,4vw,32px)', maxWidth: 660 }}>
          <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', marginBottom: 22, flexWrap: 'wrap' }}>
            <div style={{ width: 50, height: 50, borderRadius: 13, background: 'linear-gradient(135deg,var(--color-accent2),var(--color-warm2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne,sans-serif', fontSize: 12, fontWeight: 800, color: '#111', flexShrink: 0 }}>
              BIET
            </div>
            <div>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 17, color: 'var(--color-fg)', marginBottom: 4, lineHeight: 1.3 }}>{education.institution}</h3>
              <p style={{ fontSize: 13, color: 'var(--color-accent)', fontWeight: 500 }}>{education.degree}</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 22 }}>
            {[{ icon: '📅', label: education.period }, { icon: '📍', label: education.location }, { icon: '⭐', label: `CGPA: ${education.cgpa}` }].map((m, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--color-fg3)' }}>
                {m.icon} <strong style={{ color: 'var(--color-fg)', fontWeight: 500 }}>{m.label}</strong>
              </span>
            ))}
          </div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-fg3)', marginBottom: 12 }}>Relevant Coursework</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {education.coursework.map((c, i) => (
              <span key={i} className="hover-lift" style={{ fontSize: 12, fontWeight: 500, padding: '6px 12px', borderRadius: 8, background: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-fg2)', cursor: 'default', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.target.style.borderColor = 'rgba(184,204,110,0.35)'; e.target.style.color = 'var(--color-accent)'; }}
                onMouseLeave={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.color = 'var(--color-fg2)'; }}
              >{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
