import { useEffect } from "react";
import { motion } from "framer-motion";
import { IncCanvas } from "./canvas";

const Preloader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  return (<>
  
    </>
  );
};

export default Preloader;
