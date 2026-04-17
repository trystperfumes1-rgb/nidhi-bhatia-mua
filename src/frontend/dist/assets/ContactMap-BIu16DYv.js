import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-C50xJWGr.js";
const FORM_SERVICES = [
  "Bridal Makeup",
  "Engagement Makeup",
  "Party & Event Makeup",
  "Airbrush Makeup",
  "Pre-Wedding Functions",
  "Saree Draping & Styling",
  "Other"
];
const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  message: ""
};
function ContactMap() {
  const [form, setForm] = reactExports.useState(INITIAL_FORM);
  const [submitted, setSubmitted] = reactExports.useState(false);
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSubmitted(false), 5e3);
  }
  const inputClass = "w-full border rounded-xl px-4 py-3 text-sm text-foreground font-body placeholder:text-foreground/25 outline-none transition-smooth focus:shadow-glow-subtle";
  const inputStyle = {
    background: "rgba(10,8,20,0.65)",
    borderColor: "rgba(139,92,246,0.18)"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "contact",
      className: "relative py-28 bg-luxury-950 overflow-hidden",
      "data-ocid": "contact.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/28 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -top-40 left-0 w-[500px] h-[400px] rounded-full blur-[120px] pointer-events-none",
            style: { background: "rgba(139,92,246,0.06)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none",
            style: { background: "rgba(109,40,217,0.05)" }
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-eyebrow mb-4", children: "✦ Book Your Look" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-6xl font-light text-foreground mb-5 tracking-wide", children: [
                  "Let's ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-gold-text italic", children: "Connect" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 font-body text-lg max-w-2xl mx-auto", children: "Ready to begin your transformation? Reach out to discuss your dream look and secure your date." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -30 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.7 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "premium-card rounded-2xl p-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold text-foreground mb-7 tracking-wide", children: "Book an Appointment" }),
                  submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      className: "text-center py-12",
                      "data-ocid": "contact.success_state",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: "✨" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-2xl gradient-gold-text mb-2", children: "Thank You!" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 font-body text-sm", children: "We've received your message and will get back to you within 24 hours." })
                      ]
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "form",
                    {
                      onSubmit: handleSubmit,
                      className: "space-y-5",
                      "data-ocid": "contact.form",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "label",
                              {
                                htmlFor: "f-name",
                                className: "block text-xs text-foreground/50 font-body tracking-widest uppercase mb-2",
                                children: "Full Name *"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                id: "f-name",
                                type: "text",
                                name: "name",
                                value: form.name,
                                onChange: handleChange,
                                required: true,
                                placeholder: "Your name",
                                className: inputClass,
                                style: inputStyle,
                                "data-ocid": "contact.name_input"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "label",
                              {
                                htmlFor: "f-phone",
                                className: "block text-xs text-foreground/50 font-body tracking-widest uppercase mb-2",
                                children: "Phone *"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                id: "f-phone",
                                type: "tel",
                                name: "phone",
                                value: form.phone,
                                onChange: handleChange,
                                required: true,
                                placeholder: "+91 98765 43210",
                                className: inputClass,
                                style: inputStyle,
                                "data-ocid": "contact.phone_input"
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              htmlFor: "f-email",
                              className: "block text-xs text-foreground/50 font-body tracking-widest uppercase mb-2",
                              children: "Email"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              id: "f-email",
                              type: "email",
                              name: "email",
                              value: form.email,
                              onChange: handleChange,
                              placeholder: "your@email.com",
                              className: inputClass,
                              style: inputStyle,
                              "data-ocid": "contact.email_input"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "label",
                              {
                                htmlFor: "f-service",
                                className: "block text-xs text-foreground/50 font-body tracking-widest uppercase mb-2",
                                children: "Service *"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "select",
                              {
                                id: "f-service",
                                name: "service",
                                value: form.service,
                                onChange: handleChange,
                                required: true,
                                className: `${inputClass} appearance-none cursor-pointer`,
                                style: inputStyle,
                                "data-ocid": "contact.service_select",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select service" }),
                                  FORM_SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
                                ]
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "label",
                              {
                                htmlFor: "f-date",
                                className: "block text-xs text-foreground/50 font-body tracking-widest uppercase mb-2",
                                children: "Event Date"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                id: "f-date",
                                type: "date",
                                name: "date",
                                value: form.date,
                                onChange: handleChange,
                                className: inputClass,
                                style: inputStyle,
                                "data-ocid": "contact.date_input"
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              htmlFor: "f-message",
                              className: "block text-xs text-foreground/50 font-body tracking-widest uppercase mb-2",
                              children: "Your Vision"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "textarea",
                            {
                              id: "f-message",
                              name: "message",
                              value: form.message,
                              onChange: handleChange,
                              rows: 4,
                              placeholder: "Tell us about your dream look, inspiration, or any special requirements...",
                              className: `${inputClass} resize-none`,
                              style: inputStyle,
                              "data-ocid": "contact.message_textarea"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "submit",
                            className: "w-full py-4 rounded-xl gradient-gold text-white font-body font-semibold tracking-wider text-sm shadow-glow-gold hover:shadow-glow-elevated transition-smooth hover:scale-[1.02] active:scale-[0.98]",
                            "data-ocid": "contact.submit_button",
                            children: "Book My Appointment"
                          }
                        )
                      ]
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "space-y-6",
                initial: { opacity: 0, x: 30 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.7 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                    {
                      icon: "📍",
                      title: "Visit Us",
                      content: "Ground Floor, Salon Makeup Academy, CP-3, Aashiyana Chauraha, Sector G, LDA Colony, Lucknow 226012",
                      link: null
                    },
                    {
                      icon: "📞",
                      title: "Call / WhatsApp",
                      content: "+91 81125 55544",
                      link: "tel:+918112555544"
                    },
                    {
                      icon: "🕐",
                      title: "Working Hours",
                      content: "Mon–Sat: 9AM–8PM\nSunday: 10AM–6PM",
                      link: null
                    },
                    {
                      icon: "📱",
                      title: "Instagram",
                      content: "@nidhimbhatia",
                      link: "https://www.instagram.com/"
                    }
                  ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "glass border border-gold/12 rounded-xl p-5 hover:border-gold/25 transition-smooth",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: item.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gold tracking-widest uppercase font-body font-semibold mb-1", children: item.title }),
                        item.link ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: item.link,
                            className: "text-sm text-foreground/70 font-body hover:text-gold transition-smooth",
                            children: item.content
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 font-body whitespace-pre-line", children: item.content })
                      ]
                    },
                    item.title
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "relative rounded-2xl overflow-hidden shadow-card-luxury",
                      style: {
                        height: "320px",
                        border: "1px solid rgba(139,92,246,0.18)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "iframe",
                          {
                            title: "Nidhi Bhatia Salon Location",
                            src: "https://www.openstreetmap.org/export/embed.html?bbox=80.9300%2C26.8500%2C80.9600%2C26.8700&layer=mapnik&marker=26.8600%2C80.9450",
                            width: "100%",
                            height: "100%",
                            style: {
                              border: 0,
                              filter: "invert(90%) hue-rotate(220deg) saturate(0.7)"
                            },
                            allowFullScreen: true,
                            loading: "lazy",
                            referrerPolicy: "no-referrer-when-downgrade",
                            "data-ocid": "contact.map"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "absolute inset-0 pointer-events-none rounded-2xl",
                            style: { border: "1px solid rgba(139,92,246,0.18)" }
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "glass border rounded-2xl p-5 flex items-center gap-5",
                      style: { borderColor: "rgba(139,92,246,0.18)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg text-foreground font-semibold tracking-wide", children: "Quick Booking?" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/40 font-body mt-0.5", children: "Connect instantly on WhatsApp" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: "https://wa.me/918112555544",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex-shrink-0 px-6 py-3 rounded-full bg-[#25D366] text-white font-body font-semibold text-sm hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-smooth",
                            "data-ocid": "contact.whatsapp_cta",
                            children: "WhatsApp Now"
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  ContactMap as default
};
