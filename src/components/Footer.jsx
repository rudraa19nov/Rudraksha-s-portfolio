import React from 'react';
import { personal } from '../data';

export default function Footer() {
  const smoothScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <footer style={{ borderTop: '1px solid var(--color-border)', padding: '36px 0', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 clamp(20px,5vw,40px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div className="gradient-text" style={{ fontFamily: 'Syne,sans-serif', fontSize: 17, fontWeight: 800 }}>{personal.shortName}</div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {['hero','projects','contact'].map(id => (
            <button key={id} onClick={() => smoothScroll(id)} style={{ fontSize: 12, color: 'var(--color-fg3)', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'capitalize', fontFamily: 'DM Sans,sans-serif', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--color-fg)'}
              onMouseLeave={e => e.target.style.color = 'var(--color-fg3)'}
            >{id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}</button>
          ))}
        </div>
        <div style={{ fontSize: 11, color: 'var(--color-fg3)' }}>© 2025 {personal.name} · Built with passion</div>
      </div>
    </footer>
  );
}
