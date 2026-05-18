import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./index-CfpckDaP.js";
const REVIEWS = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Amravati, MH",
    rating: 5,
    text: "Snehal di made my wedding day absolutely magical. My makeup lasted 14 hours through tears, dancing, and everything in between. Every photo is stunning. She truly understood my vision and executed it to perfection.",
    service: "Bridal Makeup",
    date: "December 2024"
  },
  {
    id: "2",
    name: "Ananya Gupta",
    location: "Nagpur, MH",
    rating: 5,
    text: "I had my engagement and wedding makeup both done by Snehal. The transformation was beyond what I imagined — I literally didn't recognize myself in the mirror (in the best way). She's a true artist!",
    service: "Bridal & Engagement",
    date: "November 2024"
  },
  {
    id: "3",
    name: "Riya Malhotra",
    location: "Delhi, NCR",
    rating: 5,
    text: "Snehal is THE best bridal makeup artist I've ever come across. Her attention to detail is incredible. The airbrush technique she used for my wedding was flawless in all 4K photos. 1000% recommend.",
    service: "Airbrush Bridal",
    date: "October 2024"
  },
  {
    id: "4",
    name: "Sunita Verma",
    location: "Amravati, MH",
    rating: 5,
    text: "I was very nervous about my bridal look but Snehal put me completely at ease. She took time to understand my preferences and the result was exactly what I dreamed of. Professional, warm, and incredibly talented.",
    service: "Bridal Makeup",
    date: "September 2024"
  },
  {
    id: "5",
    name: "Kavitha Iyer",
    location: "Bengaluru (Destination Wedding in Amravati)",
    rating: 5,
    text: "We came all the way from Bangalore for our Amravati wedding and specifically chose Snehal based on her Instagram portfolio. She exceeded every expectation. My South Indian bridal look was absolutely stunning!",
    service: "South Indian Bridal",
    date: "August 2024"
  },
  {
    id: "6",
    name: "Meera Saxena",
    location: "Amravati, MH",
    rating: 5,
    text: "I've been going to Snehal for all my events for 3 years. Whether it's a party, sangeet or wedding — she always delivers. Her salon is beautiful, hygienic and she's always on time. Best investment!",
    service: "Regular Client",
    date: "July 2024"
  }
];
function StarRating({ rating }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: ["s1", "s2", "s3", "s4", "s5"].map((k, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      className: i < rating ? "text-gold" : "text-foreground/20",
      initial: { scale: 0 },
      animate: { scale: 1 },
      transition: { delay: i * 0.08, duration: 0.3 },
      children: "★"
    },
    k
  )) });
}
function ReviewCard({ review, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.7, delay: index * 0.1 },
      whileHover: { y: -6, transition: { duration: 0.25 } },
      className: "glass border border-gold/12 hover:border-gold/25 rounded-2xl p-7 shadow-card-luxury hover:shadow-card-hover transition-smooth h-full flex flex-col premium-card",
      "data-ocid": `testimonials.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl text-gold/30 leading-none mb-4 select-none animate-pulse-gentle", children: '"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 font-body text-sm leading-relaxed flex-1 mb-6 italic", children: review.text }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-gold/12 pt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base font-semibold text-foreground tracking-wide", children: review.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/40 font-body mt-0.5", children: review.location }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gold/65 font-body tracking-wider uppercase mt-1 font-semibold", children: review.service })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: review.rating }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-foreground/30 font-body", children: review.date })
          ] })
        ] }) })
      ]
    }
  );
}
function Testimonials() {
  const [expanded, setExpanded] = reactExports.useState(false);
  const visibleReviews = expanded ? REVIEWS : REVIEWS.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "testimonials",
      className: "relative py-28 bg-[#FAF7F2] overflow-hidden",
      "data-ocid": "testimonials.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] pointer-events-none",
            style: { background: "rgba(196,154,108,0.07)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/25 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-20 right-0 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none",
            style: { background: "rgba(196,154,108,0.06)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-16",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.7 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-eyebrow mb-4", children: "✦ Client Love" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl font-light text-foreground mb-5 tracking-wide", children: [
                  "What",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-rose-gold-text italic", children: "Brides Say" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: ["a1", "a2", "a3", "a4", "a5"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-xl animate-twinkle", children: "★" }, k)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-semibold gradient-gold-text", children: "5.0 / 5.0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/40 font-body", children: "Based on 500+ happy brides" })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10",
              children: visibleReviews.map((review, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewCard, { review, index: i }, review.id))
            },
            expanded ? "expanded" : "collapsed"
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "text-center",
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setExpanded(!expanded),
                  className: "px-8 py-3.5 rounded-full glass border border-gold/22 text-gold font-body font-semibold text-sm hover:border-gold/45 hover:shadow-glow-subtle transition-smooth",
                  "data-ocid": "testimonials.toggle_button",
                  children: expanded ? "Show Less" : "Read More Reviews"
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
export {
  Testimonials as default
};
