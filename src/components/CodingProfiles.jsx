import React from 'react';
import { codingProfiles } from '../data';

export default function CodingProfiles() {
  return (
    <section id="profiles" style={{ padding: '80px 0', background: 'var(--color-bg3)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 clamp(20px,5vw,40px)' }}>
        <div className="section-label">Coding Profiles</div>
        <h2 className="section-title" style={{ marginBottom: 40 }}>Find me <span>online</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
          {codingProfiles.map((p, i) => (
            <div key={i} className="glass-card hover-lift" style={{ borderRadius: 20, padding: '26px 20px', textAlign: 'center' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, margin: '0 auto 14px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{p.emoji}</div>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 17, marginBottom: 4, color: 'var(--color-fg)' }}>{p.name}</h3>
              <p style={{ fontSize: 13, color: 'var(--color-fg3)', marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: p.stat.replace(p.statBold, `<strong style="color:var(--color-accent)">${p.statBold}</strong>`) }} />
              <a href={p.url} target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '8px 16px', borderRadius: 50, fontSize: 12, fontWeight: 500, textDecoration: 'none', background: 'var(--color-card2)', border: '1px solid var(--color-border)', color: 'var(--color-fg2)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.borderColor = 'rgba(184,204,110,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-fg2)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
              >Visit Profile ↗</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
