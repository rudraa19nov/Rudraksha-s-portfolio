import React, { useEffect, useRef, useState } from 'react';

/**
 * Unique cursor:
 *  - Small sharp crosshair dot (no lag)
 *  - Trailing "magnetic" ring that smoothly follows with spring physics
 *  - Ring morphs to a rounded-rect + rotates on interactive elements
 *  - Color shifts to warm accent on buttons/links
 *  - Hidden on touch devices
 */
export default function CustomCursor() {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const labelRef = useRef(null);
  const pos      = useRef({ x: -100, y: -100 });
  const ring     = useRef({ x: -100, y: -100 });
  const raf      = useRef(null);
  const isHov    = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setIsMounted(true);

    const dot   = dotRef.current;
    const ringEl = ringRef.current;
    const label  = labelRef.current;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      // Dot snaps instantly
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
    };

    // Spring-follow ring
    const animate = () => {
      const dx = pos.current.x - ring.current.x;
      const dy = pos.current.y - ring.current.y;
      ring.current.x += dx * 0.12;
      ring.current.y += dy * 0.12;
      ringEl.style.left = ring.current.x + 'px';
      ringEl.style.top  = ring.current.y + 'px';
      raf.current = requestAnimationFrame(animate);
    };
    animate();

    // Interactive element detection
    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, .hover-lift, .glass-card';

    const onEnter = (e) => {
      isHov.current = true;
      const el = e.target.closest(INTERACTIVE);

      // Read a data-cursor-label attribute if present
      const lbl = el?.getAttribute('data-cursor') || '';

      dot.classList.add('cursor-dot--hover');
      ringEl.classList.add('cursor-ring--hover');

      if (lbl) {
        label.textContent = lbl;
        label.style.opacity = '1';
      }
    };

    const onLeave = () => {
      isHov.current = false;
      dot.classList.remove('cursor-dot--hover');
      ringEl.classList.remove('cursor-ring--hover');
      label.style.opacity = '0';
    };

    document.addEventListener('mousemove', onMove);

    // Attach to all current + future elements via delegation
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(INTERACTIVE)) onEnter(e);
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(INTERACTIVE)) onLeave();
    });

    // Click ripple
    document.addEventListener('mousedown', () => {
      dot.classList.add('cursor-dot--click');
      setTimeout(() => dot.classList.remove('cursor-dot--click'), 300);
    });

    return () => {
      cancelAnimationFrame(raf.current);
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Dot — crosshair style */}
      <div ref={dotRef} className="cursor-dot" />

      {/* Trailing ring */}
      <div ref={ringRef} className="cursor-ring-custom">
        {/* Inner cross lines */}
        <div className="cursor-ring-h" />
        <div className="cursor-ring-v" />
      </div>

      {/* Optional label that appears on data-cursor elements */}
      <div ref={labelRef} className="cursor-label" />
    </>
  );
}