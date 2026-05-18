import { motion } from "motion/react";
import { useState } from "react";

const MILESTONES = [
  {
    year: "2015",
    title: "The Beginning",
    desc: "Snehal started her passion for beauty and enrolled in her first professional makeup course in Amravati.",
  },
  {
    year: "2017",
    title: "First Bridal Client",
    desc: "Completed her first bridal transformation — and was hooked. The joy on her client's face sealed her calling.",
  },
  {
    year: "2019",
    title: "Studio Launch",
    desc: "Opened Makeup by Snehal Pawar Academy in Sai Nagar, Amravati — her dream studio and training space.",
  },
  {
    year: "2021",
    title: "Academy Milestone",
    desc: "Trained over 100 students across Maharashtra, offering hands-on courses in bridal, nail art, and skincare.",
  },
  {
    year: "2024",
    title: "500+ Brides Transformed",
    desc: "Celebrated the milestone of 500+ happy brides, from intimate ceremonies to grand destination weddings.",
  },
  {
    year: "2025",
    title: "Expanding Dreams",
    desc: "Growing the academy with new batch offerings and introducing advanced international makeup techniques.",
  },
];

const ACHIEVEMENTS = [
  { num: "500+", label: "Happy Brides", icon: "👰" },
  { num: "10+", label: "Years Experience", icon: "⭐" },
  { num: "300+", label: "Students Trained", icon: "🎓" },
  { num: "15+", label: "Cities Covered", icon: "📍" },
];

const TEAM = [
  {
    name: "Snehal Pawar",
    role: "Lead Artist & Founder",
    specialty: "Bridal & Airbrush Makeup",
    emoji: "💄",
  },
  {
    name: "Priya Deshmukh",
    role: "Senior Makeup Artist",
    specialty: "Party & Pre-Wedding",
    emoji: "✨",
  },
  {
    name: "Neha Kale",
    role: "Nail Art Specialist",
    specialty: "Nail Art & Extensions",
    emoji: "💅",
  },
  {
    name: "Aishwarya Bhore",
    role: "Hair Stylist",
    specialty: "Bridal Hair & Styling",
    emoji: "🪮",
  },
];

const VALUES = [
  {
    title: "Premium Quality",
    desc: "Only the finest, skin-safe products — MAC, Charlotte Tilbury, Huda Beauty, and more.",
    icon: "🌟",
  },
  {
    title: "Strict Hygiene",
    desc: "Sanitized tools, single-use applicators, and a salon that meets international cleanliness standards.",
    icon: "🧴",
  },
  {
    title: "Personalized Looks",
    desc: "Every client is unique. We create bespoke looks tailored to your features, skin tone, and style.",
    icon: "🎨",
  },
  {
    title: "On-Time Promise",
    desc: "We respect your schedule. Punctuality and reliability are our professional guarantees.",
    icon: "⏰",
  },
];

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FAF7F2 0%, #F5EDE0 40%, #FAF7F2 100%)",
      }}
      data-ocid="about.section"
    >
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C4956A, #6B3A2A, #C4956A, transparent)",
        }}
      />
      <div
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(196,154,108,0.12)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(61,35,20,0.08)" }}
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
            ✦ Our Story
          </p>
          <h2
            className="font-display text-5xl md:text-6xl font-light mb-5 tracking-wide"
            style={{ color: "#3D2314" }}
          >
            About{" "}
            <em
              className="font-normal italic"
              style={{
                background: "linear-gradient(135deg, #C4956A, #6B3A2A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Snehal Pawar
            </em>
          </h2>
          <p
            className="font-body text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#5C3D2E" }}
          >
            A story of passion, artistry, and the belief that every woman
            deserves to feel like royalty on her most precious day.
          </p>
        </motion.div>

        {/* Hero intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-96 mx-auto lg:mx-0">
              <div
                className="w-full h-full rounded-3xl overflow-hidden flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #F5EDE0, #E8C9A0)",
                  border: "2px solid rgba(196,154,108,0.35)",
                }}
              >
                <span style={{ fontSize: "5rem" }}>💄</span>
              </div>
              <motion.div
                className="absolute -bottom-5 -right-5 rounded-2xl px-4 py-3 shadow-lg"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(196,154,108,0.4)",
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <p
                  className="text-xs font-semibold"
                  style={{ color: "#C49A6C" }}
                >
                  ★ 5.0 Rating
                </p>
                <p className="text-[10px]" style={{ color: "#5C3D2E" }}>
                  500+ Brides
                </p>
              </motion.div>
              <div
                className="absolute -top-3 -left-3 w-12 h-12 rounded-full blur-sm"
                style={{ background: "rgba(196,154,108,0.25)" }}
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(196,154,108,0.15)",
                border: "1px solid rgba(196,154,108,0.4)",
                color: "#C49A6C",
              }}
            >
              Certified Makeup Artist & Trainer
            </div>
            <h3
              className="font-display text-3xl font-semibold"
              style={{ color: "#3D2314" }}
            >
              Making Every Bride Feel Like Royalty
            </h3>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#5C3D2E" }}
            >
              Snehal Pawar is a passionate bridal makeup artist and beauty
              educator based in Amravati, Maharashtra. With over 10 years of
              experience, she has transformed hundreds of brides, helping them
              feel confident, radiant, and absolutely stunning on their most
              important day.
            </p>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#5C3D2E" }}
            >
              Her studio —{" "}
              <strong style={{ color: "#3D2314" }}>
                Makeup by Snehal Pawar and Academy
              </strong>{" "}
              — is a one-stop destination for bridal beauty, party glam, nail
              art, and professional makeup training.
            </p>
            <div className="pt-2 space-y-2">
              {[
                "Certified in Airbrush & HD Makeup",
                "Trained in International Bridal Techniques",
                "Expert in Indian Bridal Looks",
                "Professional Nail Art Technician",
              ].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 text-sm font-body"
                  style={{ color: "#3D2314" }}
                >
                  <span style={{ color: "#C49A6C" }}>✦</span>
                  {cert}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("book")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3 rounded-full font-body font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #C4956A, #6B3A2A)",
                color: "white",
              }}
              data-ocid="about.book_appointment_button"
            >
              Book an Appointment
            </button>
          </motion.div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-2xl p-6 text-center shadow-md cursor-default"
              style={{
                background: "white",
                border: "1.5px solid rgba(196,154,108,0.25)",
              }}
              data-ocid={`about.achievement.${i + 1}`}
            >
              <div className="text-3xl mb-3">{a.icon}</div>
              <p
                className="font-display text-4xl font-semibold mb-1"
                style={{
                  background: "linear-gradient(135deg, #C4956A, #6B3A2A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {a.num}
              </p>
              <p
                className="text-xs font-body uppercase tracking-widest"
                style={{ color: "#5C3D2E" }}
              >
                {a.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-24">
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
              Our Journey
            </p>
            <h3
              className="font-display text-3xl font-semibold"
              style={{ color: "#3D2314" }}
            >
              The Road to Excellence
            </h3>
          </motion.div>
          <div className="relative">
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(196,154,108,0.5), transparent)",
              }}
            />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`md:flex md:items-center md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <button
                      type="button"
                      className="inline-block text-left rounded-2xl p-5 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md"
                      style={{
                        background:
                          activeTimeline === i
                            ? "white"
                            : "rgba(255,255,255,0.7)",
                        border: `1.5px solid ${activeTimeline === i ? "rgba(196,154,108,0.5)" : "rgba(196,154,108,0.2)"}`,
                        maxWidth: "380px",
                        marginLeft: i % 2 === 0 ? "auto" : "0",
                        marginRight: i % 2 === 1 ? "auto" : "0",
                      }}
                      onClick={() => setActiveTimeline(i)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setActiveTimeline(i)
                      }
                    >
                      <p
                        className="font-display text-sm font-semibold mb-1"
                        style={{ color: "#C49A6C" }}
                      >
                        {m.year}
                      </p>
                      <p
                        className="font-display text-lg font-semibold mb-2"
                        style={{ color: "#3D2314" }}
                      >
                        {m.title}
                      </p>
                      <p
                        className="font-body text-sm leading-relaxed"
                        style={{ color: "#5C3D2E" }}
                      >
                        {m.desc}
                      </p>
                    </button>
                  </div>
                  <div
                    className="hidden md:flex flex-shrink-0 w-4 h-4 rounded-full"
                    style={{
                      background: activeTimeline === i ? "#C49A6C" : "#E8D5B7",
                      border: "2px solid #C4956A",
                    }}
                  />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
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
              What We Stand For
            </p>
            <h3
              className="font-display text-3xl font-semibold"
              style={{ color: "#3D2314" }}
            >
              Our Core Values
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl p-6 text-center shadow-sm"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(196,154,108,0.2)",
                }}
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h4
                  className="font-display text-base font-semibold mb-2"
                  style={{ color: "#3D2314" }}
                >
                  {v.title}
                </h4>
                <p
                  className="text-sm font-body leading-relaxed"
                  style={{ color: "#5C3D2E" }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
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
              The Dream Team
            </p>
            <h3
              className="font-display text-3xl font-semibold"
              style={{ color: "#3D2314" }}
            >
              Meet Our Artists
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="rounded-2xl overflow-hidden shadow-md text-center"
                style={{ border: "1.5px solid rgba(196,154,108,0.2)" }}
                data-ocid={`about.team_member.${i + 1}`}
              >
                <div
                  className="h-40 flex items-center justify-center text-6xl"
                  style={{
                    background: "linear-gradient(135deg, #F5EDE0, #E8C9A0)",
                  }}
                >
                  {t.emoji}
                </div>
                <div className="p-5" style={{ background: "white" }}>
                  <h4
                    className="font-display text-base font-semibold mb-1"
                    style={{ color: "#3D2314" }}
                  >
                    {t.name}
                  </h4>
                  <p
                    className="text-xs font-semibold mb-1"
                    style={{ color: "#C49A6C" }}
                  >
                    {t.role}
                  </p>
                  <p className="text-xs font-body" style={{ color: "#5C3D2E" }}>
                    {t.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center rounded-3xl p-10 shadow-lg"
          style={{
            background: "white",
            border: "1.5px solid rgba(196,154,108,0.3)",
          }}
          data-ocid="about.personal_message_card"
        >
          <div className="text-5xl mb-6">💌</div>
          <blockquote
            className="font-display text-xl font-light italic leading-relaxed mb-6"
            style={{ color: "#3D2314" }}
          >
            "Every bride I work with is not just a client — she is a queen in
            her own story. My purpose is to make her feel that on the most
            important day of her life. With every stroke of my brush, I pour my
            heart into creating something truly beautiful."
          </blockquote>
          <p className="font-body font-semibold" style={{ color: "#C49A6C" }}>
            — Snehal Pawar
          </p>
          <p className="text-sm font-body" style={{ color: "#5C3D2E" }}>
            Founder, Makeup by Snehal Pawar and Academy
          </p>
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
