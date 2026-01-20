import { motion } from "framer-motion";
// import { useAnimation } from "framer-motion";
// import { useEffect } from "react";

const items = [
  { icon: "/icons/dev.png", title: "Development", text: "Modern scalable apps." },
  { icon: "/icons/brain.png", title: "AI & ML", text: "Smart real-time analysis." },
  { icon: "/icons/light.png", title: "Innovation", text: "Creative engineering." },
  { icon: "/icons/security.png", title: "Security", text: "Safe & reliable systems." },
];

export default function GlassBlueOrbit() {
  return (
    <div className="relative w-[430px] h-[430px] mx-auto flex items-center justify-center">

      {/* SHINY SKY BLUE GLASS RING */}
      <div className="
        absolute inset-0 rounded-full
        bg-gradient-to-br from-cyan-300/20 to-sky-400/10
        backdrop-blur-xl border border-cyan-300/30
        shadow-[0_0_45px_10px_rgba(56,189,248,0.45)]
      ">
        {/* inner subtle highlight */}
        <div className="
          absolute inset-8 rounded-full 
          bg-gradient-to-b from-white/10 to-transparent
          blur-xl opacity-50
        " />
      </div>

      {/* ICONS IN ORBIT */}
      {items.map((item, i) => {
        const angle = (i / items.length) * 360;

        return (
          <div
            key={i}
            className="absolute group"
            style={{
              transform: `rotate(${angle}deg) translate(170px) rotate(-${angle}deg)`
            }}
          >
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                w-20 h-20 rounded-full
                bg-sky-300/20 backdrop-blur-xl
                border border-sky-300/40
                shadow-[0_0_30px_rgba(56,189,248,0.4)]
                flex items-center justify-center cursor-pointer
              "
            >
              <img src={item.icon} className="w-10" />
            </motion.div>

            {/* Hover Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="
                absolute left-1/2 -translate-x-1/2 top-24 z-50
                bg-black/70 text-white px-4 py-3
                rounded-xl w-44 text-sm
                shadow-lg backdrop-blur-md
                opacity-0 group-hover:opacity-100
                pointer-events-none
              "
            >
              <p className="font-semibold text-sky-300">{item.title}</p>
              <p className="text-xs opacity-80">{item.text}</p>
            </motion.div>

          </div>
        );
      })}

    </div>
  );
}
