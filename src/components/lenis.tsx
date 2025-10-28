import gsap from 'gsap';
import { type LenisRef, ReactLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false, duration: 2 }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
