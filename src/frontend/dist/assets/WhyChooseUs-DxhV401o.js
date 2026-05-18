import { j as jsxRuntimeExports, C as Canvas, m as motion, S as Sparkles, r as reactExports, u as useFrame, F as Float } from "./index-CfpckDaP.js";
function RotatingTorus({
  position,
  color,
  speed = 1,
  tubeRadius = 0.15
}) {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.35 * speed;
      ref.current.rotation.y = state.clock.elapsedTime * 0.25 * speed;
      ref.current.rotation.z = state.clock.elapsedTime * 0.1 * speed;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.5 * speed, floatIntensity: 1.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [0.65, tubeRadius, 16, 100] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meshStandardMaterial",
      {
        color,
        metalness: 0.95,
        roughness: 0.05,
        emissive: color,
        emissiveIntensity: 0.45,
        transparent: true,
        opacity: 0.85
      }
    )
  ] }) });
}
function FloatingStar({
  position,
  color
}) {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
      ref.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 2, floatIntensity: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("octahedronGeometry", { args: [0.3, 0] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meshStandardMaterial",
      {
        color,
        metalness: 1,
        roughness: 0,
        emissive: color,
        emissiveIntensity: 0.7
      }
    )
  ] }) });
}
function WhyScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.3 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [4, 4, 4], color: "#C49A6C", intensity: 2.5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-4, -2, 3], color: "#5C3D2E", intensity: 2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, -4, 2], color: "#E8D5B7", intensity: 1.2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sparkles,
      {
        count: 25,
        size: 1.8,
        scale: [14, 10, 6],
        speed: 0.3,
        opacity: 0.45,
        color: "#C49A6C"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RotatingTorus, { position: [-4, 2, -3], color: "#C49A6C" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RotatingTorus,
      {
        position: [4, -2, -4],
        color: "#C49A6C",
        speed: 1.3,
        tubeRadius: 0.1
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RotatingTorus, { position: [1, 3, -5], color: "#5C3D2E", speed: 0.8 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RotatingTorus,
      {
        position: [-2, -3, -4],
        color: "#E8D5B7",
        speed: 1.6,
        tubeRadius: 0.08
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RotatingTorus,
      {
        position: [3, 1, -3],
        color: "#5C3D2E",
        speed: 1.1,
        tubeRadius: 0.18
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingStar, { position: [-3, 0, -3], color: "#C49A6C" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingStar, { position: [2.5, -1, -2], color: "#E8D5B7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingStar, { position: [-1, 3.5, -4], color: "#C49A6C" })
  ] });
}
const REASONS = [
  {
    id: "experience",
    title: "8+ Years of Mastery",
    description: "Over 8 years of dedicated bridal makeup artistry, with advanced training in Mumbai's top institutes and hands-on experience with 500+ brides.",
    icon: "⏳",
    stat: "8+",
    statLabel: "Years"
  },
  {
    id: "premium",
    title: "Premium Products Only",
    description: "We exclusively use MAC, NARS, Charlotte Tilbury, Huda Beauty, and Armani — international luxury brands that photograph flawlessly in every lighting.",
    icon: "💎",
    stat: "100%",
    statLabel: "Luxury Brands"
  },
  {
    id: "celebrity",
    title: "Celebrity-Endorsed",
    description: "Trusted by Bollywood celebrities, television personalities, and prominent public figures for their most important appearances across India.",
    icon: "⭐",
    stat: "50+",
    statLabel: "Celebs"
  },
  {
    id: "airbrush",
    title: "Airbrush Expertise",
    description: "Certified in advanced airbrush makeup, HD techniques, and contouring methods that create a second-skin finish lasting 12+ hours.",
    icon: "🎨",
    stat: "12h+",
    statLabel: "Long-lasting"
  },
  {
    id: "personalized",
    title: "100% Personalized",
    description: "Every bride receives a dedicated pre-wedding consultation, skin analysis, and a bespoke look designed around her unique features and vision.",
    icon: "🌸",
    stat: "1:1",
    statLabel: "Consultation"
  },
  {
    id: "salon",
    title: "Premium Studio Setup",
    description: "State-of-the-art studio in Sai Nagar, Amravati with professional lighting, a hygiene-first approach, and a serene bridal experience.",
    icon: "🏛️",
    stat: "5★",
    statLabel: "Studio"
  }
];
function ReasonCard({ item, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.7, delay: index * 0.1 },
      whileHover: { y: -8, scale: 1.02, transition: { duration: 0.25 } },
      className: "glass border border-gold/12 hover:border-gold/30 rounded-2xl p-7 shadow-card-luxury hover:shadow-card-hover transition-smooth group premium-card",
      "data-ocid": `why.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-smooth animate-depth-pulse",
              style: { background: "rgba(196,154,108,0.12)" },
              children: item.icon
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground mb-2 tracking-wide", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/55 font-body leading-relaxed", children: item.description })
          ] })
        ] }),
        item.stat && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-gold/12 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-light gradient-gold-text", children: item.stat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/40 font-body tracking-widest uppercase", children: item.statLabel })
        ] })
      ]
    }
  );
}
function WhyChooseUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "why-choose-us",
      className: "relative py-28 bg-[#FAF7F2] overflow-hidden",
      "data-ocid": "why.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-25 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Canvas, { camera: { position: [0, 0, 8], fov: 55 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhyScene, {}) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -top-20 right-10 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none",
            style: { background: "rgba(196,154,108,0.08)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none",
            style: { background: "rgba(92,61,46,0.06)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/25 to-transparent" }),
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-eyebrow mb-4", children: "✦ Why Choose Us" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl font-light text-foreground mb-5 tracking-wide", children: [
                  "The ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-gold-text italic", children: "Snehal Pawar" }),
                  " ",
                  "Difference"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 font-body text-lg max-w-2xl mx-auto", children: "When you choose Snehal Pawar, you're not just booking a makeup artist — you're investing in a legacy of artistry, trust, and uncompromising excellence." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16", children: REASONS.map((reason, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReasonCard, { item: reason, index: i }, reason.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "grid grid-cols-3 gap-4 mt-8",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.8 },
              children: [
                {
                  src: "/assets/images/nidhi-doing-makeup.png",
                  alt: "Snehal Pawar at work"
                },
                {
                  src: "/assets/images/salon-interior.png",
                  alt: "Luxury salon interior"
                },
                {
                  src: "/assets/images/nail-art-gold.png",
                  alt: "Premium nail artistry"
                }
              ].map((img) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "relative rounded-xl overflow-hidden group",
                  style: { aspectRatio: "4/3" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: img.src,
                        alt: img.alt,
                        className: "w-full h-full object-cover transition-all duration-500 group-hover:scale-107",
                        loading: "lazy"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#3D2314]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 border border-gold/0 group-hover:border-gold/25 rounded-xl transition-all duration-300" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        style: { boxShadow: "inset 0 0 30px rgba(196,154,108,0.15)" }
                      }
                    )
                  ]
                },
                img.src
              ))
            }
          )
        ] })
      ]
    }
  );
}
export {
  WhyChooseUs as default
};
