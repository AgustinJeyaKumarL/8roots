import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { easeLux, useAnimateIn } from "@/lib/motion";
import loaderGif from "@/assets/8roots-logo-loader.gif";

export function Loader() {
  const animateIn = useAnimateIn();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!animateIn) return;
    const t = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(t);
  }, [animateIn]);

  if (!animateIn) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020208]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: easeLux } }}
        >
          <div className="relative flex flex-col items-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: easeLux }}
            >
              <img
                src={loaderGif}
                alt="8Roots Consulting"
                className="w-[min(55vw,550px)] h-auto object-contain"
              />
            </motion.div>

            <motion.div
              className="mt-8 h-px w-38 overflow-hidden bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, ease: easeLux, delay: 0.6, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
