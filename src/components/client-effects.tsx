"use client";

import { useEffect } from "react";
import PageLoader from "@/components/ui/page-loader";
import CustomCursor from "@/components/ui/custom-cursor";
import Lenis from "lenis";

export default function ClientEffects() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <PageLoader />
      <CustomCursor />
    </>
  );
}
