import { r as reactExports, u as useFrame, _ as _extends, M as MeshStandardMaterial, j as jsxRuntimeExports, C as Canvas, m as motion, S as Sparkles, F as Float } from "./index-C50xJWGr.js";
class WobbleMaterialImpl extends MeshStandardMaterial {
  constructor(parameters = {}) {
    super(parameters);
    this.setValues(parameters);
    this._time = {
      value: 0
    };
    this._factor = {
      value: 1
    };
  }
  // FIXME Use `THREE.WebGLProgramParametersWithUniforms` type when able to target @types/three@0.160.0
  onBeforeCompile(shader) {
    shader.uniforms.time = this._time;
    shader.uniforms.factor = this._factor;
    shader.vertexShader = `
      uniform float time;
      uniform float factor;
      ${shader.vertexShader}
    `;
    shader.vertexShader = shader.vertexShader.replace("#include <begin_vertex>", `float theta = sin( time + position.y ) / 2.0 * factor;
        float c = cos( theta );
        float s = sin( theta );
        mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );
        vec3 transformed = vec3( position ) * m;
        vNormal = vNormal * m;`);
  }
  get time() {
    return this._time.value;
  }
  set time(v) {
    this._time.value = v;
  }
  get factor() {
    return this._factor.value;
  }
  set factor(v) {
    this._factor.value = v;
  }
}
const MeshWobbleMaterial = /* @__PURE__ */ reactExports.forwardRef(({
  speed = 1,
  ...props
}, ref) => {
  const [material] = reactExports.useState(() => new WobbleMaterialImpl());
  useFrame((state) => material && (material.time = state.clock.elapsedTime * speed));
  return /* @__PURE__ */ reactExports.createElement("primitive", _extends({
    object: material,
    ref,
    attach: "material"
  }, props));
});
function ServiceOrb({
  position,
  color,
  speed = 2
}) {
  const meshRef = reactExports.useRef(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1 * speed;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed, floatIntensity: 2.5, rotationIntensity: 0.8, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: meshRef, position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dodecahedronGeometry", { args: [0.45, 0] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MeshWobbleMaterial,
      {
        color,
        factor: 0.45,
        speed: 2.5,
        metalness: 0.95,
        roughness: 0.05,
        transparent: true,
        opacity: 0.85,
        emissive: color,
        emissiveIntensity: 0.35
      }
    )
  ] }) });
}
function FloatingIcosahedron({
  position,
  color
}) {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.25;
      ref.current.rotation.y = state.clock.elapsedTime * 0.35;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.8, floatIntensity: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, position, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [0.35, 0] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meshStandardMaterial",
      {
        color,
        metalness: 1,
        roughness: 0,
        emissive: color,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.8
      }
    )
  ] }) });
}
function ServiceScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.35 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [5, 5, 3], color: "#a855f7", intensity: 2.5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-5, -3, 2], color: "#7c3aed", intensity: 2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, 3, 4], color: "#c084fc", intensity: 1.2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sparkles,
      {
        count: 30,
        size: 1.5,
        scale: [12, 8, 6],
        speed: 0.4,
        opacity: 0.5,
        color: "#a855f7"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceOrb, { position: [-3, 2, -2], color: "#a855f7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceOrb, { position: [3, -1, -3], color: "#7c3aed", speed: 1.5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceOrb, { position: [0, 3, -4], color: "#8b5cf6", speed: 2.5 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceOrb, { position: [-1, -2, -2], color: "#6d28d9", speed: 1.8 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingIcosahedron, { position: [2, 2.5, -3], color: "#c084fc" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingIcosahedron, { position: [-2.5, -1.5, -3], color: "#8b5cf6" })
  ] });
}
const SERVICES = [
  {
    id: "bridal",
    title: "Bridal Makeup",
    description: "Complete bridal transformation with premium products, airbrush technique, and personalized consultation. From the mehendi to the reception — every look perfectly crafted.",
    price: "₹15,000 onwards",
    duration: "4-5 hours",
    icon: "👑",
    features: [
      "Full-day coverage",
      "Premium HD products",
      "Trial session included",
      "Touch-up kit"
    ],
    highlight: true
  },
  {
    id: "engagement",
    title: "Engagement Makeup",
    description: "Radiant, photogenic makeup for your engagement ceremony. Luminous skin, bold eyes, and long-lasting formulas that shine in every photo.",
    price: "₹8,000 onwards",
    duration: "2-3 hours",
    icon: "💍",
    features: [
      "Photogenic finish",
      "Long-wear formula",
      "Skin prep included",
      "Personalized look"
    ],
    highlight: false
  },
  {
    id: "party",
    title: "Party & Event Makeup",
    description: "Glamorous party looks for receptions, sangeet, cocktail evenings, and special occasions. Bold, dramatic, unforgettable.",
    price: "₹4,500 onwards",
    duration: "1.5-2 hours",
    icon: "✨",
    features: [
      "Glam & editorial looks",
      "Eye-catching designs",
      "All skin tones",
      "Quick turnaround"
    ],
    highlight: false
  },
  {
    id: "airbrush",
    title: "Airbrush Makeup",
    description: "Ultra-light, flawless airbrush technique for the most photogenic finish. Perfect for HD photography, film shoots, and premium occasions.",
    price: "₹6,000 onwards",
    duration: "2 hours",
    icon: "🎨",
    features: [
      "HD flawless finish",
      "Feather-light feel",
      "Water-resistant",
      "Celebrity-grade"
    ],
    highlight: false
  },
  {
    id: "mehndi",
    title: "Pre-Wedding Functions",
    description: "Coordinated looks across all pre-wedding functions — Haldi, Mehndi, Sangeet. Consistent elegance through every ritual.",
    price: "₹12,000 (3 looks)",
    duration: "Per function",
    icon: "🌸",
    features: [
      "3-look package",
      "Coordinated themes",
      "Early morning slots",
      "Group discounts"
    ],
    highlight: false
  },
  {
    id: "saree",
    title: "Saree Draping & Styling",
    description: "Expert saree draping in various regional styles paired with complete makeup artistry. Look absolutely regal for your big day.",
    price: "₹3,500 onwards",
    duration: "1 hour",
    icon: "🪷",
    features: [
      "Multiple draping styles",
      "Regional specialties",
      "Accessory styling",
      "Hairdo included"
    ],
    highlight: false
  }
];
function ServiceCard({ service, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.7, delay: index * 0.1 },
      whileHover: { y: -10, transition: { duration: 0.3 } },
      className: `relative rounded-2xl overflow-hidden transition-smooth group ${service.highlight ? "border border-gold/45 shadow-glow-gold animate-glow-pulse" : "border border-gold/12 hover:border-gold/30 shadow-card-luxury hover:shadow-card-hover"}`,
      "data-ocid": `services.item.${index + 1}`,
      children: [
        service.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `p-7 h-full ${service.highlight ? "bg-gradient-to-br from-luxury-800 via-luxury-900 to-luxury-950" : "glass"}`,
            children: [
              service.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-3 py-1 bg-gold/15 border border-gold/35 rounded-full text-gold text-[10px] tracking-widest uppercase font-body mb-4", children: "Most Popular" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-4", children: service.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground mb-2 tracking-wide", children: service.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/55 font-body leading-relaxed mb-5", children: service.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 mb-6", children: service.features.map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-center gap-2 text-xs text-foreground/60 font-body",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-xs", children: "✦" }),
                    feat
                  ]
                },
                feat
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between pt-4 border-t border-gold/12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gold font-display text-lg font-semibold", children: service.price }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/40 text-xs font-body", children: service.duration })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var _a;
                      return (_a = document.getElementById("contact")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                    },
                    className: `px-4 py-2 rounded-full text-xs font-body font-semibold tracking-wider transition-smooth ${service.highlight ? "gradient-gold text-white shadow-glow-subtle hover:shadow-glow-gold" : "glass border border-gold/22 text-gold hover:border-gold/45"}`,
                    "data-ocid": `services.book_button.${index + 1}`,
                    children: "Book Now"
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "services",
      className: "relative py-28 bg-section-dark overflow-hidden",
      "data-ocid": "services.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Canvas, { camera: { position: [0, 0, 8], fov: 50 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceScene, {}) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -top-40 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none",
            style: { background: "rgba(124,58,237,0.06)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none",
            style: { background: "rgba(139,92,246,0.05)" }
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-eyebrow mb-4", children: "✦ What We Offer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl font-light text-foreground mb-5 tracking-wide", children: [
                  "Our ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-gold-text italic", children: "Services" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 font-body text-lg max-w-2xl mx-auto leading-relaxed", children: "Every service is a bespoke experience — crafted with premium products, artistic precision, and an unwavering commitment to making you look extraordinary." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: SERVICES.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { service, index: i }, service.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mt-14",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/40 font-body text-sm mb-4", children: "Custom packages available for destination weddings and celebrity clients" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var _a;
                      return (_a = document.getElementById("contact")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                    },
                    className: "px-8 py-3.5 rounded-full gradient-gold text-white font-body font-semibold text-sm tracking-wider shadow-glow-gold hover:shadow-glow-elevated transition-smooth hover:scale-105",
                    "data-ocid": "services.contact_button",
                    children: "Get a Custom Quote"
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  Services as default
};
