import { Float, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "motion/react";
import { useRef } from "react";
import type { Mesh } from "three";
import type { WhyChooseItem } from "../types";

function RotatingTorus({
  position,
  color,
  speed = 1,
  tubeRadius = 0.15,
}: {
  position: [number, number, number];
  color: string;
  speed?: number;
  tubeRadius?: number;
}) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.35 * speed;
      ref.current.rotation.y = state.clock.elapsedTime * 0.25 * speed;
      ref.current.rotation.z = state.clock.elapsedTime * 0.1 * speed;
    }
  });
  return (
    <Float speed={1.5 * speed} floatIntensity={1.2}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[0.65, tubeRadius, 16, 100]} />
        <meshStandardMaterial
          color={color}
          metalness={0.95}
          roughness={0.05}
          emissive={color}
          emissiveIntensity={0.45}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function FloatingStar({
  position,
  color,
}: { position: [number, number, number]; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
      ref.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={2} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial
          color={color}
          metalness={1}
          roughness={0}
          emissive={color}
          emissiveIntensity={0.7}
        />
      </mesh>
    </Float>
  );
}

function WhyScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 4]} color="#a855f7" intensity={2.5} />
      <pointLight position={[-4, -2, 3]} color="#7c3aed" intensity={2} />
      <pointLight position={[0, -4, 2]} color="#c084fc" intensity={1.2} />
      <Sparkles
        count={25}
        size={1.8}
        scale={[14, 10, 6]}
        speed={0.3}
        opacity={0.45}
        color="#8b5cf6"
      />
      <RotatingTorus position={[-4, 2, -3]} color="#a855f7" />
      <RotatingTorus
        position={[4, -2, -4]}
        color="#8b5cf6"
        speed={1.3}
        tubeRadius={0.1}
      />
      <RotatingTorus position={[1, 3, -5]} color="#7c3aed" speed={0.8} />
      <RotatingTorus
        position={[-2, -3, -4]}
        color="#c084fc"
        speed={1.6}
        tubeRadius={0.08}
      />
      <RotatingTorus
        position={[3, 1, -3]}
        color="#6d28d9"
        speed={1.1}
        tubeRadius={0.18}
      />
      <FloatingStar position={[-3, 0, -3]} color="#a855f7" />
      <FloatingStar position={[2.5, -1, -2]} color="#c084fc" />
      <FloatingStar position={[-1, 3.5, -4]} color="#8b5cf6" />
    </>
  );
}

const REASONS: WhyChooseItem[] = [
  {
    id: "experience",
    title: "8+ Years of Mastery",
    description:
      "Over 8 years of dedicated bridal makeup artistry, with advanced training in Mumbai's top institutes and hands-on experience with 500+ brides.",
    icon: "⏳",
    stat: "8+",
    statLabel: "Years",
  },
  {
    id: "premium",
    title: "Premium Products Only",
    description:
      "We exclusively use MAC, NARS, Charlotte Tilbury, Huda Beauty, and Armani — international luxury brands that photograph flawlessly in every lighting.",
    icon: "💎",
    stat: "100%",
    statLabel: "Luxury Brands",
  },
  {
    id: "celebrity",
    title: "Celebrity-Endorsed",
    description:
      "Trusted by Bollywood celebrities, television personalities, and prominent public figures for their most important appearances across India.",
    icon: "⭐",
    stat: "50+",
    statLabel: "Celebs",
  },
  {
    id: "airbrush",
    title: "Airbrush Expertise",
    description:
      "Certified in advanced airbrush makeup, HD techniques, and contouring methods that create a second-skin finish lasting 12+ hours.",
    icon: "🎨",
    stat: "12h+",
    statLabel: "Long-lasting",
  },
  {
    id: "personalized",
    title: "100% Personalized",
    description:
      "Every bride receives a dedicated pre-wedding consultation, skin analysis, and a bespoke look designed around her unique features and vision.",
    icon: "🌸",
    stat: "1:1",
    statLabel: "Consultation",
  },
  {
    id: "salon",
    title: "Premium Studio Setup",
    description:
      "State-of-the-art studio in LDA Colony, Lucknow with professional lighting, a hygiene-first approach, and a serene bridal experience.",
    icon: "🏛️",
    stat: "5★",
    statLabel: "Studio",
  },
];

function ReasonCard({ item, index }: { item: WhyChooseItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
      className="glass border border-gold/12 hover:border-gold/30 rounded-2xl p-7 shadow-card-luxury hover:shadow-card-hover transition-smooth group premium-card"
      data-ocid={`why.item.${index + 1}`}
    >
      <div className="flex items-start gap-5">
        <div
          className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-smooth animate-depth-pulse"
          style={{ background: "rgba(139,92,246,0.12)" }}
        >
          {item.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl font-semibold text-foreground mb-2 tracking-wide">
            {item.title}
          </h3>
          <p className="text-sm text-foreground/55 font-body leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
      {item.stat && (
        <div className="mt-6 pt-4 border-t border-gold/12 flex items-center gap-3">
          <span className="font-display text-3xl font-light gradient-gold-text">
            {item.stat}
          </span>
          <span className="text-xs text-foreground/40 font-body tracking-widest uppercase">
            {item.statLabel}
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative py-28 bg-luxury-950 overflow-hidden"
      data-ocid="why.section"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 55 }}>
          <WhyScene />
        </Canvas>
      </div>

      <div
        className="absolute -top-20 right-10 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(139,92,246,0.06)" }}
      />
      <div
        className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(109,40,217,0.05)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold/25 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow mb-4">✦ Why Choose Us</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-5 tracking-wide">
            The <span className="gradient-gold-text italic">Nidhi Bhatia</span>{" "}
            Difference
          </h2>
          <p className="text-foreground/50 font-body text-lg max-w-2xl mx-auto">
            When you choose Nidhi Bhatia, you're not just booking a makeup
            artist — you're investing in a legacy of artistry, trust, and
            uncompromising excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {REASONS.map((reason, i) => (
            <ReasonCard key={reason.id} item={reason} index={i} />
          ))}
        </div>

        {/* Showcase image row */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              src: "/assets/images/nidhi-doing-makeup.png",
              alt: "Nidhi Bhatia at work",
            },
            {
              src: "/assets/images/salon-interior.png",
              alt: "Luxury salon interior",
            },
            {
              src: "/assets/images/nail-art-gold.png",
              alt: "Premium nail artistry",
            },
          ].map((img) => (
            <div
              key={img.src}
              className="relative rounded-xl overflow-hidden group"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-107"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-950/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/25 rounded-xl transition-all duration-300" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: "inset 0 0 30px rgba(139,92,246,0.15)" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
