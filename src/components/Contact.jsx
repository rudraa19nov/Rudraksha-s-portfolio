import React, { useState } from 'react';
import { personal } from '../data';

const CONTACT_INFO = [
  { label: 'Email',    value: personal.email },
  {  label: 'Phone',    value: personal.phone },
  {  label: 'LinkedIn', value: 'linkedin.com/in/rudraksha', href: personal.linkedin },
  {  label: 'GitHub',   value: 'github.com/RudrakshaS',    href: personal.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) { setErr('Please fill in name and email.'); return; }
    setErr('');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputStyle = {
    width: '100%', background: 'var(--color-card)', border: '1px solid var(--color-border)',
    borderRadius: 10, padding: '11px 14px', fontSize: 13, color: 'var(--color-fg)',
    fontFamily: 'DM Sans,sans-serif', outline: 'none', transition: 'all 0.2s',
    marginTop: 6,
  };

  return (
    <section id="contact" style={{ padding: '80px 0', background: 'var(--color-bg2)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 clamp(20px,5vw,40px)' }}>
        <div className="section-label">Contact</div>
        <h2 className="section-title" style={{ marginBottom: 8 }}>Let's <span>connect</span></h2>
        <p style={{ fontSize: 15, color: 'var(--color-fg2)', maxWidth: 480, lineHeight: 1.7, marginBottom: 40, fontWeight: 300 }}>
          Open to internship opportunities, collaborations, and engineering conversations.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 44, alignItems: 'start' }}>
          {/* Left */}
          <div>
            <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: 19, fontWeight: 700, marginBottom: 10, color: 'var(--color-fg)' }}>Get in touch</h3>
            <p style={{ fontSize: 14, color: 'var(--color-fg2)', lineHeight: 1.7, marginBottom: 20, fontWeight: 300 }}>
              Actively seeking software development internships. Let's build something impactful together.
            </p>

          {CONTACT_INFO.map((item, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                borderRadius: 12,
                padding: "13px 16px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 10,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-card2)";
                e.currentTarget.style.borderColor = "var(--color-border2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--color-card)";
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
            >
              <div
                style={{
                  minWidth: 80,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                }}
              >
                {item.label}
              </div>

              <div style={{ flex: 1 }}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 14,
                      color: "var(--color-fg)",
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span
                    style={{
                      fontSize: 14,
                      color: "var(--color-fg)",
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          ))}
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
              {[{ key: 'name', label: 'Name', placeholder: 'Your name', type: 'text' }, { key: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email' }].map(f => (
                <div key={f.key}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-fg3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{f.label}</label>
                  <input type={f.type} value={form[f.key]} placeholder={f.placeholder} required={f.key === 'name' || f.key === 'email'}
                    onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = 'rgba(184,204,110,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(184,204,110,0.08)'; }}
                    onBlur={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-fg3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subject</label>
              <input type="text" value={form.subject} placeholder="Internship Opportunity / Collaboration"
                onChange={e => setForm(prev => ({ ...prev, subject: e.target.value }))}
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'rgba(184,204,110,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(184,204,110,0.08)'; }}
                onBlur={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-fg3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</label>
              <textarea value={form.message} placeholder="Tell me about the opportunity..." rows={5}
                onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                onFocus={e => { e.target.style.borderColor = 'rgba(184,204,110,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(184,204,110,0.08)'; }}
                onBlur={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            {err && <p style={{ fontSize: 12, color: 'var(--color-rose)', marginBottom: 10 }}>{err}</p>}

            <button type="submit" style={{
              width: '100%', padding: '13px 0', borderRadius: 10, fontSize: 14, fontWeight: 700,
              background: 'var(--color-accent)', color: '#111310', border: 'none', cursor: 'pointer',
              fontFamily: 'DM Sans,sans-serif', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.target.style.background = 'var(--color-accent2)'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.target.style.background = 'var(--color-accent)'; e.target.style.transform = 'translateY(0)'; }}
            >
              Send Message →
            </button>

            {sent && (
              <div style={{ marginTop: 12, background: 'rgba(184,204,110,0.1)', border: '1px solid rgba(184,204,110,0.2)', borderRadius: 10, padding: '13px 16px', fontSize: 13, color: 'var(--color-accent)' }}>
                ✓ Message sent! I'll get back to you within 24 hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
