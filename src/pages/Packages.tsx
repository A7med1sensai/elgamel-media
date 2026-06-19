import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import iconLaunch from "@assets/icon-launch.png";
import iconScale from "@assets/icon-scale.png";
import iconElite from "@assets/icon-elite.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const packages = [
  {
    icon: iconLaunch,
    name: "Launch",
    subtitle: "Starter For Your Brand",
    price: "4,999",
    highlight: false,
    features: ["Meta Ads Management", "Campaign Setup", "Audience Research", "Performance Optimization", "6 Creative Designs", "Monthly Report"]
  },
  {
    icon: iconScale,
    name: "Scale",
    subtitle: "Grow Your Business",
    price: "7,999",
    highlight: true,
    features: ["Meta Ads Management", "Campaign Optimization", "Audience Research", "12 Creative Designs", "4 Reels Editing", "Monthly Report", "Priority Support"]
  },
  {
    icon: iconElite,
    name: "Elite",
    subtitle: "Maximum Growth",
    price: "9,999",
    highlight: false,
    features: ["Meta Ads Management", "Advanced Optimization", "Audience Research", "20 Creative Designs", "8 Reels Editing", "Detailed Reporting", "Priority Support", "Monthly Strategy Call"]
  }
];

const addons = [
  { service: "Ad Account Setup", price: "1,500 EGP" },
  { service: "Extra Reel", price: "400 EGP" },
  { service: "Extra Design", price: "200 EGP" },
  { service: "Rush Delivery", price: "Starting From 500 EGP" }
];

export default function Packages() {
  return (
    <div className="w-full pt-20">
      <section className="py-24 md:py-36 bg-background border-b border-border relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-primary/8 rounded-full blur-[130px]" />
        </div>
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Pricing</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground">
            Choose The Right Package For Your Business
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Flexible solutions designed to help businesses grow through advertising, creative design, and video content.
          </motion.p>
        </div>
      </section>

      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-center">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={{ y: pkg.highlight ? -8 : -5, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl flex flex-col h-full transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-background border-2 border-primary shadow-[0_0_60px_rgba(212,175,55,0.2)] lg:-translate-y-8 p-10"
                    : "bg-card border border-border shadow-md p-8"
                }`}
              >
                {pkg.highlight && (
                  <>
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap">
                      Most Popular
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-primary/3 pointer-events-none" />
                  </>
                )}
                <div className={`mb-6 ${pkg.highlight ? "w-20 h-20" : "w-16 h-16"}`}>
                  <img src={pkg.icon} alt={`${pkg.name} icon`} className="w-full h-full object-contain drop-shadow-lg" loading="lazy" />
                </div>
                <h3 className={`font-extrabold mb-1 ${pkg.highlight ? "text-3xl" : "text-2xl"}`}>{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{pkg.subtitle}</p>
                <div className={`font-extrabold text-primary mb-8 ${pkg.highlight ? "text-5xl" : "text-4xl"}`}>
                  {pkg.price}{" "}
                  <span className="text-base font-medium text-muted-foreground">EGP/mo</span>
                </div>
                <div className="h-px w-full bg-border mb-8" />
                <ul className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-primary" />
                      </div>
                      <span className={`font-medium text-sm ${pkg.highlight ? "text-foreground" : "text-muted-foreground"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  variant={pkg.highlight ? "default" : "outline"}
                  className={`w-full font-bold transition-all duration-200 ${
                    pkg.highlight ? "h-14 text-base shadow-lg shadow-primary/25 hover:-translate-y-0.5" : "h-12 border-primary/30 text-primary hover:bg-primary/10"
                  }`}
                >
                  <a href={`https://wa.me/201503770943?text=I'm interested in the ${pkg.name} package`} target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-primary text-sm font-bold tracking-widest uppercase mb-3">A La Carte</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold mb-4">Additional Services</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg">Enhance your package with one-off services.</motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
            <div className="divide-y divide-border">
              {addons.map((addon, i) => (
                <div key={i} className="flex justify-between items-center px-8 py-6 hover:bg-primary/3 transition-colors group">
                  <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{addon.service}</span>
                  <span className="font-bold text-primary text-lg">{addon.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-secondary border-t border-border relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/6 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold mb-6">Still Not Sure?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's discuss your project and recommend the best solution.
          </motion.p>
          <Button asChild size="lg" className="h-14 px-10 text-lg font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform duration-200">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
