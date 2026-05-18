import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Academy", href: "#academy" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Book", href: "#book" },
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
          ? "bg-[rgba(250,247,242,0.97)] shadow-md border-b py-3"
          : "bg-transparent py-5"
      }`}
      style={scrolled ? { borderBottomColor: "rgba(196,154,108,0.2)" } : {}}
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
          <span className="font-display text-xl font-semibold tracking-wide gradient-gold-text">
            Makeup by Snehal Pawar
          </span>
          <span
            className="text-[0.58rem] tracking-[0.25em] uppercase font-body"
            style={{ color: "rgba(196,154,108,0.75)" }}
          >
            Beauty & Bridal Salon · Amravati
          </span>
        </motion.button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5">
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
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
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
          className="lg:hidden flex flex-col gap-1.5 p-3 min-h-[44px] min-w-[44px] items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="navbar.menu_toggle"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ background: "#5C3D2E" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "#5C3D2E" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: "#5C3D2E" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden border-t"
            style={{
              background: "rgba(250,247,242,0.98)",
              borderTopColor: "rgba(196,154,108,0.2)",
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                    setMenuOpen(false);
                  }}
                  className="py-3 px-2 text-foreground/80 hover:text-gold hover:bg-[#EFE3D0] rounded-lg transition-smooth font-body text-sm tracking-wide min-h-[48px] flex items-center"
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
                className="mt-3 px-5 py-3 rounded-full text-sm font-semibold gradient-gold text-white w-full font-body min-h-[48px]"
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
