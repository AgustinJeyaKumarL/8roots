import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, BarChart3, Cpu, Cloud, Sparkles, Users, Settings2, Workflow, Plug, Globe, LineChart, Code2, LifeBuoy, Briefcase, Award, Database, Zap, ShieldCheck, Layers, Building2, Bot, Rocket, Compass, Star, Calendar, Mail, Linkedin, Twitter, Github } from "lucide-react";
import { toast, Toaster as Toaster$1 } from "sonner";
const logo = "/assets/8roots-logo-VOOd_hgf.png";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function useAnimateIn() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return ready;
}
function motionKey(ready, id) {
  const phase = ready ? "fm" : "static";
  return id ? `${phase}-${id}` : phase;
}
const easeLux = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: easeLux } }
};
const popUp = {
  hidden: { opacity: 0, scale: 0.78, y: 48 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 22, mass: 0.85 }
  }
};
const popUpHidden = { opacity: 0, scale: 0.78, y: 48 };
const popUpShown = { opacity: 1, scale: 1, y: 0 };
const popUpSpring = { type: "spring", stiffness: 320, damping: 22, mass: 0.85 };
const scrollFadeHidden = { opacity: 0, y: 32, filter: "blur(8px)" };
const scrollFadeShown = { opacity: 1, y: 0, filter: "blur(0px)" };
const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } }
});
const viewportOnce = { once: true, amount: 0.15, margin: "0px 0px -80px 0px" };
function entranceMotion(ready) {
  return {
    initial: ready ? "hidden" : false,
    animate: "show"
  };
}
function inViewMotion(ready) {
  return {
    initial: ready ? "hidden" : false,
    whileInView: ready ? "show" : void 0,
    viewport: viewportOnce
  };
}
function entranceValues(ready, hidden, shown) {
  return {
    initial: ready ? hidden : false,
    animate: shown
  };
}
function inViewValues(ready, hidden, shown) {
  return {
    initial: ready ? hidden : false,
    whileInView: ready ? shown : void 0,
    viewport: viewportOnce
  };
}
const links = [
  { href: "#services", label: "Services", id: "services" },
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#why", label: "Why Us", id: "why" },
  { href: "#contact", label: "Contact", id: "contact" }
];
function Navbar() {
  const animateIn = useAnimateIn();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsx(
    motion.header,
    {
      ...entranceValues(animateIn, { y: -40, opacity: 0 }, { y: 0, opacity: 1 }),
      transition: { duration: 0.9, ease: easeLux, delay: 0.2 },
      className: cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong py-3" : "py-5 bg-transparent"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("a", { href: "#top", className: "flex items-center group", children: /* @__PURE__ */ jsx(
          motion.img,
          {
            src: logo,
            alt: "8Roots Consulting",
            className: "h-14 w-auto object-contain",
            whileHover: { scale: 1.04 },
            transition: { duration: 0.5, ease: easeLux }
          }
        ) }),
        /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxs("a", { href: l.href, className: "relative text-sm text-muted-foreground hover:text-foreground transition-colors py-1", children: [
          l.label,
          active === l.id && /* @__PURE__ */ jsx(
            motion.span,
            {
              layoutId: "nav-underline",
              className: "absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent",
              transition: { duration: 0.6, ease: easeLux }
            }
          )
        ] }, l.href)) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "default", size: "sm", className: "rounded-full px-5", children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Book Consultation" }) })
      ] })
    },
    motionKey(animateIn, "navbar")
  );
}
const heroBg = "/assets/hero-bg-8Vdfzc-a.jpg";
function MagneticButton({ children, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 20, mass: 0.4 });
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      onMouseMove: onMove,
      onMouseLeave: onLeave,
      style: { x: sx, y: sy },
      className: "inline-block",
      children: /* @__PURE__ */ jsx(Button, { ...props, children })
    }
  );
}
const floatingCards = [
  { icon: BarChart3, label: "CRM Analytics", value: "+38% Pipeline", pos: "top-8 -left-4 md:left-0" },
  { icon: Cpu, label: "Automation", value: "1.2M Workflows", pos: "top-32 -right-2 md:right-0" },
  { icon: Cloud, label: "Cloud Integration", value: "120+ APIs", pos: "bottom-24 left-4 md:left-8" },
  { icon: Sparkles, label: "AI Insights", value: "Einstein GPT", pos: "bottom-8 right-2 md:right-12" },
  { icon: Users, label: "Customer Success", value: "98.4% CSAT", pos: "top-1/2 left-1/2 -translate-x-1/2" }
];
const headline = ["Transforming", "Businesses", "with"];
function Hero() {
  const animateIn = useAnimateIn();
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-hero", children: [
    /* @__PURE__ */ jsx(
      motion.img,
      {
        src: heroBg,
        alt: "",
        width: 1920,
        height: 1080,
        className: "absolute inset-0 w-full h-full object-cover opacity-40",
        ...entranceValues(animateIn, { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 0.4 }),
        transition: { duration: 2, ease: easeLux }
      },
      motionKey(animateIn, "hero-bg")
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg" }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        "aria-hidden": true,
        className: "absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/20 blur-[140px]",
        animate: { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] },
        transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" }),
    /* @__PURE__ */ jsxs("div", { className: "container relative mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "lg:col-span-7 space-y-8",
          ...entranceMotion(animateIn),
          variants: stagger(0.12, 0.2),
          children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: fadeUp,
                className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-wider text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" }),
                  "CERTIFIED SALESFORCE PARTNER"
                ]
              }
            ),
            /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]", children: [
              headline.map((w, i) => /* @__PURE__ */ jsx(motion.span, { variants: fadeUp, className: "inline-block mr-3", children: w }, i)),
              /* @__PURE__ */ jsx(motion.span, { variants: fadeUp, className: "inline-block text-gradient-silver", children: "Salesforce Excellence" })
            ] }),
            /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-lg text-muted-foreground max-w-2xl leading-relaxed", children: "Enterprise Salesforce Implementation, Automation, Integration & Digital Transformation Solutions engineered for scale, intelligence and measurable business outcomes." }),
            /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsx(MagneticButton, { asChild: true, size: "lg", className: "rounded-full px-7 h-12 glow-primary", children: /* @__PURE__ */ jsxs("a", { href: "#contact", children: [
                "Book Consultation ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1" })
              ] }) }),
              /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "rounded-full px-7 h-12 glass border-white/10 bg-transparent hover:bg-white/5", children: /* @__PURE__ */ jsx("a", { href: "#services", children: "Explore Services" }) })
            ] }),
            /* @__PURE__ */ jsx(motion.div, { variants: stagger(0.12, 0.1), className: "flex gap-8 pt-6 border-t border-white/5", children: [
              { v: "150+", l: "Projects Delivered" },
              { v: "60+", l: "Certified Experts" },
              { v: "98%", l: "Client Retention" }
            ].map((s) => /* @__PURE__ */ jsxs(motion.div, { variants: popUp, children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-display font-semibold text-gradient-silver", children: s.v }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground tracking-wider uppercase", children: s.l })
            ] }, s.l)) })
          ]
        },
        motionKey(animateIn, "hero-copy")
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "lg:col-span-5 relative h-[520px] hidden lg:block",
          ...inViewMotion(animateIn),
          variants: stagger(0.15, 0.5),
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" }),
            floatingCards.map((c, i) => /* @__PURE__ */ jsx(
              motion.div,
              {
                variants: {
                  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: easeLux } }
                },
                className: `absolute ${c.pos} glass-strong rounded-2xl p-4 w-56 shadow-elevated`,
                children: /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    animate: { y: [0, -8, 0] },
                    transition: { duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
                    className: "flex items-center gap-3",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary", children: /* @__PURE__ */ jsx(c.icon, { size: 18 }) }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: c.label }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-gradient-silver", children: c.value })
                      ] })
                    ]
                  }
                )
              },
              c.label
            ))
          ]
        },
        motionKey(animateIn, "hero-cards")
      )
    ] })
  ] });
}
const services = [
  { icon: Cloud, title: "Salesforce Implementation", desc: "End-to-end Salesforce rollout with enterprise governance, scalable architecture and adoption strategy." },
  { icon: Settings2, title: "CRM Customization", desc: "Tailored objects, page layouts, automation and security models aligned to your business processes." },
  { icon: Workflow, title: "Salesforce Automation", desc: "Flow, Process Builder and Apex automation to eliminate manual work and accelerate execution." },
  { icon: Plug, title: "API & System Integration", desc: "Connect Salesforce with ERP, marketing, finance & data platforms via MuleSoft and REST/SOAP APIs." },
  { icon: Globe, title: "Experience Cloud Solutions", desc: "Branded customer, partner and employee portals built for engagement and self-service." },
  { icon: LineChart, title: "Sales & Service Cloud", desc: "Pipeline, forecasting, omni-channel service and case management configured for revenue growth." },
  { icon: Code2, title: "Lightning Web Components", desc: "High-performance LWC development for modern, modular and reusable Salesforce experiences." },
  { icon: LifeBuoy, title: "Support & Optimization", desc: "Managed services, health checks, release management and continuous optimization." }
];
function Services() {
  const animateIn = useAnimateIn();
  return /* @__PURE__ */ jsxs("section", { id: "services", className: "relative py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full" }),
    /* @__PURE__ */ jsxs("div", { className: "container relative mx-auto px-6", children: [
      /* @__PURE__ */ jsxs(motion.div, { className: "max-w-2xl mb-16", ...inViewMotion(animateIn), variants: stagger(0.1), children: [
        /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "text-xs tracking-[0.3em] text-primary mb-4", children: "CORE SERVICES" }),
        /* @__PURE__ */ jsxs(motion.h2, { variants: fadeUp, className: "text-4xl md:text-5xl font-display font-semibold mb-4", children: [
          "Salesforce expertise, ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-silver", children: "delivered end-to-end" })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-muted-foreground text-lg", children: "A complete spectrum of consulting, implementation and managed services for the modern enterprise." })
      ] }, motionKey(animateIn, "services-head")),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: services.map((s, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          ...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown),
          transition: { duration: 0.85, ease: easeLux, delay: i % 4 * 0.06 },
          whileHover: { y: -6, transition: { duration: 0.4, ease: easeLux } },
          className: "group relative glass rounded-2xl p-6 shadow-card transition-shadow duration-500 hover:border-primary/40 hover:shadow-elevated",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/15 via-transparent to-transparent pointer-events-none" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500", style: { boxShadow: "inset 0 0 0 1px oklch(0.88 0.01 250 / 0.25)" } }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  whileHover: { rotate: -6, scale: 1.08 },
                  transition: { duration: 0.5, ease: easeLux },
                  className: "h-12 w-12 rounded-xl glass-strong flex items-center justify-center text-primary mb-5 group-hover:glow-primary transition-shadow",
                  children: /* @__PURE__ */ jsx(s.icon, { size: 20 })
                }
              ),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold mb-2 text-foreground", children: s.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
            ] })
          ]
        },
        motionKey(animateIn, s.title)
      )) })
    ] })
  ] });
}
const metrics = [
  { icon: Briefcase, value: "150+", label: "Projects Delivered" },
  { icon: Award, value: "60+", label: "Salesforce Certifications" },
  { icon: Database, value: "200+", label: "CRM Solutions" },
  { icon: Zap, value: "1.2M", label: "Automation Workflows" }
];
function About() {
  const animateIn = useAnimateIn();
  return /* @__PURE__ */ jsx("section", { id: "about", className: "relative py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxs(motion.div, { ...inViewMotion(animateIn), variants: stagger(0.1), children: [
      /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "text-xs tracking-[0.3em] text-primary mb-4", children: "ABOUT 8ROOTS" }),
      /* @__PURE__ */ jsxs(motion.h2, { variants: fadeUp, className: "text-4xl md:text-5xl font-display font-semibold leading-tight mb-6", children: [
        "A modern Salesforce ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-silver", children: "transformation partner" })
      ] }),
      /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-muted-foreground text-lg leading-relaxed mb-6", children: "8Roots Consulting partners with ambitious enterprises to design, build and scale intelligent CRM ecosystems on the Salesforce platform. We blend strategy, engineering and automation to unlock measurable outcomes — faster cycles, deeper insight, and operational excellence." }),
      /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-muted-foreground leading-relaxed mb-8", children: "From greenfield implementations to complex multi-cloud transformations, our certified architects deliver scalable solutions engineered for the next decade of growth." }),
      /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "flex flex-wrap gap-3", children: ["Strategy", "Architecture", "Engineering", "Automation", "Managed Services"].map((t) => /* @__PURE__ */ jsx("span", { className: "glass px-4 py-2 rounded-full text-xs tracking-wider text-muted-foreground", children: t }, t)) })
    ] }, motionKey(animateIn, "about-copy")),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: metrics.map((m, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        ...inViewValues(animateIn, popUpHidden, popUpShown),
        transition: { ...popUpSpring, delay: i * 0.1 },
        whileHover: { y: -6, scale: 1.02, transition: { duration: 0.35, ease: easeLux } },
        className: `glass-strong rounded-2xl p-7 shadow-card relative overflow-hidden group${i % 2 ? " mt-6" : ""}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsx(m.icon, { className: "text-primary mb-4", size: 22 }),
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-display font-semibold text-gradient-silver", children: m.value }),
          /* @__PURE__ */ jsx("div", { className: "text-xs tracking-wider text-muted-foreground uppercase mt-2", children: m.label })
        ]
      },
      motionKey(animateIn, m.label)
    )) })
  ] }) });
}
const items$1 = [
  { tag: "Apex Development", desc: "Robust server-side logic, triggers and asynchronous Apex for enterprise workloads." },
  { tag: "LWC Development", desc: "Modular Lightning Web Components delivering modern UX at scale." },
  { tag: "Flow Automation", desc: "Declarative automation orchestrating processes across teams and clouds." },
  { tag: "Integration Projects", desc: "MuleSoft, REST/SOAP and event-driven integrations across ERP, finance and data lakes." },
  { tag: "CRM Architecture", desc: "Multi-org, multi-cloud architectures engineered for scale and governance." },
  { tag: "Copado & DevOps", desc: "CI/CD pipelines, release management and quality automation for Salesforce." },
  { tag: "Einstein AI", desc: "Predictive scoring, generative experiences and AI-powered insights." },
  { tag: "Experience Cloud", desc: "Branded portals for customers, partners and employees with self-service." }
];
function Experience() {
  const animateIn = useAnimateIn();
  return /* @__PURE__ */ jsx("section", { id: "experience", className: "relative py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxs(motion.div, { className: "max-w-2xl mb-16", ...inViewMotion(animateIn), variants: stagger(0.1), children: [
      /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "text-xs tracking-[0.3em] text-primary mb-4", children: "EXPERIENCE" }),
      /* @__PURE__ */ jsxs(motion.h2, { variants: fadeUp, className: "text-4xl md:text-5xl font-display font-semibold", children: [
        "Built on ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-silver", children: "deep Salesforce expertise" })
      ] })
    ] }, motionKey(animateIn, "experience-head")),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          ...inViewValues(animateIn, { scaleY: 0 }, { scaleY: 1 }),
          viewport: { once: true, amount: 0.1 },
          transition: { duration: 1.4, ease: easeLux },
          style: { transformOrigin: "top" },
          className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent"
        },
        motionKey(animateIn, "timeline")
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: items$1.map((it, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          ...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown),
          transition: { duration: 0.9, ease: easeLux, delay: i * 0.05 },
          className: `relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[direction:rtl]" : ""}`,
          children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                ...inViewValues(animateIn, { scale: 0 }, { scale: 1 }),
                transition: { duration: 0.6, ease: easeLux, delay: i * 0.05 + 0.2 },
                className: "absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-primary glow-primary"
              },
              motionKey(animateIn, `${it.tag}-dot`)
            ),
            /* @__PURE__ */ jsx("div", { className: `pl-12 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pr-0 md:pl-0 md:text-right"}`, children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 [direction:ltr] inline-block w-full", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs tracking-widest text-primary mb-2", children: String(i + 1).padStart(2, "0") }),
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: it.tag }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: it.desc })
            ] }) }),
            /* @__PURE__ */ jsx("div", {})
          ]
        },
        motionKey(animateIn, it.tag)
      )) })
    ] })
  ] }) });
}
const items = [
  { icon: ShieldCheck, t: "Salesforce Expertise", d: "Certified architects and developers across Sales, Service, Experience and Marketing Cloud." },
  { icon: Layers, t: "Scalable Architecture", d: "Modular, governed designs engineered to grow with your enterprise." },
  { icon: Building2, t: "Enterprise Delivery", d: "Predictable execution with mature delivery frameworks and quality gates." },
  { icon: Bot, t: "Automation-first", d: "We automate by default — workflows, testing, deployments and insights." },
  { icon: Rocket, t: "Future-ready", d: "AI-native, integration-rich, and aligned to the Salesforce innovation roadmap." },
  { icon: Compass, t: "Consulting-driven", d: "Outcome-led engagements grounded in business strategy, not just technology." }
];
function WhyUs() {
  const animateIn = useAnimateIn();
  return /* @__PURE__ */ jsxs("section", { id: "why", className: "relative py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-50" }),
    /* @__PURE__ */ jsxs("div", { className: "container relative mx-auto px-6", children: [
      /* @__PURE__ */ jsxs(motion.div, { className: "max-w-2xl mb-16", ...inViewMotion(animateIn), variants: stagger(0.1), children: [
        /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "text-xs tracking-[0.3em] text-primary mb-4", children: "WHY 8ROOTS" }),
        /* @__PURE__ */ jsxs(motion.h2, { variants: fadeUp, className: "text-4xl md:text-5xl font-display font-semibold", children: [
          "The partner enterprises ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-silver", children: "trust to transform" })
        ] })
      ] }, motionKey(animateIn, "why-head")),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: items.map((it, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          ...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown),
          transition: { duration: 0.85, ease: easeLux, delay: i % 3 * 0.07 },
          whileHover: { y: -6 },
          className: "glass rounded-2xl p-7 group hover:border-primary/40 transition-colors",
          children: [
            /* @__PURE__ */ jsx(motion.div, { whileHover: { rotate: -6, scale: 1.08 }, transition: { duration: 0.5, ease: easeLux }, className: "h-12 w-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/30 flex items-center justify-center text-primary mb-5 group-hover:glow-primary transition-shadow", children: /* @__PURE__ */ jsx(it.icon, { size: 20 }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold mb-2", children: it.t }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: it.d })
          ]
        },
        motionKey(animateIn, it.t)
      )) })
    ] })
  ] });
}
const reviews = [
  {
    quote: "8Roots re-architected our Sales Cloud and unlocked a 38% lift in pipeline velocity within two quarters. Exceptional partner.",
    name: "Priya Natarajan",
    role: "VP Revenue Operations",
    company: "Northwind Capital"
  },
  {
    quote: "Their integration expertise across MuleSoft and our ERP saved months of engineering effort. Truly enterprise-grade delivery.",
    name: "Marcus Hale",
    role: "Chief Technology Officer",
    company: "Vertex Logistics"
  },
  {
    quote: "From strategy to LWC engineering, the 8Roots team feels like an extension of our org. Highly recommended.",
    name: "Sofia Alvarez",
    role: "Director of CRM",
    company: "Helios Health Group"
  }
];
function Testimonials() {
  const animateIn = useAnimateIn();
  return /* @__PURE__ */ jsx("section", { className: "py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxs(motion.div, { className: "max-w-2xl mb-16", ...inViewMotion(animateIn), variants: stagger(0.1), children: [
      /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "text-xs tracking-[0.3em] text-primary mb-4", children: "CLIENT VOICES" }),
      /* @__PURE__ */ jsxs(motion.h2, { variants: fadeUp, className: "text-4xl md:text-5xl font-display font-semibold", children: [
        "Trusted by ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-silver", children: "modern enterprises" })
      ] })
    ] }, motionKey(animateIn, "testimonials-head")),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-5", children: reviews.map((r, i) => /* @__PURE__ */ jsxs(
      motion.figure,
      {
        ...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown),
        transition: { duration: 0.9, ease: easeLux, delay: i * 0.1 },
        whileHover: { y: -4 },
        className: "glass-strong rounded-2xl p-7 shadow-card flex flex-col",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-4 text-primary", children: Array.from({ length: 5 }).map((_, i2) => /* @__PURE__ */ jsx(Star, { size: 14, fill: "currentColor" }, i2)) }),
          /* @__PURE__ */ jsxs("blockquote", { className: "text-foreground/90 leading-relaxed mb-6 flex-1", children: [
            '"',
            r.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("figcaption", { className: "border-t border-white/5 pt-4", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm", children: r.name }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
              r.role,
              " · ",
              r.company
            ] })
          ] })
        ]
      },
      motionKey(animateIn, r.name)
    )) })
  ] }) });
}
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
function Contact() {
  const animateIn = useAnimateIn();
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      e.target.reset();
      toast.success("Thanks — our team will reach out within 24 hours.");
    }, 800);
  };
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 blur-[140px] rounded-full" }),
    /* @__PURE__ */ jsxs("div", { className: "container relative mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxs(motion.div, { ...inViewMotion(animateIn), variants: stagger(0.1), children: [
        /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "text-xs tracking-[0.3em] text-primary mb-4", children: "LET'S TRANSFORM" }),
        /* @__PURE__ */ jsxs(motion.h2, { variants: fadeUp, className: "text-4xl md:text-5xl font-display font-semibold leading-tight mb-6", children: [
          "Start your ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient-silver", children: "Salesforce journey" })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-muted-foreground text-lg leading-relaxed mb-10", children: "Book a complimentary strategy session with our Salesforce architects. We'll map your transformation roadmap and identify quick-win automation opportunities." }),
        /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "#", className: "glass rounded-xl px-5 py-4 flex items-center gap-4 hover:border-primary/40 transition-all", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "text-primary" }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm", children: "Schedule on Calendly" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "30-minute discovery call" })
            ] }),
            /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "mailto:hello@8roots.com", className: "glass rounded-xl px-5 py-4 flex items-center gap-4 hover:border-primary/40 transition-all", children: [
            /* @__PURE__ */ jsx(Mail, { className: "text-primary" }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm", children: "hello@8roots.com" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Business inquiries" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "#", className: "glass rounded-xl px-5 py-4 flex items-center gap-4 hover:border-primary/40 transition-all", children: [
            /* @__PURE__ */ jsx(Linkedin, { className: "text-primary" }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm", children: "Connect on LinkedIn" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Follow 8Roots Consulting" })
            ] })
          ] })
        ] })
      ] }, motionKey(animateIn, "contact-copy")),
      /* @__PURE__ */ jsxs(
        motion.form,
        {
          onSubmit,
          ...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown),
          transition: { duration: 1, ease: easeLux },
          className: "glass-strong rounded-3xl p-8 shadow-elevated space-y-5",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-xs tracking-wider text-muted-foreground uppercase", children: "Name" }),
                /* @__PURE__ */ jsx(Input, { required: true, name: "name", placeholder: "Your full name", className: "bg-white/5 border-white/10 h-11" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-xs tracking-wider text-muted-foreground uppercase", children: "Company" }),
                /* @__PURE__ */ jsx(Input, { required: true, name: "company", placeholder: "Company name", className: "bg-white/5 border-white/10 h-11" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs tracking-wider text-muted-foreground uppercase", children: "Email" }),
              /* @__PURE__ */ jsx(Input, { required: true, type: "email", name: "email", placeholder: "you@company.com", className: "bg-white/5 border-white/10 h-11" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs tracking-wider text-muted-foreground uppercase", children: "Project Requirement" }),
              /* @__PURE__ */ jsx(Textarea, { required: true, name: "requirement", rows: 5, placeholder: "Tell us about your Salesforce initiative...", className: "bg-white/5 border-white/10" })
            ] }),
            /* @__PURE__ */ jsxs(Button, { type: "submit", size: "lg", className: "w-full rounded-full h-12 glow-primary", disabled: submitting, children: [
              submitting ? "Sending..." : "Request Consultation",
              /* @__PURE__ */ jsx(ArrowRight, {})
            ] })
          ]
        },
        motionKey(animateIn, "form")
      )
    ] })
  ] });
}
function Footer() {
  const animateIn = useAnimateIn();
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-white/5 pt-20 pb-10", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-10 mb-16", children: [
      /* @__PURE__ */ jsxs(motion.div, { className: "md:col-span-2", ...inViewMotion(animateIn), variants: stagger(0.08), children: [
        /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "mb-5", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "8Roots Consulting", className: "h-24 w-auto object-contain" }) }),
        /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-sm text-muted-foreground max-w-md leading-relaxed", children: "Rooted in purpose. Infinite possibilities. Premium enterprise Salesforce consulting and digital transformation — intelligent CRM implementation and scalable business automation." }),
        /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "flex gap-3 mt-6", children: [Linkedin, Twitter, Github].map((Icon, i) => /* @__PURE__ */ jsx("a", { href: "#", className: "h-10 w-10 rounded-full glass flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all", children: /* @__PURE__ */ jsx(Icon, { size: 16 }) }, i)) })
      ] }, motionKey(animateIn, "footer-brand")),
      /* @__PURE__ */ jsxs(motion.div, { ...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown), children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.2em] text-foreground mb-4 uppercase", children: "Services" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm text-muted-foreground", children: ["Implementation", "Customization", "Automation", "Integration", "Managed Services"].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#services", className: "hover:text-foreground transition-colors", children: l }) }, l)) })
      ] }, motionKey(animateIn, "footer-services")),
      /* @__PURE__ */ jsxs(motion.div, { ...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown), children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.2em] text-foreground mb-4 uppercase", children: "Company" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [["About", "#about"], ["Experience", "#experience"], ["Why Us", "#why"], ["Contact", "#contact"]].map(([l, h]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: h, className: "hover:text-foreground transition-colors", children: l }) }, l)) })
      ] }, motionKey(animateIn, "footer-company"))
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground",
        ...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown),
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " 8Roots Consulting. All rights reserved."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
            /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacy" }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Terms" }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Security" })
          ] })
        ]
      },
      motionKey(animateIn, "footer-legal")
    )
  ] }) });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const loaderGif = "/assets/8roots-logo-loader-DRiObk1z.gif";
function Loader() {
  const animateIn = useAnimateIn();
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (!animateIn) return;
    const t = setTimeout(() => setShow(false), 5e3);
    return () => clearTimeout(t);
  }, [animateIn]);
  if (!animateIn) return null;
  return /* @__PURE__ */ jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-[#020208]",
      initial: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.7, ease: easeLux } },
      children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center px-6", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.94 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.6, ease: easeLux },
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: loaderGif,
                alt: "8Roots Consulting",
                className: "w-[min(55vw,550px)] h-auto object-contain"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "mt-8 h-px w-38 overflow-hidden bg-white/10",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.6, duration: 0.5 },
            children: /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "h-full bg-gradient-to-r from-transparent via-primary to-transparent",
                initial: { x: "-100%" },
                animate: { x: "100%" },
                transition: { duration: 1.2, ease: easeLux, delay: 0.6, repeat: Infinity }
              }
            )
          }
        )
      ] })
    }
  ) });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Loader, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Experience, {}),
    /* @__PURE__ */ jsx(WhyUs, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
export {
  Index as component
};
