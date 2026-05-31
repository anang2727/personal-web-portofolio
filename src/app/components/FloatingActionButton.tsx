import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { MessageCircle, Mail, X } from "lucide-react";
import { SiGithub, SiYoutube } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    icon: SiGithub,
    label: "GitHub",
    href: "https://github.com/anang2727",
    color: "#181717",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/anangkurniawan",
    color: "#0A66C2",
  },
  {
    icon: SiYoutube,
    label: "YouTube",
    href: "https://youtube.com/@anangkurniawan",
    color: "#FF0000",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/6281234567890",
    color: "#25D366",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:anang@example.com",
    color: "#6B7280",
  },
];

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {isOpen &&
          socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.85 }}
              transition={{ delay: i * 0.05, duration: 0.2 }}
              title={link.label}
              className="w-9 h-9 bg-white border border-[#E5E7EB] rounded-xl flex items-center justify-center shadow-sm hover:shadow-md hover:border-[#D1D5DB] transition-all"
              style={{ backgroundColor: `${link.color}10` }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.93 }}
            >
              <link.icon style={{ color: link.color }} className="w-4 h-4" />
            </motion.a>
          ))}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen((p) => !p)}
        className="w-9 h-9 bg-[#111827] rounded-xl flex items-center justify-center shadow-md hover:bg-[#1F2937] transition-colors"
        whileTap={{ scale: 0.93 }}
        aria-label="Toggle contact links"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="w-4 h-4 text-white" />
          ) : (
            <MessageCircle className="w-4 h-4 text-white" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}