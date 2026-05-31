import { motion } from "motion/react";
import { Code2, Lightbulb, Target, TrendingUp, GraduationCap, MapPin } from "lucide-react";

const traits = [
  { icon: Target,       label: "Problem Solver"       },
  { icon: Code2,        label: "Clean Code"            },
  { icon: Lightbulb,    label: "UI Enthusiast"         },
  { icon: TrendingUp,   label: "Continuous Learner"    },
];

const projects = [
  {
    name: "DASI (Daya Inovasi)",
    desc: "Aplikasi web untuk PUSLINDA Kabupaten Bireuen",
    year: "2026",
  },
  {
    name: "Previn",
    desc: "Platform sharing & instant document preview",
    year: "2026",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs tracking-widest text-[#9CA3AF] uppercase mb-2">Tentang</p>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold text-[#111827]">Siapa Saya</h2>
          </div>
          <div className="mt-4 h-px bg-[#E5E7EB]" />
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid lg:grid-cols-5 gap-6">

          {/* ── Bio Card — spans 3 cols ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-3 bg-white border border-[#E5E7EB] rounded-2xl p-7 flex flex-col gap-6"
          >
            {/* Avatar row */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#111827] flex items-center justify-center shrink-0">
                <span className="text-white text-sm font-semibold tracking-tight">AK</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111827]">Anang Kurniawan</p>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="flex items-center gap-1 text-[10px] text-[#9CA3AF]">
                    <GraduationCap className="w-3 h-3" />
                    S1 Informatika · Univ. Almuslim
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-[#9CA3AF]">
                    <MapPin className="w-3 h-3" />
                    Bireuen, Aceh
                  </span>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 border border-[#E5E7EB] rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-[#6B7280]">Open to work</span>
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-3">
              <p className="text-sm text-[#374151] leading-relaxed">
                Lulusan <span className="font-medium text-[#111827]">Sarjana Informatika</span> dari
                Universitas Almuslim dengan fokus keahlian di bidang{" "}
                <span className="font-medium text-[#111827]">Full-Stack Development</span> dan{" "}
                <span className="font-medium text-[#111827]">UI/UX Design</span>. Berpengalaman
                membangun solusi digital menggunakan ekosistem modern seperti{" "}
                <span className="font-medium text-[#111827]">Next.js</span> dan{" "}
                <span className="font-medium text-[#111827]">Supabase</span>.
              </p>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Saya selalu memadukan fungsionalitas kode yang kuat dengan pengalaman pengguna yang
                intuitif — adaptif, berorientasi pada detail, dan siap berkontribusi dalam tim. Mari
                berkolaborasi untuk menciptakan inovasi digital yang berdampak!
              </p>
            </div>

            {/* Trait pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {traits.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg"
                >
                  <t.icon className="w-3.5 h-3.5 text-[#6B7280]" />
                  <span className="text-xs text-[#374151] font-medium">{t.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right column — 2 cols ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="bg-[#111827] rounded-2xl p-6 text-white"
            >
              <p className="text-[10px] tracking-widest text-white/40 uppercase mb-3">Pendidikan</p>
              <p className="text-sm font-semibold mb-0.5">S1 Informatika</p>
              <p className="text-xs text-white/60 mb-4">Universitas Almuslim · Bireuen</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-[10px] text-white/40">Full-Stack · UI/UX</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
            </motion.div>

            {/* Projects card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.4 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col gap-4 flex-1"
            >
              <p className="text-[10px] tracking-widest text-[#9CA3AF] uppercase">Proyek Nyata</p>

              {projects.map((proj, i) => (
                <motion.div
                  key={proj.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-5 h-5 rounded-md bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                    <span className="text-[9px] font-bold text-[#9CA3AF]">{i + 1}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#111827] truncate">{proj.name}</p>
                    <p className="text-[10px] text-[#9CA3AF] mt-0.5 leading-relaxed">{proj.desc}</p>
                  </div>
                  <span className="text-[10px] text-[#D1D5DB] shrink-0 mt-0.5">{proj.year}</span>
                </motion.div>
              ))}

              <div className="mt-auto pt-3 border-t border-[#F3F4F6]">
                <p className="text-[10px] text-[#9CA3AF]">
                  + lebih banyak di bagian{" "}
                  <button
                    onClick={() =>
                      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-[#111827] font-medium underline underline-offset-2 cursor-pointer"
                  >
                    Proyek
                  </button>
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Bottom stat strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-5 grid grid-cols-3 divide-x divide-[#E5E7EB] bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden"
        >
          {[
            { value: "3+",  label: "Tahun Pengalaman" },
            { value: "20+", label: "Proyek Selesai"   },
            { value: "15+", label: "Klien Puas"        },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.08 }}
              className="py-5 flex flex-col items-center gap-1"
            >
              <span className="text-2xl font-semibold text-[#111827]">{stat.value}</span>
              <span className="text-[10px] text-[#9CA3AF] tracking-wide uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}