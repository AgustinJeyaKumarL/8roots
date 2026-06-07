import { motion, type Variants } from "framer-motion";
import { fadeUp, inViewMotion, motionKey, stagger, useAnimateIn } from "@/lib/motion";
import { useId, type ReactNode } from "react";

export function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
}: {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}) {
  const animateIn = useAnimateIn();
  const id = useId();

  return (
    <motion.div
      key={motionKey(animateIn, id)}
      className={className}
      {...inViewMotion(animateIn)}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  staggerChildren = 0.1,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}) {
  const animateIn = useAnimateIn();
  const id = useId();

  return (
    <motion.div
      key={motionKey(animateIn, id)}
      className={className}
      {...inViewMotion(animateIn)}
      variants={stagger(staggerChildren, delayChildren)}
    >
      {children}
    </motion.div>
  );
}
