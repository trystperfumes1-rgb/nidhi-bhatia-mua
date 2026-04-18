import { motion } from "motion/react";

const LINKS = ["Services", "Portfolio", "About", "Testimonials", "Contact"];

function scrollTo(section: string) {
  const id = section.toLowerCase().replace(/\s/g, "-");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-luxury-950 overflow-hidden"
      style={{ borderTop: "1px solid rgba(139,92,246,0.12)" }}
      data-ocid="footer"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[200px] blur-[80px] rounded-full pointer-events-none"
        style={{ background: "rgba(139,92,246,0.07)" }}
      />
      <div
        className="absolute bottom-0 right-20 w-[300px] h-[200px] blur-[100px] rounded-full pointer-events-none"
        style={{ background: "rgba(109,40,217,0.05)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-3xl font-light gradient-gold-text mb-1 tracking-wide">
                Nidhi Bhatia
              </h3>
              <p className="section-eyebrow mb-5">
                Bridal Makeup Artist · Lucknow
              </p>
              <p className="text-sm text-foreground/50 leading-relaxed font-body max-w-xs">
                Transforming brides into timeless beauties with artistry,
                passion, and precision. Every look — a masterpiece.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-gold text-xs tracking-widest uppercase font-body font-semibold mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {LINKS.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link)}
                      className="text-sm text-foreground/50 hover:text-gold transition-smooth flex items-center gap-2 group cursor-pointer font-body bg-transparent border-0 p-0"
                    >
                      <span className="w-4 h-px bg-gold/40 group-hover:w-6 transition-all duration-300" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-gold text-xs tracking-widest uppercase font-body font-semibold mb-5">
                Visit Us
              </h4>
              <address className="not-italic space-y-3 text-sm text-foreground/50 font-body leading-relaxed">
                <p>
                  Ground Floor, SALON MAKEUP ACADEMY
                  <br />
                  CP-3, Aashiyana Chauraha,
                  <br />
                  near Power House Chauraha,
                  <br />
                  Sector G, LDA Colony,
                  <br />
                  Lucknow, UP 226012
                </p>
                <a
                  href="tel:+918112555544"
                  className="flex items-center gap-2 hover:text-gold transition-smooth group"
                  style={{ color: "rgba(168,85,247,0.8)" }}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  +91 81125 55544
                </a>
                <a
                  href="https://wa.me/918112555544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#25D366]/80 hover:text-[#25D366] transition-smooth"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </address>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/30 font-body">
          <p>
            © {year} Nidhi Bhatia — Bridal Makeup Artist. All rights reserved.
       <p className="text-xs text-white/30 flex items-center gap-1">
  © {year} AWM: Makeovers By Aastha · Lucknow
</p>

<p className="text-xs text-white/25">
  Designed & Developed by Kavya
</p>
        </div>
      </div>
    </footer>
  );
}
