import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "MatheRI",
    category: "Game Web",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Game edukasi matematika interaktif bertema Kemerdekaan Indonesia untuk menyambut HUT RI ke-80.",
    longDescription:
      "MatheRI adalah game matematika berbasis web yang menantang pemain untuk menyelesaikan soal aritmatika dalam batasan waktu 30 detik. Mengangkat tema 17 Agustus, game ini memiliki mekanik unik di mana setiap jawaban yang benar akan menaikkan bendera Merah Putih ke atas tiang. Sebaliknya, jika jawaban salah atau waktu habis, bendera akan tertahan. Proyek ini dirancang untuk merayakan HUT RI ke-80 sekaligus menjadi sarana belajar yang seru bagi anak-anak.",
    image: "/projek1.png",
    year: "2025",
    status: "Live",
    link: "https://matheri.vercel.app/",
  },
  {
    title: "Previn",
    category: "Web App",
    tech: ["Next.js", "shadcn/ui", "Supabase", "Tailwind CSS"],
    description:
      "Platform instan untuk melihat pratinjau (preview) dan berbagi dokumen secara cepat dan aman.",
    longDescription:
      "Previn adalah platform berbasis web yang dirancang untuk mempermudah pengguna dalam mengunggah, melihat pratinjau, dan membagikan berbagai format dokumen secara instan. Dikembangkan menggunakan Next.js dan sistem komponen shadcn/ui untuk antarmuka yang clean dan responsif. Sisi backend memanfaatkan Supabase untuk manajemen autentikasi pengguna yang aman, penyimpanan berkas (Storage), serta database real-time yang andal.",
    image: "/projek2.png",
    year: "2026",
    status: "Live",
    link: "https://prev-in.vercel.app/",
  },
  {
    title: "BestFrame",
    category: "Web App",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    description:
      "Tool berbasis web untuk membuat rancangan UX wireframe dengan mudah, cepat, dan antarmuka yang simpel.",
    longDescription:
      "BestFrame adalah aplikasi frontend berbasis web yang dirancang khusus untuk membantu desainer UI/UX maupun developer dalam menyusun komponen wireframe secara instan. Fokus pada fungsionalitas yang ringkas dan efisien, platform ini memungkinkan pengguna menuangkan ide tata letak aplikasi tanpa hambatan teknis yang rumit. Dibangun sepenuhnya menggunakan Next.js untuk performa render yang optimal, serta dikombinasikan dengan Tailwind CSS untuk visual komponen yang minimalis.",
    image: "/projek3.png",
    year: "2026",
    status: "Live",
    link: "https://bestframe.vercel.app/",
  },
  {
    title: "DASI (Daya Inovasi)",
    category: "Full-Stack Web",
    tech: ["Next.js", "NestJS", "Ant Design", "Staging DB"],
    description:
      "Sistem informasi manajemen inovasi daerah untuk PUSLINDA Bireuen, dilengkapi dengan sistem notifikasi otomatis dan manajemen event.",
    longDescription:
      "Berkontribusi sebagai Full-Stack Developer dalam pengembangan platform DASI untuk PUSLINDA. Bertanggung jawab dalam mengimplementasikan sistem notifikasi otomatis (Email & WhatsApp) yang terpicu ketika admin memperbarui data operator daerah. Mengelola perbaikan fitur CRUD pada menu data instansi dan data inovasi, perbaikan modal pembuatan event, serta perancangan visual khusus untuk halaman penilaian juri. Selain itu, melakukan relayouting halaman detail event, manajemen data juri (add, edit, delete), serta menginisialisasi modul penilaian event (assessment module). Proyek ini dibangun menggunakan arsitektur modern Next.js di sisi frontend dengan komponen Ant Design, serta NestJS di sisi backend menggunakan lingkungan basis data staging.",
    image: "/projek4.png",
    year: "2025",
    status: "Live",
    link: "https://puslinda.bireuenkab.go.id/pages/dasi.html",
  },
  {
    title: "Sistem Informasi Dayah An-Nabawi",
    category: "Web App",
    tech: ["Laravel", "Filament", "PHP", "MySQL"],
    description:
      "Sistem informasi terpadu untuk manajemen administrasi, data santri, dan pengelolaan akademik Dayah An-Nabawi.",
    longDescription:
      "Solusi digitalisasi pesantren yang dirancang untuk efisiensi tata kelola Dayah An-Nabawi. Sistem ini mencakup manajemen data santri, pelacakan kurikulum dayah (kitab/halaqah), pencatatan pelanggaran & prestasi, hingga pengelolaan keuangan (SPP). Dilengkapi dengan panel admin berbasis Filament yang responsif untuk memudahkan pengurus, ustadz, dan pimpinan dalam memonitor perkembangan dayah secara real-time.",
    image:
      "/projek5.png",
    year: "2026",
    status: "Live",
    link: "http://nabawi.site.je/",
  }
  // {
  //   title: "Portfolio Generator",
  //   category: "Web App",
  //   tech: ["Next.js", "Tailwind", "AI"],
  //   description:
  //     "Tool untuk membuat portfolio website profesional secara otomatis dengan berbagai template modern.",
  //   longDescription:
  //     "Didukung oleh AI untuk menghasilkan konten dan layout yang dipersonalisasi berdasarkan profil pengguna. Tersedia lebih dari 15 template premium, editor drag-and-drop, custom domain, dan hosting gratis. Lebih dari 1.000 portfolio telah dibuat menggunakan tool ini.",
  //   image:
  //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //   year: "2024",
  //   status: "Beta",
  //   link: "",
  // },
];

type Project = (typeof projects)[0];

function PreviewModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-[#0A0A0A]/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Close */}
            <button
              onClick={onClose}
              className=" cursor-pointer absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {/* Status badge */}
            <div className="absolute bottom-4 left-6">
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-medium ${project.status === "Live"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : project.status === "Beta"
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                      : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  }`}
              >
                {project.status}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-xs text-[#9CA3AF] mb-1 tracking-widest uppercase">
              {project.category} · {project.year}
            </p>
            <h3 className="text-xl font-semibold text-[#111827] mb-3">
              {project.title}
            </h3>

            <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
              {project.longDescription}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-[#F3F4F6] rounded-full text-xs text-[#374151] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action — only if link exists */}
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-10 w-full bg-[#111827] text-white text-sm rounded-xl hover:bg-[#1F2937] transition-colors font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Buka Live Preview
              </a>
            ) : (
              <div className="flex items-center justify-center h-10 w-full border border-[#E5E7EB] text-[#9CA3AF] text-xs rounded-xl">
                Live preview tidak tersedia
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.07, duration: 0.4 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#D1D5DB] hover:shadow-lg transition-all duration-300 cursor-default flex flex-col"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-[#F3F4F6]">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-[#F3F4F6] animate-pulse" />
          )}
          <motion.img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            onLoad={() => setImageLoaded(true)}
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-[#0A0A0A]/50 flex items-center justify-center"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.button
              onClick={() => setShowPreview(true)}
              className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-white text-[#111827] text-xs font-semibold rounded-xl shadow-md hover:bg-[#F9FAFB] transition-colors"
              animate={{ y: hovered ? 0 : 8, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.25 }}
            >
              Lihat Detail
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>
          </motion.div>

          {/* Status badge */}
          <div className="absolute top-3 right-3">
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${project.status === "Live"
                  ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                  : project.status === "Beta"
                    ? "bg-amber-50 text-amber-600 border border-amber-200"
                    : "bg-blue-50 text-blue-600 border border-blue-200"
                }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] tracking-widest text-[#9CA3AF] uppercase font-medium">
              {project.category}
            </span>
            <span className="text-[10px] text-[#D1D5DB]">{project.year}</span>
          </div>

          <h3 className="text-sm font-semibold text-[#111827] mb-2 leading-snug">
            {project.title}
          </h3>

          <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-2 mb-4 flex-1">
            {project.description}
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md text-[10px] text-[#6B7280] font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-3 border-t border-[#F3F4F6]">
            <button
              onClick={() => setShowPreview(true)}
              className="cursor-pointer flex-1 h-8 text-xs font-medium bg-[#111827] text-white rounded-lg hover:bg-[#1F2937] transition-colors"
            >
              Lihat Detail
            </button>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-8 h-8 flex items-center justify-center border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#6B7280]" />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {showPreview && (
        <PreviewModal project={project} onClose={() => setShowPreview(false)} />
      )}
    </>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs tracking-widest text-[#9CA3AF] uppercase mb-2">
            Portofolio
          </p>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold text-[#111827]">
              Proyek Pilihan
            </h2>
            <span className="text-xs text-[#9CA3AF]">{projects.length} proyek</span>
          </div>
          <div className="mt-4 h-px bg-[#F3F4F6]" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}