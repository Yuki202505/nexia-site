'use client';

import { useEffect, useRef } from 'react';

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
  charge: number;
};

type Edge = { a: number; b: number };

type Signal = { from: number; to: number; t: number; speed: number };

const NODE_COUNT = 70;

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    const signals: Signal[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const build = () => {
      nodes.length = 0;
      edges.length = 0;
      signals.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.12 * dpr,
          vy: (Math.random() - 0.5) * 0.12 * dpr,
          r: (Math.random() * 1.8 + 1.2) * dpr,
          phase: Math.random() * Math.PI * 2,
          charge: 0,
        });
      }
      for (let i = 0; i < NODE_COUNT; i++) {
        const dists: { j: number; d: number }[] = [];
        for (let j = 0; j < NODE_COUNT; j++) {
          if (i === j) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          dists.push({ j, d: dx * dx + dy * dy });
        }
        dists.sort((a, b) => a.d - b.d);
        for (let k = 0; k < 3; k++) {
          const j = dists[k].j;
          if (
            !edges.find(
              (e) => (e.a === i && e.b === j) || (e.a === j && e.b === i),
            )
          ) {
            edges.push({ a: i, b: j });
          }
        }
      }
    };

    let t = 0;
    let lastFire = 0;
    let rafId = 0;

    const step = () => {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(6,9,15,.25)';
      ctx.fillRect(0, 0, w, h);
      t += 0.016;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.charge *= 0.94;
      }

      if (t - lastFire > 0.35) {
        lastFire = t;
        const fires = 2 + Math.floor(Math.random() * 2);
        for (let f = 0; f < fires; f++) {
          const srcI = Math.floor(Math.random() * NODE_COUNT);
          const connected = edges.filter((e) => e.a === srcI || e.b === srcI);
          if (!connected.length) continue;
          const e = connected[Math.floor(Math.random() * connected.length)];
          const from = e.a === srcI ? e.a : e.b;
          const to = e.a === srcI ? e.b : e.a;
          signals.push({
            from,
            to,
            t: 0,
            speed: 0.012 + Math.random() * 0.018,
          });
          nodes[srcI].charge = 1;
        }
      }

      ctx.lineWidth = 1 * dpr;
      for (const e of edges) {
        const a = nodes[e.a];
        const b = nodes[e.b];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const max = 260 * dpr;
        if (d > max) continue;
        const al = (1 - d / max) * 0.14;
        ctx.strokeStyle = `rgba(167,243,0,${al})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        s.t += s.speed;
        if (s.t >= 1) {
          nodes[s.to].charge = 1;
          const nexts = edges.filter((e) => e.a === s.to || e.b === s.to);
          if (nexts.length && Math.random() < 0.7) {
            const ne = nexts[Math.floor(Math.random() * nexts.length)];
            const nextTo = ne.a === s.to ? ne.b : ne.a;
            if (nextTo !== s.from) {
              signals.push({
                from: s.to,
                to: nextTo,
                t: 0,
                speed: s.speed,
              });
            }
          }
          signals.splice(i, 1);
          continue;
        }
        const a = nodes[s.from];
        const b = nodes[s.to];
        const x = a.x + (b.x - a.x) * s.t;
        const y = a.y + (b.y - a.y) * s.t;
        for (let k = 0; k < 6; k++) {
          const tt = Math.max(0, s.t - k * 0.025);
          const tx = a.x + (b.x - a.x) * tt;
          const ty = a.y + (b.y - a.y) * tt;
          const al = (1 - k / 6) * 0.55;
          ctx.fillStyle = `rgba(201,255,58,${al})`;
          ctx.beginPath();
          ctx.arc(tx, ty, (2.4 - k * 0.28) * dpr, 0, Math.PI * 2);
          ctx.fill();
        }
        const g = ctx.createRadialGradient(x, y, 0, x, y, 10 * dpr);
        g.addColorStop(0, 'rgba(220,255,120,.9)');
        g.addColorStop(1, 'rgba(201,255,58,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 10 * dpr, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const n of nodes) {
        const pulse = 0.75 + Math.sin(t * 1.4 + n.phase) * 0.25;
        const r = n.r * pulse * (1 + n.charge * 1.6);
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 6);
        const coreA = 0.25 + n.charge * 0.55;
        g.addColorStop(0, `rgba(167,243,0,${coreA})`);
        g.addColorStop(1, 'rgba(167,243,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(220,255,160,${0.6 + n.charge * 0.4})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(step);
    };

    const handleResize = () => {
      resize();
      build();
    };

    resize();
    build();

    if (reduceMotion) {
      // draw once, then stop
      ctx.fillStyle = 'rgba(6,9,15,1)';
      ctx.fillRect(0, 0, w, h);
      for (const e of edges) {
        const a = nodes[e.a];
        const b = nodes[e.b];
        ctx.strokeStyle = 'rgba(167,243,0,0.08)';
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      for (const n of nodes) {
        ctx.fillStyle = 'rgba(220,255,160,0.6)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      rafId = requestAnimationFrame(step);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-canvas" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
