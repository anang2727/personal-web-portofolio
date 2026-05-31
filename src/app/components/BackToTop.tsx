import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollY / docHeight : 0);
      setIsVisible(scrollY > 300);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          whileTap={{ scale: 0.94 }}
          className="cursor-pointer fixed bottom-8 right-8 z-40 w-11 h-11 flex items-center justify-center group"
          aria-label="Back to top"
        >
          {/* Progress ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 44 44"
          >
            {/* Track */}
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="1.5"
            />
            {/* Progress */}
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="none"
              stroke="#111827"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - scrollProgress)}
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
          </svg>

          {/* Center bg + icon */}
          <div className="relative w-8 h-8 bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center shadow-sm group-hover:bg-[#111827] group-hover:border-[#111827] transition-all duration-200">
            <ArrowUp className="w-3.5 h-3.5 text-[#374151] group-hover:text-white transition-colors duration-200" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}