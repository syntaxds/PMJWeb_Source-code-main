'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LoadingOverlay({ active, onExited }) {
  const overlayRef = useRef(null);
  const spinnerRef = useRef(null);

  useEffect(() => {
    const spinner = spinnerRef.current;
    if (!spinner) return;
    const spinTween = gsap.to(spinner, {
      rotate: 360,
      duration: 0.8,
      repeat: -1,
      ease: 'linear',
    });
    return () => spinTween.kill();
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const fadeTween = active
      ? gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: 'power1.out' })
      : gsap.to(overlay, {
          opacity: 0,
          duration: 0.45,
          ease: 'power1.in',
          onComplete: () => onExited?.(),
        });

    return () => fadeTween.kill();
  }, [active, onExited]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-40 flex items-center justify-center bg-white/75"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div
        ref={spinnerRef}
        className="h-12 w-12 rounded-full border-4 border-[#E24B4A]/25 border-t-[#E24B4A]"
      />
    </div>
  );
}
