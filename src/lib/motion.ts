import { useEffect, useState } from "react";
import type { Variants, Transition } from "framer-motion";

/** After hydration, flip true so motion components remount and play entrance animations. */
export function useAnimateIn() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return ready;
}

/** Remount key — pass directly to JSX `key`, never inside a spread object. */
export function motionKey(ready: boolean, id?: string) {
  const phase = ready ? "fm" : "static";
  return id ? `${phase}-${id}` : phase;
}

export const easeLux: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: easeLux } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: easeLux } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(6px)" },
  show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: easeLux } },
};

/** Spring popup for metric / stat cards on scroll. */
export const popUp: Variants = {
  hidden: { opacity: 0, scale: 0.78, y: 48 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 22, mass: 0.85 },
  },
};

export const popUpHidden = { opacity: 0, scale: 0.78, y: 48 };
export const popUpShown = { opacity: 1, scale: 1, y: 0 };
export const popUpSpring = { type: "spring" as const, stiffness: 320, damping: 22, mass: 0.85 };

export const scrollFadeHidden = { opacity: 0, y: 32, filter: "blur(8px)" };
export const scrollFadeShown = { opacity: 1, y: 0, filter: "blur(0px)" };

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const viewportOnce = { once: true, amount: 0.15, margin: "0px 0px -80px 0px" as const };

/** Variant-based entrance (animate prop). */
export function entranceMotion(ready: boolean) {
  return {
    initial: ready ? ("hidden" as const) : false,
    animate: "show" as const,
  };
}

/** Variant-based scroll reveal (whileInView). */
export function inViewMotion(ready: boolean) {
  return {
    initial: ready ? ("hidden" as const) : false,
    whileInView: ready ? ("show" as const) : undefined,
    viewport: viewportOnce,
  };
}

/** Custom-value entrance (animate prop). */
export function entranceValues<T extends object, U extends object>(ready: boolean, hidden: T, shown: U) {
  return {
    initial: ready ? hidden : false,
    animate: shown,
  };
}

/** Custom-value scroll reveal (whileInView). */
export function inViewValues<T extends object, U extends object>(ready: boolean, hidden: T, shown: U) {
  return {
    initial: ready ? hidden : false,
    whileInView: ready ? shown : undefined,
    viewport: viewportOnce,
  };
}
