import { j as jsxRuntimeExports, C as Canvas, m as motion, S as Sparkles, r as reactExports, u as useFrame, F as Float } from "./index-C50xJWGr.js";
function PurpleCrystal({
  position,
  speed = 1
}) {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35 * speed) * 0.15;
      ref.current.rotation.z = state.clock.elapsedTime * 0.1 * speed;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.5 * speed, floatIntensity: 1.8, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("octahedronGeometry", { args: [0.75, 0] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meshStandardMaterial",
      {
        color: "#8b5cf6",
        metalness: 1,
        roughness: 0,
        emissive: "#8b5cf6",
        emissiveIntensity: 0.55,
        transparent: true,
        opacity: 0.9
      }
    )
  ] }) });
}
function PurpleDodecahedron({
  position
}) {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 2, floatIntensity: 1.5, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dodecahedronGeometry", { args: [0.5, 0] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meshStandardMaterial",
      {
        color: "#a855f7",
        metalness: 0.95,
        roughness: 0.05,
        emissive: "#7c3aed",
        emissiveIntensity: 0.4,
        transparent: true,
        opacity: 0.85
      }
    )
  ] }) });
}
function CelebScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.45 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [5, 5, 3], color: "#a855f7", intensity: 3.5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-5, -3, 2], color: "#7c3aed", intensity: 2.5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, 3, 4], color: "#c084fc", intensity: 1.5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sparkles,
      {
        count: 60,
        size: 2.5,
        scale: [14, 10, 8],
        speed: 0.35,
        opacity: 0.85,
        color: "#a855f7"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sparkles,
      {
        count: 30,
        size: 1.5,
        scale: [10, 7, 5],
        speed: 0.55,
        opacity: 0.5,
        color: "#c084fc"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PurpleCrystal, { position: [-4, 2, -3] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PurpleCrystal, { position: [4, -1, -4], speed: 1.3 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PurpleCrystal, { position: [0, 3, -5], speed: 0.8 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PurpleDodecahedron, { position: [-1.5, -2.5, -3] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PurpleDodecahedron, { position: [2.5, 2, -4] })
  ] });
}
const CELEBRITIES = [
  {
    id: "celeb1",
    name: "Bollywood Film Set",
    title: "Lead Actress Transformation",
    description: "Crafted a complete cinematic makeup look for a lead actress for a major Bollywood production. The look was praised by the film's director for its authenticity and camera-readiness.",
    tags: ["Film Makeup", "HD Technique", "Bollywood"]
  },
  {
    id: "celeb2",
    name: "Television Celebrity",
    title: "Award Night Glamour",
    description: "Dressed a popular TV personality for a national awards ceremony in Mumbai. The look — featuring dramatic eyes and flawless skin — was featured in multiple national fashion magazines.",
    tags: ["Award Show", "Editorial", "Magazine Feature"]
  },
  {
    id: "celeb3",
    name: "Social Media Influencer",
    title: "Brand Campaign Shoot",
    description: "Partnered with a top-tier beauty influencer (5M+ followers) for a luxury brand campaign shoot. The makeup was specifically designed to shine under studio lighting and 4K cameras.",
    tags: ["Campaign", "Brand Collab", "Influencer"]
  },
  {
    id: "celeb4",
    name: "Political Dignitary",
    title: "State Function Appearance",
    description: "Provided exclusive makeup artistry for a prominent political personality for high-profile state functions and press conferences across Uttar Pradesh.",
    tags: ["VIP Client", "State Event", "Exclusive"]
  }
];
function CelebrityWork() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "celebrity",
      className: "relative py-28 bg-section-dark overflow-hidden",
      "data-ocid": "celebrity.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-35 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Canvas, { camera: { position: [0, 0, 8], fov: 55 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CelebScene, {}) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-luxury-950/40 via-transparent to-luxury-950/40 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.04) 0%, transparent 70%)"
            }
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-eyebrow mb-4", children: "✦ Celebrity Work" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl font-light text-foreground mb-5 tracking-wide", children: [
                  "Trusted by ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-gold-text italic", children: "Stars" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 font-body text-lg max-w-2xl mx-auto", children: "From Bollywood film sets to national television — Nidhi Bhatia's artistry has graced the faces of some of India's most celebrated personalities." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "relative rounded-2xl overflow-hidden mb-14 border border-gold/25 shadow-glow-gold",
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { duration: 0.8 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-luxury-950 via-luxury-800/80 to-luxury-950" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0",
                    style: {
                      background: "linear-gradient(135deg, rgba(139,92,246,0.06) 0%, transparent 50%, rgba(109,40,217,0.06) 100%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 p-10 md:p-16 items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-eyebrow mb-4", children: "Behind the Glamour" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-4xl md:text-5xl font-light text-foreground mb-5 tracking-wide", children: [
                      "Where ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "gradient-gold-text", children: "art meets" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      " celebrity"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 font-body leading-relaxed mb-7", children: "Nidhi Bhatia has built a reputation as one of Lucknow's most sought-after makeup artists for celebrity clientele. Her eye for detail, speed of execution, and mastery of photogenic finishes have earned her trusted partnerships with film productions, television channels, and luxury brands." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-6", children: [
                      { num: "50+", label: "Celebrity Clients" },
                      { num: "15+", label: "Productions" },
                      { num: "5", label: "Awards Won" }
                    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-light gradient-gold-text animate-depth-pulse", children: s.num }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/40 tracking-widest uppercase font-body", children: s.label })
                    ] }, s.label)) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                      "/assets/images/nidhi-makeup-red-bride.png",
                      "/assets/images/bride-elaborate-jewellery.png",
                      "/assets/images/bride-red-nath.png",
                      "/assets/images/bride-green-tikka.png"
                    ].map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        className: "relative rounded-xl overflow-hidden border border-gold/12",
                        style: { aspectRatio: "3/4" },
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true },
                        transition: { duration: 0.5, delay: i * 0.1 },
                        whileHover: {
                          scale: 1.04,
                          boxShadow: "0 0 30px rgba(139,92,246,0.25)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "img",
                            {
                              src,
                              alt: `Celebrity makeup work ${i + 1}`,
                              className: "w-full h-full object-cover",
                              loading: "lazy"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-luxury-950/65 to-transparent" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300",
                              style: { background: "rgba(139,92,246,0.08)" }
                            }
                          )
                        ]
                      },
                      src
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute inset-0 rounded-2xl -z-10 blur-3xl",
                        style: { background: "rgba(139,92,246,0.07)" }
                      }
                    )
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: CELEBRITIES.map((work, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.7, delay: i * 0.1 },
              whileHover: { y: -6 },
              className: "glass border border-gold/12 hover:border-gold/28 rounded-2xl p-7 shadow-card-luxury hover:shadow-card-hover transition-smooth group premium-card",
              "data-ocid": `celebrity.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0", children: work.name.charAt(0) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold text-xs tracking-widest uppercase font-body font-semibold", children: work.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-xl text-foreground font-semibold mt-0.5 tracking-wide", children: work.title })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/55 font-body leading-relaxed mb-5", children: work.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: work.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-3 py-1 rounded-full border text-xs font-body tracking-wide",
                    style: {
                      background: "rgba(139,92,246,0.08)",
                      borderColor: "rgba(139,92,246,0.18)",
                      color: "rgba(168,85,247,0.75)"
                    },
                    children: tag
                  },
                  tag
                )) })
              ]
            },
            work.id
          )) })
        ] })
      ]
    }
  );
}
export {
  CelebrityWork as default
};
