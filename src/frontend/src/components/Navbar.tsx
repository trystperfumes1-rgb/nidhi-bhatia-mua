import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#why-choose-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark shadow-glow-subtle border-b py-3"
          : "bg-transparent py-5"
      }`}
      style={scrolled ? { borderBottomColor: "rgba(139,92,246,0.12)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          type="button"
          onClick={() => scrollToSection("#hero")}
          className="flex flex-col leading-none cursor-pointer bg-transparent border-0 p-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          data-ocid="navbar.logo_link"
        >
          <span className="font-display text-2xl font-light tracking-widest gradient-gold-text">
            Nidhi Bhatia
          </span>
          <span
            className="text-[0.6rem] tracking-[0.3em] uppercase font-body"
            style={{ color: "rgba(168,85,247,0.65)" }}
          >
            Bridal Makeup Artist
          </span>
        </motion.button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-sm text-foreground/70 hover:text-gold transition-smooth relative group cursor-pointer font-body"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
              data-ocid={`navbar.link.${i + 1}`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-gold to-rose-gold group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.button
            type="button"
            onClick={() => scrollToSection("#contact")}
            className="ml-2 px-5 py-2.5 rounded-full text-sm font-semibold font-body tracking-wider gradient-gold text-white shadow-glow-gold hover:shadow-glow-elevated transition-smooth"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            data-ocid="navbar.book_now_button"
          >
            Book Now
          </motion.button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="navbar.menu_toggle"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ background: "#a855f7" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "#a855f7" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: "#a855f7" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden glass-dark border-t px-6 py-6"
            style={{ borderTopColor: "rgba(139,92,246,0.12)" }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                    setMenuOpen(false);
                  }}
                  className="text-foreground/80 hover:text-gold transition-smooth font-body text-sm tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  scrollToSection("#contact");
                  setMenuOpen(false);
                }}
                className="mt-2 px-5 py-2.5 rounded-full text-sm font-semibold gradient-gold text-white shadow-glow-gold w-full font-body"
                data-ocid="navbar.mobile_book_now_button"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
