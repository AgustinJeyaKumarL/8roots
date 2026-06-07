import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAnimateIn } from "@/lib/motion";
import loaderGif from "@/assets/8roots-logo-loader.gif";

const easeRevealIn: [number, number, number, number] = [0.42, 0, 1, 1];

async function getGifDurationMs(src: string): Promise<number> {
  try {
    const bytes = new Uint8Array(await (await fetch(src)).arrayBuffer());
    let total = 0;
    for (let i = 0; i < bytes.length - 8; i++) {
      if (bytes[i] === 0x21 && bytes[i + 1] === 0xf9 && bytes[i + 2] === 0x04) {
        total += (bytes[i + 4] | (bytes[i + 5] << 8)) * 10;
      }
    }
    return total > 0 ? total : 4000;
  } catch {
    return 4000;
  }
}

export function Loader() {
  const animateIn = useAnimateIn();
  const [visible, setVisible] = useState(true);
  const [revealing, setRevealing] = useState(false);

  useEffect(() => {
    if (!animateIn) return;
    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    getGifDurationMs(loaderGif).then((ms) => {
      if (cancelled) return;
      timer = setTimeout(() => setRevealing(true), Math.max(0, ms - 200));
    });

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [animateIn]);

  if (!animateIn || !visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      animate={{ opacity: revealing ? 0 : 1 }}
      transition={{ duration: 0.55, ease: easeRevealIn, delay: revealing ? 0.25 : 0 }}
      onAnimationComplete={() => {
        if (revealing) setVisible(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: revealing ? 0 : 1, scale: revealing ? 0.92 : 1 }}
        transition={{ duration: 0.15, ease: easeRevealIn }}
      >
        <img
          src={loaderGif}
          alt="8Roots Consulting"
          className="w-[min(55vw,550px)] h-auto object-contain"
        />
      </motion.div>

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
