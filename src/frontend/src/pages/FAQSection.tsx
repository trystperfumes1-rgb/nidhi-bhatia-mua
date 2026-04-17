import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { FAQ } from "../types";

const FAQS: FAQ[] = [
  {
    id: "1",
    question: "How far in advance should I book for bridal makeup?",
    answer:
      "We strongly recommend booking at least 3-6 months in advance for wedding dates, especially during peak wedding season (Oct-Feb). For engagement or party makeup, 2-4 weeks in advance is usually sufficient. To secure your preferred date, reach out as early as possible.",
    category: "Booking",
  },
  {
    id: "2",
    question: "Do you offer a makeup trial before the wedding?",
    answer:
      "Absolutely! A makeup trial is included in all bridal packages and highly recommended. The trial session (typically 2-3 hours) allows us to experiment with your look, understand your preferences, check how products react with your skin, and ensure you love the final result on your wedding day.",
    category: "Services",
  },
  {
    id: "3",
    question: "What makeup brands do you use?",
    answer:
      "We exclusively use premium international brands including MAC, NARS, Charlotte Tilbury, Huda Beauty, Giorgio Armani, Dior, and Kryolan Professional. All products are tested for long-wear, high-definition photography, and all skin types. We never compromise on product quality.",
    category: "Products",
  },
  {
    id: "4",
    question: "Do you provide home service / travel to the venue?",
    answer:
      "Yes, we offer home service and venue visits within Lucknow and nearby areas. Travel charges apply for locations outside the city. For destination weddings, travel, accommodation, and additional fees will be discussed during consultation. Please mention your venue when inquiring.",
    category: "Services",
  },
  {
    id: "5",
    question: "How long will the bridal makeup last?",
    answer:
      "Our bridal makeup is specifically formulated for long wear — typically 12-16 hours depending on skin type and conditions. We use setting sprays, primers, and HD products that maintain their integrity through ceremonies, photos, dancing, and emotional moments throughout your big day.",
    category: "Products",
  },
  {
    id: "6",
    question: "Do you work with all skin tones?",
    answer:
      "Absolutely. We proudly celebrate all skin tones and have extensive product ranges for every complexion — from the fairest to the deepest skin tones. Our approach is inclusive and personalized — we match, enhance, and celebrate your unique beauty.",
    category: "Services",
  },
  {
    id: "7",
    question: "What is your payment and cancellation policy?",
    answer:
      "We require a 30% advance booking fee to secure your date. The balance is due on the day of service. Cancellations made 7+ days before the appointment receive a 50% refund of the advance. Cancellations within 7 days are non-refundable, but the booking can be rescheduled once.",
    category: "Booking",
  },
  {
    id: "8",
    question: "Can I see photos of your previous work?",
    answer:
      "Of course! You can view our extensive portfolio on our website and our Instagram page. We also have detailed lookbooks at the salon for each service category. We encourage all clients to share their preferred styles so we can create a fully personalized reference board.",
    category: "Portfolio",
  },
];

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border rounded-xl overflow-hidden transition-smooth"
      style={{
        borderColor: open ? "rgba(139,92,246,0.3)" : "rgba(139,92,246,0.12)",
      }}
      data-ocid={`faq.item.${index + 1}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left glass group transition-smooth"
        style={{ background: open ? "rgba(139,92,246,0.04)" : undefined }}
        aria-expanded={open}
        data-ocid={`faq.toggle.${index + 1}`}
      >
        <span className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-smooth tracking-wide">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-gold font-light text-lg leading-none"
          style={{ borderColor: "rgba(139,92,246,0.35)" }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6 pt-2 border-t"
              style={{
                background: "rgba(139,92,246,0.03)",
                borderColor: "rgba(139,92,246,0.1)",
              }}
            >
              <p className="text-sm text-foreground/65 font-body leading-relaxed">
                {faq.answer}
              </p>
              {faq.category && (
                <span
                  className="inline-block mt-3 px-2.5 py-1 rounded-full text-[10px] tracking-widest uppercase font-body font-semibold"
                  style={{
                    background: "rgba(139,92,246,0.08)",
                    border: "1px solid rgba(139,92,246,0.18)",
                    color: "rgba(168,85,247,0.75)",
                  }}
                >
                  {faq.category}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative py-28 bg-section-dark overflow-hidden"
      data-ocid="faq.section"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(139,92,246,0.05)" }}
      />
      <div
        className="absolute top-20 left-0 w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(109,40,217,0.04)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow mb-4">✦ FAQ</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-5 tracking-wide">
            <span className="gradient-gold-text italic">Questions</span>{" "}
            Answered
          </h2>
          <p className="text-foreground/50 font-body text-lg">
            Everything you need to know before your appointment.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.id} faq={faq} index={i} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12 glass rounded-2xl p-8"
          style={{ border: "1px solid rgba(139,92,246,0.18)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-foreground/60 font-body mb-4">
            Still have questions? We'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/918112555544"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-[#25D366] text-white font-body font-semibold text-sm hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-smooth"
              data-ocid="faq.whatsapp_button"
            >
              Ask on WhatsApp
            </a>
            <a
              href="tel:+918112555544"
              className="px-7 py-3 rounded-full gradient-gold text-white font-body font-semibold text-sm shadow-glow-subtle hover:shadow-glow-gold transition-smooth"
              data-ocid="faq.call_button"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
