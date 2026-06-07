import logo from "@/assets/8roots-logo.png";
import { Linkedin, Twitter, Github } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, inViewMotion, inViewValues, motionKey, scrollFadeHidden, scrollFadeShown, stagger, useAnimateIn } from "@/lib/motion";

export function Footer() {
  const animateIn = useAnimateIn();

  return (
    <footer className="border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <motion.div key={motionKey(animateIn, "footer-brand")} className="md:col-span-2" {...inViewMotion(animateIn)} variants={stagger(0.08)}>
            <motion.div variants={fadeUp} className="mb-5">
              <img src={logo} alt="8Roots Consulting" className="h-24 w-auto object-contain" />
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Rooted in purpose. Infinite possibilities. Premium enterprise Salesforce consulting and
              digital transformation — intelligent CRM implementation and scalable business automation.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div key={motionKey(animateIn, "footer-services")} {...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown)}>
            <div className="text-xs tracking-[0.2em] text-foreground mb-4 uppercase">Services</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Implementation", "Customization", "Automation", "Integration", "Managed Services"].map((l) => (
                <li key={l}><a href="#services" className="hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </motion.div>
          <motion.div key={motionKey(animateIn, "footer-company")} {...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown)}>
            <div className="text-xs tracking-[0.2em] text-foreground mb-4 uppercase">Company</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[["About", "#about"], ["Experience", "#experience"], ["Why Us", "#why"], ["Contact", "#contact"]].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          key={motionKey(animateIn, "footer-legal")}
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground"
          {...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown)}
        >
          <div>© {new Date().getFullYear()} 8Roots Consulting. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
