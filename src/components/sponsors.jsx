import { sponsors } from "../constants";
import { styles } from "../styles";
import { cn } from "../lib/utils";
import {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

/* -------------------- SPONSORS SECTION -------------------- */

const Sponsors = () => {
  return (
<section className="w-full flex flex-col items-center pt-4 pb-24 relative overflow-hidden">
      {/* <h2 className={`${styles.sectionHeadText} text-center`}>Our Sponsors.</h2> */}
<div className="w-full flex items-center justify-center py-16">
      <p className="text-base sm:text-lg font-light text-white/60 tracking-wide">
        Sponsors revealing soon.
      </p>
    </div> <div
        className="pointer-events-none absolute inset-0 opacity-[0.22] -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
        }}
      />
      {/* <div className="flex flex-col w-full items-center gap-14 sm:py-16 py-8">
        {Object.keys(sponsors).map((key) => {
          const heading =
            key === "association"
              ? "In Association With"
              : key === "co"
              ? "Co-sponsors"
              : key + (sponsors[key].length > 1 ? " sponsors" : " sponsor");

          return (
            <div key={key} className="flex flex-col gap-8 items-center">
              <h3 className="text-center text-3xl font-bold capitalize pb-2 border-b-2 border-orange-200">
                {heading}
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-10 max-w-6xl">
                {sponsors[key].map((s) => (
                  <SponsorCard
                    key={s.name}
                    width={key === "title" ? 300 : 230}
                    height={key === "title" ? 200 : 150}
                  >
                    <img
                      loading="lazy"
                      src={s.src}
                      alt={s.name}
                      className="w-full h-full object-contain select-none"
                    />
                  </SponsorCard>
                ))}
              </div>
            </div>
          );
        })}
      </div> */}

    </section>
  );
};

export default Sponsors;

/* -------------------- SPONSOR CARD -------------------- */

// const SponsorCard = ({ children, width, height }) => {
//   return (
//     <CardContainer
//       containerClassName="bg-gradient-to-br from-[#173B78] via-[#5F9DF7] to-[#E89A35] rounded-xl"
//     >
//       <CardBody
//         className="relative group/card shadow-xl shadow-orange-200/40 bg-white border border-primary p-4 rounded-xl"
//         style={{ width, height }}
//       >
//         <CardItem
//           translateZ={70}
//           className="w-full h-full group-hover/card:shadow-2xl group-hover/card:shadow-blue-300/50 rounded-xl"
//         >
//           {children}
//         </CardItem>
//       </CardBody>
//     </CardContainer>
//   );
// };

/* -------------------- TILT 3D ENGINE -------------------- */

const MouseEnterContext = createContext(undefined);

export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 18;
    const y = (e.clientY - top - height / 2) / 18;

    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "p-[2px] flex items-center justify-center rounded-xl",
          containerClassName
        )}
        style={{ perspective: "1200px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={() => setIsMouseEntered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center transition-all duration-300 ease-linear rounded-xl",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

/* -------------------- CARD BODY -------------------- */

export const CardBody = ({ children, className, style }) => {
  return (
    <div
      style={style}
      className={cn(
        "rounded-xl [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

/* -------------------- CARD ITEM -------------------- */

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;

    if (isMouseEntered) {
      ref.current.style.transform = `
        translateX(${translateX}px)
        translateY(${translateY}px)
        translateZ(${translateZ}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        rotateZ(${rotateZ}deg)
      `;
    } else {
      ref.current.style.transform =
        "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
    }
  }, [isMouseEntered]);

  return (
    <Tag
      ref={ref}
      className={cn("transition-all duration-300 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

/* -------------------- CONTEXT HOOK -------------------- */

export const useMouseEnter = () => {
  const ctx = useContext(MouseEnterContext);
  if (!ctx)
    throw new Error("useMouseEnter must be used inside MouseEnterContext");
  return ctx;
};
