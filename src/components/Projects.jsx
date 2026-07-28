import React, { useState } from 'react';
import { projects } from '../data';

const FILTERS = [
  { label: 'All',        key: 'all' },
  { label: 'National', key: 'national' },
  { label: 'Full Stack',  key: 'fullstack' },
  { label: 'AI',          key: 'ai' },
  { label: 'MERN',        key: 'mern' },
];

const PREVIEW_STYLES = {
  krishi: { background: 'linear-gradient(135deg,rgba(100,130,40,0.22),rgba(60,90,20,0.12))' },
  studymate: { background: 'linear-gradient(135deg,rgba(90,140,220,0.18),rgba(60,90,180,0.10))' },
  wander: { background: 'linear-gradient(135deg,rgba(196,122,30,0.18),rgba(130,80,20,0.10))' },
  ai:     { background: 'linear-gradient(135deg,rgba(106,176,204,0.15),rgba(60,130,170,0.10))' },
  alumni: { background: 'linear-gradient(135deg,rgba(140,90,180,0.15),rgba(100,60,140,0.10))' },
};

const BADGE_STYLES = {
  national: { background: 'rgba(232,164,74,0.15)', color: 'var(--color-warm)', border: '1px solid rgba(232,164,74,0.25)' },
  featured: { background: 'rgba(184,204,110,0.12)', color: 'var(--color-accent)', border: '1px solid rgba(184,204,110,0.2)' },
  default:  { background: 'rgba(255,255,255,0.06)', color: 'var(--color-fg3)', border: '1px solid var(--color-border)' },
};

function ProjectCard({ p }) {
  const [hov, setHov] = useState(false);
  const badgeStyle = BADGE_STYLES[p.badge] || BADGE_STYLES.default;

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: p.badge === 'national'
          ? 'linear-gradient(135deg,rgba(232,164,74,0.06),rgba(184,204,110,0.04))'
          : 'var(--color-card)',
        border: `1px solid ${hov ? 'rgba(184,204,110,0.25)' : p.badge === 'national' ? 'rgba(232,164,74,0.22)' : 'var(--color-border)'}`,
        borderRadius: 16, overflow: 'hidden',
        transform: hov ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
        boxShadow: hov ? '0 16px 40px rgba(0,0,0,0.25)' : 'none',
      }}
    >
      {/* Browser bar */}
      <div className="browser-bar" style={{ display: 'flex', alignItems: 'center', padding: '8px 12px' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
        </div>
        <div className="browser-url">{p.url}</div>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>↻</span>
      </div>

      {/* Preview area */}
      <div style={{
        height: 150,
        ...PREVIEW_STYLES[p.preview],
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
      }}>
        <div style={{ textAlign: 'center', opacity: 0.4 }}>
          <div style={{ fontSize: 36, marginBottom: 8 }}>{p.previewEmoji}</div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--color-fg3)' }}>{p.url}</div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '18px 20px' }}>
        {/* Meta row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, gap: 8 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {p.badge === 'national' && (
              <span style={{ ...badgeStyle, fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: 50 }}>🏆 SIH 2025</span>
            )}
            <span style={{ ...BADGE_STYLES[p.badge === 'national' ? 'featured' : (p.badge || 'default')], fontSize: 10, fontWeight: 600, padding: '3px 9px', borderRadius: 50 }}>{p.type}</span>
          </div>
          <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
            <a href={p.live} target="_blank" rel="noreferrer"
              style={{ width: 27, height: 27, border: '1px solid var(--color-border)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-fg3)', fontSize: 13, textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.color = 'var(--color-accent)'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.color = 'var(--color-fg3)'; }}
            >↗</a>
            <a href={p.github} target="_blank" rel="noreferrer"
  style={{ width: 27, height: 27, border: '1px solid var(--color-border)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-fg3)', fontSize: 13, textDecoration: 'none', transition: 'all 0.2s' }}
  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-fg3)'; }}
>
  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
      1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
      0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68
      0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15
      0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01
      2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
  </svg>
</a>
          </div>
        </div>

        <h3 style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em', marginBottom: 4, color: 'var(--color-fg)' }}>{p.title}</h3>
        <p style={{ fontSize: 11, color: 'var(--color-accent)', fontWeight: 600, marginBottom: 6 }}>{p.period}</p>
        <p style={{ fontSize: 12, color: 'var(--color-fg2)', lineHeight: 1.65, marginBottom: 12, fontWeight: 300 }}>{p.desc}</p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 10 }}>
          {p.tech.map((t, i) => (
            <span key={i} style={{ fontSize: 10, fontWeight: 500, padding: '3px 8px', borderRadius: 5, background: 'rgba(255,255,255,0.05)', color: 'var(--color-fg3)', border: '1px solid var(--color-border)' }}>{t}</span>
          ))}
        </div>

        {/* Features */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 12px' }}>
          {p.features.map((f, i) => (
            <span key={i} style={{ fontSize: 11, color: 'var(--color-fg3)', display: 'flex', alignItems: 'center', gap: 3 }}>
              <span style={{ color: 'var(--color-accent)', fontSize: 10 }}>✓</span> {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filtered = projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" style={{ padding: '80px 0', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 clamp(20px,5vw,40px)' }}>
        <div className="section-label">Projects</div>
        <h2 className="section-title" style={{ marginBottom: 8 }}>What I've <span>built</span></h2>
        <p style={{ fontSize: 15, color: 'var(--color-fg2)', maxWidth: 480, lineHeight: 1.7, marginBottom: 28, fontWeight: 300 }}>
          Production applications — including a national award-winning AgriTech platform.
        </p>

        {/* Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 32 }}>
          {FILTERS.map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)}
              style={{
                padding: '7px 16px', borderRadius: 50, fontSize: 12, fontWeight: 500, cursor: 'pointer',
                fontFamily: 'DM Sans,sans-serif', transition: 'all 0.2s',
                background: filter === f.key ? 'rgba(184,204,110,0.12)' : 'transparent',
                border: `1px solid ${filter === f.key ? 'rgba(184,204,110,0.35)' : 'var(--color-border)'}`,
                color: filter === f.key ? 'var(--color-accent)' : 'var(--color-fg2)',
              }}
            >{f.label}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 18 }}>
          {filtered.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>

        {/* Coming soon */}
        <div style={{ marginTop: 18, border: '2px dashed var(--color-border)', borderRadius: 16, padding: '36px 24px', textAlign: 'center' }}>
          <div style={{ fontSize: 28, opacity: 0.25, marginBottom: 10 }}>🚧</div>
          <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-fg2)', marginBottom: 5 }}>More exciting projects coming soon...</p>
          <p style={{ fontSize: 13, color: 'var(--color-fg3)' }}>Currently building something new. Stay tuned.</p>
        </div>
      </div>
    </section>
  );
}
