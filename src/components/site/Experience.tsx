import { motion } from "framer-motion";
import { easeLux, fadeUp, inViewMotion, inViewValues, motionKey, scrollFadeHidden, scrollFadeShown, stagger, useAnimateIn } from "@/lib/motion";

const items = [
  { tag: "Apex Development", desc: "Robust server-side logic, triggers and asynchronous Apex for enterprise workloads." },
  { tag: "LWC Development", desc: "Modular Lightning Web Components delivering modern UX at scale." },
  { tag: "Flow Automation", desc: "Declarative automation orchestrating processes across teams and clouds." },
  { tag: "Integration Projects", desc: "MuleSoft, REST/SOAP and event-driven integrations across ERP, finance and data lakes." },
  { tag: "CRM Architecture", desc: "Multi-org, multi-cloud architectures engineered for scale and governance." },
  { tag: "Copado & DevOps", desc: "CI/CD pipelines, release management and quality automation for Salesforce." },
  { tag: "Einstein AI", desc: "Predictive scoring, generative experiences and AI-powered insights." },
  { tag: "Experience Cloud", desc: "Branded portals for customers, partners and employees with self-service." },
];

export function Experience() {
  const animateIn = useAnimateIn();

  return (
    <section id="experience" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div key={motionKey(animateIn, "experience-head")} className="max-w-2xl mb-16" {...inViewMotion(animateIn)} variants={stagger(0.1)}>
          <motion.div variants={fadeUp} className="text-xs tracking-[0.3em] text-primary mb-4">EXPERIENCE</motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-semibold">
            Built on <span className="text-gradient-silver">deep Salesforce expertise</span>
          </motion.h2>
        </motion.div>

        <div className="relative">
          <motion.div
            key={motionKey(animateIn, "timeline")}
            {...inViewValues(animateIn, { scaleY: 0 }, { scaleY: 1 })}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: easeLux }}
            style={{ transformOrigin: "top" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent"
          />
          <div className="space-y-8">
            {items.map((it, i) => (
              <motion.div
                key={motionKey(animateIn, it.tag)}
                {...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown)}
                transition={{ duration: 0.9, ease: easeLux, delay: i * 0.05 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[direction:rtl]" : ""}`}
              >
                <motion.div
                  key={motionKey(animateIn, `${it.tag}-dot`)}
                  {...inViewValues(animateIn, { scale: 0 }, { scale: 1 })}
                  transition={{ duration: 0.6, ease: easeLux, delay: i * 0.05 + 0.2 }}
                  className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-primary glow-primary"
                />
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pr-0 md:pl-0 md:text-right"}`}>
                  <div className="glass rounded-2xl p-6 [direction:ltr] inline-block w-full">
                    <div className="text-xs tracking-widest text-primary mb-2">{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="font-display text-xl font-semibold mb-2">{it.tag}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                  </div>
                </div>
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
