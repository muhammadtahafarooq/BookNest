import React, { useEffect, useRef, useCallback } from 'react';

// ── Dust mote particle ──────────────────────────────────────────────────────
function createMote(w, h) {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    // base drift speed (upward, slow)
    vx: (Math.random() - 0.5) * 0.18,
    vy: -(Math.random() * 0.25 + 0.05),
    // visual
    size: Math.random() * 1.8 + 0.4,
    opacity: Math.random() * 0.45 + 0.08,
    // flicker phase
    phase: Math.random() * Math.PI * 2,
    // warm colour: brown-amber works on both white and dark backgrounds
    hue: Math.floor(Math.random() * 25 + 28),   // 28–53 → warm amber/brown
    sat: Math.floor(Math.random() * 30 + 55),    // 55–85 %
    lit: Math.floor(Math.random() * 20 + 38),    // 38–58 % — dark enough to show on white
  };
}

const MOTE_COUNT = 90; // lots of dust ✨

export default function MouseBackground() {
  const canvasRef   = useRef(null);
  const mouse       = useRef({ x: -999, y: -999 });
  const lamp        = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const motesRef    = useRef([]);
  const rafRef      = useRef(null);
  const tRef        = useRef(0);

  const initMotes = useCallback((w, h) => {
    motesRef.current = Array.from({ length: MOTE_COUNT }, () => createMote(w, h));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      initMotes(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    // ── main render loop ──────────────────────────────────────────────────
    const draw = (ts) => {
      tRef.current = ts;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // ── 1. Smooth lamp position ───────────────────────────────────────
      lamp.current.x += (mouse.current.x - lamp.current.x) * 0.085;
      lamp.current.y += (mouse.current.y - lamp.current.y) * 0.085;

      const lx = lamp.current.x;
      const ly = lamp.current.y;

      // ── 2. Warm professional glow (dominant spotlight effect)
      const outer = ctx.createRadialGradient(lx, ly, 0, lx, ly, 520);
      outer.addColorStop(0,   'rgba(210,160,75,0.14)');
      outer.addColorStop(0.32,'rgba(190,130,50,0.06)');
      outer.addColorStop(0.68,'rgba(150,100,35,0.015)');
      outer.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = outer;
      ctx.fillRect(0, 0, width, height);

      const inner = ctx.createRadialGradient(lx, ly, 0, lx, ly, 180);
      inner.addColorStop(0,   'rgba(235,190,110,0.2)');
      inner.addColorStop(0.4, 'rgba(220,150,70,0.08)');
      inner.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = inner;
      ctx.fillRect(0, 0, width, height);

      const halo = ctx.createRadialGradient(lx, ly, 0, lx, ly, 92);
      halo.addColorStop(0,   'rgba(255,255,240,0.14)');
      halo.addColorStop(0.4, 'rgba(255,245,220,0.05)');
      halo.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(lx, ly, 92, 0, Math.PI * 2);
      ctx.fill();

      // Tiny bright core to reinforce the dominant pointer
      ctx.save();
      ctx.globalAlpha = 0.88;
      ctx.shadowBlur = 22;
      ctx.shadowColor = 'rgba(255,210,150,0.22)';
      ctx.fillStyle = 'rgba(255,235,190,0.95)';
      ctx.beginPath();
      ctx.arc(lx, ly, 4 + 1.5 * Math.sin(ts * 0.0035), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // ── 3. Dust motes ─────────────────────────────────────────────────
      motesRef.current.forEach((m) => {
        // distance from lamp → motes in the beam glow brighter & rise faster
        const dx   = lx - m.x;
        const dy   = ly - m.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const beam = Math.max(0, 1 - dist / 380); // 0…1, 1 = inside beam

        // Pull gently toward lamp when inside beam radius
        if (beam > 0) {
          m.vx += (dx / dist) * beam * 0.012;
          m.vy += (dy / dist) * beam * 0.008;
        }

        // Natural upward drift + slight horizontal waver
        m.vx += (Math.random() - 0.5) * 0.02;
        m.vy -= 0.006; // buoyancy

        // Dampen so velocity doesn't explode
        m.vx *= 0.96;
        m.vy *= 0.97;

        m.x += m.vx;
        m.y += m.vy;

        // Wrap-around so motes recirculate
        if (m.y < -10)         m.y = canvas.height + 5;
        if (m.y > canvas.height + 10) m.y = -5;
        if (m.x < -10)         m.x = canvas.width  + 5;
        if (m.x > canvas.width  + 10) m.x = -5;

        // Flickering opacity
        const flicker = 0.7 + 0.3 * Math.sin(ts * 0.001 * (0.5 + m.size) + m.phase);
        const glow    = m.opacity * flicker * (0.4 + beam * 1.6);

        // Draw mote as a tiny glowing orb — warm amber/brown visible on any bg
        const rad = m.size * 2.8;
        const grad = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, rad);
        const col  = `hsla(${m.hue},${m.sat}%,${m.lit}%,`;
        grad.addColorStop(0,   col + Math.min(glow * 1.1, 0.88) + ')');
        grad.addColorStop(0.55,col + (glow * 0.45) + ')');
        grad.addColorStop(1,   'rgba(0,0,0,0)');

        ctx.beginPath();
        ctx.arc(m.x, m.y, rad, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // ── 4. Very subtle page-lift vignette ripple at cursor edge ──────
      // A faint elliptical shimmer ring that shows "light through paper"
      const shimmerR = 128 + 16 * Math.sin(ts * 0.0015);
      const shimmer  = ctx.createRadialGradient(lx, ly, shimmerR * 0.8, lx, ly, shimmerR);
      shimmer.addColorStop(0,   'rgba(0,0,0,0)');
      shimmer.addColorStop(0.5, 'rgba(180,110,30,0.06)');
      shimmer.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = shimmer;
      ctx.beginPath();
      ctx.ellipse(lx, ly, shimmerR * 1.3, shimmerR, 0, 0, Math.PI * 2);
      ctx.fill();

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, [initMotes]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position : 'fixed',
        top      : 0,
        left     : 0,
        width    : '100vw',
        height   : '100vh',
        pointerEvents: 'none',
        zIndex   : 9999,
        // no mixBlendMode — normal compositing so visible on white AND dark pages
      }}
    />
  );
}
