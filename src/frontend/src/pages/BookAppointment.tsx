import { motion } from "motion/react";
import { useState } from "react";

const SERVICE_TYPES = [
  "Bridal Makeup",
  "Party Makeup",
  "Pre-Wedding Shoot",
  "Engagement Makeup",
  "Reception Makeup",
  "Nail Art",
  "Skincare Treatment",
  "Hair Styling",
  "Academy Inquiry",
];

const WHY_BOOK = [
  {
    icon: "\ud83d\udc51",
    title: "Premium Products",
    desc: "MAC, Charlotte Tilbury, Huda Beauty \u2014 only the finest brands used.",
  },
  {
    icon: "\u23f0",
    title: "Always On Time",
    desc: "We respect your schedule. Punctuality is our professional promise.",
  },
  {
    icon: "\ud83c\udfa8",
    title: "Personalized Looks",
    desc: "Every look is crafted uniquely for your features, skin tone, and preference.",
  },
  {
    icon: "\ud83e\uddf4",
    title: "Hygiene First",
    desc: "Sanitized tools, fresh applicators, and a clean studio environment.",
  },
];

const WORKING_HOURS = [
  { day: "Monday \u2013 Friday", hours: "9:00 AM \u2013 8:00 PM" },
  { day: "Saturday", hours: "8:00 AM \u2013 9:00 PM" },
  { day: "Sunday", hours: "8:00 AM \u2013 7:00 PM" },
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  eventDate: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  preferredDate: "",
  eventDate: "",
  message: "",
};

function InputField({
  label,
  id,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
}: {
  label: string;
  id: keyof FormState;
  type?: string;
  value: string;
  onChange: (id: keyof FormState, val: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-sm font-semibold font-body"
        style={{ color: "#3D2314" }}
      >
        {label}
        {required && <span style={{ color: "#C49A6C" }}> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all duration-200"
        style={{
          background: "white",
          border: "1.5px solid rgba(196,154,108,0.3)",
          color: "#3D2314",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "#C49A6C";
          e.target.style.boxShadow = "0 0 0 3px rgba(196,154,108,0.15)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(196,154,108,0.3)";
          e.target.style.boxShadow = "none";
        }}
        data-ocid={`book.${id}_input`}
      />
    </div>
  );
}

export default function BookAppointment() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id: keyof FormState, val: string) => {
    setForm((prev) => ({ ...prev, [id]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Snehal! I'd like to book an appointment.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0AService: ${encodeURIComponent(form.service)}%0APreferred Date: ${encodeURIComponent(form.preferredDate)}%0AEvent Date: ${encodeURIComponent(form.eventDate)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/919561548151?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(INITIAL_FORM);
    }, 5000);
  };

  return (
    <section
      id="book"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FAF7F2 0%, #F5EDE0 60%, #FAF7F2 100%)",
      }}
      data-ocid="book.section"
    >
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C4956A, #6B3A2A, #C4956A, transparent)",
        }}
      />
      <div
        className="absolute top-20 right-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(196,154,108,0.1)" }}
      />
      <div
        className="absolute bottom-20 left-20 w-72 h-72 rounded-full blur-[90px] pointer-events-none"
        style={{ background: "rgba(61,35,20,0.07)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="uppercase tracking-widest text-xs font-semibold mb-3"
            style={{ color: "#C49A6C" }}
          >
            ✦ Reserve Your Spot
          </p>
          <h2
            className="font-display text-5xl md:text-6xl font-light mb-5 tracking-wide"
            style={{ color: "#3D2314" }}
          >
            Book Your{" "}
            <em
              className="font-normal italic"
              style={{
                background: "linear-gradient(135deg, #C4956A, #6B3A2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Appointment
            </em>
          </h2>
          <p
            className="font-body text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "#5C3D2E" }}
          >
            Book your beauty appointment with Snehal Pawar and take the first
            step towards your most beautiful day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="rounded-3xl p-8 md:p-10 shadow-lg"
              style={{
                background: "white",
                border: "1.5px solid rgba(196,154,108,0.25)",
              }}
              data-ocid="book.form_card"
            >
              {submitted ? (
                <motion.div
                  className="py-16 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  data-ocid="book.success_state"
                >
                  <div className="text-6xl mb-5">\ud83c\udf89</div>
                  <h3
                    className="font-display text-2xl font-semibold mb-3"
                    style={{ color: "#3D2314" }}
                  >
                    Thank You!
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "#5C3D2E" }}
                  >
                    Your appointment request has been sent via WhatsApp. Snehal
                    will confirm your booking shortly.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="book.appointment_form"
                >
                  <h3
                    className="font-display text-2xl font-semibold mb-6"
                    style={{ color: "#3D2314" }}
                  >
                    Appointment Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      label="Your Name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Priya Sharma"
                    />
                    <InputField
                      label="Phone Number"
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="09876543210"
                    />
                  </div>

                  <InputField
                    label="Email Address"
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="priya@example.com"
                  />

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="service"
                      className="text-sm font-semibold font-body"
                      style={{ color: "#3D2314" }}
                    >
                      Service Type <span style={{ color: "#C49A6C" }}>*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all duration-200"
                      style={{
                        background: "white",
                        border: "1.5px solid rgba(196,154,108,0.3)",
                        color: form.service ? "#3D2314" : "#5C3D2E",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#C49A6C";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(196,154,108,0.15)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(196,154,108,0.3)";
                        e.target.style.boxShadow = "none";
                      }}
                      data-ocid="book.service_select"
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {SERVICE_TYPES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      label="Preferred Appointment Date"
                      id="preferredDate"
                      type="date"
                      value={form.preferredDate}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Event Date (if applicable)"
                      id="eventDate"
                      type="date"
                      value={form.eventDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold font-body"
                      style={{ color: "#3D2314" }}
                    >
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                      placeholder="Tell us about your event, preferred look, or any special requirements..."
                      className="w-full px-4 py-3 rounded-xl text-sm font-body outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "white",
                        border: "1.5px solid rgba(196,154,108,0.3)",
                        color: "#3D2314",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#C49A6C";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(196,154,108,0.15)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(196,154,108,0.3)";
                        e.target.style.boxShadow = "none";
                      }}
                      data-ocid="book.message_textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #C4956A, #6B3A2A)",
                      color: "white",
                    }}
                    data-ocid="book.submit_button"
                  >
                    \ud83d\udcf1 Send Booking Request via WhatsApp
                  </button>

                  <p
                    className="text-xs text-center font-body"
                    style={{ color: "#5C3D2E" }}
                  >
                    Your details will be sent directly to Snehal on WhatsApp for
                    confirmation.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="rounded-2xl p-6 shadow-md"
              style={{
                background: "white",
                border: "1.5px solid rgba(196,154,108,0.25)",
              }}
            >
              <h4
                className="font-display text-lg font-semibold mb-4"
                style={{ color: "#3D2314" }}
              >
                Quick Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/919561548151?text=Hi Snehal! I want to book an appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl font-semibold text-sm w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                  style={{ background: "#25D366", color: "white" }}
                  data-ocid="book.whatsapp_button"
                >
                  <span className="text-xl">\ud83d\udcf1</span>
                  <div>
                    <p className="text-xs opacity-80">Chat on</p>
                    <p>WhatsApp</p>
                  </div>
                </a>
                <a
                  href="tel:+919561548151"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl font-semibold text-sm w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                  style={{
                    background: "linear-gradient(135deg, #C4956A, #6B3A2A)",
                    color: "white",
                  }}
                  data-ocid="book.call_button"
                >
                  <span className="text-xl">\ud83d\udcde</span>
                  <div>
                    <p className="text-xs opacity-80">Call Us</p>
                    <p>09561548151</p>
                  </div>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kondeshwar+Vidyut+Colony+Sai+Nagar+Amravati+Maharashtra+444607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl font-semibold text-sm w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                  style={{
                    background: "rgba(196,154,108,0.1)",
                    border: "1.5px solid rgba(196,154,108,0.35)",
                    color: "#3D2314",
                  }}
                  data-ocid="book.directions_button"
                >
                  <span className="text-xl">\ud83d\udccd</span>
                  <div>
                    <p className="text-xs" style={{ color: "#C49A6C" }}>
                      Visit Us
                    </p>
                    <p>Get Directions</p>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 shadow-sm"
              style={{
                background: "white",
                border: "1.5px solid rgba(196,154,108,0.25)",
              }}
            >
              <h4
                className="font-display text-lg font-semibold mb-4"
                style={{ color: "#3D2314" }}
              >
                Studio Address
              </h4>
              <div className="flex gap-3">
                <span className="text-2xl mt-0.5">\ud83d\udccd</span>
                <div>
                  <p
                    className="font-semibold text-sm font-body mb-1"
                    style={{ color: "#3D2314" }}
                  >
                    Makeup by Snehal Pawar and Academy
                  </p>
                  <p
                    className="text-sm font-body leading-relaxed"
                    style={{ color: "#5C3D2E" }}
                  >
                    Kondeshwar Vidyut Colony,
                    <br />
                    Near Radhey Radhey Milk Dairy,
                    <br />
                    Sai Nagar, Amravati,
                    <br />
                    Maharashtra 444607
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 shadow-sm"
              style={{
                background: "white",
                border: "1.5px solid rgba(196,154,108,0.25)",
              }}
            >
              <h4
                className="font-display text-lg font-semibold mb-4"
                style={{ color: "#3D2314" }}
              >
                Working Hours
              </h4>
              <div className="space-y-3">
                {WORKING_HOURS.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center"
                  >
                    <span
                      className="text-sm font-body"
                      style={{ color: "#5C3D2E" }}
                    >
                      {h.day}
                    </span>
                    <span
                      className="text-sm font-semibold font-body"
                      style={{ color: "#C49A6C" }}
                    >
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-6 shadow-sm"
              style={{
                background: "linear-gradient(135deg, #6B3A2A 0%, #8B5E3C 100%)",
                color: "white",
              }}
              data-ocid="book.why_book_card"
            >
              <h4
                className="font-display text-lg font-semibold mb-4"
                style={{ color: "white" }}
              >
                Why Book With Us
              </h4>
              <div className="space-y-4">
                {WHY_BOOK.map((w) => (
                  <div key={w.title} className="flex gap-3">
                    <span className="text-xl">{w.icon}</span>
                    <div>
                      <p
                        className="text-sm font-semibold mb-0.5"
                        style={{ color: "#E8D5B7" }}
                      >
                        {w.title}
                      </p>
                      <p
                        className="text-xs font-body"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {w.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C4956A, #6B3A2A, #C4956A, transparent)",
        }}
      />
    </section>
  );
}
