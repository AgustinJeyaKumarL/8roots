import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { easeLux, fadeUp, inViewMotion, inViewValues, motionKey, scrollFadeHidden, scrollFadeShown, stagger, useAnimateIn } from "@/lib/motion";

const reviews = [
  {
    quote: "8Roots re-architected our Sales Cloud and unlocked a 38% lift in pipeline velocity within two quarters. Exceptional partner.",
    name: "Priya Natarajan",
    role: "VP Revenue Operations",
    company: "Northwind Capital",
  },
  {
    quote: "Their integration expertise across MuleSoft and our ERP saved months of engineering effort. Truly enterprise-grade delivery.",
    name: "Marcus Hale",
    role: "Chief Technology Officer",
    company: "Vertex Logistics",
  },
  {
    quote: "From strategy to LWC engineering, the 8Roots team feels like an extension of our org. Highly recommended.",
    name: "Sofia Alvarez",
    role: "Director of CRM",
    company: "Helios Health Group",
  },
];

export function Testimonials() {
  const animateIn = useAnimateIn();

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <motion.div key={motionKey(animateIn, "testimonials-head")} className="max-w-2xl mb-16" {...inViewMotion(animateIn)} variants={stagger(0.1)}>
          <motion.div variants={fadeUp} className="text-xs tracking-[0.3em] text-primary mb-4">CLIENT VOICES</motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-semibold">
            Trusted by <span className="text-gradient-silver">modern enterprises</span>
          </motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.figure
              key={motionKey(animateIn, r.name)}
              {...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown)}
              transition={{ duration: 0.9, ease: easeLux, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-2xl p-7 shadow-card flex flex-col"
            >
              <div className="flex gap-1 mb-4 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed mb-6 flex-1">"{r.quote}"</blockquote>
              <figcaption className="border-t border-white/5 pt-4">
                <div className="font-semibold text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role} · {r.company}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
