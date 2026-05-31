import { motion } from "motion/react";
import { MessageCircle, Mail } from "lucide-react";
import { SiGithub, SiYoutube } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const socials = [
  { icon: SiGithub,   href: "https://github.com/anang2727",           label: "GitHub"    },
  { icon: FaLinkedin, href: "https://linkedin.com/in/anangkurniawan", label: "LinkedIn"  },
  { icon: SiYoutube,  href: "https://youtube.com/@anangkurniawan",    label: "YouTube"   },
  { icon: MessageCircle, href: "https://wa.me/6281234567890",         label: "WhatsApp"  },
  { icon: Mail,       href: "mailto:anang@example.com",               label: "Email"     },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#F3F4F6] px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] text-[#9CA3AF]"
        >
          © {new Date().getFullYear()} Anang Kurniawan · Built with Me 
        </motion.p>

        {/* Right — socials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-1.5"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-7 h-7 rounded-lg border border-[#F3F4F6] flex items-center justify-center text-[#9CA3AF] hover:text-[#374151] hover:border-[#E5E7EB] hover:bg-[#F9FAFB] transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.93 }}
            >
              <s.icon className="w-3.5 h-3.5" />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </footer>
  );
}