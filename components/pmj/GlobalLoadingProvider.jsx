'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import LoadingOverlay from './LoadingOverlay';

export default function GlobalLoadingProvider({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(true);
  const [active, setActive] = useState(true);
  const isFirstRender = useRef(true);

  // Initial page load: fade the overlay out once mounted.
  useEffect(() => {
    setActive(false);
  }, []);

  // Route transitions: briefly show the overlay again on pathname change.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setMounted(true);
    setActive(true);
    const t = setTimeout(() => setActive(false), 350);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      {mounted && (
        <LoadingOverlay active={active} onExited={() => setMounted(false)} />
      )}
      {children}
    </>
  );
}
