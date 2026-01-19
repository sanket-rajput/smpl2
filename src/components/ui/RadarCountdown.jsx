import { useEffect, useState } from "react";

import impetus_bubble from "../../assets/logos/impetus_bubble.png";
import concepts_bubble from "../../assets/logos/concepts_bubble.png";
import pradnya_bubble from "../../assets/logos/pradnya_bubble.png";

const COUNTDOWN_TO = "2026-03-20T23:59:00+05:30";

const images = [impetus_bubble, concepts_bubble, pradnya_bubble];

const RadarCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [activeImg, setActiveImg] = useState(0);

  // ⏳ Countdown Logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date(COUNTDOWN_TO);
      const diff = end - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 🔁 Image loop every 4 seconds
  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="relative w-56 h-56 mx-auto mt-6">

      {/* CIRCULAR RADAR */}
      <div className="relative w-full h-full rounded-full overflow-hidden backdrop-blur-xl shadow-[0_0_45px_rgba(0,200,255,0.25)]">

        {/* ===========================
            CYCLING BACKGROUND IMAGE
        ============================ */}
        {images.map((img, i) => (
  <img
    key={i}
    src={img}
    alt=""
    className={`
      absolute top-0 left-0 w-full h-full 
      object-cover       
      object-center
      transition-opacity duration-[1000ms] ease-out
      rounded-full       
      ${activeImg === i ? "opacity-50" : "opacity-0"}
    `}
  />
))}

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Radar Rings */}
        <div className="absolute inset-4 rounded-full border border-cyan-300/45" />
        <div className="absolute inset-10 rounded-full border border-cyan-300/25" />
        <div className="absolute inset-[70px] rounded-full border border-cyan-300/20" />

        {/* Crosshair */}
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-cyan-300/25" />
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-cyan-300/25" />
        </div>

        {/* Radar Sweep */}
        <div
          className="
            absolute inset-0 rounded-full
            bg-[conic-gradient(
              from_260deg,
              rgba(0,255,255,0.75),
              rgba(0,200,255,0.55) 15%,
              rgba(0,150,255,0.35) 30%,
              rgba(255,140,50,0.4) 45%,
              transparent 70%
            )]
            animate-radarSpin
            mix-blend-screen blur-sm
          "
        />

        {/* Time Display */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <p className="text-[12px] tracking-[0.28em] text-cyan-200/90 uppercase mb-1">
            Countdown
          </p>

          <div className="flex gap-[6px] text-[26px] font-extrabold text-white">
            <span>{timeLeft.days}</span>
            <span className="opacity-60">:</span>
            <span>{timeLeft.hours}</span>
            <span className="opacity-60">:</span>
            <span>{timeLeft.minutes}</span>
            <span className="opacity-60">:</span>
            <span>{timeLeft.seconds}</span>
          </div>

          <div className="flex gap-6 mt-1 text-[10px] tracking-[0.18em] text-cyan-100/70 uppercase">
            <span>Days</span>
            <span>Hrs</span>
            <span>Min</span>
            <span>Sec</span>
          </div>
        </div>
      </div>

      {/* Radar animation */}
      <style>{`
        @keyframes radarSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-radarSpin {
          animation: radarSpin 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RadarCountdown;
