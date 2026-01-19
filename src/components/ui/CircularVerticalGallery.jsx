import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { impetus_b, pradnya_b, concepts_b } from "../../assets";

// 1. Import the new image
import flareCurve from "../../assets/flare_curve_png1.png";

export default function GlowArc() {
  const navigate = useNavigate();

  const icons = [
    {
      img: impetus_b,
      label: "Impetus",
      desc: "Impetus is a flagship international tech competition open to students across India and abroad.",
      navigate: "/events/impetus",
    },
    {
      img: pradnya_b,
      label: "Pradnya",
      desc: "PRADNYA is a global programming contest testing logic and problem-solving.",
      navigate: "/events/pradnya",
    },
    {
      img: concepts_b,
      label: "Concepts",
      desc: "Concepts showcases final-year patent-ready innovations with industry mentorship.",
      navigate: "/events/concepts",
    },
  ];

  // Slot animations (NOW WITH LEFT SHIFT FOR CENTER FOCUS)
  const slots = [
    { y: 140, scale: 0.82, blur: 2, opacity: 0.45, left: 80 },  // TOP
    { y: 300, scale: 1.18, blur: 0, opacity: 1, left: 40 },     // CENTER (PULLED LEFT)
    { y: 460, scale: 0.82, blur: 1.5, opacity: 0.65, left: 80 },  // BOTTOM
  ];

  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => {
        const updated = [...prev];
        const first = updated.shift();
        updated.push(first);
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute left-[-100px] top-[-80px] h-full w-[420px] pointer-events-none select-none">

      {/* 2. IMAGE WITH REDUCED HEIGHT */}
      {/* Changed h-[900px] to h-[810px] (10% reduction) */}
      <img
        src={flareCurve}
        alt="Glow Curve"
        className="absolute left-[-140px] top-[-40px] w-[360px] h-[810px] object-contain opacity-90"
      />

      {/* SLIDING CAROUSEL (UNCHANGED) */}
      {order.map((iconIndex, slotIndex) => {
        const icon = icons[iconIndex];
        const slot = slots[slotIndex];

        return (
          <div
            key={iconIndex}
            className="
              absolute transition-all duration-[950ms]
              ease-[cubic-bezier(0.22,0.61,0.36,1)]
            "
            style={{
              left: slot.left + "px", // ⭐ INDIVIDUAL LEFT OFFSET
              transform: `translateY(${slot.y}px) scale(${slot.scale})`,
              opacity: slot.opacity,
              filter: `blur(${slot.blur}px)`,
            }}
          >
            <div
              className="cursor-pointer pointer-events-auto flex items-center"
              onClick={() => navigate(icon.navigate)}
            >

              {/* ICON */}
              <img
  src={icon.img}
  className="
    w-16 h-16 rounded-full
    drop-shadow-[0_0_26px_rgba(140,200,255,0.65)]
  "
  style={{ transform: "scale(1.2)" }}
/>


              {/* PANEL */}
              <div
  className="
    ml-5 relative inline-block p-px
    rounded-xl group/panel
    shadow-2xl shadow-zinc-900
    transition-all duration-700
  "
>
  {/* Gradient Border (always visible, bright on hover) */}
  <span
    className="
      absolute inset-0 rounded-xl p-[2px]
      bg-gradient-to-r from-dark-blue via-light-blue to-orange-100
      opacity-40 group-hover/panel:opacity-100
      transition-opacity duration-700
      pointer-events-none
    "
  ></span>

  {/* Inner Panel */}
  <div
    className="
      relative z-10 w-[260px] px-5 py-3 
      rounded-xl bg-gray-950/90 backdrop-blur-xl
      shadow-[0_0_18px_rgba(56,189,248,0.25)]
      pointer-events-none
    "
  >
    <p className="text-[13px] uppercase tracking-[0.20em] text-cyan-100 font-semibold">
      {icon.label}
    </p>

    <p className="mt-[4px] text-[11px] text-slate-300 leading-snug opacity-90">
      {icon.desc}
    </p>
  </div>
</div>

            </div>
          </div>
        );
      })}
    </div>
  );
}