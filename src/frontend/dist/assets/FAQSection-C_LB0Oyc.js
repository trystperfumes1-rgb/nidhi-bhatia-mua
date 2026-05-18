import { j as jsxRuntimeExports, m as motion, r as reactExports, A as AnimatePresence } from "./index-CfpckDaP.js";
const FAQS = [
  {
    id: "1",
    question: "How far in advance should I book for bridal makeup?",
    answer: "We strongly recommend booking at least 3-6 months in advance for wedding dates, especially during peak wedding season (Oct-Feb). For engagement or party makeup, 2-4 weeks in advance is usually sufficient. To secure your preferred date, reach out as early as possible.",
    category: "Booking"
  },
  {
    id: "2",
    question: "Do you offer a makeup trial before the wedding?",
    answer: "Absolutely! A makeup trial is included in all bridal packages and highly recommended. The trial session (typically 2-3 hours) allows us to experiment with your look, understand your preferences, check how products react with your skin, and ensure you love the final result on your wedding day.",
    category: "Services"
  },
  {
    id: "3",
    question: "What makeup brands do you use?",
    answer: "We exclusively use premium international brands including MAC, NARS, Charlotte Tilbury, Huda Beauty, Giorgio Armani, Dior, and Kryolan Professional. All products are tested for long-wear, high-definition photography, and all skin types. We never compromise on product quality.",
    category: "Products"
  },
  {
    id: "4",
    question: "Do you provide home service / travel to the venue?",
    answer: "Yes, we offer home service and venue visits within Amravati and nearby areas. Travel charges apply for locations outside the city. For destination weddings, travel, accommodation, and additional fees will be discussed during consultation. Please mention your venue when inquiring.",
    category: "Services"
  },
  {
    id: "5",
    question: "How long will the bridal makeup last?",
    answer: "Our bridal makeup is specifically formulated for long wear — typically 12-16 hours depending on skin type and conditions. We use setting sprays, primers, and HD products that maintain their integrity through ceremonies, photos, dancing, and emotional moments throughout your big day.",
    category: "Products"
  },
  {
    id: "6",
    question: "Do you work with all skin tones?",
    answer: "Absolutely. We proudly celebrate all skin tones and have extensive product ranges for every complexion — from the fairest to the deepest skin tones. Our approach is inclusive and personalized — we match, enhance, and celebrate your unique beauty.",
    category: "Services"
  },
  {
    id: "7",
    question: "What is your payment and cancellation policy?",
    answer: "We require a 30% advance booking fee to secure your date. The balance is due on the day of service. Cancellations made 7+ days before the appointment receive a 50% refund of the advance. Cancellations within 7 days are non-refundable, but the booking can be rescheduled once.",
    category: "Booking"
  },
  {
    id: "8",
    question: "Can I see photos of your previous work?",
    answer: "Of course! You can view our extensive portfolio on our website and our Instagram page. We also have detailed lookbooks at the salon for each service category. We encourage all clients to share their preferred styles so we can create a fully personalized reference board.",
    category: "Portfolio"
  }
];
function FAQItem({ faq, index }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.07 },
      className: "border rounded-xl overflow-hidden transition-smooth",
      style: {
        borderColor: open ? "rgba(196,154,108,0.3)" : "rgba(196,154,108,0.12)"
      },
      "data-ocid": `faq.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpen(!open),
            className: "w-full flex items-center justify-between gap-4 p-6 text-left glass group transition-smooth",
            style: { background: open ? "rgba(196,154,108,0.05)" : void 0 },
            "aria-expanded": open,
            "data-ocid": `faq.toggle.${index + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-semibold text-foreground group-hover:text-gold transition-smooth tracking-wide", children: faq.question }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  animate: { rotate: open ? 45 : 0 },
                  transition: { duration: 0.3 },
                  className: "flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-gold font-light text-lg leading-none",
                  style: { borderColor: "rgba(196,154,108,0.35)" },
                  children: "+"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.35, ease: "easeInOut" },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "px-6 pb-6 pt-2 border-t",
                style: {
                  background: "rgba(196,154,108,0.04)",
                  borderColor: "rgba(196,154,108,0.1)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/65 font-body leading-relaxed", children: faq.answer }),
                  faq.category && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "inline-block mt-3 px-2.5 py-1 rounded-full text-[10px] tracking-widest uppercase font-body font-semibold",
                      style: {
                        background: "rgba(196,154,108,0.08)",
                        border: "1px solid rgba(196,154,108,0.18)",
                        color: "rgba(196,154,108,0.85)"
                      },
                      children: faq.category
                    }
                  )
                ]
              }
            )
          }
        ) })
      ]
    }
  );
}
function FAQSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "faq",
      className: "relative py-28 bg-[#F5EDE0] overflow-hidden",
      "data-ocid": "faq.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none",
            style: { background: "rgba(196,154,108,0.06)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-20 left-0 w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none",
            style: { background: "rgba(196,154,108,0.05)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-14",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.7 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-eyebrow mb-4", children: "✦ FAQ" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl font-light text-foreground mb-5 tracking-wide", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-gold-text italic", children: "Questions" }),
                  " ",
                  "Answered"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 font-body text-lg", children: "Everything you need to know before your appointment." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: FAQS.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { faq, index: i }, faq.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mt-12 glass rounded-2xl p-8",
              style: { border: "1px solid rgba(196,154,108,0.18)" },
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 font-body mb-4", children: "Still have questions? We'd love to hear from you." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "https://wa.me/919561548151",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "px-7 py-3 rounded-full bg-[#25D366] text-white font-body font-semibold text-sm hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-smooth",
                      "data-ocid": "faq.whatsapp_button",
                      children: "Ask on WhatsApp"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "tel:+919561548151",
                      className: "px-7 py-3 rounded-full gradient-gold text-white font-body font-semibold text-sm shadow-glow-subtle hover:shadow-glow-gold transition-smooth",
                      "data-ocid": "faq.call_button",
                      children: "Call Us Now"
                    }
                  )
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  FAQSection as default
};
