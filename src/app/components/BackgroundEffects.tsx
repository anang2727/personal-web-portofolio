import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ECECEC_1px,transparent_1px),linear-gradient(to_bottom,#ECECEC_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      {/* Aurora Glow */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#DCC3AA] rounded-full opacity-10 blur-[120px]"
        animate={{
          y: [0, 100, 0],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#DCC3AA] rounded-full opacity-10 blur-[100px]"
        animate={{
          y: [0, -80, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Interactive Mesh Wave */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z"
          fill="none"
          stroke="#DCC3AA"
          strokeWidth="1"
          animate={{
            d: [
              "M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z",
              "M0,80 Q250,120 500,80 T1000,80 L1000,0 L0,0 Z",
              "M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Mouse Spotlight */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #DCC3AA 0%, transparent 70%)",
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
    </div>
  );
}
