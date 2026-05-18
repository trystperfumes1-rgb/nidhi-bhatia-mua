import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const COURSES = [
  {
    id: "bridal",
    title: "Bridal Makeup Mastery",
    duration: "45 Days",
    sessions: "30 Sessions",
    fee: "\u20b925,000",
    level: "Beginner to Advanced",
    icon: "\ud83d\udc70",
    highlight: true,
    features: [
      "Classic & airbrush bridal techniques",
      "Indian & contemporary bridal looks",
      "Skin prep & color correction",
      "Full bridal trial practicals",
      "HD & matte finish mastery",
      "Certificate on completion",
    ],
  },
  {
    id: "party",
    title: "Party & Glam Makeup",
    duration: "20 Days",
    sessions: "15 Sessions",
    fee: "\u20b912,000",
    level: "Beginner Friendly",
    icon: "\u2728",
    highlight: false,
    features: [
      "Evening & cocktail looks",
      "Eye makeup techniques",
      "Contouring & highlighting",
      "Lip art basics",
      "Client handling skills",
      "Certificate on completion",
    ],
  },
  {
    id: "nail",
    title: "Nail Art & Extensions",
    duration: "30 Days",
    sessions: "20 Sessions",
    fee: "\u20b915,000",
    level: "All Levels",
    icon: "\ud83d\udc85",
    highlight: false,
    features: [
      "Gel & acrylic nail extensions",
      "Nail art designs & patterns",
      "Ombre & gradient techniques",
      "Bridal nail art special",
      "Product knowledge",
      "Certificate on completion",
    ],
  },
  {
    id: "skincare",
    title: "Advanced Skincare",
    duration: "25 Days",
    sessions: "18 Sessions",
    fee: "\u20b918,000",
    level: "Intermediate",
    icon: "\ud83e\uddf4",
    highlight: false,
    features: [
      "Skin analysis & types",
      "Facial treatments",
      "Anti-aging techniques",
      "Product application science",
      "Client consultation skills",
      "Certificate on completion",
    ],
  },
  {
    id: "hair",
    title: "Bridal Hair Styling",
    duration: "35 Days",
    sessions: "25 Sessions",
    fee: "\u20b920,000",
    level: "All Levels",
    icon: "\ud83e\udeae",
    highlight: false,
    features: [
      "Bridal updos & hairdos",
      "Blowout & setting techniques",
      "Extensions & accessories",
      "South Indian & North Indian styles",
      "Hair care guidance",
      "Certificate on completion",
    ],
  },
  {
    id: "combo",
    title: "Complete Beauty Course",
    duration: "90 Days",
    sessions: "70 Sessions",
    fee: "\u20b955,000",
    level: "Beginner to Pro",
    icon: "\ud83d\udc51",
    highlight: true,
    features: [
      "All 5 courses included",
      "Bridal + Party + Nail + Hair + Skin",
      "Portfolio shoot session",
      "Internship assistance",
      "Career & placement guidance",
      "Master Certificate",
    ],
  },
];

const STATS = [
  { num: 300, suffix: "+", label: "Students Trained", icon: "\ud83c\udf93" },
  { num: 5, suffix: "+", label: "Courses Offered", icon: "\ud83d\udcda" },
  { num: 10, suffix: "+", label: "Years Experience", icon: "\u2b50" },
  { num: 95, suffix: "%", label: "Placement Rate", icon: "\ud83d\ude80" },
];

const TESTIMONIALS = [
  {
    name: "Priya Thakur",
    city: "Nagpur",
    course: "Bridal Makeup Mastery",
    text: "The training completely transformed my career. Snehal ma'am's hands-on teaching style is exceptional. I got my first bridal booking within 2 weeks of completing the course!",
    rating: 5,
  },
  {
    name: "Ritu Sharma",
    city: "Amravati",
    course: "Nail Art & Extensions",
    text: "I always loved nail art but never knew it could become a profession. After Snehal's nail art course, I opened my own nail studio. Her guidance was invaluable.",
    rating: 5,
  },
  {
    name: "Anjali Desai",
    city: "Pune",
    course: "Complete Beauty Course",
    text: "Best investment I ever made! The complete course covers everything \u2014 from basics to advanced. The portfolio shoot was a bonus that helped me attract clients right away.",
    rating: 5,
  },
];

const BATCHES = [
  {
    month: "June 2026",
    date: "2nd June",
    course: "Bridal Makeup Mastery",
    seats: 8,
    available: 3,
  },
  {
    month: "June 2026",
    date: "5th June",
    course: "Nail Art & Extensions",
    seats: 10,
    available: 6,
  },
  {
    month: "July 2026",
    date: "1st July",
    course: "Complete Beauty Course",
    seats: 6,
    available: 2,
  },
  {
    month: "July 2026",
    date: "8th July",
    course: "Party & Glam Makeup",
    seats: 10,
    available: 7,
  },
];

function AnimatedCounter({
  target,
  suffix,
}: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = (target / 1800) * 16;
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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Academy() {
  return (
    <section
      id="academy"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F5EDE0 0%, #FAF7F2 40%, #F5EDE0 100%)",
      }}
      data-ocid="academy.section"
    >
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C4956A, #6B3A2A, #C4956A, transparent)",
        }}
      />
      <div
        className="absolute top-40 left-20 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(196,154,108,0.1)" }}
      />
      <div
        className="absolute bottom-40 right-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(61,35,20,0.07)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="uppercase tracking-widest text-xs font-semibold mb-3"
            style={{ color: "#C49A6C" }}
          >
            ✦ Professional Training
          </p>
          <h2
            className="font-display text-5xl md:text-6xl font-light mb-5 tracking-wide"
            style={{ color: "#3D2314" }}
          >
            Beauty{" "}
            <em
              className="font-normal italic"
              style={{
                background: "linear-gradient(135deg, #C4956A, #6B3A2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Academy
            </em>
          </h2>
          <p
            className="font-body text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#5C3D2E" }}
          >
            Learn from Amravati's most trusted makeup artist and educator.
            Professional courses with hands-on practice, certification, and
            career support.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl p-6 text-center shadow-sm"
              style={{
                background: "white",
                border: "1.5px solid rgba(196,154,108,0.25)",
              }}
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <p
                className="font-display text-4xl font-semibold mb-1"
                style={{
                  background: "linear-gradient(135deg, #C4956A, #6B3A2A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedCounter target={s.num} suffix={s.suffix} />
              </p>
              <p
                className="text-xs font-body uppercase tracking-widest"
                style={{ color: "#5C3D2E" }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why learn from Snehal */}
        <motion.div
          className="rounded-3xl p-10 mb-20 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: "linear-gradient(135deg, #6B3A2A, #8B5E3C)",
            color: "white",
          }}
          data-ocid="academy.why_learn_card"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p
                className="uppercase tracking-widest text-xs font-semibold mb-3"
                style={{ color: "#E8D5B7" }}
              >
                Why Choose Our Academy
              </p>
              <h3
                className="font-display text-3xl font-semibold mb-4"
                style={{ color: "white" }}
              >
                Learn from the Best, Become the Best
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                With 10+ years of active bridal and professional makeup
                experience, Snehal Pawar doesn't just teach theory \u2014 she
                teaches from real-world practice. Every batch is small and
                personalized, ensuring each student gets individual attention.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "\ud83c\udfaf", label: "Hands-on Practice" },
                {
                  icon: "\ud83d\udc69\u200d\ud83c\udfeb",
                  label: "Personal Mentorship",
                },
                { icon: "\ud83c\udfc6", label: "Certified Courses" },
                { icon: "\ud83d\udcbc", label: "Career Support" },
                { icon: "\ud83d\udcf8", label: "Portfolio Shoot" },
                { icon: "\ud83c\udf0d", label: "International Techniques" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  <span>{f.icon}</span>
                  <span className="font-body">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Courses */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-widest text-xs font-semibold mb-2"
              style={{ color: "#C49A6C" }}
            >
              Enroll Now
            </p>
            <h3
              className="font-display text-3xl font-semibold"
              style={{ color: "#3D2314" }}
            >
              Our Courses
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300"
                style={{
                  border: c.highlight
                    ? "2px solid rgba(196,154,108,0.7)"
                    : "1.5px solid rgba(196,154,108,0.2)",
                  background: "white",
                }}
                data-ocid={`academy.course.${i + 1}`}
              >
                {c.highlight && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                      background:
                        "linear-gradient(90deg, #C4956A, #6B3A2A, #C4956A)",
                    }}
                  />
                )}
                <div className="p-7">
                  {c.highlight && (
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase mb-4"
                      style={{
                        background: "rgba(196,154,108,0.15)",
                        border: "1px solid rgba(196,154,108,0.4)",
                        color: "#C49A6C",
                      }}
                    >
                      Most Popular
                    </span>
                  )}
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h4
                    className="font-display text-lg font-semibold mb-1"
                    style={{ color: "#3D2314" }}
                  >
                    {c.title}
                  </h4>
                  <p
                    className="text-xs font-semibold mb-4"
                    style={{ color: "#C49A6C" }}
                  >
                    {c.level}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {c.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs font-body"
                        style={{ color: "#5C3D2E" }}
                      >
                        <span style={{ color: "#C49A6C" }}>✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="pt-4"
                    style={{ borderTop: "1px solid rgba(196,154,108,0.2)" }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p
                          className="font-display text-xl font-semibold"
                          style={{ color: "#3D2314" }}
                        >
                          {c.fee}
                        </p>
                        <p
                          className="text-xs font-body"
                          style={{ color: "#5C3D2E" }}
                        >
                          {c.duration} \u00b7 {c.sessions}
                        </p>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/919561548151?text=Hi Snehal, I'm interested in the ${encodeURIComponent(c.title)} course. Please share more details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 hover:scale-105"
                      style={
                        c.highlight
                          ? {
                              background:
                                "linear-gradient(135deg, #C4956A, #6B3A2A)",
                              color: "white",
                            }
                          : {
                              background: "rgba(196,154,108,0.1)",
                              border: "1px solid rgba(196,154,108,0.4)",
                              color: "#3D2314",
                            }
                      }
                      data-ocid={`academy.enroll_button.${i + 1}`}
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming batches */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-widest text-xs font-semibold mb-2"
              style={{ color: "#C49A6C" }}
            >
              Limited Seats
            </p>
            <h3
              className="font-display text-3xl font-semibold"
              style={{ color: "#3D2314" }}
            >
              Upcoming Batches
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BATCHES.map((b, i) => (
              <motion.div
                key={`${b.date}-${b.course}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-5 flex items-center justify-between shadow-sm"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(196,154,108,0.2)",
                }}
                data-ocid={`academy.batch.${i + 1}`}
              >
                <div>
                  <p
                    className="text-xs font-semibold mb-1"
                    style={{ color: "#C49A6C" }}
                  >
                    {b.month}
                  </p>
                  <p
                    className="font-display text-base font-semibold"
                    style={{ color: "#3D2314" }}
                  >
                    {b.course}
                  </p>
                  <p className="text-sm font-body" style={{ color: "#5C3D2E" }}>
                    Starting: {b.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-body" style={{ color: "#5C3D2E" }}>
                    {b.available}/{b.seats} seats left
                  </p>
                  <div
                    className="mt-1 h-1.5 w-24 rounded-full overflow-hidden"
                    style={{ background: "rgba(196,154,108,0.2)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${((b.seats - b.available) / b.seats) * 100}%`,
                        background: "linear-gradient(90deg, #C4956A, #6B3A2A)",
                      }}
                    />
                  </div>
                  <a
                    href="https://wa.me/919561548151?text=Hi, I want to enroll in your upcoming batch!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold transition-all hover:scale-105"
                    style={{
                      background: "rgba(196,154,108,0.15)",
                      color: "#3D2314",
                    }}
                    data-ocid={`academy.batch_enroll_button.${i + 1}`}
                  >
                    Book Seat
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Student testimonials */}
        <div className="mb-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="uppercase tracking-widest text-xs font-semibold mb-2"
              style={{ color: "#C49A6C" }}
            >
              Student Stories
            </p>
            <h3
              className="font-display text-3xl font-semibold"
              style={{ color: "#3D2314" }}
            >
              Success Stories
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl p-6 shadow-sm"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(196,154,108,0.2)",
                }}
                data-ocid={`academy.testimonial.${i + 1}`}
              >
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].slice(0, t.rating).map((star) => (
                    <span key={star} style={{ color: "#C49A6C" }}>
                      \u2605
                    </span>
                  ))}
                </div>
                <p
                  className="text-sm font-body italic leading-relaxed mb-4"
                  style={{ color: "#5C3D2E" }}
                >
                  "{t.text}"
                </p>
                <div>
                  <p
                    className="font-semibold text-sm font-body"
                    style={{ color: "#3D2314" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs font-body" style={{ color: "#C49A6C" }}>
                    {t.course} \u00b7 {t.city}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center rounded-3xl p-12 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background:
              "linear-gradient(135deg, #6B3A2A 0%, #8B5E3C 50%, #C4956A 100%)",
          }}
          data-ocid="academy.cta_section"
        >
          <div className="text-4xl mb-4">\ud83c\udf93</div>
          <h3
            className="font-display text-3xl font-semibold mb-4"
            style={{ color: "white" }}
          >
            Start Your Beauty Career Today
          </h3>
          <p
            className="font-body text-sm mb-8 max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Join our academy and learn the art of professional makeup from
            Amravati's most trusted educator. Limited seats per batch for
            personalized attention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919561548151?text=Hi Snehal, I'm interested in enrolling in your beauty academy. Please share details."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-105"
              style={{ background: "#25D366", color: "white" }}
              data-ocid="academy.whatsapp_enroll_button"
            >
              \ud83d\udcf1 WhatsApp to Enroll
            </a>
            <a
              href="tel:+919561548151"
              className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "2px solid rgba(255,255,255,0.5)",
                color: "white",
              }}
              data-ocid="academy.call_button"
            >
              \ud83d\udcde Call: 09561548151
            </a>
          </div>
        </motion.div>
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
