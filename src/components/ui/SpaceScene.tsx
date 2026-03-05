'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-init';

/**
 * Strat Studio完全再現 背景
 *
 * 構造（3レイヤーのみ）:
 * 1. <video> — grayscale(1), opacity 1, object-cover
 * 2. <div>  — rgba(0,0,0,0.6) ダークオーバーレイ
 * 3. <div>  — 下部 h-48 黒→透明グラデーション
 *
 * + スクロール連動フェード（GSAP ScrollTrigger）
 * + 下部ドットグリッド（NEXIAオリジナル）
 */
export function SpaceScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // スクロール連動フェード
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
        opacity: 0,
        ease: 'none',
      });
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 純黒ベース */}
      <div className="absolute inset-0 bg-black" />

      {/* グレースケール動画 — Strat Studio完全同一構造 */}
      <div className="absolute top-0 left-0 right-0 h-[70%] z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* 60%ダークオーバーレイ */}
        <div className="absolute inset-0 bg-black/60" />
        {/* 下部フェードグラデーション h-48 */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* 下部ドットグリッドパターン */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[50vh]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 60%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 60%)',
          opacity: 0.5,
        }}
      />
    </div>
  );
}
