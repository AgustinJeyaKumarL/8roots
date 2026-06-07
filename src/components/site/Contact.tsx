import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { easeLux, fadeUp, inViewMotion, inViewValues, motionKey, scrollFadeHidden, scrollFadeShown, stagger, useAnimateIn } from "@/lib/motion";

export function Contact() {
  const animateIn = useAnimateIn();
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks — our team will reach out within 24 hours.");
    }, 800);
  };
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 blur-[140px] rounded-full" />
      <div className="container relative mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <motion.div key={motionKey(animateIn, "contact-copy")} {...inViewMotion(animateIn)} variants={stagger(0.1)}>
          <motion.div variants={fadeUp} className="text-xs tracking-[0.3em] text-primary mb-4">LET'S TRANSFORM</motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-semibold leading-tight mb-6">
            Start your <span className="text-gradient-silver">Salesforce journey</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-10">
            Book a complimentary strategy session with our Salesforce architects. We'll map your transformation
            roadmap and identify quick-win automation opportunities.
          </motion.p>
          <motion.div variants={fadeUp} className="space-y-4">
            <a href="#" className="glass rounded-xl px-5 py-4 flex items-center gap-4 hover:border-primary/40 transition-all">
              <Calendar className="text-primary" />
              <div className="flex-1">
                <div className="font-semibold text-sm">Schedule on Calendly</div>
                <div className="text-xs text-muted-foreground">30-minute discovery call</div>
              </div>
              <ArrowRight size={16} className="text-muted-foreground" />
            </a>
            <a href="mailto:hello@8roots.com" className="glass rounded-xl px-5 py-4 flex items-center gap-4 hover:border-primary/40 transition-all">
              <Mail className="text-primary" />
              <div className="flex-1">
                <div className="font-semibold text-sm">hello@8roots.com</div>
                <div className="text-xs text-muted-foreground">Business inquiries</div>
              </div>
            </a>
            <a href="#" className="glass rounded-xl px-5 py-4 flex items-center gap-4 hover:border-primary/40 transition-all">
              <Linkedin className="text-primary" />
              <div className="flex-1">
                <div className="font-semibold text-sm">Connect on LinkedIn</div>
                <div className="text-xs text-muted-foreground">Follow 8Roots Consulting</div>
              </div>
            </a>
          </motion.div>
        </motion.div>

        <motion.form
          key={motionKey(animateIn, "form")}
          onSubmit={onSubmit}
          {...inViewValues(animateIn, scrollFadeHidden, scrollFadeShown)}
          transition={{ duration: 1, ease: easeLux }}
          className="glass-strong rounded-3xl p-8 shadow-elevated space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs tracking-wider text-muted-foreground uppercase">Name</label>
              <Input required name="name" placeholder="Your full name" className="bg-white/5 border-white/10 h-11" />
            </div>
            <div className="space-y-2">
              <label className="text-xs tracking-wider text-muted-foreground uppercase">Company</label>
              <Input required name="company" placeholder="Company name" className="bg-white/5 border-white/10 h-11" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs tracking-wider text-muted-foreground uppercase">Email</label>
            <Input required type="email" name="email" placeholder="you@company.com" className="bg-white/5 border-white/10 h-11" />
          </div>
          <div className="space-y-2">
            <label className="text-xs tracking-wider text-muted-foreground uppercase">Project Requirement</label>
            <Textarea required name="requirement" rows={5} placeholder="Tell us about your Salesforce initiative..." className="bg-white/5 border-white/10" />
          </div>
          <Button type="submit" size="lg" className="w-full rounded-full h-12 glow-primary" disabled={submitting}>
            {submitting ? "Sending..." : "Request Consultation"}
            <ArrowRight />
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
