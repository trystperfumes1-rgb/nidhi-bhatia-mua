import { Float, Sparkles, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "motion/react";
import { useMemo, useRef } from "react";
import type { Mesh, Points } from "three";

function FloatingOrb({
  position,
  scale,
  color,
  speed = 1.5,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.45}
          metalness={0.85}
          roughness={0.15}
          transparent
          opacity={0.75}
        />
      </mesh>
    </Float>
  );
}

function FloatingDiamond({
  position,
  color,
}: { position: [number, number, number]; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
          metalness={1}
          roughness={0}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

function FloatingRing({
  position,
  color,
}: { position: [number, number, number]; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.2} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[0.5, 0.12, 16, 60]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.95}
          roughness={0.05}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function PurpleParticles() {
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  const pointsRef = useRef<Points>(null);
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.025;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#a855f7"
        transparent
        opacity={0.75}
        sizeAttenuation
      />
    </points>
  );
}

function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[5, 5, 5]} color="#a855f7" intensity={2.5} />
      <pointLight position={[-5, -3, 3]} color="#7c3aed" intensity={1.5} />
      <pointLight position={[0, -5, -5]} color="#4c1d95" intensity={1.2} />
      <pointLight position={[3, 0, -2]} color="#c084fc" intensity={1.0} />

      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={3.5}
        saturation={0.6}
        fade
        speed={0.6}
      />
      <Sparkles
        count={80}
        size={2}
        scale={[16, 12, 10]}
        speed={0.35}
        opacity={0.65}
        color="#a855f7"
      />
      <Sparkles
        count={40}
        size={1.2}
        scale={[12, 8, 6]}
        speed={0.5}
        opacity={0.45}
        color="#c084fc"
      />

      <PurpleParticles />

      <FloatingOrb position={[-4.5, 1.5, -3]} scale={0.9} color="#8b5cf6" />
      <FloatingOrb
        position={[4, -1.5, -4]}
        scale={0.6}
        color="#7c3aed"
        speed={1.8}
      />
      <FloatingOrb
        position={[1.5, 3, -5]}
        scale={0.4}
        color="#a855f7"
        speed={2.2}
      />
      <FloatingOrb
        position={[-2, -2.5, -2]}
        scale={0.3}
        color="#6d28d9"
        speed={1.3}
      />
      <FloatingOrb
        position={[3, 2.5, -6]}
        scale={0.45}
        color="#c084fc"
        speed={1.6}
      />

      <FloatingDiamond position={[-2.5, 3, -4]} color="#a855f7" />
      <FloatingDiamond position={[3.5, -2, -3]} color="#8b5cf6" />
      <FloatingDiamond position={[0, -3, -5]} color="#c084fc" />

      <FloatingRing position={[-3.5, -1, -3]} color="#7c3aed" />
      <FloatingRing position={[2.5, 2, -4]} color="#a855f7" />
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-luxury-950"
      data-ocid="hero.section"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <HeroScene />
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/65 via-transparent to-black/92 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/30 to-transparent pointer-events-none" />

      {/* Purple glow orbs */}
      <div
        className="absolute top-1/3 left-1/4 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none z-10"
        style={{ background: "rgba(139,92,246,0.08)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full blur-[110px] pointer-events-none z-10"
        style={{ background: "rgba(109,40,217,0.07)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px] pointer-events-none z-10"
        style={{ background: "rgba(124,58,237,0.04)" }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="section-eyebrow mb-4 animate-fade-in">
                ✦ Lucknow's Premier Bridal Makeup Artist
              </p>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight">
                <span className="gradient-gold-text">Art of</span>
                <br />
                <span className="text-foreground">Timeless</span>
                <br />
                <em className="gradient-rose-gold-text font-normal">Beauty</em>
              </h1>
            </motion.div>

            <motion.p
              className="font-body text-foreground/65 text-lg leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              From intimate ceremonies to grand royal weddings — Nidhi Bhatia
              crafts breathtaking bridal looks with precision, luxury, and an
              artist's eye for perfection. Trusted by celebrities across India.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 rounded-full gradient-gold text-white font-body font-semibold tracking-wider text-sm shadow-glow-gold hover:shadow-glow-elevated transition-smooth hover:scale-105 active:scale-95 animate-glow-wave"
                data-ocid="hero.book_now_button"
              >
                Book Your Look
              </button>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 rounded-full glass border border-gold/25 text-gold font-body font-medium tracking-wider text-sm hover:border-gold/50 hover:shadow-glow-subtle transition-smooth"
                data-ocid="hero.view_portfolio_button"
              >
                View Portfolio
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {[
                { num: "500+", label: "Happy Brides" },
                { num: "8+", label: "Years Experience" },
                { num: "50+", label: "Celebrity Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-medium gradient-gold-text animate-depth-pulse">
                    {stat.num}
                  </p>
                  <p className="text-xs text-foreground/40 font-body tracking-widest uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Portrait image */}
          <motion.div
            className="hidden lg:flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative w-72 h-72 animate-levitate">
              {/* Decorative rings */}
              <div className="absolute inset-[-24px] rounded-full border border-gold/25 animate-spin-slow" />
              <div className="absolute inset-[-12px] rounded-full border border-rose-gold/20 animate-spin-slow-reverse" />
              <div className="absolute inset-[-40px] rounded-full border border-gold/10" />
              {/* Purple glow */}
              <div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{ background: "rgba(139,92,246,0.15)" }}
              />
              {/* Portrait */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gold/35 shadow-glow-gold">
                <img
                  src="/assets/images/nidhi-portrait.png"
                  alt="Nidhi Bhatia - Bridal Makeup Artist"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass border border-gold/35 rounded-2xl px-4 py-2.5 shadow-glow-subtle"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <p className="text-gold text-xs font-body font-semibold tracking-wider">
                  ★ 5.0 Rating
                </p>
                <p className="text-foreground/50 text-[10px] font-body">
                  500+ Brides
                </p>
              </motion.div>
              {/* Orbiting dot */}
              <div className="absolute inset-[-40px] flex items-center justify-center">
                <motion.div
                  className="w-3 h-3 rounded-full shadow-glow-gold"
                  style={{
                    background: "#a855f7",
                    transformOrigin: "160px 160px",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <p className="text-[10px] text-foreground/30 tracking-widest uppercase font-body">
          Scroll
        </p>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
