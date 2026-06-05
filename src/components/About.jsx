import React from 'react';
import { personal, traits } from '../data';

// ── Set your profile photo here ──────────────────────────────────────────────
// Replace this path/URL with your actual photo.
// Options:
//   • Local asset:  import profilePhoto from '../assets/profile.jpg';  then use profilePhoto below
//   • Public path:  '/images/profile.jpg'
//   • External URL: 'https://example.com/your-photo.jpg'
const PROFILE_PHOTO = '/profile.jpeg';  
// ─────────────────────────────────────────────────────────────────────────────

function ProfilePic() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {/* <p style={{
        fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: 'var(--color-fg3)',
        marginBottom: 12, textAlign: 'center',
      }}>
        Profile Photo
      </p> */}

      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1',
          borderRadius: 16,
          overflow: 'hidden',
          border: '2px solid var(--color-border2)',
          background: 'var(--color-card)',
        }}
      >
        <img
          src={PROFILE_PHOTO}
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
      </div>
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
          {/* Left – bio + trait cards */}
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

          {/* Right – profile pic card + info card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="glass-card" style={{ borderRadius: 20, padding: 20 }}>
              <ProfilePic />
            </div>

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