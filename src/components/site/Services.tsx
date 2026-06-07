import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Cloud, Code2, Database, Globe, LifeBuoy, LineChart, Plug, Settings2, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { easeLux, fadeUp, inViewMotion, inViewValues, motionKey, scrollFadeHidden, scrollFadeShown, stagger, useAnimateIn } from "@/lib/motion";

type Service = {
  icon: LucideIcon;
  title: string;
  desc?: string;
  items?: string[];
};

const services: Service[] = [
  { icon: Cloud, title: "Salesforce Implementation", desc: "End-to-end Salesforce rollout with enterprise governance, scalable architecture and adoption strategy." },
  { icon: Settings2, title: "CRM Customization", desc: "Tailored objects, page layouts, automation and security models aligned to your business processes." },
  { icon: Workflow, title: "Salesforce Automation", desc: "Flow, Process Builder and Apex automation to eliminate manual work and accelerate execution." },
  { icon: Plug, title: "API & System Integration", desc: "Connect Salesforce with ERP, marketing, finance & data platforms via MuleSoft and REST/SOAP APIs." },
  { icon: Globe, title: "Experience Cloud Solutions", desc: "Branded customer, partner and employee portals built for engagement and self-service." },
  { icon: LineChart, title: "Sales & Service Cloud", desc: "Pipeline, forecasting, omni-channel service and case management configured for revenue growth." },
  { icon: Code2, title: "Lightning Web Components", desc: "High-performance LWC development for modern, modular and reusable Salesforce experiences." },
  { icon: LifeBuoy, title: "Support & Optimization", desc: "Managed services, health checks, release management and continuous optimization." },
  {
    icon: Database,
    title: "Data Cloud",
    items: [
      "Unified customer data from multiple sources into a single customer profile.",
      "Real-time customer insights and audience segmentation.",
      "Data Cloud implementation, configuration, and optimization.",
      "Data integration and harmonization across business systems.",
      "AI-ready data foundation for personalized customer experiences.",
      "Advanced analytics and reporting powered by Salesforce Data Cloud.",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Salesforce AI & MCP Integration",
    items: [
      "Model Context Protocol (MCP) integration with Salesforce.",
      "Connect Salesforce Data Cloud with AI agents and external applications.",
      "Secure real-time data access for AI-powered workflows.",
      "Integration of Salesforce with third-party systems using MCP standards.",
      "Agentforce and AI assistant implementation leveraging Data Cloud.",
      "Enterprise-grade governance and security for AI-driven solutions.",
    ],
  },
];

export function Services() {
  const animateIn = useAnimateIn();

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
      <div className="container relative mx-auto px-6">
        <motion.div key={motionKey(animateIn, "services-head")} className="max-w-2xl mb-16" {...inViewMotion(animateIn)} variants={stagger(0.1)}>
          <motion.div variants={fadeUp} className="text-xs tracking-[0.3em] text-primary mb-4">CORE SERVICES</motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-semibold mb-4">
            Salesforce expertise, <span className="text-gradient-silver">delivered end-to-end</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg">
            A complete spectrum of consulting, implementation and managed services for the modern enterprise.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={motionKey(animateIn, s.title)}
              {...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown)}
              transition={{ duration: 0.85, ease: easeLux, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -6, transition: { duration: 0.4, ease: easeLux } }}
              className={`group relative glass rounded-2xl p-6 shadow-card transition-shadow duration-500 hover:border-primary/40 hover:shadow-elevated${s.items ? " sm:col-span-2" : ""}`}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/15 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "inset 0 0 0 1px oklch(0.88 0.01 250 / 0.25)" }} />
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.08 }}
                  transition={{ duration: 0.5, ease: easeLux }}
                  className="h-12 w-12 rounded-xl glass-strong flex items-center justify-center text-primary mb-5 group-hover:glow-primary transition-shadow"
                >
                  <s.icon size={20} />
                </motion.div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                {s.items ? (
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
