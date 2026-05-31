import { motion } from "motion/react";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { SiGithub, SiYoutube } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
const socials = [
  {
    icon: SiGithub,
    label: "GitHub",
    value: "@anang2727",
    href: "https://github.com/anang2727",
    color: "#181717",
  },
  {
    icon: FaLinkedin ,
    label: "LinkedIn",
    value: "Anang Kurniawan",
    href: "https://www.linkedin.com/in/anang-kurniawan-02a620300",
    color: "#0A66C2",
  },
  {
    icon: SiYoutube,
    label: "YouTube",
    value: "@katoon-27",
    href: "https://www.youtube.com/@katoon-27",
    color: "#FF0000",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs tracking-widest text-[#9CA3AF] uppercase mb-2">Kontak</p>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold text-[#111827]">Mari Berkolaborasi</h2>
          </div>
          <div className="mt-4 h-px bg-[#E5E7EB]" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">

          {/* ── CTA Card — 3 cols ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-3 bg-[#111827] rounded-2xl p-8 flex flex-col justify-between min-h-[260px]"
          >
            <div>
              <p className="text-[10px] tracking-widest text-white/40 uppercase mb-4">
                Open for opportunities
              </p>
              <h3 className="text-xl font-semibold text-white leading-snug mb-3">
                Punya ide proyek atau<br />peluang kerja sama?
              </h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                Saya siap membantu mewujudkan produk digital yang fungsional dan berdampak.
                Hubungi saya dan mari diskusi lebih lanjut.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <motion.a
                href="mailto:anang@example.com"
                className="flex items-center gap-2 px-4 h-10 bg-white text-[#111827] text-xs font-semibold rounded-xl hover:bg-white/90 transition-colors"
                whileTap={{ scale: 0.97 }}
              >
                <Mail className="w-3.5 h-3.5" />
                Kirim Email
              </motion.a>
              <motion.a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 h-10 bg-white/10 border border-white/10 text-white text-xs font-medium rounded-xl hover:bg-white/15 transition-colors"
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* ── Right — 2 cols ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#111827]">Available for work</p>
                <p className="text-[10px] text-[#9CA3AF] mt-0.5">
                  Respon dalam 24 jam
                </p>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex flex-col gap-3 flex-1"
            >
              <p className="text-[10px] tracking-widest text-[#9CA3AF] uppercase mb-1">
                Temukan Saya
              </p>

              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: `${s.color}15` }}
                  >
                    <s.icon style={{ color: s.color }} className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-[#111827] truncate">{s.value}</p>
                    <p className="text-[10px] text-[#9CA3AF]">{s.label}</p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D1D5DB] group-hover:text-[#6B7280] transition-colors" />
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}