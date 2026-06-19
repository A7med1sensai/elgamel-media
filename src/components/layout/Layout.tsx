import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoEm from "@assets/logo-em.png";

/* ── Loading Screen ── */
function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-8"
      >
        <img
          src={logoEm}
          alt="Elgamel Media"
          className="w-28 h-28 object-contain drop-shadow-2xl"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-primary font-extrabold text-xl tracking-widest uppercase font-[Manrope]"
        >
          Elgamel Media
        </motion.p>
        {/* Progress bar */}
        <div className="w-48 h-0.5 bg-border rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="h-full bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Navbar ── */
function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-background/92 backdrop-blur-lg border-b border-primary/15 shadow-md shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" data-testid="link-logo">
          <img
            src={logoEm}
            alt="Elgamel Media Logo"
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200"
          />
          <span className="text-xl font-extrabold text-primary tracking-tight font-[Manrope] hidden sm:block">
            Elgamel Media
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-semibold transition-colors duration-200 relative group ${
                location === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-200 ${location === link.path ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button
            asChild
            className="font-semibold tracking-wide shadow-lg shadow-primary/15 hover:-translate-y-0.5 transition-transform duration-200 font-[Manrope]"
          >
            <a
              href="https://wa.me/201503770943"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-nav-cta"
            >
              Book A Consultation
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-card transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background/97 backdrop-blur-xl border-b border-primary/15 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-base font-semibold py-3 px-4 rounded-xl transition-colors ${
                    location === link.path
                      ? "text-primary bg-primary/8"
                      : "text-muted-foreground hover:text-foreground hover:bg-card"
                  }`}
                  data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full mt-3 font-semibold font-[Manrope]"
              >
                <a
                  href="https://wa.me/201503770943"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-mobile-cta"
                >
                  Book A Consultation
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="bg-secondary border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <img src={logoEm} alt="Elgamel Media" className="w-10 h-10 object-contain" />
              <span className="text-xl font-extrabold text-primary tracking-tight font-[Manrope]">Elgamel Media</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Premium Meta Ads Management, Creative Design, and Video Editing services for businesses looking to grow and scale.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-extrabold text-base mb-5 text-foreground font-[Manrope]">Services</h3>
            <ul className="space-y-3">
              {["Meta Ads Management", "Creative Design", "Video Editing", "Ad Account Setup"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-extrabold text-base mb-5 text-foreground font-[Manrope]">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:a7medmelgamel@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  a7medmelgamel@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+201503770943" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +20 150 377 0943
                </a>
              </li>
              <li className="text-muted-foreground text-sm">Egypt</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Elgamel Media. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["/", "/services", "/packages", "/contact"].map((path, i) => (
              <Link key={i} href={path} className="text-muted-foreground hover:text-primary transition-colors text-xs">
                {["Home", "Services", "Packages", "Contact"][i]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── WhatsApp Floating Button ── */
function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/201503770943"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-7 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-xl shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform duration-200"
      aria-label="Contact us on WhatsApp"
      data-testid="button-whatsapp-float"
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.96 }}
    >
      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </motion.a>
  );
}

/* ── Layout ── */
export default function Layout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-[100dvh] flex flex-col font-sans">
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
}
