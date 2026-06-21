import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Trophy, ExternalLink, Image as ImageIcon, X, ChevronDown } from "lucide-react";

type Certificate = {
    id: number;
    icon: string; // emoji or short label for achievement type
    issuer: string;
    title: string;
    year: string;
    link?: string;
    image?: string;
};

const certificates: Certificate[] = [
    {
        id: 1,
        icon: "🥇",
        issuer: "Hackathon Nasional 2025",
        title: "Juara 1 – Best Innovation Track",
        year: "2025",
        link: "https://example.com",
        image: "/projek1.png",
    },
    {
        id: 2,
        icon: "🏆",
        issuer: "Dicoding Indonesia",
        title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
        year: "2024",
        link: "https://example.com",
        image: "/projek2.png",
    },
    {
        id: 3,
        icon: "🎖️",
        issuer: "Bangkit Academy 2024",
        title: "Machine Learning Path – Graduate with Distinction",
        year: "2024",
        link: "https://example.com",
        image: "/projek3.png",
    },
    {
        id: 4,
        icon: "🥈",
        issuer: "Lomba Web Design Provinsi Aceh",
        title: "Juara 2 – Kategori Desain UI/UX",
        year: "2024",
        link: "https://example.com",
        image: "/projek4.png",
    },
    {
        id: 5,
        icon: "📜",
        issuer: "FreeCodeCamp",
        title: "Responsive Web Design Certification",
        year: "2023",
        link: "https://example.com",
        image: "/projek1.png",
    },
    {
        id: 6,
        icon: "🏅",
        issuer: "Coursera – Meta",
        title: "Introduction to Front-End Development",
        year: "2023",
        link: "https://example.com",
        image: "/projek2.png",
    },
    {
        id: 7,
        icon: "🎗️",
        issuer: "Competfest UI 2023",
        title: "Top 10 Finalist – Software Engineering Competition",
        year: "2023",
        link: "https://example.com",
        image: "/projek3.png",
    },
    {
        id: 8,
        icon: "📜",
        issuer: "Dicoding Indonesia",
        title: "Belajar Fundamental Front-End Web Development",
        year: "2023",
        link: "https://example.com",
        image: "/projek4.png",
    },
    {
        id: 9,
        icon: "🏆",
        issuer: "Google Developers",
        title: "Associate Android Developer Certification",
        year: "2022",
        link: "https://example.com",
        image: "/projek1.png",
    },
    {
        id: 10,
        icon: "🥉",
        issuer: "Gemastik XV 2022",
        title: "Juara 3 – Kategori Pengembangan Perangkat Lunak",
        year: "2022",
        link: "https://example.com",
        image: "/projek2.png",
    },
    {
        id: 11,
        icon: "📜",
        issuer: "Udemy",
        title: "The Complete Node.js Developer Course",
        year: "2022",
        link: "https://example.com",
        image: "/projek3.png",
    },
    {
        id: 12,
        icon: "🎖️",
        issuer: "Alibaba Cloud Academy",
        title: "Cloud Computing Fundamentals",
        year: "2022",
        link: "https://example.com",
        image: "/projek4.png",
    },
];

const PAGE_SIZE = 5;

function ImageModal({
    cert,
    onClose,
}: {
    cert: Certificate;
    onClose: () => void;
}) {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    onClick={onClose}
                />

                {/* Modal */}
                <motion.div
                    className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 16 }}
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                >
                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="cursor-pointer absolute top-3 right-3 z-10 w-8 h-8 bg-black/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-black/40 transition-colors"
                    >
                        <X className="w-4 h-4 text-white" />
                    </button>

                    {/* Image */}
                    <div className="w-full aspect-video bg-[#F3F4F6]">
                        {cert.image ? (
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-[#9CA3AF] text-sm">
                                Foto tidak tersedia
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div className="p-5">
                        <p className="text-xs text-[#9CA3AF] mb-1">{cert.issuer} · {cert.year}</p>
                        <h3 className="text-sm font-semibold text-[#111827]">{cert.title}</h3>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

function CertificateCard({
    cert,
    index,
}: {
    cert: Certificate;
    index: number;
}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (index % PAGE_SIZE) * 0.06, duration: 0.35 }}
                className="group flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-xl px-5 py-4 hover:border-[#D1D5DB] hover:shadow-sm transition-all duration-200"
            >
                {/* Achievement icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F9FAFB] border border-[#F3F4F6] flex items-center justify-center text-xl select-none">
                    {cert.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-[#9CA3AF] mb-0.5 truncate">{cert.issuer}</p>
                    <p className="text-sm font-medium text-[#111827] leading-snug line-clamp-1">
                        {cert.title}
                    </p>
                </div>

                {/* Year */}
                <span className="hidden sm:block flex-shrink-0 text-[11px] text-[#D1D5DB] font-medium mr-2">
                    {cert.year}
                </span>

                {/* Actions */}
                <div className="flex-shrink-0 flex items-center gap-1.5">
                    {/* See photo */}
                    <button
                        onClick={() => setShowModal(true)}
                        className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-lg border border-[#E5E7EB] text-[#9CA3AF] hover:bg-[#F3F4F6] hover:text-[#374151] hover:border-[#D1D5DB] transition-all"
                        title="Lihat foto sertifikat"
                    >
                        <ImageIcon className="w-3.5 h-3.5" />
                    </button>

                    {/* Open link */}
                    {cert.link && (
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-lg border border-[#E5E7EB] text-[#9CA3AF] hover:bg-[#F3F4F6] hover:text-[#374151] hover:border-[#D1D5DB] transition-all"
                            title="Buka link sertifikat"
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    )}
                </div>
            </motion.div>

            {showModal && (
                <ImageModal cert={cert} onClose={() => setShowModal(false)} />
            )}
        </>
    );
}

export default function CertificatesSection() {
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const isShowingAll = visibleCount >= certificates.length;
    const hasMore = !isShowingAll;

    const handleToggle = () => {
        if (hasMore) {
            setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, certificates.length));
        } else {
            setVisibleCount(PAGE_SIZE);
        }
    };

    const visibleCerts = certificates.slice(0, visibleCount);

    return (
        <section id="certificates" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <p className="text-xs tracking-widest text-[#9CA3AF] uppercase mb-2">
                        Pencapaian
                    </p>
                    <div className="flex items-end justify-between">
                        <div className="flex items-center gap-2.5">
                            <Trophy className="w-5 h-5 text-[#111827]" />
                            <h2 className="text-2xl font-semibold text-[#111827]">
                                Sertifikat & Penghargaan
                            </h2>
                        </div>
                        <span className="text-xs text-[#9CA3AF]">
                            {certificates.length} sertifikat
                        </span>
                    </div>
                    <div className="mt-4 h-px bg-[#F3F4F6]" />
                </motion.div>

                {/* Certificate list */}
                <div className="flex flex-col gap-3">
                    <AnimatePresence initial={false}>
                        {visibleCerts.map((cert, i) => (
                            <CertificateCard key={cert.id} cert={cert} index={i} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show more / show less button */}
                {certificates.length > PAGE_SIZE && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-8"
                    >
                        <button
                            onClick={handleToggle}
                            className="cursor-pointer group flex flex-col items-center gap-1.5 text-xs text-[#9CA3AF] hover:text-[#374151] transition-colors"
                        >
                            <span>
                                {isShowingAll
                                    ? "Sembunyikan"
                                    : `Tampilkan ${Math.min(PAGE_SIZE, certificates.length - visibleCount)} lagi`}
                            </span>
                            <motion.div
                                animate={{ rotate: isShowingAll ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center group-hover:border-[#D1D5DB] group-hover:bg-[#F9FAFB] transition-all"
                            >
                                <ChevronDown className="w-4 h-4" />
                            </motion.div>
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
