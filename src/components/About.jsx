import React, { useRef, useState } from 'react';
import { personal, traits } from '../data';
import { useProfile } from '../context/ProfileContext';

function ProfileUpload() {
  const { profilePic, uploadPic, removePic } = useProfile();
  const inputRef = useRef(null);
  const [drag, setDrag] = useState(false);
  const [err, setErr] = useState('');
  const [hovering, setHovering] = useState(false);

  const handle = async (file) => {
    setErr('');
    try { await uploadPic(file); } catch (e) { setErr(e.message); }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <p style={{
        fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: 'var(--color-fg3)',
        marginBottom: 12, textAlign: 'center',
      }}>Profile Photo</p>

      {/* ── PHOTO BOX ── */}
      {/* When photo present: 95% photo, 5% strip at bottom for change button */}
      {/* When no photo: centered initials + upload prompt */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1',       /* square box */
          borderRadius: 16,
          overflow: 'hidden',
          border: profilePic
            ? '2px solid var(--color-border2)'
            : `2px dashed ${drag ? 'var(--color-accent)' : 'var(--color-border2)'}`,
          background: profilePic ? 'transparent' : 'var(--color-card)',
          cursor: 'pointer',
          transition: 'border-color 0.2s',
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onDragOver={e => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={e => { e.preventDefault(); setDrag(false); if (e.dataTransfer.files[0]) handle(e.dataTransfer.files[0]); }}
        onClick={() => inputRef.current?.click()}
      >
        {profilePic ? (
          <>
            {/* ── 95% — the actual photo ── */}
            <img
              src={profilePic}
              alt="Profile"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />

            {/* ── Bottom 5% strip — always visible when photo is present ── */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '14%',           /* ~5% visual strip */
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              zIndex: 2,
              transition: 'background 0.2s',
            }}>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.85)', fontWeight: 600, letterSpacing: '0.05em' }}>
                📷 Change photo
              </span>
            </div>

            {/* Dark overlay on hover for extra affordance */}
            {hovering && (
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(0,0,0,0.15)',
                zIndex: 1, pointerEvents: 'none',
              }} />
            )}
          </>
        ) : (
          /* ── NO PHOTO: initials + upload hint ── */
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 10, padding: 20,
            background: drag ? 'rgba(184,204,110,0.06)' : 'transparent',
            transition: 'background 0.2s',
          }}>
            {/* Big initials */}
            <div style={{
              fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px,8vw,52px)',
              fontWeight: 800, color: 'var(--color-accent)',
              lineHeight: 1, userSelect: 'none',
            }}>
              RSC
            </div>
            {/* Upload icon + text */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, marginBottom: 6 }}>📤</div>
              <p style={{ fontSize: 12, color: 'var(--color-fg3)', lineHeight: 1.5 }}>
                Click or drag & drop<br />
                <span style={{ fontSize: 11 }}>JPG, PNG, WebP · Max 5MB</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Remove button — only when photo present, outside box */}
      {profilePic && (
        <button
          onClick={e => { e.stopPropagation(); removePic(); }}
          style={{
            marginTop: 8, fontSize: 11, color: 'var(--color-rose)',
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif', textAlign: 'center',
            padding: '4px 0', transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          ✕ Remove photo
        </button>
      )}

      {err && <p style={{ fontSize: 11, color: 'var(--color-rose)', marginTop: 6, textAlign: 'center' }}>{err}</p>}
      <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }}
        onChange={e => { if (e.target.files[0]) handle(e.target.files[0]); }} />
    </div>
  );
}

export default function About() {
  const INFO = [
    { icon: '📍', text: personal.location },
    { icon: '🎓', text: 'BIET Jhansi · B.Tech IT · 2023–Present' },
    { icon: '✉️', text: personal.email },
    { icon: '📱', text: personal.phone },
    { icon: '🏆', text: 'SIH 2025 National Winner' },
  ];

  return (
    <section id="about" style={{ padding: '80px 0', background: 'var(--color-bg2)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 clamp(20px,5vw,40px)' }}>
        <div className="section-label">About Me</div>
        <h2 className="section-title" style={{ marginBottom: 40, textAlign: 'left' }}>
          Who I <span>am</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 48, alignItems: 'start',
        }}>
          {/* Left — bio + trait cards */}
          <div>
            {personal.bio.map((p, i) => (
              <p key={i} style={{
                fontSize: 15, color: 'var(--color-fg2)', lineHeight: 1.8,
                marginBottom: 14, fontWeight: 300, textAlign: 'left',
              }} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 22 }}>
              {traits.map((t, i) => (
                <div key={i} className="glass-card hover-lift" style={{ borderRadius: 12, padding: '14px 16px', cursor: 'default' }}>
                  <div style={{ fontSize: 20, marginBottom: 8 }}>{t.icon}</div>
                  <h4 style={{ fontFamily: 'Syne,sans-serif', fontSize: 12, fontWeight: 700, color: 'var(--color-fg)', marginBottom: 4 }}>{t.title}</h4>
                  <p style={{ fontSize: 11, color: 'var(--color-fg3)', lineHeight: 1.5 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — profile pic card + info card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Profile pic card */}
            <div className="glass-card" style={{ borderRadius: 20, padding: 20 }}>
              <ProfileUpload />
            </div>

            {/* Info card */}
            <div className="glass-card" style={{ borderRadius: 20, padding: 20 }}>
              {INFO.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontSize: 13, color: 'var(--color-fg2)',
                  marginBottom: i < INFO.length - 1 ? 10 : 0,
                }}>
                  <span style={{
                    width: 28, height: 28, background: 'rgba(184,204,110,0.1)',
                    borderRadius: 7, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 13, flexShrink: 0,
                  }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}