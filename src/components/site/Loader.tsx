import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { LOADER_GIF_DURATION_MS } from "@/lib/gif-duration";
import loaderGif from "@/assets/8roots-logo-loader.gif";

const easeRevealIn: [number, number, number, number] = [0.42, 0, 1, 1];
const REVEAL_LEAD_MS = 200;

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [revealing, setRevealing] = useState(false);
  const timerStartedRef = useRef(false);
  const revealTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const imgRef = useRef<HTMLImageElement>(null);

  const startRevealTimer = useCallback(() => {
    if (timerStartedRef.current) return;
    timerStartedRef.current = true;

    revealTimerRef.current = setTimeout(
      () => setRevealing(true),
      Math.max(0, LOADER_GIF_DURATION_MS - REVEAL_LEAD_MS),
    );
  }, []);

  useEffect(() => {
    if (!visible) return;

    if (imgRef.current?.complete) {
      startRevealTimer();
    }

    return () => clearTimeout(revealTimerRef.current);
  }, [visible, startRevealTimer]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: revealing ? 0 : 1 }}
      transition={{ duration: 0.55, ease: easeRevealIn, delay: revealing ? 0.25 : 0 }}
      onAnimationComplete={() => {
        if (revealing) setVisible(false);
      }}
    >
      {/* Unmount after one loop so the infinite GIF cannot replay while fading out. */}
      {!revealing && (
        <img
          ref={imgRef}
          src={loaderGif}
          alt="8Roots Consulting"
          className="relative z-10 w-[min(55vw,550px)] h-auto object-contain"
          onLoad={startRevealTimer}
        />
      )}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.div
          className="rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.38 0.1 262) 0%, oklch(0.28 0.09 262) 30%, oklch(0.17 0.04 260) 52%, transparent 70%)",
            boxShadow:
              "0 0 60px oklch(0.28 0.09 262 / 0.9), 0 0 140px oklch(0.22 0.07 262 / 0.55), 0 0 220px oklch(0.18 0.05 260 / 0.35)",
          }}
          initial={{ width: 0, height: 0, opacity: 0 }}
          animate={
            revealing
              ? { width: "280vmin", height: "280vmin", opacity: [0, 1, 0.95, 0] }
              : { width: 0, height: 0, opacity: 0 }
          }
          transition={{
            duration: 0.7,
            ease: easeRevealIn,
            times: [0, 0.25, 0.55, 1],
          }}
        />
      </div>
    </motion.div>
  );
}
