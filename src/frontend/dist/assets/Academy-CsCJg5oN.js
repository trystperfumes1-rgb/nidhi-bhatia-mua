import { a as resolveElements, r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-CfpckDaP.js";
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
const COURSES = [
  {
    id: "bridal",
    title: "Bridal Makeup Mastery",
    duration: "45 Days",
    sessions: "30 Sessions",
    fee: "₹25,000",
    level: "Beginner to Advanced",
    icon: "👰",
    highlight: true,
    features: [
      "Classic & airbrush bridal techniques",
      "Indian & contemporary bridal looks",
      "Skin prep & color correction",
      "Full bridal trial practicals",
      "HD & matte finish mastery",
      "Certificate on completion"
    ]
  },
  {
    id: "party",
    title: "Party & Glam Makeup",
    duration: "20 Days",
    sessions: "15 Sessions",
    fee: "₹12,000",
    level: "Beginner Friendly",
    icon: "✨",
    highlight: false,
    features: [
      "Evening & cocktail looks",
      "Eye makeup techniques",
      "Contouring & highlighting",
      "Lip art basics",
      "Client handling skills",
      "Certificate on completion"
    ]
  },
  {
    id: "nail",
    title: "Nail Art & Extensions",
    duration: "30 Days",
    sessions: "20 Sessions",
    fee: "₹15,000",
    level: "All Levels",
    icon: "💅",
    highlight: false,
    features: [
      "Gel & acrylic nail extensions",
      "Nail art designs & patterns",
      "Ombre & gradient techniques",
      "Bridal nail art special",
      "Product knowledge",
      "Certificate on completion"
    ]
  },
  {
    id: "skincare",
    title: "Advanced Skincare",
    duration: "25 Days",
    sessions: "18 Sessions",
    fee: "₹18,000",
    level: "Intermediate",
    icon: "🧴",
    highlight: false,
    features: [
      "Skin analysis & types",
      "Facial treatments",
      "Anti-aging techniques",
      "Product application science",
      "Client consultation skills",
      "Certificate on completion"
    ]
  },
  {
    id: "hair",
    title: "Bridal Hair Styling",
    duration: "35 Days",
    sessions: "25 Sessions",
    fee: "₹20,000",
    level: "All Levels",
    icon: "🪮",
    highlight: false,
    features: [
      "Bridal updos & hairdos",
      "Blowout & setting techniques",
      "Extensions & accessories",
      "South Indian & North Indian styles",
      "Hair care guidance",
      "Certificate on completion"
    ]
  },
  {
    id: "combo",
    title: "Complete Beauty Course",
    duration: "90 Days",
    sessions: "70 Sessions",
    fee: "₹55,000",
    level: "Beginner to Pro",
    icon: "👑",
    highlight: true,
    features: [
      "All 5 courses included",
      "Bridal + Party + Nail + Hair + Skin",
      "Portfolio shoot session",
      "Internship assistance",
      "Career & placement guidance",
      "Master Certificate"
    ]
  }
];
const STATS = [
  { num: 300, suffix: "+", label: "Students Trained", icon: "🎓" },
  { num: 5, suffix: "+", label: "Courses Offered", icon: "📚" },
  { num: 10, suffix: "+", label: "Years Experience", icon: "⭐" },
  { num: 95, suffix: "%", label: "Placement Rate", icon: "🚀" }
];
const TESTIMONIALS = [
  {
    name: "Priya Thakur",
    city: "Nagpur",
    course: "Bridal Makeup Mastery",
    text: "The training completely transformed my career. Snehal ma'am's hands-on teaching style is exceptional. I got my first bridal booking within 2 weeks of completing the course!",
    rating: 5
  },
  {
    name: "Ritu Sharma",
    city: "Amravati",
    course: "Nail Art & Extensions",
    text: "I always loved nail art but never knew it could become a profession. After Snehal's nail art course, I opened my own nail studio. Her guidance was invaluable.",
    rating: 5
  },
  {
    name: "Anjali Desai",
    city: "Pune",
    course: "Complete Beauty Course",
    text: "Best investment I ever made! The complete course covers everything — from basics to advanced. The portfolio shoot was a bonus that helped me attract clients right away.",
    rating: 5
  }
];
const BATCHES = [
  {
    month: "June 2026",
    date: "2nd June",
    course: "Bridal Makeup Mastery",
    seats: 8,
    available: 3
  },
  {
    month: "June 2026",
    date: "5th June",
    course: "Nail Art & Extensions",
    seats: 10,
    available: 6
  },
  {
    month: "July 2026",
    date: "1st July",
    course: "Complete Beauty Course",
    seats: 6,
    available: 2
  },
  {
    month: "July 2026",
    date: "8th July",
    course: "Party & Glam Makeup",
    seats: 10,
    available: 7
  }
];
function AnimatedCounter({
  target,
  suffix
}) {
  const [count, setCount] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true });
  reactExports.useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / 1800 * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    count,
    suffix
  ] });
}
function Academy() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "academy",
      className: "relative py-24 overflow-hidden",
      style: {
        background: "linear-gradient(180deg, #F5EDE0 0%, #FAF7F2 40%, #F5EDE0 100%)"
      },
      "data-ocid": "academy.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-1",
            style: {
              background: "linear-gradient(90deg, transparent, #C4956A, #6B3A2A, #C4956A, transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-40 left-20 w-96 h-96 rounded-full blur-[120px] pointer-events-none",
            style: { background: "rgba(196,154,108,0.1)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-40 right-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none",
            style: { background: "rgba(61,35,20,0.07)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-20",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.7 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "uppercase tracking-widest text-xs font-semibold mb-3",
                    style: { color: "#C49A6C" },
                    children: "✦ Professional Training"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "font-display text-5xl md:text-6xl font-light mb-5 tracking-wide",
                    style: { color: "#3D2314" },
                    children: [
                      "Beauty",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "em",
                        {
                          className: "font-normal italic",
                          style: {
                            background: "linear-gradient(135deg, #C4956A, #6B3A2A)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                          },
                          children: "Academy"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-lg max-w-2xl mx-auto leading-relaxed",
                    style: { color: "#5C3D2E" },
                    children: "Learn from Amravati's most trusted makeup artist and educator. Professional courses with hands-on practice, certification, and career support."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-20", children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: i * 0.1 },
              whileHover: { y: -5 },
              className: "rounded-2xl p-6 text-center shadow-sm",
              style: {
                background: "white",
                border: "1.5px solid rgba(196,154,108,0.25)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: s.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-4xl font-semibold mb-1",
                    style: {
                      background: "linear-gradient(135deg, #C4956A, #6B3A2A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { target: s.num, suffix: s.suffix })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs font-body uppercase tracking-widest",
                    style: { color: "#5C3D2E" },
                    children: s.label
                  }
                )
              ]
            },
            s.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "rounded-3xl p-10 mb-20 shadow-md",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              style: {
                background: "linear-gradient(135deg, #6B3A2A, #8B5E3C)",
                color: "white"
              },
              "data-ocid": "academy.why_learn_card",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "uppercase tracking-widest text-xs font-semibold mb-3",
                      style: { color: "#E8D5B7" },
                      children: "Why Choose Our Academy"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-3xl font-semibold mb-4",
                      style: { color: "white" },
                      children: "Learn from the Best, Become the Best"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-sm leading-relaxed",
                      style: { color: "rgba(255,255,255,0.8)" },
                      children: "With 10+ years of active bridal and professional makeup experience, Snehal Pawar doesn't just teach theory \\u2014 she teaches from real-world practice. Every batch is small and personalized, ensuring each student gets individual attention."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [
                  { icon: "🎯", label: "Hands-on Practice" },
                  {
                    icon: "👩‍🏫",
                    label: "Personal Mentorship"
                  },
                  { icon: "🏆", label: "Certified Courses" },
                  { icon: "💼", label: "Career Support" },
                  { icon: "📸", label: "Portfolio Shoot" },
                  { icon: "🌍", label: "International Techniques" }
                ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 text-sm",
                    style: { color: "rgba(255,255,255,0.9)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.icon }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body", children: f.label })
                    ]
                  },
                  f.label
                )) })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "text-center mb-12",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "uppercase tracking-widest text-xs font-semibold mb-2",
                      style: { color: "#C49A6C" },
                      children: "Enroll Now"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-3xl font-semibold",
                      style: { color: "#3D2314" },
                      children: "Our Courses"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: COURSES.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: i * 0.08 },
                whileHover: { y: -8, transition: { duration: 0.2 } },
                className: "relative rounded-2xl overflow-hidden shadow-md transition-all duration-300",
                style: {
                  border: c.highlight ? "2px solid rgba(196,154,108,0.7)" : "1.5px solid rgba(196,154,108,0.2)",
                  background: "white"
                },
                "data-ocid": `academy.course.${i + 1}`,
                children: [
                  c.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-0 left-0 right-0 h-1",
                      style: {
                        background: "linear-gradient(90deg, #C4956A, #6B3A2A, #C4956A)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
                    c.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-4",
                        style: {
                          background: "rgba(196,154,108,0.15)",
                          border: "1px solid rgba(196,154,108,0.4)",
                          color: "#C49A6C"
                        },
                        children: "Most Popular"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: c.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h4",
                      {
                        className: "font-display text-lg font-semibold mb-1",
                        style: { color: "#3D2314" },
                        children: c.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs font-semibold mb-4",
                        style: { color: "#C49A6C" },
                        children: c.level
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 mb-5", children: c.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-center gap-2 text-xs font-body",
                        style: { color: "#5C3D2E" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C49A6C" }, children: "✦" }),
                          f
                        ]
                      },
                      f
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "pt-4",
                        style: { borderTop: "1px solid rgba(196,154,108,0.2)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "font-display text-xl font-semibold",
                                style: { color: "#3D2314" },
                                children: c.fee
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "p",
                              {
                                className: "text-xs font-body",
                                style: { color: "#5C3D2E" },
                                children: [
                                  c.duration,
                                  " \\u00b7 ",
                                  c.sessions
                                ]
                              }
                            )
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "a",
                            {
                              href: `https://wa.me/919561548151?text=Hi Snehal, I'm interested in the ${encodeURIComponent(c.title)} course. Please share more details.`,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "block w-full text-center py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:scale-105",
                              style: c.highlight ? {
                                background: "linear-gradient(135deg, #C4956A, #6B3A2A)",
                                color: "white"
                              } : {
                                background: "rgba(196,154,108,0.1)",
                                border: "1px solid rgba(196,154,108,0.4)",
                                color: "#3D2314"
                              },
                              "data-ocid": `academy.enroll_button.${i + 1}`,
                              children: "Enquire on WhatsApp"
                            }
                          )
                        ]
                      }
                    )
                  ] })
                ]
              },
              c.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "text-center mb-10",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "uppercase tracking-widest text-xs font-semibold mb-2",
                      style: { color: "#C49A6C" },
                      children: "Limited Seats"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-3xl font-semibold",
                      style: { color: "#3D2314" },
                      children: "Upcoming Batches"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: BATCHES.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: i % 2 === 0 ? -20 : 20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: i * 0.1 },
                className: "rounded-2xl p-5 flex items-center justify-between shadow-sm",
                style: {
                  background: "white",
                  border: "1.5px solid rgba(196,154,108,0.2)"
                },
                "data-ocid": `academy.batch.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs font-semibold mb-1",
                        style: { color: "#C49A6C" },
                        children: b.month
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-display text-base font-semibold",
                        style: { color: "#3D2314" },
                        children: b.course
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-body", style: { color: "#5C3D2E" }, children: [
                      "Starting: ",
                      b.date
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-body", style: { color: "#5C3D2E" }, children: [
                      b.available,
                      "/",
                      b.seats,
                      " seats left"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "mt-1 h-1.5 w-24 rounded-full overflow-hidden",
                        style: { background: "rgba(196,154,108,0.2)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "h-full rounded-full",
                            style: {
                              width: `${(b.seats - b.available) / b.seats * 100}%`,
                              background: "linear-gradient(90deg, #C4956A, #6B3A2A)"
                            }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "https://wa.me/919561548151?text=Hi, I want to enroll in your upcoming batch!",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold transition-all hover:scale-105",
                        style: {
                          background: "rgba(196,154,108,0.15)",
                          color: "#3D2314"
                        },
                        "data-ocid": `academy.batch_enroll_button.${i + 1}`,
                        children: "Book Seat"
                      }
                    )
                  ] })
                ]
              },
              `${b.date}-${b.course}`
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "text-center mb-12",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "uppercase tracking-widest text-xs font-semibold mb-2",
                      style: { color: "#C49A6C" },
                      children: "Student Stories"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-3xl font-semibold",
                      style: { color: "#3D2314" },
                      children: "Success Stories"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: i * 0.1 },
                className: "rounded-2xl p-6 shadow-sm",
                style: {
                  background: "white",
                  border: "1.5px solid rgba(196,154,108,0.2)"
                },
                "data-ocid": `academy.testimonial.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-3", children: [1, 2, 3, 4, 5].slice(0, t.rating).map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C49A6C" }, children: "\\u2605" }, star)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-sm font-body italic leading-relaxed mb-4",
                      style: { color: "#5C3D2E" },
                      children: [
                        '"',
                        t.text,
                        '"'
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-semibold text-sm font-body",
                        style: { color: "#3D2314" },
                        children: t.name
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-body", style: { color: "#C49A6C" }, children: [
                      t.course,
                      " \\u00b7 ",
                      t.city
                    ] })
                  ] })
                ]
              },
              t.name
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center rounded-3xl p-12 shadow-lg",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              style: {
                background: "linear-gradient(135deg, #6B3A2A 0%, #8B5E3C 50%, #C4956A 100%)"
              },
              "data-ocid": "academy.cta_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: "\\ud83c\\udf93" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display text-3xl font-semibold mb-4",
                    style: { color: "white" },
                    children: "Start Your Beauty Career Today"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm mb-8 max-w-lg mx-auto",
                    style: { color: "rgba(255,255,255,0.85)" },
                    children: "Join our academy and learn the art of professional makeup from Amravati's most trusted educator. Limited seats per batch for personalized attention."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "https://wa.me/919561548151?text=Hi Snehal, I'm interested in enrolling in your beauty academy. Please share details.",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "px-8 py-3.5 rounded-full font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-105",
                      style: { background: "#25D366", color: "white" },
                      "data-ocid": "academy.whatsapp_enroll_button",
                      children: "\\ud83d\\udcf1 WhatsApp to Enroll"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "tel:+919561548151",
                      className: "px-8 py-3.5 rounded-full font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-105",
                      style: {
                        background: "rgba(255,255,255,0.2)",
                        border: "2px solid rgba(255,255,255,0.5)",
                        color: "white"
                      },
                      "data-ocid": "academy.call_button",
                      children: "\\ud83d\\udcde Call: 09561548151"
                    }
                  )
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0 h-1",
            style: {
              background: "linear-gradient(90deg, transparent, #C4956A, #6B3A2A, #C4956A, transparent)"
            }
          }
        )
      ]
    }
  );
}
export {
  Academy as default
};
