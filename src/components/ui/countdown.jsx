import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FlipWords } from "./flip-words";

const COUNTDOWN_FROM = "2026-03-20T23:59:00+05:30";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFlipWords, setShowFlipWords] = useState(false);

  const words = [
    "Grand Launch begins soon",
    "Mark your calendar — March 21",
    "Experience the Future Unfold",
    "Innovation • Technology • Excellence",
  ];

  useEffect(() => {
    const hasTimerAnimated = window.sessionStorage.getItem("hasTimerAnimated");
    if (!hasTimerAnimated) {
      setHasAnimated(true);
      setTimeout(() => setShowFlipWords(true), 2000);
      sessionStorage.setItem("hasTimerAnimated", true);
    } else setShowFlipWords(true);

    setIsLoaded(true);
  }, []);

  const animationVariants = {
    initial: { scale: 1.3, opacity: 0, y: -40 },
    animate: { scale: 1, opacity: 1, y: 0 },
  };

  return isLoaded ? (
    <motion.div
      initial={hasAnimated ? "initial" : "animate"}
      animate="animate"
      variants={animationVariants}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="w-full flex flex-col items-center justify-center pt-12 max-sm:hidden"
    >
      {showFlipWords && (
        <div className="mb-6 text-center text-xl tracking-wide font-light text-white/70">
          <FlipWords words={words} />
        </div>
      )}

      {/* Glass container + Blue→Orange border + flare */}
      <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden p-[2px] 
        bg-gradient-to-r from-[#3BA9FF] via-white/10 to-[#FF8A3B] shadow-[0_0_45px_-10px_rgba(255,255,255,0.3)]">

        {/* Sweeping flare light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="animate-flare absolute -inset-x-40 top-0 h-full w-1/3 
            bg-gradient-to-r from-transparent via-white/40 to-transparent blur-2xl opacity-60" />
        </div>

        {/* inner frosted glass */}
        <div className="relative bg-[#05050d]/60 backdrop-blur-2xl rounded-2xl border border-white/15 shadow-xl">
          
          {/* ambient glow */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r 
            from-[#3BA9FF]/10 via-transparent to-[#FF8A3B]/10 blur-xl" />

          {/* header */}
          <div className="py-4 text-center">
            <span className="px-4 py-[3px] rounded-xl border border-white/15 bg-white/10 text-white/75 text-xs tracking-[0.28em] uppercase">
              Event Countdown
            </span>
          </div>

          {/* Separator */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-40" />

          {/* Countdown center */}
          <div className="relative flex mx-auto items-center justify-center py-5">
            <CountdownItem unit="Day" text="Days" cn="border-r border-white/10" />
            <CountdownItem unit="Hour" text="Hours" cn="border-r border-white/10" />
            <CountdownItem unit="Minute" text="Minutes" cn="border-r border-white/10" />
            <CountdownItem unit="Second" text="Seconds" />
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-40" />
        </div>
      </div>

      <p className="mt-3 text-sm text-white/40 tracking-widest uppercase">The future arrives soon</p>
    </motion.div>
  ) : null;
};

export default ShiftingCountdown;


// -------- Countdown Item --------
const CountdownItem = ({ unit, text, cn }) => {
  const { ref, time } = useTimer(unit);

  return (
    <div className={`flex h-20 w-[25%] flex-col items-center justify-center text-center gap-1 ${cn}`}>
      <span
        ref={ref}
        className="text-3xl md:text-4xl font-semibold text-white tracking-tight"
      >
        {time}
      </span>
      <span className="text-[10px] tracking-[0.32em] text-white/45 uppercase">
        {text}
      </span>
    </div>
  );
};


// -------- Timer Engine --------
const useTimer = (unit) => {
  const [ref, animate] = useAnimate();
  const interval = useRef(null);
  const timeRef = useRef(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    interval.current = setInterval(tick, 1000);
    return () => clearInterval(interval.current || undefined);
  }, []);

  const tick = async () => {
    const now = new Date();
    const end = new Date(COUNTDOWN_FROM);
    const diff = +end - +now;

    let newTime = 0;
    if (unit === "Day") newTime = Math.floor(diff / DAY);
    else if (unit === "Hour") newTime = Math.floor((diff % DAY) / HOUR);
    else if (unit === "Minute") newTime = Math.floor((diff % HOUR) / MINUTE);
    else newTime = Math.floor((diff % MINUTE) / SECOND);

    if (newTime !== timeRef.current) {
      await animate(ref.current, { opacity: [1, 0], y: [-8, 8] }, { duration: 0.25 });
      timeRef.current = newTime;
      setTime(newTime);
      await animate(ref.current, { opacity: [0, 1], y: [8, 0] }, { duration: 0.25 });
    }
  };

  return { ref, time };
};
