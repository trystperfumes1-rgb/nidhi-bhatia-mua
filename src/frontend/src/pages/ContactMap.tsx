import { motion } from "motion/react";
import { useState } from "react";

const FORM_SERVICES = [
  "Bridal Makeup",
  "Engagement Makeup",
  "Party & Event Makeup",
  "Airbrush Makeup",
  "Pre-Wedding Functions",
  "Saree Draping & Styling",
  "Other",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  message: "",
};

export default function ContactMap() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSubmitted(false), 5000);
  }

  const inputClass =
    "w-full border rounded-xl px-4 py-3 text-sm text-foreground font-body placeholder:text-foreground/25 outline-none transition-smooth focus:shadow-glow-subtle";
  const inputStyle = {
    background: "rgba(10,8,20,0.65)",
    borderColor: "rgba(139,92,246,0.18)",
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-luxury-950 overflow-hidden"
      data-ocid="contact.section"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/28 to-transparent" />
      <div
        className="absolute -top-40 left-0 w-[500px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(139,92,246,0.06)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(109,40,217,0.05)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow mb-4">✦ Book Your Look</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-5 tracking-wide">
            Let's <span className="gradient-gold-text italic">Connect</span>
          </h2>
          <p className="text-foreground/50 font-body text-lg max-w-2xl mx-auto">
            Ready to begin your transformation? Reach out to discuss your dream
            look and secure your date.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="premium-card rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-7 tracking-wide">
                Book an Appointment
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                  data-ocid="contact.success_state"
                >
                  <div className="text-4xl mb-4">✨</div>
                  <h4 className="font-display text-2xl gradient-gold-text mb-2">
                    Thank You!
                  </h4>
                  <p className="text-foreground/60 font-body text-sm">
                    We've received your message and will get back to you within
                    24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact.form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="f-name"
                        className="block text-xs text-foreground/50 font-body tracking-widest uppercase mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="f-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className={inputClass}
                        style={inputStyle}
                        data-ocid="contact.name_input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="f-phone"
                        className="block text-xs text-foreground/50 font-body tracking-widest uppercase mb-2"
                      >
                        Phone *
                      </label>
                      <input
                        id="f-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className={inputClass}
                        style={inputStyle}
                        data-ocid="contact.phone_input"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="f-email"
                      className="block text-xs text-foreground/50 font-body tracking-widest uppercase mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="f-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                      style={inputStyle}
                      data-ocid="contact.email_input"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="f-service"
                        className="block text-xs text-foreground/50 font-body tracking-widest uppercase mb-2"
                      >
                        Service *
                      </label>
                      <select
                        id="f-service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className={`${inputClass} appearance-none cursor-pointer`}
                        style={inputStyle}
                        data-ocid="contact.service_select"
                      >
                        <option value="">Select service</option>
                        {FORM_SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="f-date"
                        className="block text-xs text-foreground/50 font-body tracking-widest uppercase mb-2"
                      >
                        Event Date
                      </label>
                      <input
                        id="f-date"
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className={inputClass}
                        style={inputStyle}
                        data-ocid="contact.date_input"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="f-message"
                      className="block text-xs text-foreground/50 font-body tracking-widest uppercase mb-2"
                    >
                      Your Vision
                    </label>
                    <textarea
                      id="f-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your dream look, inspiration, or any special requirements..."
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                      data-ocid="contact.message_textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl gradient-gold text-white font-body font-semibold tracking-wider text-sm shadow-glow-gold hover:shadow-glow-elevated transition-smooth hover:scale-[1.02] active:scale-[0.98]"
                    data-ocid="contact.submit_button"
                  >
                    Book My Appointment
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: Info + Map */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "📍",
                  title: "Visit Us",
                  content:
                    "Ground Floor, Salon Makeup Academy, CP-3, Aashiyana Chauraha, Sector G, LDA Colony, Lucknow 226012",
                  link: null,
                },
                {
                  icon: "📞",
                  title: "Call / WhatsApp",
                  content: "+91 81125 55544",
                  link: "tel:+918112555544",
                },
                {
                  icon: "🕐",
                  title: "Working Hours",
                  content: "Mon–Sat: 9AM–8PM\nSunday: 10AM–6PM",
                  link: null,
                },
                {
                  icon: "📱",
                  title: "Instagram",
                  content: "@nidhimbhatia",
                  link: "https://www.instagram.com/",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass border border-gold/12 rounded-xl p-5 hover:border-gold/25 transition-smooth"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-xs text-gold tracking-widest uppercase font-body font-semibold mb-1">
                    {item.title}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-sm text-foreground/70 font-body hover:text-gold transition-smooth"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground/70 font-body whitespace-pre-line">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Map */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-card-luxury"
              style={{
                height: "320px",
                border: "1px solid rgba(139,92,246,0.18)",
              }}
            >
              <iframe
                title="Nidhi Bhatia Salon Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.9300%2C26.8500%2C80.9600%2C26.8700&layer=mapnik&marker=26.8600%2C80.9450"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(220deg) saturate(0.7)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-ocid="contact.map"
              />
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{ border: "1px solid rgba(139,92,246,0.18)" }}
              />
            </div>

            {/* CTA strip */}
            <div
              className="glass border rounded-2xl p-5 flex items-center gap-5"
              style={{ borderColor: "rgba(139,92,246,0.18)" }}
            >
              <div className="flex-1">
                <p className="font-display text-lg text-foreground font-semibold tracking-wide">
                  Quick Booking?
                </p>
                <p className="text-xs text-foreground/40 font-body mt-0.5">
                  Connect instantly on WhatsApp
                </p>
              </div>
              <a
                href="https://wa.me/918112555544"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-6 py-3 rounded-full bg-[#25D366] text-white font-body font-semibold text-sm hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-smooth"
                data-ocid="contact.whatsapp_cta"
              >
                WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
