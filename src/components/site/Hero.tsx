import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/site/MagneticButton";
import { ArrowRight, BarChart3, Cpu, Cloud, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import { easeLux, stagger, fadeUp, popUp, entranceMotion, entranceValues, inViewMotion, motionKey, useAnimateIn } from "@/lib/motion";

const floatingCards = [
  { icon: BarChart3, label: "CRM Analytics", value: "+38% Pipeline", pos: "top-8 -left-4 md:left-0" },
  { icon: Cpu, label: "Automation", value: "1.2M Workflows", pos: "top-32 -right-2 md:right-0" },
  { icon: Cloud, label: "Cloud Integration", value: "120+ APIs", pos: "bottom-24 left-4 md:left-8" },
  { icon: Sparkles, label: "AI Insights", value: "Einstein GPT", pos: "bottom-8 right-2 md:right-12" },
  { icon: Users, label: "Customer Success", value: "98.4% CSAT", pos: "top-1/2 left-1/2 -translate-x-1/2" },
];

const headline = ["Transforming", "Businesses", "with"];

export function Hero() {
  const animateIn = useAnimateIn();

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-hero">
      <motion.img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        key={motionKey(animateIn, "hero-bg")}
        {...entranceValues(animateIn, { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 0.4 })}
        transition={{ duration: 2, ease: easeLux }}
      />
      <div className="absolute inset-0 grid-bg" />
      <motion.div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/20 blur-[140px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />

      <div className="container relative mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          className="lg:col-span-7 space-y-8"
          key={motionKey(animateIn, "hero-copy")}
          {...entranceMotion(animateIn)}
          variants={stagger(0.12, 0.2)}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-wider text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            CERTIFIED SALESFORCE PARTNER
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            {headline.map((w, i) => (
              <motion.span key={i} variants={fadeUp} className="inline-block mr-3">{w}</motion.span>
            ))}
            <motion.span variants={fadeUp} className="inline-block text-gradient-silver">
              Salesforce Excellence
            </motion.span>
          </h1>

          <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Enterprise Salesforce Implementation, Automation, Integration & Digital Transformation Solutions
            engineered for scale, intelligence and measurable business outcomes.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <MagneticButton asChild size="lg" className="rounded-full px-7 h-12 glow-primary">
              <a href="#contact">Book Consultation <ArrowRight className="ml-1" /></a>
            </MagneticButton>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 glass border-white/10 bg-transparent hover:bg-white/5">
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>

          <motion.div variants={stagger(0.12, 0.1)} className="flex gap-8 pt-6 border-t border-white/5">
            {[
              { v: "150+", l: "Projects Delivered" },
              { v: "60+", l: "Certified Experts" },
              { v: "98%", l: "Client Retention" },
            ].map((s) => (
              <motion.div key={s.l} variants={popUp}>
                <div className="text-2xl font-display font-semibold text-gradient-silver">{s.v}</div>
                <div className="text-xs text-muted-foreground tracking-wider uppercase">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 relative h-[520px] hidden lg:block"
          key={motionKey(animateIn, "hero-cards")}
          {...inViewMotion(animateIn)}
          variants={stagger(0.15, 0.5)}
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
          {floatingCards.map((c, i) => (
            <motion.div
              key={c.label}
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: easeLux } },
              }}
              className={`absolute ${c.pos} glass-strong rounded-2xl p-4 w-56 shadow-elevated`}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                className="flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                  <c.icon size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-semibold text-gradient-silver">{c.value}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
