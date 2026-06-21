import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { FileText, Pause, Play } from "lucide-react";

const navItems = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang", href: "#about" },
  { name: "Keahlian", href: "#skills" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Proyek", href: "#projects" },
  { name: "Kontak", href: "#contact" },
];

function AudioBars({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-end gap-[2px] h-3.5">
      {[1, 1.6, 0.8, 1.4, 1].map((delay, i) => (
        <motion.span
          key={i}
          className="w-[2px] rounded-full bg-current"
          animate={
            isPlaying
              ? { height: ["4px", "14px", "6px", "12px", "4px"] }
              : { height: "4px" }
          }
          transition={
            isPlaying
              ? {
                  duration: 0.8 * delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }
              : { duration: 0.2 }
          }
        />
      ))}
    </div>
  );
}

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Init audio
// Init audio & Auto-play agresif
useEffect(() => {
  const audio = new Audio("/music.mp3");
  audio.loop = true;
  audio.volume = 0.4;
  audioRef.current = audio;

  // Fungsi untuk memaksa play saat user berinteraksi
  const forcePlay = () => {
    audio.play()
      .then(() => {
        setIsPlaying(true);
        removeInteractionListeners(); // Hapus listener jika berhasil play
      })
      .catch((err) => console.log("Autoplay masih tertahan:", err));
  };

  // List event interaksi user yang valid untuk memicu audio
  const removeInteractionListeners = () => {
    window.removeEventListener("click", forcePlay);
    window.removeEventListener("scroll", forcePlay);
    window.removeEventListener("touchstart", forcePlay);
    window.removeEventListener("pointerdown", forcePlay);
  };

  // 1. Coba play langsung secara instant (beberapa browser mengizinkan jika score interaksi user tinggi)
  audio.play()
    .then(() => {
      setIsPlaying(true);
    })
    .catch(() => {
      // 2. Jika diblokir, pasang perangkap listener di seluruh jenis interaksi user
      window.addEventListener("click", forcePlay);
      window.addEventListener("scroll", forcePlay);
      window.addEventListener("touchstart", forcePlay);
      window.addEventListener("pointerdown", forcePlay);
    });

  // Cleanup saat pindah halaman / unmount
  return () => {
    removeInteractionListeners();
    audio.pause();
    audioRef.current = null;
  };
}, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Scroll shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-6">

          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#hero")}
            className="text-sm font-semibold tracking-[0.15em] text-[#111827] uppercase shrink-0"
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 0.15 }}
          >
            AK
          </motion.button>

          {/* Center nav — desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className="cursor-pointer relative px-3 py-1.5 text-xs text-[#6B7280] hover:text-[#111827] transition-colors duration-150 rounded-lg hover:bg-[#F9FAFB]"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Right — desktop */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            {/* Music toggle */}
            <motion.button
              onClick={togglePlay}
              className={`cursor-pointer flex items-center gap-2 px-3 h-8 rounded-lg text-xs font-medium transition-all duration-200 ${
                isPlaying
                  ? "bg-[#111827] text-white"
                  : "border border-[#E5E7EB] text-[#6B7280] hover:border-[#D1D5DB]"
              }`}
              whileTap={{ scale: 0.96 }}
            >
              <AudioBars isPlaying={isPlaying} />
              <span className="text-[10px] tracking-wide cursor-pointer">
                {isPlaying ? "Playing" : "Paused"}
              </span>
            </motion.button>

            {/* CV */}
            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 h-8 bg-[#111827] text-white text-xs font-medium rounded-lg hover:bg-[#1F2937] transition-colors"
              whileTap={{ scale: 0.96 }}
            >
              <FileText className="w-3.5 h-3.5" />
              CV
            </motion.a>
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mini music indicator */}
            <motion.button
              onClick={togglePlay}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                isPlaying ? "bg-[#111827] text-white" : "border border-[#E5E7EB] text-[#9CA3AF]"
              }`}
              whileTap={{ scale: 0.92 }}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </motion.button>

            {/* Hamburger */}
            <motion.button
              onClick={() => setMobileOpen((p) => !p)}
              className="w-8 h-8 rounded-lg border border-[#E5E7EB] flex flex-col items-center justify-center gap-[4px]"
              whileTap={{ scale: 0.92 }}
            >
              <motion.span
                className="w-4 h-px bg-[#374151] block rounded-full origin-center"
                animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-4 h-px bg-[#374151] block rounded-full"
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="w-4 h-px bg-[#374151] block rounded-full origin-center"
                animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Sheet — slides up from bottom */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl border-t border-[#E5E7EB] shadow-2xl md:hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 rounded-full bg-[#E5E7EB]" />
              </div>

              <div className="px-5 pb-8 pt-2">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollTo(item.href)}
                      className="py-3 px-4 text-left text-sm text-[#374151] rounded-xl hover:bg-[#F9FAFB] border border-[#F3F4F6] transition-colors font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

                <motion.a
                  href="/mycv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-11 bg-[#111827] text-white text-sm font-medium rounded-xl"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                >
                  <FileText className="w-4 h-4" />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}