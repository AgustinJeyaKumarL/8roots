import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Experience } from "@/components/site/Experience";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Loader } from "@/components/site/Loader";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "8Roots Consulting — Rooted in Purpose. Infinite Possibilities." },
      { name: "description", content: "Premium enterprise Salesforce consulting: implementation, automation, integration & digital transformation solutions." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Loader />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Experience />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
