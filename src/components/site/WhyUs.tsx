import { ShieldCheck, Layers, Building2, Bot, Rocket, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { easeLux, fadeUp, inViewMotion, inViewValues, motionKey, scrollFadeHidden, scrollFadeShown, stagger, useAnimateIn } from "@/lib/motion";

const items = [
  { icon: ShieldCheck, t: "Salesforce Expertise", d: "Certified architects and developers across Sales, Service, Experience and Marketing Cloud." },
  { icon: Layers, t: "Scalable Architecture", d: "Modular, governed designs engineered to grow with your enterprise." },
  { icon: Building2, t: "Enterprise Delivery", d: "Predictable execution with mature delivery frameworks and quality gates." },
  { icon: Bot, t: "Automation-first", d: "We automate by default — workflows, testing, deployments and insights." },
  { icon: Rocket, t: "Future-ready", d: "AI-native, integration-rich, and aligned to the Salesforce innovation roadmap." },
  { icon: Compass, t: "Consulting-driven", d: "Outcome-led engagements grounded in business strategy, not just technology." },
];

export function WhyUs() {
  const animateIn = useAnimateIn();

  return (
    <section id="why" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="container relative mx-auto px-6">
        <motion.div key={motionKey(animateIn, "why-head")} className="max-w-2xl mb-16" {...inViewMotion(animateIn)} variants={stagger(0.1)}>
          <motion.div variants={fadeUp} className="text-xs tracking-[0.3em] text-primary mb-4">WHY 8ROOTS</motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-semibold">
            The partner enterprises <span className="text-gradient-silver">trust to transform</span>
          </motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={motionKey(animateIn, it.t)}
              {...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown)}
              transition={{ duration: 0.85, ease: easeLux, delay: (i % 3) * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-7 group hover:border-primary/40 transition-colors"
            >
              <motion.div whileHover={{ rotate: -6, scale: 1.08 }} transition={{ duration: 0.5, ease: easeLux }} className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/30 flex items-center justify-center text-primary mb-5 group-hover:glow-primary transition-shadow">
                <it.icon size={20} />
              </motion.div>
              <h3 className="font-display text-lg font-semibold mb-2">{it.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
