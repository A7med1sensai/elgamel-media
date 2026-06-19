import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import metaAdsImg from "@assets/meta-ads-service.png";
import creativeDesignImg from "@assets/creative-design-service.png";
import videoEditingImg from "@assets/video-editing-service.png";


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65
    }
  }
};


const services = [
  {
    id: "meta-ads",
    image: metaAdsImg,
    label: "01",
    title: "Meta Ads Management",
    description: "Drive measurable growth through strategic Meta advertising campaigns designed to generate qualified leads, increase sales, and maximize your return on investment.",
    features: ["Campaign Strategy", "Audience Research", "Campaign Setup", "Performance Optimization", "Monthly Reporting"]
  },
  {
    id: "creative-design",
    image: creativeDesignImg,
    label: "02",
    title: "Creative Design",
    description: "Premium visual content crafted to capture attention, strengthen brand identity, and create a lasting impression across all digital platforms.",
    features: ["Social Media Creatives", "Ad Design Concepts", "Brand Visual Assets", "Marketing Graphics", "Custom Visual Solutions"]
  },
  {
    id: "video-editing",
    image: videoEditingImg,
    label: "03",
    title: "Video Editing",
    description: "Professional video editing focused on creating engaging content that captures attention, increases retention, and drives audience action.",
    features: ["Reels Editing", "Short-Form Content", "Commercial Advertisements", "Motion Graphics", "Subtitle Integration"]
  },
  {
    id: "ad-account-setup",
    image: null,
    label: "04",
    title: "Ad Account Setup",
    description: "A complete setup service to ensure your advertising infrastructure is configured correctly and ready for scalable campaign performance.",
    features: ["Business Manager Setup", "Meta Pixel Installation", "Conversion Tracking", "Ad Account Configuration", "Audience Preparation"]
  }
];

export default function Services() {
  return (
    <div className="w-full pt-20">
      <section className="py-24 md:py-36 bg-background border-b border-border relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/8 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="text-primary text-sm font-bold tracking-widest uppercase mb-4">
            What We Offer
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground">
            Our Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Premium solutions designed to help your business grow.
          </motion.p>
        </div>
      </section>

      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-4 md:px-8 flex flex-col gap-28">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-14 items-center`}
            >
              <div className="flex-1 space-y-6">
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase">
                  Service {service.label}
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground leading-tight">
                  {service.title}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">{service.description}</motion.p>
                <motion.ul variants={fadeUp} className="space-y-4 pt-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-primary" size={14} />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeUp} className="pt-4">
                  <Button asChild size="lg" className="h-13 px-8 font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform duration-200">
                    <a href={`https://wa.me/201503770943?text=I am interested in your ${service.title} service`} target="_blank" rel="noopener noreferrer">
                      Get Started <ArrowRight className="ml-2" size={16} />
                    </a>
                  </Button>
                </motion.div>
              </div>

              <motion.div
                variants={imageVariants}
                className="flex-1 w-full"
              >
                {service.image ? (
                  <div className="relative rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 rounded-2xl pointer-events-none" />
                    <img src={service.image} alt={service.title} className="w-full h-auto object-contain rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]" loading="lazy" />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-card border border-border rounded-2xl overflow-hidden relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent" />
                    <div className="z-10 text-center p-10 space-y-4">
                      <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                        {["Business Manager", "Meta Pixel", "Conversion Tracking", "Ad Account"].map((item, i) => (
                          <div key={i} className="bg-background/80 border border-border rounded-xl p-4 text-center backdrop-blur-sm">
                            <div className="w-8 h-8 rounded-full bg-primary/20 mx-auto mb-2 flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-primary" />
                            </div>
                            <div className="text-xs font-semibold text-foreground leading-tight">{item}</div>
                          </div>
                        ))}
                      </div>
                      <div className="text-primary font-bold text-sm tracking-wide">Complete Setup Ready</div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/6 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold mb-6">Need a Custom Solution?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            We can combine our services to create a tailored growth engine for your specific business needs.
          </motion.p>
          <Button asChild size="lg" className="h-14 px-10 text-lg font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform duration-200">
            <a href="https://wa.me/201503770943" target="_blank" rel="noopener noreferrer">Talk To An Expert</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
