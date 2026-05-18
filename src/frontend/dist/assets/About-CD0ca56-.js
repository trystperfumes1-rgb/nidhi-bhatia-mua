import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-CfpckDaP.js";
const MILESTONES = [
  {
    year: "2015",
    title: "The Beginning",
    desc: "Snehal started her passion for beauty and enrolled in her first professional makeup course in Amravati."
  },
  {
    year: "2017",
    title: "First Bridal Client",
    desc: "Completed her first bridal transformation — and was hooked. The joy on her client's face sealed her calling."
  },
  {
    year: "2019",
    title: "Studio Launch",
    desc: "Opened Makeup by Snehal Pawar Academy in Sai Nagar, Amravati — her dream studio and training space."
  },
  {
    year: "2021",
    title: "Academy Milestone",
    desc: "Trained over 100 students across Maharashtra, offering hands-on courses in bridal, nail art, and skincare."
  },
  {
    year: "2024",
    title: "500+ Brides Transformed",
    desc: "Celebrated the milestone of 500+ happy brides, from intimate ceremonies to grand destination weddings."
  },
  {
    year: "2025",
    title: "Expanding Dreams",
    desc: "Growing the academy with new batch offerings and introducing advanced international makeup techniques."
  }
];
const ACHIEVEMENTS = [
  { num: "500+", label: "Happy Brides", icon: "👰" },
  { num: "10+", label: "Years Experience", icon: "⭐" },
  { num: "300+", label: "Students Trained", icon: "🎓" },
  { num: "15+", label: "Cities Covered", icon: "📍" }
];
const TEAM = [
  {
    name: "Snehal Pawar",
    role: "Lead Artist & Founder",
    specialty: "Bridal & Airbrush Makeup",
    emoji: "💄"
  },
  {
    name: "Priya Deshmukh",
    role: "Senior Makeup Artist",
    specialty: "Party & Pre-Wedding",
    emoji: "✨"
  },
  {
    name: "Neha Kale",
    role: "Nail Art Specialist",
    specialty: "Nail Art & Extensions",
    emoji: "💅"
  },
  {
    name: "Aishwarya Bhore",
    role: "Hair Stylist",
    specialty: "Bridal Hair & Styling",
    emoji: "🪮"
  }
];
const VALUES = [
  {
    title: "Premium Quality",
    desc: "Only the finest, skin-safe products — MAC, Charlotte Tilbury, Huda Beauty, and more.",
    icon: "🌟"
  },
  {
    title: "Strict Hygiene",
    desc: "Sanitized tools, single-use applicators, and a salon that meets international cleanliness standards.",
    icon: "🧴"
  },
  {
    title: "Personalized Looks",
    desc: "Every client is unique. We create bespoke looks tailored to your features, skin tone, and style.",
    icon: "🎨"
  },
  {
    title: "On-Time Promise",
    desc: "We respect your schedule. Punctuality and reliability are our professional guarantees.",
    icon: "⏰"
  }
];
function About() {
  const [activeTimeline, setActiveTimeline] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "about",
      className: "relative py-24 overflow-hidden",
      style: {
        background: "linear-gradient(180deg, #FAF7F2 0%, #F5EDE0 40%, #FAF7F2 100%)"
      },
      "data-ocid": "about.section",
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
            className: "absolute top-20 right-20 w-96 h-96 rounded-full blur-[120px] pointer-events-none",
            style: { background: "rgba(196,154,108,0.12)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-20 left-10 w-80 h-80 rounded-full blur-[100px] pointer-events-none",
            style: { background: "rgba(61,35,20,0.08)" }
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
                    children: "✦ Our Story"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "font-display text-5xl md:text-6xl font-light mb-5 tracking-wide",
                    style: { color: "#3D2314" },
                    children: [
                      "About",
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
                          children: "Snehal Pawar"
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
                    children: "A story of passion, artistry, and the belief that every woman deserves to feel like royalty on her most precious day."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.8 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-80 h-96 mx-auto lg:mx-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-full h-full rounded-3xl overflow-hidden flex items-center justify-center",
                      style: {
                        background: "linear-gradient(135deg, #F5EDE0, #E8C9A0)",
                        border: "2px solid rgba(196,154,108,0.35)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "5rem" }, children: "💄" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      className: "absolute -bottom-5 -right-5 rounded-2xl px-4 py-3 shadow-lg",
                      style: {
                        background: "white",
                        border: "1.5px solid rgba(196,154,108,0.4)"
                      },
                      animate: { y: [0, -6, 0] },
                      transition: {
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-xs font-semibold",
                            style: { color: "#C49A6C" },
                            children: "★ 5.0 Rating"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px]", style: { color: "#5C3D2E" }, children: "500+ Brides" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute -top-3 -left-3 w-12 h-12 rounded-full blur-sm",
                      style: { background: "rgba(196,154,108,0.25)" }
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "space-y-6",
                initial: { opacity: 0, x: 40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.8, delay: 0.2 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase",
                      style: {
                        background: "rgba(196,154,108,0.15)",
                        border: "1px solid rgba(196,154,108,0.4)",
                        color: "#C49A6C"
                      },
                      children: "Certified Makeup Artist & Trainer"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-3xl font-semibold",
                      style: { color: "#3D2314" },
                      children: "Making Every Bride Feel Like Royalty"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-base leading-relaxed",
                      style: { color: "#5C3D2E" },
                      children: "Snehal Pawar is a passionate bridal makeup artist and beauty educator based in Amravati, Maharashtra. With over 10 years of experience, she has transformed hundreds of brides, helping them feel confident, radiant, and absolutely stunning on their most important day."
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "font-body text-base leading-relaxed",
                      style: { color: "#5C3D2E" },
                      children: [
                        "Her studio —",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#3D2314" }, children: "Makeup by Snehal Pawar and Academy" }),
                        " ",
                        "— is a one-stop destination for bridal beauty, party glam, nail art, and professional makeup training."
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 space-y-2", children: [
                    "Certified in Airbrush & HD Makeup",
                    "Trained in International Bridal Techniques",
                    "Expert in Indian Bridal Looks",
                    "Professional Nail Art Technician"
                  ].map((cert) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 text-sm font-body",
                      style: { color: "#3D2314" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C49A6C" }, children: "✦" }),
                        cert
                      ]
                    },
                    cert
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        var _a;
                        return (_a = document.getElementById("book")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                      },
                      className: "px-7 py-3 rounded-full font-body font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg",
                      style: {
                        background: "linear-gradient(135deg, #C4956A, #6B3A2A)",
                        color: "white"
                      },
                      "data-ocid": "about.book_appointment_button",
                      children: "Book an Appointment"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-24", children: ACHIEVEMENTS.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: i * 0.1 },
              whileHover: { y: -6, transition: { duration: 0.2 } },
              className: "rounded-2xl p-6 text-center shadow-md cursor-default",
              style: {
                background: "white",
                border: "1.5px solid rgba(196,154,108,0.25)"
              },
              "data-ocid": `about.achievement.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: a.icon }),
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
                    children: a.num
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs font-body uppercase tracking-widest",
                    style: { color: "#5C3D2E" },
                    children: a.label
                  }
                )
              ]
            },
            a.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-24", children: [
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
                      children: "Our Journey"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-3xl font-semibold",
                      style: { color: "#3D2314" },
                      children: "The Road to Excellence"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block",
                  style: {
                    background: "linear-gradient(180deg, transparent, rgba(196,154,108,0.5), transparent)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: MILESTONES.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.6, delay: i * 0.1 },
                  className: `md:flex md:items-center md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            className: "inline-block text-left rounded-2xl p-5 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md",
                            style: {
                              background: activeTimeline === i ? "white" : "rgba(255,255,255,0.7)",
                              border: `1.5px solid ${activeTimeline === i ? "rgba(196,154,108,0.5)" : "rgba(196,154,108,0.2)"}`,
                              maxWidth: "380px",
                              marginLeft: i % 2 === 0 ? "auto" : "0",
                              marginRight: i % 2 === 1 ? "auto" : "0"
                            },
                            onClick: () => setActiveTimeline(i),
                            onKeyDown: (e) => e.key === "Enter" && setActiveTimeline(i),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: "font-display text-sm font-semibold mb-1",
                                  style: { color: "#C49A6C" },
                                  children: m.year
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: "font-display text-lg font-semibold mb-2",
                                  style: { color: "#3D2314" },
                                  children: m.title
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: "font-body text-sm leading-relaxed",
                                  style: { color: "#5C3D2E" },
                                  children: m.desc
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "hidden md:flex flex-shrink-0 w-4 h-4 rounded-full",
                        style: {
                          background: activeTimeline === i ? "#C49A6C" : "#E8D5B7",
                          border: "2px solid #C4956A"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 hidden md:block" })
                  ]
                },
                m.year
              )) })
            ] })
          ] }),
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
                      children: "What We Stand For"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-3xl font-semibold",
                      style: { color: "#3D2314" },
                      children: "Our Core Values"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: VALUES.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                  border: "1.5px solid rgba(196,154,108,0.2)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: v.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h4",
                    {
                      className: "font-display text-base font-semibold mb-2",
                      style: { color: "#3D2314" },
                      children: v.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm font-body leading-relaxed",
                      style: { color: "#5C3D2E" },
                      children: v.desc
                    }
                  )
                ]
              },
              v.title
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
                      children: "The Dream Team"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-3xl font-semibold",
                      style: { color: "#3D2314" },
                      children: "Meet Our Artists"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: TEAM.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: i * 0.1 },
                whileHover: { y: -8, transition: { duration: 0.2 } },
                className: "rounded-2xl overflow-hidden shadow-md text-center",
                style: { border: "1.5px solid rgba(196,154,108,0.2)" },
                "data-ocid": `about.team_member.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-40 flex items-center justify-center text-6xl",
                      style: {
                        background: "linear-gradient(135deg, #F5EDE0, #E8C9A0)"
                      },
                      children: t.emoji
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", style: { background: "white" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h4",
                      {
                        className: "font-display text-base font-semibold mb-1",
                        style: { color: "#3D2314" },
                        children: t.name
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs font-semibold mb-1",
                        style: { color: "#C49A6C" },
                        children: t.role
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body", style: { color: "#5C3D2E" }, children: t.specialty })
                  ] })
                ]
              },
              t.name
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.8 },
              className: "max-w-3xl mx-auto text-center rounded-3xl p-10 shadow-lg",
              style: {
                background: "white",
                border: "1.5px solid rgba(196,154,108,0.3)"
              },
              "data-ocid": "about.personal_message_card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-6", children: "💌" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "blockquote",
                  {
                    className: "font-display text-xl font-light italic leading-relaxed mb-6",
                    style: { color: "#3D2314" },
                    children: '"Every bride I work with is not just a client — she is a queen in her own story. My purpose is to make her feel that on the most important day of her life. With every stroke of my brush, I pour my heart into creating something truly beautiful."'
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-semibold", style: { color: "#C49A6C" }, children: "— Snehal Pawar" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-body", style: { color: "#5C3D2E" }, children: "Founder, Makeup by Snehal Pawar and Academy" })
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
  About as default
};
