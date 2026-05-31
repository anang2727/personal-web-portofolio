import { motion } from "motion/react";

export default function MusicVisualizer() {
  const bars = [1, 2, 3, 4];

  return (
    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-end gap-1">
      {bars.map((bar) => (
        <motion.div
          key={bar}
          className="w-1 bg-[#DCC3AA] rounded-full"
          animate={{
            height: ["8px", "20px", "8px"],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: bar * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
