import { motion } from "motion/react";
import { useState } from "react";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiNodedotjs,
  SiFlutter,
  SiFirebase,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiFigma,
  SiBootstrap,
  SiSupabase,
} from "react-icons/si";
import { SiCss } from "react-icons/si";

import { TbBrandAdobeIllustrator } from "react-icons/tb";

type Skill = {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  icon: React.ElementType;
  color: string;
  category: string;
};

const skills: Skill[] = [
  // Frontend
  { name: "HTML", level: "Expert", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
  { name: "CSS", level: "Expert", icon: SiCss, color: "#1572B6", category: "Frontend" },
  { name: "JavaScript", level: "Expert", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { name: "TypeScript", level: "Advanced", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { name: "React JS", level: "Expert", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", level: "Advanced", icon: SiNextdotjs, color: "#000000", category: "Frontend" },
  { name: "Tailwind", level: "Expert", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { name: "Bootstrap", level: "Advanced", icon: SiBootstrap, color: "#7952B3", category: "Frontend" },

  // Backend
  { name: "PHP", level: "Advanced", icon: SiPhp, color: "#777BB4", category: "Backend" },
  { name: "Laravel", level: "Expert", icon: SiLaravel, color: "#FF2D20", category: "Backend" },
  { name: "Node.js", level: "Advanced", icon: SiNodedotjs, color: "#339933", category: "Backend" },

  // Database / Backend-as-a-Service
  { name: "MySQL", level: "Advanced", icon: SiMysql, color: "#4479A1", category: "Database" },
  { name: "Supabase", level: "Advanced", icon: SiSupabase, color: "#3ECF8E", category: "Database" },

  // Tools & Design
  { name: "Git", level: "Expert", icon: SiGit, color: "#F05032", category: "Tools" },
  { name: "GitHub", level: "Expert", icon: SiGithub, color: "#181717", category: "Tools" },
  { name: "Figma", level: "Intermediate", icon: SiFigma, color: "#F24E1E", category: "Design" },
  { name: "Adobe Illustrator", level: "Intermediate", icon: TbBrandAdobeIllustrator, color: "#FF9A00", category: "Design" },
];

// Kategori yang sudah diperbarui (Kategori "Mobile" dihapus, diganti "Design")
const categories = ["All", "Frontend", "Backend", "Database", "Design", "Tools"];

const levelConfig = {
  Expert: { label: "Expert", bar: "w-full", color: "bg-[#111827]" },
  Advanced: { label: "Advanced", bar: "w-3/4", color: "bg-[#6B7280]" },
  Intermediate: { label: "Intermediate", bar: "w-1/2", color: "bg-[#D1D5DB]" },
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cfg = levelConfig[skill.level];
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white border border-[#E5E7EB] rounded-xl p-4 hover:border-[#D1D5DB] hover:shadow-md transition-all duration-200 flex flex-col gap-3"
    >
      {/* Icon + Name */}
      <div className="flex items-center gap-3">
        <motion.div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${skill.color}15` }}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Icon style={{ color: skill.color }} className="w-5 h-5" />
        </motion.div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-[#111827] leading-none mb-0.5 truncate">
            {skill.name}
          </p>
          <p className="text-[10px] text-[#9CA3AF] tracking-wide">{cfg.label}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-0.5 bg-[#F3F4F6] rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${cfg.color}`}
          initial={{ width: 0 }}
          whileInView={{ width: cfg.bar.replace("w-", "") === "full" ? "100%" : cfg.bar.replace("w-", "") === "3/4" ? "75%" : "50%" }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.04 + 0.2, duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs tracking-widest text-[#9CA3AF] uppercase mb-2">
            Kemampuan
          </p>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold text-[#111827]">Tech Stack</h2>
            <span className="text-xs text-[#9CA3AF]">{filtered.length} teknologi</span>
          </div>
          <div className="mt-4 h-px bg-[#F3F4F6]" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#111827] text-white"
                  : "bg-[#F9FAFB] border border-[#E5E7EB] text-[#6B7280] hover:border-[#D1D5DB]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {filtered.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-6 mt-8 pt-6 border-t border-[#F3F4F6]"
        >
          {Object.entries(levelConfig).map(([key, cfg]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-6 h-0.5 rounded-full ${cfg.color}`} />
              <span className="text-xs text-[#9CA3AF]">{cfg.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}