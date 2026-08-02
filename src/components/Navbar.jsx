import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { personal } from '../data';

const NAV_LINKS = [
  { href: 'about',      label: 'About' },
  { href: 'terminal',   label: 'Terminal' },
  { href: 'tech',       label: 'Stack' },
  { href: 'projects',   label: 'Projects' },
  { href: 'experience', label: 'Timeline' },
  { href: 'education',  label: 'Education' },
];

function smoothScroll(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar({ progress }) {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const fn = (e) => {
      if (!e.target.closest('#nav-bar') && !e.target.closest('.mobile-menu')) setMenuOpen(false);
    };
    document.addEventListener('click', fn);
    return () => document.removeEventListener('click', fn);
  }, [menuOpen]);

  const handleNav = (id) => { smoothScroll(id); setMenuOpen(false); };

  return (
    <>
      {/* Scroll progress */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      {/* NAV — no "Hire Me" button */}
      <nav id="nav-bar" style={{
        position: 'fixed', top: 12, left: '50%', transform: 'translateX(-50%)',
        zIndex: 500, display: 'flex', alignItems: 'center', gap: 2,
        padding: '8px 14px', borderRadius: 50,
        maxWidth: 'calc(100vw - 24px)',
        background: dark
          ? (scrolled ? 'rgba(12,14,11,0.93)' : 'rgba(12,14,11,0.78)')
          : (scrolled ? 'rgba(245,242,233,0.96)' : 'rgba(245,242,233,0.84)'),
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid var(--color-border2)',
        boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.35)' : 'none',
        transition: 'background 0.3s, box-shadow 0.3s',
      }}>
        {/* Logo */}
        <button onClick={() => smoothScroll('hero')} style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 15,
          color: 'var(--color-accent)', background: 'none', border: 'none',
          cursor: 'pointer', marginRight: 10, padding: '2px 4px', flexShrink: 0,
        }}>
          {personal.shortName}
        </button>

        {/* Desktop links */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {NAV_LINKS.map(link => (
            <button key={link.href} onClick={() => handleNav(link.href)} style={{
              padding: '6px 12px', borderRadius: 50, fontSize: 12, fontWeight: 500,
              color: 'var(--color-fg2)', background: 'none', border: 'none',
              cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
              transition: 'color 0.2s, background 0.2s', whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-fg)'; e.currentTarget.style.background = 'var(--color-card2)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-fg2)'; e.currentTarget.style.background = 'none'; }}
            >{link.label}</button>
          ))}
        </div>

        {/* Right: theme toggle only (no Hire Me) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 8 }}>
          {/* Theme toggle */}
          <button onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              width: 34, height: 34, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 15, background: 'var(--color-card2)',
              border: '1px solid var(--color-border2)', cursor: 'pointer',
              transition: 'background 0.2s, transform 0.15s', flexShrink: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {dark ? '☀️' : '🌙'}
          </button>

          {/* Hamburger — mobile only */}
          <button onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            className="show-mobile-only"
            style={{
              width: 34, height: 34, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, background: 'var(--color-card2)',
              border: '1px solid var(--color-border2)', cursor: 'pointer',
              color: 'var(--color-fg)', transition: 'background 0.2s', flexShrink: 0,
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV_LINKS.map(link => (
              <button key={link.href} onClick={() => handleNav(link.href)} style={{
                padding: '12px 16px', borderRadius: 12, fontSize: 14, fontWeight: 500,
                color: 'var(--color-fg2)', background: 'none', border: 'none',
                cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', textAlign: 'left',
                transition: 'color 0.2s, background 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-fg)'; e.currentTarget.style.background = 'var(--color-card2)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-fg2)'; e.currentTarget.style.background = 'none'; }}
              >{link.label}</button>
            ))}
            {/* Contact in mobile menu instead */}
            <button onClick={() => handleNav('contact')} style={{
              marginTop: 4, padding: '12px 16px', borderRadius: 12, fontSize: 14, fontWeight: 700,
              background: 'var(--color-accent)', color: '#111310', border: 'none',
              cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
            }}>
              Contact ✉
            </button>
          </div>
        </div>
      )}
    </>
  );
}