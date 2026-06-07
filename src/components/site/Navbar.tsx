import { useEffect, useState } from "react";
import logo from "@/assets/8roots-logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { easeLux, entranceValues, motionKey, useAnimateIn } from "@/lib/motion";

const links = [
  { href: "#services", label: "Services", id: "services" },
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#why", label: "Why Us", id: "why" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function Navbar() {
  const animateIn = useAnimateIn();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach((l) => { const el = document.getElementById(l.id); if (el) obs.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  return (
    <motion.header
      key={motionKey(animateIn, "navbar")}
      {...entranceValues(animateIn, { y: -40, opacity: 0 }, { y: 0, opacity: 1 })}
      transition={{ duration: 0.9, ease: easeLux, delay: 0.2 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong py-3" : "py-5 bg-transparent",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center group">
          <motion.img
            src={logo}
            alt="8Roots Consulting"
            className="h-14 w-auto object-contain"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, ease: easeLux }}
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                  transition={{ duration: 0.6, ease: easeLux }}
                />
              )}
            </a>
          ))}
        </nav>
        <Button asChild variant="default" size="sm" className="rounded-full px-5">
          <a href="#contact">Book Consultation</a>
        </Button>
      </div>
    </motion.header>
  );
}
