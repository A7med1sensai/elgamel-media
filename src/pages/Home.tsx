import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, BarChart2, PenTool, Video, CheckCircle2, Zap, Clock, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroDashboard from "@assets/hero-dashboard.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function Home() {
  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <section className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[130px]" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-start">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Premium Marketing Agency
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-6">
                Scale Your Brand With{" "}
                <span className="text-primary relative">
                  Premium
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-primary/80 to-transparent" />
                </span>{" "}
                Marketing Solutions
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                Elgamel Media helps businesses grow through high-converting Meta Ads, premium creative design, and professional video editing.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform duration-200">
                  <a href="https://wa.me/201503770943" target="_blank" rel="noopener noreferrer">
                    Book A Free Consultation
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-bold border-primary/40 text-primary hover:bg-primary/10 hover:-translate-y-0.5 transition-transform duration-200">
                  <Link href="/packages">View Packages</Link>
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {["Meta Ads", "Creative Design", "Video Editing"].map((badge, i) => (
                  <div key={i} className="px-4 py-2 rounded-full border border-primary/25 bg-primary/5 text-primary text-sm font-medium">
                    {badge}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
  duration: 0.9,
  ease: [0.25, 0.1, 0.25, 1],
  delay: 0.25
}}
              className="relative w-full hidden lg:flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-3xl scale-95" />
              <img
                src={heroDashboard}
                alt="Meta Ads Campaign Dashboard"
                className="relative w-full max-w-2xl object-contain drop-shadow-2xl rounded-2xl"
                loading="eager"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
               transition={{
  duration: 4,
  repeat: Infinity,
  ease: [0.42, 0, 0.58, 1]
}}
                className="absolute -left-6 top-24 p-4 rounded-xl bg-card/90 border border-primary/30 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Active Campaign</div>
                    <div className="text-sm font-bold text-foreground">Scaling Phase</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
  duration: 5,
  repeat: Infinity,
  ease: [0.42, 0, 0.58, 1],
  delay: 1
}}
                className="absolute -right-4 bottom-24 p-4 rounded-xl bg-card/90 border border-primary/30 shadow-xl backdrop-blur-md"
              >
                <div className="text-xs text-muted-foreground mb-1">Average ROAS</div>
                <div className="text-2xl font-extrabold text-primary">4.8x</div>
                <div className="text-xs text-green-400 font-semibold mt-0.5">+32% this month</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
            <motion.p variants={fadeUp} className="text-primary text-sm font-bold tracking-widest uppercase mb-3">What We Do</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg">Everything you need to grow your business.</motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BarChart2, title: "Meta Ads Management", desc: "Drive measurable growth through strategic Meta advertising campaigns designed to generate qualified leads, increase sales, and maximize your return on investment." },
              { icon: PenTool, title: "Creative Design", desc: "Premium visual content crafted to capture attention, strengthen brand identity, and create a lasting impression across all digital platforms." },
              { icon: Video, title: "Video Editing", desc: "Professional video editing focused on creating engaging content that captures attention, increases retention, and drives audience action." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group cursor-default"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <service.icon size={26} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-14 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-200">
              <Link href="/services" className="flex items-center gap-2">
                Explore Services <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Why Choose Us</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold">Why Choose Elgamel Media</motion.h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle2, stat: "100+", label: "Campaigns Planned" },
              { icon: PenTool, stat: "Premium", label: "Designs" },
              { icon: Clock, stat: "Fast", label: "Delivery" },
              { icon: Zap, stat: "Performance", label: "Focused" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <item.icon size={28} />
                </div>
                <div className="text-3xl font-extrabold text-primary mb-2">{item.stat}</div>
                <div className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages Preview ── */}
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
            <motion.p variants={fadeUp} className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Pricing</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-4">Growth Packages</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg">Clear pricing for serious businesses.</motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -4 }} className="bg-card border border-border rounded-2xl p-8 shadow-md transition-all duration-300">
              <h3 className="text-2xl font-extrabold mb-1">Launch</h3>
              <p className="text-muted-foreground text-sm mb-6">Starter For Your Brand</p>
              <div className="text-3xl font-extrabold text-primary mb-8">4,999 <span className="text-base font-medium text-muted-foreground">EGP/mo</span></div>
              <ul className="space-y-3 mb-8">
                {["Meta Ads Management", "Campaign Setup", "6 Creative Designs", "Monthly Report"].map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-muted-foreground text-sm"><CheckCircle2 size={16} className="text-primary shrink-0" /> {f}</li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10 font-bold">
                <a href="https://wa.me/201503770943?text=I'm interested in the Launch package" target="_blank" rel="noopener noreferrer">Get Started</a>
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} whileHover={{ y: -6 }} className="relative bg-background border-2 border-primary rounded-2xl p-8 shadow-[0_0_50px_rgba(212,175,55,0.18)] lg:-translate-y-6 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
              <h3 className="text-2xl font-extrabold mb-1">Scale</h3>
              <p className="text-muted-foreground text-sm mb-6">Grow Your Business</p>
              <div className="text-4xl font-extrabold text-primary mb-8">7,999 <span className="text-base font-medium text-muted-foreground">EGP/mo</span></div>
              <ul className="space-y-3 mb-8">
                {["Meta Ads Management", "Campaign Optimization", "12 Creative Designs", "4 Reels Editing", "Monthly Report", "Priority Support"].map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground text-sm"><CheckCircle2 size={16} className="text-primary shrink-0" /> {f}</li>
                ))}
              </ul>
              <Button asChild className="w-full font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform duration-200">
                <a href="https://wa.me/201503770943?text=I'm interested in the Scale package" target="_blank" rel="noopener noreferrer">Get Started</a>
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ y: -4 }} className="bg-card border border-border rounded-2xl p-8 shadow-md transition-all duration-300">
              <h3 className="text-2xl font-extrabold mb-1">Elite</h3>
              <p className="text-muted-foreground text-sm mb-6">Maximum Growth</p>
              <div className="text-3xl font-extrabold text-primary mb-8">9,999 <span className="text-base font-medium text-muted-foreground">EGP/mo</span></div>
              <ul className="space-y-3 mb-8">
                {["Meta Ads Management", "Advanced Optimization", "20 Creative Designs", "8 Reels Editing", "Monthly Strategy Call"].map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-muted-foreground text-sm"><CheckCircle2 size={16} className="text-primary shrink-0" /> {f}</li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10 font-bold">
                <a href="https://wa.me/201503770943?text=I'm interested in the Elite package" target="_blank" rel="noopener noreferrer">Get Started</a>
              </Button>
            </motion.div>
          </div>

          <div className="mt-14 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-200">
              <Link href="/packages">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-background relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Let's Work Together</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Ready To Scale Your Business?</motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's discuss your goals and build a strategy that drives real results.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild size="lg" className="h-16 px-12 text-lg font-bold shadow-xl shadow-primary/25 hover:-translate-y-1 transition-transform duration-200">
                <a href="https://wa.me/201503770943" target="_blank" rel="noopener noreferrer">Book A Consultation</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
