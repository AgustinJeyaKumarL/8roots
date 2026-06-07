import { Award, Briefcase, Database, Zap } from "lucide-react";
import { motion } from "framer-motion";
import {
  easeLux,
  fadeUp,
  inViewMotion,
  inViewValues,
  motionKey,
  popUpHidden,
  popUpShown,
  popUpSpring,
  stagger,
  useAnimateIn,
} from "@/lib/motion";

const metrics = [
  { icon: Briefcase, value: "150+", label: "Projects Delivered" },
  { icon: Award, value: "60+", label: "Salesforce Certifications" },
  { icon: Database, value: "200+", label: "CRM Solutions" },
  { icon: Zap, value: "1.2M", label: "Automation Workflows" },
];

export function About() {
  const animateIn = useAnimateIn();

  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div key={motionKey(animateIn, "about-copy")} {...inViewMotion(animateIn)} variants={stagger(0.1)}>
          <motion.div variants={fadeUp} className="text-xs tracking-[0.3em] text-primary mb-4">ABOUT 8ROOTS</motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-semibold leading-tight mb-6">
            A modern Salesforce <span className="text-gradient-silver">transformation partner</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-6">
            8Roots Consulting partners with ambitious enterprises to design, build and scale intelligent
            CRM ecosystems on the Salesforce platform. We blend strategy, engineering and automation
            to unlock measurable outcomes — faster cycles, deeper insight, and operational excellence.
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8">
            From greenfield implementations to complex multi-cloud transformations, our certified
            architects deliver scalable solutions engineered for the next decade of growth.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {["Strategy", "Architecture", "Engineering", "Automation", "Managed Services"].map((t) => (
              <span key={t} className="glass px-4 py-2 rounded-full text-xs tracking-wider text-muted-foreground">{t}</span>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={motionKey(animateIn, m.label)}
              {...inViewValues(animateIn, popUpHidden, popUpShown)}
              transition={{ ...popUpSpring, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.35, ease: easeLux } }}
              className={`glass-strong rounded-2xl p-7 shadow-card relative overflow-hidden group${i % 2 ? " mt-6" : ""}`}
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <m.icon className="text-primary mb-4" size={22} />
              <div className="text-4xl font-display font-semibold text-gradient-silver">{m.value}</div>
              <div className="text-xs tracking-wider text-muted-foreground uppercase mt-2">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
