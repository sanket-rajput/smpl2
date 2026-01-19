import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";


export const ContainerScroll = ({
  titleComponent,
  children
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 0.8], [45, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1.2, 1]);
  const translateh = useTransform(scrollYProgress, [0, 0.8], [90, -100]);

  return (
    (<div
      className="h-full relative"
      ref={containerRef}>
      <div
        className="sm:py-10 w-full"
        style={{
          perspective: "1000px",
        }}>
        <Header translate={translateh} titleComponent={titleComponent}isMobile={isMobile}/>
        <Card rotate={rotate} scale={scale} isMobile={isMobile}>
          {children}
        </Card>
      </div>
    </div>)
  );
};

export const Header = ({
  translate,
  titleComponent,
  isMobile
}) => {

  const attributes = !isMobile && {
    translateY: translate,
  }

  return (
    (<motion.div
      style={attributes}
      className="div max-w-5xl mx-auto text-center">
      {titleComponent}
    </motion.div>)
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  isMobile
}) => {

  const attributes = !isMobile && {
    rotateX: rotate,
    scale,
    boxShadow:
      "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
  }

  return (
    (<motion.div
      style={attributes}
      className="max-w-7xl p-px sm:-mt-12 mt-12 mx-auto w-full  bg-gradient-to-br from-dark-blue via-yellow-500 to-orange-100">
      <div
        className="h-full w-full bg-tertiary p-4 text-[16px] sm:text-lg">
        {children}
      </div>
    </motion.div>)
  );
};
