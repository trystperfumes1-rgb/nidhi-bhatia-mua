import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { Review } from "../types";

const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Lucknow, UP",
    rating: 5,
    text: "Nidhi di made my wedding day absolutely magical. My makeup lasted 14 hours through tears, dancing, and everything in between. Every photo is stunning. She truly understood my vision and executed it to perfection.",
    service: "Bridal Makeup",
    date: "December 2024",
  },
  {
    id: "2",
    name: "Ananya Gupta",
    location: "Kanpur, UP",
    rating: 5,
    text: "I had my engagement and wedding makeup both done by Nidhi. The transformation was beyond what I imagined — I literally didn't recognize myself in the mirror (in the best way). She's a true artist!",
    service: "Bridal & Engagement",
    date: "November 2024",
  },
  {
    id: "3",
    name: "Riya Malhotra",
    location: "Delhi, NCR",
    rating: 5,
    text: "Nidhi is THE best bridal makeup artist I've ever come across. Her attention to detail is incredible. The airbrush technique she used for my wedding was flawless in all 4K photos. 1000% recommend.",
    service: "Airbrush Bridal",
    date: "October 2024",
  },
  {
    id: "4",
    name: "Sunita Verma",
    location: "Lucknow, UP",
    rating: 5,
    text: "I was very nervous about my bridal look but Nidhi put me completely at ease. She took time to understand my preferences and the result was exactly what I dreamed of. Professional, warm, and incredibly talented.",
    service: "Bridal Makeup",
    date: "September 2024",
  },
  {
    id: "5",
    name: "Kavitha Iyer",
    location: "Bengaluru (Destination Wedding in Lucknow)",
    rating: 5,
    text: "We came all the way from Bangalore for our Lucknow wedding and specifically chose Nidhi based on her Instagram portfolio. She exceeded every expectation. My South Indian bridal look was absolutely stunning!",
    service: "South Indian Bridal",
    date: "August 2024",
  },
  {
    id: "6",
    name: "Meera Saxena",
    location: "Lucknow, UP",
    rating: 5,
    text: "I've been going to Nidhi for all my events for 3 years. Whether it's a party, sangeet or wedding — she always delivers. Her salon is beautiful, hygienic and she's always on time. Best investment!",
    service: "Regular Client",
    date: "July 2024",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {["s1", "s2", "s3", "s4", "s5"].map((k, i) => (
        <motion.span
          key={k}
          className={i < rating ? "text-gold" : "text-foreground/20"}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass border border-gold/12 hover:border-gold/25 rounded-2xl p-7 shadow-card-luxury hover:shadow-card-hover transition-smooth h-full flex flex-col premium-card"
      data-ocid={`testimonials.item.${index + 1}`}
    >
      {/* Animated quote mark */}
      <div className="font-display text-5xl text-gold/30 leading-none mb-4 select-none animate-pulse-gentle">
        "
      </div>

      <p className="text-foreground/70 font-body text-sm leading-relaxed flex-1 mb-6 italic">
        {review.text}
      </p>

      <div className="border-t border-gold/12 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-display text-base font-semibold text-foreground tracking-wide">
              {review.name}
            </p>
            <p className="text-xs text-foreground/40 font-body mt-0.5">
              {review.location}
            </p>
            <p className="text-[10px] text-gold/65 font-body tracking-wider uppercase mt-1 font-semibold">
              {review.service}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <StarRating rating={review.rating} />
            <span className="text-[10px] text-foreground/30 font-body">
              {review.date}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [expanded, setExpanded] = useState(false);
  const visibleReviews = expanded ? REVIEWS : REVIEWS.slice(0, 3);

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-luxury-950 overflow-hidden"
      data-ocid="testimonials.section"
    >
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(124,58,237,0.06)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/25 to-transparent" />
      <div
        className="absolute bottom-20 right-0 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(139,92,246,0.05)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow mb-4">✦ Client Love</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-5 tracking-wide">
            What{" "}
            <span className="gradient-rose-gold-text italic">Brides Say</span>
          </h2>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex gap-1">
              {["a1", "a2", "a3", "a4", "a5"].map((k) => (
                <span key={k} className="text-gold text-xl animate-twinkle">
                  ★
                </span>
              ))}
            </div>
            <div className="text-left">
              <p className="font-display text-2xl font-semibold gradient-gold-text">
                5.0 / 5.0
              </p>
              <p className="text-xs text-foreground/40 font-body">
                Based on 500+ happy brides
              </p>
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={expanded ? "expanded" : "collapsed"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          >
            {visibleReviews.map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="px-8 py-3.5 rounded-full glass border border-gold/22 text-gold font-body font-semibold text-sm hover:border-gold/45 hover:shadow-glow-subtle transition-smooth"
            data-ocid="testimonials.toggle_button"
          >
            {expanded ? "Show Less" : "Read More Reviews"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
