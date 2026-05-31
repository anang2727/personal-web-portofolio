import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import {
  SiLaravel,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiMysql,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

const techStack = [
  { name: "Laravel",    icon: SiLaravel,    color: "#FF2D20" },
  { name: "Next.js",    icon: SiNextdotjs,  color: "#000000" },
  { name: "React",      icon: SiReact,      color: "#61DAFB" },
  { name: "Tailwind CSS",    icon: SiTailwindcss,    color: "#61DAFB" },
  { name: "Supabase",   icon: SiSupabase,   color: "#000000" },
  { name: "MySQL",      icon: SiMysql,      color: "#4479A1" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js",    icon: SiNodedotjs,  color: "#339933" },
];

// Positions arranged around a circle, mapped to CSS percentages
const positions = [
  { top: "6%",  left: "50%", tx: "-50%" },
  { top: "20%", left: "85%", tx: "-50%" },
  { top: "50%", left: "96%", tx: "-50%" },
  { top: "78%", left: "85%", tx: "-50%" },
  { top: "90%", left: "50%", tx: "-50%" },
  { top: "78%", left: "15%", tx: "-50%" },
  { top: "50%", left: "4%",  tx: "-50%" },
  { top: "20%", left: "15%", tx: "-50%" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-14 px-6 relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">

          {/* ── Left ── */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#E5E7EB] rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-[#6B7280]">Available for work</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-3xl md:text-4xl font-semibold text-[#111827] leading-[1.2] mb-5"
            >
              Halo, Saya{" "}
              <span className="text-[#111827]">Anang Kurniawan</span>
              <br />
              <span className="text-[#9CA3AF] font-normal">Full Stack Developer</span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="w-10 h-px bg-[#D1D5DB] mb-5 origin-left"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm text-[#6B7280] leading-relaxed mb-8 max-w-md"
            >
              Membantu bisnis dan individu mengubah ide menjadi produk digital yang
              fungsional, cepat, dan menarik — dari web hingga mobile.
            </motion.p>

            {/* CTAs */}
       <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex flex-wrap items-center gap-3 relative z-10" // Ditambahkan relative z-10 di bungkusnya
          >
            <motion.button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              // Ditambahkan !cursor-pointer, pointer-events-auto, dan relative z-20
              className="!cursor-pointer pointer-events-auto relative z-20 flex items-center gap-2 px-5 h-10 bg-[#111827] text-white text-sm font-medium rounded-xl hover:bg-[#1F2937] transition-colors"
              whileTap={{ scale: 0.97 }}
            >
              Lihat Proyek
              <ArrowRight className="w-4 h-4" /> {/* Hapus cursor-pointer di sini */}
            </motion.button>

            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              // Ditambahkan !cursor-pointer, pointer-events-auto, dan relative z-20
              className="!cursor-pointer pointer-events-auto relative z-20 flex items-center gap-2 px-5 h-10 border border-[#E5E7EB] text-[#374151] text-sm font-medium rounded-xl hover:bg-[#F9FAFB] transition-colors"
              whileTap={{ scale: 0.97 }}
            >
              <Download className="w-3.5 h-3.5" /> {/* Hapus cursor-pointer di sini */}
              Download CV
            </motion.a>
          </motion.div>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 mt-10 pt-8 border-t border-[#F3F4F6]"
            >
              {[
                { value: "3+", label: "Tahun pengalaman" },
                { value: "20+", label: "Proyek selesai" },
                { value: "15+", label: "Klien puas" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 + i * 0.08 }}
                >
                  <p className="text-xl font-semibold text-[#111827] leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-[#9CA3AF] tracking-wide uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — orbital ring ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ height: 420 }}
          >
            {/* Rotating dashed ring */}
            <motion.div
              className="absolute w-[340px] h-[340px] rounded-full"
              style={{
                border: "1px dashed #E5E7EB",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* Static faint ring */}
            <div
              className="absolute w-[260px] h-[260px] rounded-full"
              style={{ border: "1px solid #F3F4F6" }}
            />

            {/* Center card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.35, type: "spring", stiffness: 200 }}
              className="relative z-10 w-36 h-28 rounded-2xl "
            >
              <img
                src="/me.png"
                alt="Anang Kurniawan"
                className="w-full h-full"
              />
            </motion.div>

            {/* Tech icons around the ring */}
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              const pos = positions[i];
              return (
                <motion.div
                  key={tech.name}
                  className="absolute"
                  style={{ top: pos.top, left: pos.left, transform: `translateX(${pos.tx})` }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.07, type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className="flex flex-col items-center gap-1 cursor-default group"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-[#D1D5DB] transition-all"
                      style={{ backgroundColor: `${tech.color}10` }}
                    >
                      <Icon style={{ color: tech.color }} className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] text-[#9CA3AF] tracking-wide font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile tech row (lg hidden) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex lg:hidden flex-wrap gap-2"
          >
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 border border-[#E5E7EB] rounded-lg"
                  style={{ backgroundColor: `${tech.color}0d` }}
                >
                  <Icon style={{ color: tech.color }} className="w-3.5 h-3.5" />
                  <span className="text-[10px] text-[#374151] font-medium">{tech.name}</span>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}