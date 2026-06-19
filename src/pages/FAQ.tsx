import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "Elgamel Media provides Meta Ads Management, Creative Design, Video Editing, and Ad Account Setup services."
  },
  {
    question: "Do I need a large advertising budget?",
    answer: "No. We work with businesses of different sizes and can help you create a strategy that fits your budget."
  },
  {
    question: "How long does it take to see results?",
    answer: "Results depend on your industry, offer, and advertising budget. Most campaigns require testing and optimization."
  },
  {
    question: "Do you create ad creatives as well?",
    answer: "Yes. We provide professional ad designs and video creatives."
  },
  {
    question: "Do you work outside Egypt?",
    answer: "Yes. We work with businesses across the Arab world."
  },
  {
    question: "What platforms do you advertise on?",
    answer: "We currently specialize in Facebook and Instagram advertising."
  },
  {
    question: "How do we get started?",
    answer: "Contact us through WhatsApp or the contact form."
  },
  {
    question: "Do you offer one-time services?",
    answer: "Yes. We offer one-time creative and setup services."
  },
  {
    question: "Will I receive reports?",
    answer: "Yes. Clients receive regular performance reports."
  },
  {
    question: "What makes Elgamel Media different?",
    answer: "We combine advertising, design, and video content into one premium solution."
  }
];

export default function FAQ() {
  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Everything you need to know before working with Elgamel Media.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-bold text-lg text-foreground hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Our team is ready to answer any specific inquiries about your business.
          </p>
          <Button asChild size="lg" className="h-14 px-10 text-lg font-bold">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}