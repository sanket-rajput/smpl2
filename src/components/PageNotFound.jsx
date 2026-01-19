import { pagenotfound } from "../assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center px-5 select-none">

      {/* floating image */}
      <motion.img
        src={pagenotfound}
        loading="lazy"
        alt="Not Found"
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-[240px] sm:w-[380px] object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]"
      />

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.2 }}
        className="text-white text-4xl sm:text-5xl font-light tracking-tight mt-6"
      >
        You’re Out of Bounds
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.3 }}
        className="text-white/60 text-sm sm:text-base font-light max-w-md mt-3 leading-relaxed"
      >
        The page you’re looking for isn’t here anymore —  
        or maybe it never existed. Let’s guide you back safely.
      </motion.p>

      {/* soft gradient underline */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 120, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="h-[2px] mt-5 rounded-full bg-gradient-to-r from-[#3BA9FF] to-[#FF8A3B]"
      />

      {/* action button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.25 }}
      >
        <Link
          to="/"
          className="mt-7 inline-block text-white/80 text-sm tracking-wider border-b border-white/40 hover:text-white hover:border-white transition"
        >
          Take Me Home →
        </Link>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
