import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
  role: "Junior Full-Stack Developer",
  company: "PT Jalur Digital Indonesia",
  period: "2025 – 2026",
  description: "Berkontribusi dalam pengembangan platform DASI (Daya Inovasi) untuk PUSLINDA Bireuen. Bertanggung jawab mengimplementasikan fitur CRUD data instansi, modul penilaian juri (assessment module), relayouting halaman detail event, serta mengintegrasikan sistem notifikasi otomatis via Email & WhatsApp.",
  current: true,
  type: "Part-Time"
  },
  {
    role: "Research and Development",
    company: "Bircode Community",
    period: "Oct 2024 – Sekarang",
    description:
      "Berpartisipasi dalam riset dan pengembangan berbagai solusi digital serta eksplorasi teknologi baru untuk mendukung kebutuhan komunitas dan pengembangan produk.",
    current: true,
    type: "Organisasi",
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2023 – Sekarang",
    description:
      "Mengerjakan berbagai proyek website dan aplikasi untuk klien dengan fokus pada performa, pengalaman pengguna, dan kualitas kode.",
    current: true,
    type: "Freelance",
  },
  {
    role: "Data Entry",
    company: "Kantor Pertanahan Kab. Bireuen",
    period: "Agt – Okt 2024",
    description:
      "Mengelola dan memverifikasi data administrasi secara akurat serta memastikan konsistensi data dalam sistem informasi pertanahan.",
    current: false,
    type: "Magang",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs tracking-widest text-[#9CA3AF] uppercase mb-2">Perjalanan</p>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold text-[#111827]">Pengalaman</h2>
            <span className="text-xs text-[#9CA3AF]">{experiences.length} posisi</span>
          </div>
          <div className="mt-4 h-px bg-[#F3F4F6]" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-[19px] top-2 bottom-2 w-px bg-[#E5E7EB]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ originY: 0 }}
          />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
                className="relative flex gap-8 pb-10 last:pb-0"
              >
                {/* Node */}
                <div className="relative z-10 mt-1 shrink-0">
                  <motion.div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                      exp.current
                        ? "bg-[#111827] border-[#111827]"
                        : "bg-white border-[#E5E7EB]"
                    }`}
                    whileHover={{ scale: 1.08 }}
                  >
                    <Briefcase
                      className={`w-4 h-4 ${
                        exp.current ? "text-white" : "text-[#9CA3AF]"
                      }`}
                    />
                  </motion.div>
                  {exp.current && (
                    <motion.div
                      className="absolute inset-0 rounded-xl border border-[#111827]"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Card */}
                <motion.div
                  className="flex-1 bg-white border border-[#E5E7EB] rounded-2xl p-5 hover:shadow-md hover:border-[#D1D5DB] transition-all"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-[#111827] leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-[#6B7280] mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      {exp.current && (
                        <span className="px-2 py-0.5 bg-[#F0FDF4] border border-[#BBF7D0] text-emerald-600 text-[10px] font-medium rounded-full">
                          Aktif
                        </span>
                      )}
                      <span className="px-2 py-0.5 bg-[#F9FAFB] border border-[#E5E7EB] text-[#9CA3AF] text-[10px] rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#F3F4F6] mb-3" />

                  {/* Period */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <Calendar className="w-3 h-3 text-[#D1D5DB]" />
                    <span className="text-[10px] text-[#9CA3AF] tracking-wide">{exp.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#6B7280] leading-relaxed">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}