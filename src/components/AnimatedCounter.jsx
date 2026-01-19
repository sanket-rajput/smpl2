import { IconCurrencyRupee } from "@tabler/icons-react";
import {
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";
import { styles } from "../styles";
import { prize } from "../assets";

const CountUp = ({ from, to, animationOptions }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element || !inView) return;

    element.textContent = String(from);

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = Number(value.toFixed(0)).toLocaleString("en-US");
      },
    });

    return () => controls.stop();
  }, [ref, inView, from, to]);

  return <span ref={ref} />;
};

const AnimatedCounter = () => {
  return (
    <section className="relative w-full overflow-hidden pointer-events-none">
      {/* ------------------------------------------- */}
      {/* 🌈 Ambient Glow Background & Soft Grid */}
      {/* ------------------------------------------- */}

      {/* Ambient top glow */}
   <div className="
  pointer-events-none absolute inset-0 -z-10
  bg-[linear-gradient(
    to_bottom,
    #000c12ff_0%,
    rgba(10,40,70,0.85)_40%,
    rgba(20,80,120,0.55)_75%,
    rgba(0,12,18,1)_100%
  )]
" />


      {/* Ambient bottom glow */}
      {/* <div className="
        pointer-events-none absolute inset-0 
        bg-[radial-gradient(circle_at_bottom,_rgba(248,113,22,0.18),transparent_65%)]
        -z-10
      " /> */}

      {/* Soft grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22] -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
        }}
      />

      {/* ------------------------------------------- */}
      {/* Main Content */}
      {/* ------------------------------------------- */}

      <div className="sm:my-16 py-14">
        <h2
          className={`
            ${styles.sectionHeadText}
            flex items-center justify-center gap-3 sm:gap-4
            max-sm:flex-col text-center font-semibold relative
          `}
        >
          {/* Soft Glow for heading */}
          <span
            className="
              absolute inset-0 -z-10 mx-auto 
              w-[60%] sm:w-[40%] h-full 
              blur-2xl opacity-20
              bg-gradient-to-r from-cyan-400/40 to-orange-300/40
            "
          />

          <img
            loading="lazy"
            src={prize}
            alt="trophy"
            className="
              w-10 h-10 sm:w-12 sm:h-12 opacity-90
              transition-transform duration-500
              hover:scale-110
            "
          />

          <span
            className="
              block tracking-wide text-white/90
              animate-[fadeUp_0.6s_ease-out]
            "
          >
            With a Prize Pool of
          </span>
        </h2>

        {/* Counter */}
        <div className="w-full flex items-center justify-center text-orange-100 max-sm:py-4">
          <IconCurrencyRupee className="sm:size-[190px] size-[50px]" />

          <div
            className="sm:text-[200px] text-[60px] font-extrabold"
            style={{ width: "6ch" }}
          >
            <CountUp from={550000} to={700000} />
          </div>

          <span className="sm:text-[190px] text-[50px] font-bold">&nbsp;+</span>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AnimatedCounter;
