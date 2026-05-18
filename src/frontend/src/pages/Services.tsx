import { Float, MeshWobbleMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "motion/react";
import { useRef } from "react";
import type { Mesh } from "three";
import type { Service } from "../types";

function ServiceOrb({
  position,
  color,
  speed = 2,
}: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1 * speed;
    }
  });
  return (
    <Float speed={speed} floatIntensity={2.5} rotationIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <dodecahedronGeometry args={[0.45, 0]} />
        <MeshWobbleMaterial
          color={color}
          factor={0.45}
          speed={2.5}
          metalness={0.95}
          roughness={0.05}
          transparent
          opacity={0.85}
          emissive={color}
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

function FloatingIcosahedron({
  position,
  color,
}: { position: [number, number, number]; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.25;
      ref.current.rotation.y = state.clock.elapsedTime * 0.35;
    }
  });
  return (
    <Float speed={1.8} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial
          color={color}
          metalness={1}
          roughness={0}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function ServiceScene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 3]} color="#C49A6C" intensity={2.5} />
      <pointLight position={[-5, -3, 2]} color="#5C3D2E" intensity={2} />
      <pointLight position={[0, 3, 4]} color="#E8D5B7" intensity={1.2} />
      <Sparkles
        count={30}
        size={1.5}
        scale={[12, 8, 6]}
        speed={0.4}
        opacity={0.5}
        color="#C49A6C"
      />
      <ServiceOrb position={[-3, 2, -2]} color="#C49A6C" />
      <ServiceOrb position={[3, -1, -3]} color="#5C3D2E" speed={1.5} />
      <ServiceOrb position={[0, 3, -4]} color="#C49A6C" speed={2.5} />
      <ServiceOrb position={[-1, -2, -2]} color="#5C3D2E" speed={1.8} />
      <FloatingIcosahedron position={[2, 2.5, -3]} color="#E8D5B7" />
      <FloatingIcosahedron position={[-2.5, -1.5, -3]} color="#C49A6C" />
    </>
  );
}

const SERVICES: Service[] = [
  {
    id: "bridal",
    title: "Bridal Makeup",
    description:
      "Complete bridal transformation with premium products, airbrush technique, and personalized consultation. From the mehendi to the reception — every look perfectly crafted.",
    price: "₹15,000 onwards",
    duration: "4-5 hours",
    icon: "👑",
    features: [
      "Full-day coverage",
      "Premium HD products",
      "Trial session included",
      "Touch-up kit",
    ],
    highlight: true,
  },
  {
    id: "engagement",
    title: "Engagement Makeup",
    description:
      "Radiant, photogenic makeup for your engagement ceremony. Luminous skin, bold eyes, and long-lasting formulas that shine in every photo.",
    price: "₹8,000 onwards",
    duration: "2-3 hours",
    icon: "💍",
    features: [
      "Photogenic finish",
      "Long-wear formula",
      "Skin prep included",
      "Personalized look",
    ],
    highlight: false,
  },
  {
    id: "party",
    title: "Party & Event Makeup",
    description:
      "Glamorous party looks for receptions, sangeet, cocktail evenings, and special occasions. Bold, dramatic, unforgettable.",
    price: "₹4,500 onwards",
    duration: "1.5-2 hours",
    icon: "✨",
    features: [
      "Glam & editorial looks",
      "Eye-catching designs",
      "All skin tones",
      "Quick turnaround",
    ],
    highlight: false,
  },
  {
    id: "airbrush",
    title: "Airbrush Makeup",
    description:
      "Ultra-light, flawless airbrush technique for the most photogenic finish. Perfect for HD photography, film shoots, and premium occasions.",
    price: "₹6,000 onwards",
    duration: "2 hours",
    icon: "🎨",
    features: [
      "HD flawless finish",
      "Feather-light feel",
      "Water-resistant",
      "Celebrity-grade",
    ],
    highlight: false,
  },
  {
    id: "mehndi",
    title: "Pre-Wedding Functions",
    description:
      "Coordinated looks across all pre-wedding functions — Haldi, Mehndi, Sangeet. Consistent elegance through every ritual.",
    price: "₹12,000 (3 looks)",
    duration: "Per function",
    icon: "🌸",
    features: [
      "3-look package",
      "Coordinated themes",
      "Early morning slots",
      "Group discounts",
    ],
    highlight: false,
  },
  {
    id: "saree",
    title: "Saree Draping & Styling",
    description:
      "Expert saree draping in various regional styles paired with complete makeup artistry. Look absolutely regal for your big day.",
    price: "₹3,500 onwards",
    duration: "1 hour",
    icon: "🪷",
    features: [
      "Multiple draping styles",
      "Regional specialties",
      "Accessory styling",
      "Hairdo included",
    ],
    highlight: false,
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`relative rounded-2xl overflow-hidden transition-smooth group ${
        service.highlight
          ? "border border-gold/45 shadow-glow-gold animate-glow-pulse"
          : "border border-gold/12 hover:border-gold/30 shadow-card-luxury hover:shadow-card-hover"
      }`}
      data-ocid={`services.item.${index + 1}`}
    >
      {service.highlight && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      )}

      <div
        className={`p-7 h-full ${service.highlight ? "bg-gradient-to-br from-[#EFE3D0] via-[#F5EDE0] to-[#FAF7F2]" : "glass"}`}
      >
        {service.highlight && (
          <span className="inline-block px-3 py-1 bg-gold/15 border border-gold/35 rounded-full text-gold text-[10px] tracking-widest uppercase font-body mb-4">
            Most Popular
          </span>
        )}

        <div className="text-3xl mb-4">{service.icon}</div>
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 tracking-wide">
          {service.title}
        </h3>
        <p className="text-sm text-foreground/55 font-body leading-relaxed mb-5">
          {service.description}
        </p>

        <ul className="space-y-1.5 mb-6">
          {service.features.map((feat) => (
            <li
              key={feat}
              className="flex items-center gap-2 text-xs text-foreground/60 font-body"
            >
              <span className="text-gold text-xs">✦</span>
              {feat}
            </li>
          ))}
        </ul>

        <div className="flex items-end justify-between pt-4 border-t border-gold/12">
          <div>
            <p className="text-gold font-display text-lg font-semibold">
              {service.price}
            </p>
            <p className="text-foreground/40 text-xs font-body">
              {service.duration}
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`px-4 py-2 rounded-full text-xs font-body font-semibold tracking-wider transition-smooth ${
              service.highlight
                ? "gradient-gold text-white shadow-glow-subtle hover:shadow-glow-gold"
                : "glass border border-gold/22 text-gold hover:border-gold/45"
            }`}
            data-ocid={`services.book_button.${index + 1}`}
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 bg-section-dark overflow-hidden"
      data-ocid="services.section"
    >
      {/* 3D background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ServiceScene />
        </Canvas>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div
        className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(92,61,46,0.06)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(196,154,108,0.05)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow mb-4">✦ What We Offer</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-5 tracking-wide">
            Our <span className="gradient-gold-text italic">Services</span>
          </h2>
          <p className="text-foreground/50 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Every service is a bespoke experience — crafted with premium
            products, artistic precision, and an unwavering commitment to making
            you look extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-foreground/40 font-body text-sm mb-4">
            Custom packages available for destination weddings and celebrity
            clients
          </p>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 rounded-full gradient-gold text-white font-body font-semibold text-sm tracking-wider shadow-glow-gold hover:shadow-glow-elevated transition-smooth hover:scale-105"
            data-ocid="services.contact_button"
          >
            Get a Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
