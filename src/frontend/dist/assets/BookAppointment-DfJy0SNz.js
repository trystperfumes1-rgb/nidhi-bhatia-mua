import { r as reactExports, j as jsxRuntimeExports, m as motion } from "./index-CfpckDaP.js";
const SERVICE_TYPES = [
  "Bridal Makeup",
  "Party Makeup",
  "Pre-Wedding Shoot",
  "Engagement Makeup",
  "Reception Makeup",
  "Nail Art",
  "Skincare Treatment",
  "Hair Styling",
  "Academy Inquiry"
];
const WHY_BOOK = [
  {
    icon: "👑",
    title: "Premium Products",
    desc: "MAC, Charlotte Tilbury, Huda Beauty — only the finest brands used."
  },
  {
    icon: "⏰",
    title: "Always On Time",
    desc: "We respect your schedule. Punctuality is our professional promise."
  },
  {
    icon: "🎨",
    title: "Personalized Looks",
    desc: "Every look is crafted uniquely for your features, skin tone, and preference."
  },
  {
    icon: "🧴",
    title: "Hygiene First",
    desc: "Sanitized tools, fresh applicators, and a clean studio environment."
  }
];
const WORKING_HOURS = [
  { day: "Monday – Friday", hours: "9:00 AM – 8:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "8:00 AM – 7:00 PM" }
];
const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  service: "",
  preferredDate: "",
  eventDate: "",
  message: ""
};
function InputField({
  label,
  id,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "label",
      {
        htmlFor: id,
        className: "text-sm font-semibold font-body",
        style: { color: "#3D2314" },
        children: [
          label,
          required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C49A6C" }, children: " *" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id,
        name: id,
        type,
        value,
        onChange: (e) => onChange(id, e.target.value),
        placeholder,
        required,
        className: "w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all duration-200",
        style: {
          background: "white",
          border: "1.5px solid rgba(196,154,108,0.3)",
          color: "#3D2314"
        },
        onFocus: (e) => {
          e.target.style.borderColor = "#C49A6C";
          e.target.style.boxShadow = "0 0 0 3px rgba(196,154,108,0.15)";
        },
        onBlur: (e) => {
          e.target.style.borderColor = "rgba(196,154,108,0.3)";
          e.target.style.boxShadow = "none";
        },
        "data-ocid": `book.${id}_input`
      }
    )
  ] });
}
function BookAppointment() {
  const [form, setForm] = reactExports.useState(INITIAL_FORM);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const handleChange = (id, val) => {
    setForm((prev) => ({ ...prev, [id]: val }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Snehal! I'd like to book an appointment.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0AService: ${encodeURIComponent(form.service)}%0APreferred Date: ${encodeURIComponent(form.preferredDate)}%0AEvent Date: ${encodeURIComponent(form.eventDate)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/919561548151?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(INITIAL_FORM);
    }, 5e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "book",
      className: "relative py-24 overflow-hidden",
      style: {
        background: "linear-gradient(180deg, #FAF7F2 0%, #F5EDE0 60%, #FAF7F2 100%)"
      },
      "data-ocid": "book.section",
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
            className: "absolute top-20 right-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none",
            style: { background: "rgba(196,154,108,0.1)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-20 left-20 w-72 h-72 rounded-full blur-[90px] pointer-events-none",
            style: { background: "rgba(61,35,20,0.07)" }
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
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "uppercase tracking-widest text-xs font-semibold mb-3",
                    style: { color: "#C49A6C" },
                    children: "✦ Reserve Your Spot"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "font-display text-5xl md:text-6xl font-light mb-5 tracking-wide",
                    style: { color: "#3D2314" },
                    children: [
                      "Book Your",
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
                          children: "Appointment"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-lg max-w-xl mx-auto leading-relaxed",
                    style: { color: "#5C3D2E" },
                    children: "Book your beauty appointment with Snehal Pawar and take the first step towards your most beautiful day."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "lg:col-span-3",
                initial: { opacity: 0, x: -30 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.7 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "rounded-3xl p-8 md:p-10 shadow-lg",
                    style: {
                      background: "white",
                      border: "1.5px solid rgba(196,154,108,0.25)"
                    },
                    "data-ocid": "book.form_card",
                    children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        className: "py-16 text-center",
                        initial: { opacity: 0, scale: 0.8 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { duration: 0.4 },
                        "data-ocid": "book.success_state",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-5", children: "\\ud83c\\udf89" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "h3",
                            {
                              className: "font-display text-2xl font-semibold mb-3",
                              style: { color: "#3D2314" },
                              children: "Thank You!"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-body text-sm leading-relaxed",
                              style: { color: "#5C3D2E" },
                              children: "Your appointment request has been sent via WhatsApp. Snehal will confirm your booking shortly."
                            }
                          )
                        ]
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "form",
                      {
                        onSubmit: handleSubmit,
                        className: "space-y-5",
                        "data-ocid": "book.appointment_form",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "h3",
                            {
                              className: "font-display text-2xl font-semibold mb-6",
                              style: { color: "#3D2314" },
                              children: "Appointment Details"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              InputField,
                              {
                                label: "Your Name",
                                id: "name",
                                value: form.name,
                                onChange: handleChange,
                                required: true,
                                placeholder: "Priya Sharma"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              InputField,
                              {
                                label: "Phone Number",
                                id: "phone",
                                type: "tel",
                                value: form.phone,
                                onChange: handleChange,
                                required: true,
                                placeholder: "09876543210"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            InputField,
                            {
                              label: "Email Address",
                              id: "email",
                              type: "email",
                              value: form.email,
                              onChange: handleChange,
                              placeholder: "priya@example.com"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "label",
                              {
                                htmlFor: "service",
                                className: "text-sm font-semibold font-body",
                                style: { color: "#3D2314" },
                                children: [
                                  "Service Type ",
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C49A6C" }, children: "*" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "select",
                              {
                                id: "service",
                                name: "service",
                                value: form.service,
                                onChange: (e) => handleChange("service", e.target.value),
                                required: true,
                                className: "w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all duration-200",
                                style: {
                                  background: "white",
                                  border: "1.5px solid rgba(196,154,108,0.3)",
                                  color: form.service ? "#3D2314" : "#5C3D2E"
                                },
                                onFocus: (e) => {
                                  e.target.style.borderColor = "#C49A6C";
                                  e.target.style.boxShadow = "0 0 0 3px rgba(196,154,108,0.15)";
                                },
                                onBlur: (e) => {
                                  e.target.style.borderColor = "rgba(196,154,108,0.3)";
                                  e.target.style.boxShadow = "none";
                                },
                                "data-ocid": "book.service_select",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select a service..." }),
                                  SERVICE_TYPES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
                                ]
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              InputField,
                              {
                                label: "Preferred Appointment Date",
                                id: "preferredDate",
                                type: "date",
                                value: form.preferredDate,
                                onChange: handleChange,
                                required: true
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              InputField,
                              {
                                label: "Event Date (if applicable)",
                                id: "eventDate",
                                type: "date",
                                value: form.eventDate,
                                onChange: handleChange
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "label",
                              {
                                htmlFor: "message",
                                className: "text-sm font-semibold font-body",
                                style: { color: "#3D2314" },
                                children: "Additional Message"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "textarea",
                              {
                                id: "message",
                                name: "message",
                                value: form.message,
                                onChange: (e) => handleChange("message", e.target.value),
                                rows: 4,
                                placeholder: "Tell us about your event, preferred look, or any special requirements...",
                                className: "w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all duration-200 resize-none",
                                style: {
                                  background: "white",
                                  border: "1.5px solid rgba(196,154,108,0.3)",
                                  color: "#3D2314"
                                },
                                onFocus: (e) => {
                                  e.target.style.borderColor = "#C49A6C";
                                  e.target.style.boxShadow = "0 0 0 3px rgba(196,154,108,0.15)";
                                },
                                onBlur: (e) => {
                                  e.target.style.borderColor = "rgba(196,154,108,0.3)";
                                  e.target.style.boxShadow = "none";
                                },
                                "data-ocid": "book.message_textarea"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "submit",
                              className: "w-full py-4 rounded-xl font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                              style: {
                                background: "linear-gradient(135deg, #C4956A, #6B3A2A)",
                                color: "white"
                              },
                              "data-ocid": "book.submit_button",
                              children: "\\ud83d\\udcf1 Send Booking Request via WhatsApp"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-xs text-center font-body",
                              style: { color: "#5C3D2E" },
                              children: "Your details will be sent directly to Snehal on WhatsApp for confirmation."
                            }
                          )
                        ]
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "lg:col-span-2 space-y-6",
                initial: { opacity: 0, x: 30 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.7, delay: 0.2 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-2xl p-6 shadow-md",
                      style: {
                        background: "white",
                        border: "1.5px solid rgba(196,154,108,0.25)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h4",
                          {
                            className: "font-display text-lg font-semibold mb-4",
                            style: { color: "#3D2314" },
                            children: "Quick Contact"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "a",
                            {
                              href: "https://wa.me/919561548151?text=Hi Snehal! I want to book an appointment.",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "flex items-center gap-3 px-5 py-3.5 rounded-xl font-semibold text-sm w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md",
                              style: { background: "#25D366", color: "white" },
                              "data-ocid": "book.whatsapp_button",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "\\ud83d\\udcf1" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80", children: "Chat on" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "WhatsApp" })
                                ] })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "a",
                            {
                              href: "tel:+919561548151",
                              className: "flex items-center gap-3 px-5 py-3.5 rounded-xl font-semibold text-sm w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md",
                              style: {
                                background: "linear-gradient(135deg, #C4956A, #6B3A2A)",
                                color: "white"
                              },
                              "data-ocid": "book.call_button",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "\\ud83d\\udcde" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80", children: "Call Us" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "09561548151" })
                                ] })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "a",
                            {
                              href: "https://www.google.com/maps/search/?api=1&query=Kondeshwar+Vidyut+Colony+Sai+Nagar+Amravati+Maharashtra+444607",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "flex items-center gap-3 px-5 py-3.5 rounded-xl font-semibold text-sm w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md",
                              style: {
                                background: "rgba(196,154,108,0.1)",
                                border: "1.5px solid rgba(196,154,108,0.35)",
                                color: "#3D2314"
                              },
                              "data-ocid": "book.directions_button",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "\\ud83d\\udccd" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "#C49A6C" }, children: "Visit Us" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Get Directions" })
                                ] })
                              ]
                            }
                          )
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-2xl p-6 shadow-sm",
                      style: {
                        background: "white",
                        border: "1.5px solid rgba(196,154,108,0.25)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h4",
                          {
                            className: "font-display text-lg font-semibold mb-4",
                            style: { color: "#3D2314" },
                            children: "Studio Address"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl mt-0.5", children: "\\ud83d\\udccd" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "font-semibold text-sm font-body mb-1",
                                style: { color: "#3D2314" },
                                children: "Makeup by Snehal Pawar and Academy"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "p",
                              {
                                className: "text-sm font-body leading-relaxed",
                                style: { color: "#5C3D2E" },
                                children: [
                                  "Kondeshwar Vidyut Colony,",
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                                  "Near Radhey Radhey Milk Dairy,",
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                                  "Sai Nagar, Amravati,",
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                                  "Maharashtra 444607"
                                ]
                              }
                            )
                          ] })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-2xl p-6 shadow-sm",
                      style: {
                        background: "white",
                        border: "1.5px solid rgba(196,154,108,0.25)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h4",
                          {
                            className: "font-display text-lg font-semibold mb-4",
                            style: { color: "#3D2314" },
                            children: "Working Hours"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: WORKING_HOURS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "flex justify-between items-center",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "text-sm font-body",
                                  style: { color: "#5C3D2E" },
                                  children: h.day
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "text-sm font-semibold font-body",
                                  style: { color: "#C49A6C" },
                                  children: h.hours
                                }
                              )
                            ]
                          },
                          h.day
                        )) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-2xl p-6 shadow-sm",
                      style: {
                        background: "linear-gradient(135deg, #6B3A2A 0%, #8B5E3C 100%)",
                        color: "white"
                      },
                      "data-ocid": "book.why_book_card",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h4",
                          {
                            className: "font-display text-lg font-semibold mb-4",
                            style: { color: "white" },
                            children: "Why Book With Us"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: WHY_BOOK.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: w.icon }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "text-sm font-semibold mb-0.5",
                                style: { color: "#E8D5B7" },
                                children: w.title
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "text-xs font-body",
                                style: { color: "rgba(255,255,255,0.7)" },
                                children: w.desc
                              }
                            )
                          ] })
                        ] }, w.title)) })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
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
  BookAppointment as default
};
