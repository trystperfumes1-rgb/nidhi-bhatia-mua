import { r as reactExports, j as jsxRuntimeExports, m as motion, A as AnimatePresence } from "./index-C50xJWGr.js";
const CATEGORIES = ["All", "Bridal", "Editorial", "Party", "Celebrity"];
const PORTFOLIO = [
  {
    id: "1",
    image: "/assets/images/bride-green-tikka.png",
    title: "Royal Bridal Look",
    category: "Bridal",
    alt: "Bride with green tikka and elaborate bridal makeup"
  },
  {
    id: "2",
    image: "/assets/images/bride-cream-lehenga.png",
    title: "Cream Elegance",
    category: "Bridal",
    alt: "Bride in cream lehenga with classic bridal makeup"
  },
  {
    id: "3",
    image: "/assets/images/nidhi-doing-makeup.png",
    title: "The Artist at Work",
    category: "Editorial",
    alt: "Nidhi Bhatia applying makeup to a client"
  },
  {
    id: "4",
    image: "/assets/images/bride-red-nath.png",
    title: "Crimson Nath Bride",
    category: "Bridal",
    alt: "Bride with red nath and dramatic bridal makeup"
  },
  {
    id: "5",
    image: "/assets/images/nidhi-makeup-red-bride.png",
    title: "Red Lehenga Drama",
    category: "Celebrity",
    alt: "Celebrity bridal makeup with red lehenga"
  },
  {
    id: "6",
    image: "/assets/images/bride-elaborate-jewellery.png",
    title: "Jewel Queen",
    category: "Bridal",
    alt: "Bride with elaborate jewellery and flawless bridal makeup"
  },
  {
    id: "7",
    image: "/assets/images/nail-art-gold.png",
    title: "Artisan Nail Design",
    category: "Party",
    alt: "Premium nail art design"
  },
  {
    id: "8",
    image: "/assets/images/salon-interior.png",
    title: "Luxury Studio",
    category: "Editorial",
    alt: "Nidhi Bhatia salon interior"
  }
];
function Portfolio() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [hoveredId, setHoveredId] = reactExports.useState(null);
  const filtered = activeCategory === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === activeCategory);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "portfolio",
      className: "relative py-28 bg-luxury-950 overflow-hidden",
      "data-ocid": "portfolio.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -bottom-40 left-0 w-[600px] h-[400px] rounded-full blur-[100px] pointer-events-none",
            style: { background: "rgba(139,92,246,0.05)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/18 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-14",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.7 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-eyebrow mb-4", children: "✦ Portfolio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl font-light text-foreground mb-5 tracking-wide", children: [
                  "Artistry in",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-gold-text italic", children: "Motion" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 font-body text-lg max-w-2xl mx-auto", children: "Each photograph captures a moment of transformation — from canvas to breathtaking reality." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "flex flex-wrap justify-center gap-3 mb-12",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.2 },
              children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveCategory(cat),
                  className: `px-5 py-2 rounded-full text-sm font-body font-semibold tracking-wider transition-smooth ${activeCategory === cat ? "gradient-gold text-white shadow-glow-subtle" : "glass text-foreground/60 hover:text-gold"}`,
                  style: activeCategory !== cat ? { border: "1px solid rgba(139,92,246,0.18)" } : {},
                  "data-ocid": `portfolio.filter.${cat.toLowerCase()}`,
                  children: cat
                },
                cat
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              layout: true,
              className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  layout: true,
                  initial: { opacity: 0, scale: 0.85 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.85 },
                  transition: { duration: 0.4, delay: i * 0.06 },
                  className: "relative group cursor-pointer rounded-xl overflow-hidden",
                  style: { aspectRatio: i % 5 === 0 ? "1/1.4" : "1/1" },
                  onMouseEnter: () => setHoveredId(item.id),
                  onMouseLeave: () => setHoveredId(null),
                  "data-ocid": `portfolio.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: item.image,
                        alt: item.alt,
                        className: "w-full h-full object-cover transition-all duration-500 group-hover:scale-110",
                        loading: "lazy"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: hoveredId === item.id && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className: "absolute inset-0 flex flex-col justify-end p-4",
                        style: {
                          background: "linear-gradient(to top, rgba(10,8,20,0.92) 0%, rgba(10,8,20,0.4) 50%, transparent 100%)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-gold tracking-widest uppercase font-body mb-1 font-semibold", children: item.category }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm text-foreground font-semibold tracking-wide", children: item.title })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute inset-0 rounded-xl transition-all duration-300",
                        style: {
                          border: hoveredId === item.id ? "1px solid rgba(139,92,246,0.28)" : "1px solid transparent"
                        }
                      }
                    ),
                    hoveredId === item.id && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute inset-0 pointer-events-none",
                        style: {
                          boxShadow: "inset 0 0 25px rgba(139,92,246,0.12)"
                        }
                      }
                    )
                  ]
                },
                item.id
              )) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "text-center mt-14",
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "https://www.instagram.com/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-3 px-8 py-3.5 rounded-full glass text-gold font-body font-semibold text-sm hover:shadow-glow-subtle transition-smooth group",
                  style: { border: "1px solid rgba(139,92,246,0.22)" },
                  "data-ocid": "portfolio.instagram_link",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        viewBox: "0 0 24 24",
                        className: "w-4 h-4 fill-current",
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" })
                      }
                    ),
                    "See More on Instagram"
                  ]
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
  Portfolio as default
};
