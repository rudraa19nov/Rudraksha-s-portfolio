import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ProfileProvider } from './context/ProfileContext';

import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Terminal   from './components/Terminal';
import TechStack  from './components/TechStack';
import Achievements from './components/Achievements';
import Projects   from './components/Projects';
import Experience from './components/Experience';
import CodingProfiles from './components/CodingProfiles';
import Education  from './components/Education';
import Contact    from './components/Contact';
import Footer     from './components/Footer';
import BackToTop  from './components/BackToTop';

function AppContent() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fn = () => {
      const s = window.scrollY || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min((s / h) * 100, 100) : 0);
    };
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Custom cursor — desktop only
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    let cur = document.querySelector('.custom-cursor');
    let ring = document.querySelector('.cursor-ring');
    if (!cur) {
      cur = document.createElement('div');
      cur.className = 'custom-cursor';
      document.body.appendChild(cur);
    }
    if (!ring) {
      ring = document.createElement('div');
      ring.className = 'cursor-ring';
      document.body.appendChild(ring);
    }

    let ringX = 0, ringY = 0, curX = 0, curY = 0;

    const onMove = (e) => {
      curX = e.clientX; curY = e.clientY;
      cur.style.left = curX + 'px';
      cur.style.top  = curY + 'px';
    };

    let raf;
    const animateRing = () => {
      ringX += (curX - ringX) * 0.15;
      ringY += (curY - ringY) * 0.15;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      raf = requestAnimationFrame(animateRing);
    };
    animateRing();

   const onEnter = () => {
  cur.style.transform = 'translate(-50%,-50%) scale(0.5)';
  ring.classList.add('active');
};

const onLeave = () => {
  cur.style.transform = 'translate(-50%,-50%) scale(1)';
  ring.classList.remove('active');
};

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a,button,[role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      cur.remove(); ring.remove();
    };
  }, []);

  return (
    <>
      <Navbar progress={progress} />
      <main>
        <Hero />
        <About />
        <Terminal />
        <TechStack />
        <Achievements />
        <Projects />
        <Experience />
        <CodingProfiles />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ProfileProvider>
        <AppContent />
      </ProfileProvider>
    </ThemeProvider>
  );
}
