import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

import scrollToTop from "../utils/scrollToTop";
import { IncCanvas } from "./canvas";
import RadarCountdown from "./ui/RadarCountdown";
import { impetus_b, concepts_b, pradnya_b, pict, logo } from "../assets";

import { useLocation } from "react-router-dom";

import { navItems } from "../constants";
import VirtualAssistant from "./VirtualAssistant";
import GlassBlueOrbit from "./GlassBlueOrbit";


import CircularVerticalGallery from "./ui/CircularVerticalGallery";






const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  
const items = [
  { image: impetus_b },
  { image: concepts_b },
  { image: pradnya_b },
];


  useEffect(() => {
    scrollToTop();
  }, []);

  // Smart navigation system: supports hash + real routes
  const handleNav = (item) => {
    if (item.type === "route") {
      navigate(item.path);
    } else {
      window.location.href = item.id === "home" ? "/" : `/#${item.id}`;
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#020712] text-white overflow-hidden">

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(248,113,22,0.18),transparent_65%)]" />

      {/* Soft grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.10) 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
        }}
      />
      

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-24 
                      flex flex-col gap-10 lg:flex-row lg:gap-8">

        {/* MOBILE MENU BUTTON */}
        {/* <div className="lg:hidden fixed top-5 left-5 z-[999]">
          <button
            onClick={() => setMenuOpen(true)}
            className="w-12 h-12 rounded-full bg-[#051017]/80 backdrop-blur-xl border border-cyan-400/40
            flex items-center justify-center shadow-[0_0_12px_rgba(0,255,255,0.35)]
            active:scale-95 transition">
            <span className="text-cyan-300 text-xl">☰</span>
          </button>
        </div> */}

        {/* MOBILE SLIDE-IN MENU */}
        {/* <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: menuOpen ? 0 : "-100%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-y-0 left-0 z-[998]
                     w-[260px] bg-[#051017]/95 backdrop-blur-xl 
                     border-r border-cyan-400/40 p-4 flex flex-col gap-6 lg:hidden"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-cyan-300 text-2xl mb-4"
          >
            ✕
          </button>

          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleNav(item);
                  setMenuOpen(false);
                }}
                className="px-4 py-3 border border-cyan-300/20 bg-[#06131d]/50 
                           hover:bg-cyan-300/10 transition-all"
              >
                <p className="text-[12px] tracking-[0.2em] uppercase text-cyan-100">
                  {item.title}
                </p>
              </button>
            ))}
          </div>
        </motion.div> */}




        <div className="hidden lg:flex flex-col w-full lg:w-[320px] max-w-[330px] mx-auto lg:mx-0 gap-6">

  {/* 🔵 Shiny Blue Glass Orbit */}
<div className="hidden lg:flex flex-col w-[320px] mx-auto lg:mx-0 gap-6">

  {/* FIXED: ensure the container has actual size */}
  <div className="relative w-[320px] h-[600px] bg-transparent">
    <CircularVerticalGallery
  items={[
    { image: impetus_b },
    { image: pradnya_b },
    { image: concepts_b },
  ]}
/>

  </div>

</div>


  {/* 🟢 Radar Countdown stays the same */}
  {/* <div className="hidden lg:block w-full lg:w-[320px] max-w-[330px] mx-auto lg:mx-0">
    <RadarCountdown />
  </div> */}

</div>








        {/* CENTER HOLOGRAM PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center gap-6"
        >

          {/* HEADER */}
          <div className="flex flex-col items-center justify-center gap-2 mb-6">

            {/* MOBILE */}
            <div className="flex flex-col items-center justify-center gap-2 sm:hidden">
              <p className="text-[16px] tracking-[0.28em] text-slate-100/85 uppercase mb-2 text-center">
                SCTR'S PUNE INSTITUTE OF COMPUTER TECHNOLOGY
              </p><p className="text-[11px] tracking-[0.28em] text-slate-100/85 uppercase mb-2 text-center">
                  PRESENTS
              </p>

              {/* <div className="flex items-center justify-center gap-5 mt-2">
                <a href="https://pict.edu" target="_blank" rel="noopener noreferrer">
                  <img src={pict} alt="PICT" className="w-14 h-14 object-contain" />
                </a>

                <img
                  src={logo}
                  alt="INC Logo"
                  className="w-14 h-14 drop-shadow-[0_0_14px_rgba(56,189,248,0.6)]"
                />
              </div> */}

              <h1 className="font-bold tracking-[0.22em] text-[22px] uppercase mt-2">
                INC 2026
              </h1>
            </div>

            {/* DESKTOP */}
            <div className="hidden sm:flex flex-col items-center justify-center gap-3">
              <p className="text-[12px] tracking-[0.32em] text-white/90 uppercase mb-2 text-center font-light">
  SCTR’S PUNE INSTITUTE OF COMPUTER TECHNOLOGY
</p>
<p className="text-[10px] tracking-[0.5em] text-white/60 uppercase text-center">
  • presents •
</p>


              <div className="flex items-center justify-center gap-4">
                {/* <a href="https://pict.edu" target="_blank" rel="noopener noreferrer">
                  <img src={pict} alt="PICT" className="w-12 h-12 object-contain" />
                </a>

                <span className="h-10 w-[2px] bg-white/60 rounded-full"></span>

                <Link to="/" className="flex items-center gap-3 hover:opacity-90">
                  <img
                    src={logo}
                    alt="INC Logo"
                    className="w-12 h-12 drop-shadow-[0_0_14px_rgba(56,189,248,0.6)]"
                  /> */}
                  <h1 className="font-bold tracking-[0.22em] text-[26px] uppercase">
                    INC 2026
                  </h1>
                {/* </Link> */}
              </div>
            </div>

          </div>

          {/* HOLOGRAM */}
          <div
  className="relative w-full max-w-max-w-2xl aspect-[16/10] rounded-2xl
  border border-slate-400/40 bg-black/50 backdrop-blur-2xl
  overflow-hidden shadow-[0_0_80px_rgba(22,80,140,0.55)]
  ring-1 ring-slate-300/10"
>

  {/* --- BACKGROUND VIDEO --- */}
  <video
    className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/higherquality.mp4" type="video/mp4" />
  </video>

  {/* --- TOP GRADIENT LINE --- */}
  <div
    className="absolute inset-x-0 top-0 h-[2px]
    bg-gradient-to-r from-sky-400/80 via-cyan-100/80 to-orange-400/80
    drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]"
  />

  {/* --- SIDE GRADIENT LINES --- */}
  <div
    className="absolute left-0 top-0 h-full w-[2px]
    bg-gradient-to-b from-sky-300/70 to-transparent"
  />
  <div
    className="absolute right-0 top-0 h-full w-[2px]
    bg-gradient-to-b from-orange-300/70 to-transparent"
  />

  {/* --- SCANLINES --- */}
  <div
    className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light"
    style={{
      backgroundImage:
        "linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      backgroundSize: "100% 12px",
    }}
  />

  {/* --- RADIAL DARKEN EDGE --- */}
  <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_55%,_rgba(0,0,0,0.65)_100%)] pointer-events-none" />

  {/* --- HUD TITLE --- */}
  <div
    className="
      absolute left-4 top-3 text-[10px] tracking-[0.22em]
      uppercase text-slate-200/90 bg-none backdrop-filter-none
      mix-blend-normal z-20
    "
  >
    PICT INC Edition 39th
  </div>

  {/* --- MAIN INNER SECTION (CANVAS + FLARES) --- */}
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">

    {/* DARK + SILVER FLARE BG */}
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Soft silver noise */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)",
          filter: "blur(40px)",
          opacity: 0.35,
        }}
      />

      {/* Metallic sweep shimmer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.08), transparent 80%)",
          mixBlendMode: "screen",
          animation: "silverSweep 6s ease-in-out infinite",
          opacity: 0.45,
        }}
      />

      {/* Grain layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.2) 0.7px, transparent 1px)",
          backgroundSize: "22px 22px",
          opacity: 0.15,
        }}
      />
    </div>

    {/* Silver Orb */}
    <div
      className="absolute w-[70%] h-[70%] rounded-full blur-3xl"
      style={{
        background:
          "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.32), transparent 70%)",
        filter: "drop-shadow(0 0 60px rgba(255,255,255,0.28))",
        opacity: 0.85,
        zIndex: 1,
      }}
    />

    {/* MAIN CANVAS */}
    <div
      className="relative w-[86%] h-[86%]"
      style={{
        filter: "drop-shadow(0 0 30px rgba(255,255,255,0.25))",
        zIndex: 2,
      }}
    >
      <IncCanvas />
    </div>

    {/* Inline Animations */}
    <style>
      {`
        @keyframes silverSweep {
          0% { opacity: 0; transform: translateX(-20%) rotate(0deg); }
          50% { opacity: 0.35; transform: translateX(20%) rotate(0deg); }
          100% { opacity: 0; transform: translateX(60%) rotate(0deg); }
        }
      `}
    </style>
  </div>

  {/* --- BOTTOM STATUS BAR --- */}
  <div
    className="absolute inset-x-0 bottom-0 px-4 py-2
    border-t border-slate-400/40 bg-black/75 backdrop-blur-xl
    flex items-center justify-between text-[10px]"
  >
    <p className="uppercase tracking-[0.25em] text-slate-200/90">
      Mark the Dates: 20–22 March 2026
    </p>

    <div className="flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300/80" />
    </div>
  </div>

</div>


          {/* CTA */}
          <div className="flex flex-col items-center gap-5 mt-1">
            <div className="flex flex-col sm:flex-row gap-4">
             <button
  onClick={() => navigate("/register")}
  className="relative inline-block p-px font-semibold leading-6 text-white-100 bg-tertiary shadow-2xl cursor-pointer shadow-zinc-900 
             transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 z-10 group/canvas-card"
>
  {/* visible border (soft → bright on hover) */}
  <span className="absolute inset-0 bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-[4px] 
                   opacity-90 transition-opacity duration-500 group-hover/canvas-card:opacity-100"></span>

  <span className="relative z-10 block px-4 py-2 bg-gray-950 ">
    <div className="relative z-10 flex items-center space-x-2">
      <span className="transition-all duration-500 group-hover/canvas-card:translate-x-1">
        Register Now
      </span>

      <svg
        className="w-6 h-6 transition-transform duration-500 group-hover/canvas-card:translate-x-1"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
        />
      </svg>
    </div>
  </span>
</button>


              {/* <button
                onClick={() => navigate("/events/impetus")}
                className="px-8 py-2.5 rounded-lg border border-slate-400/70 bg-black/60 backdrop-blur-xl
                  text-[11px] sm:text-xs tracking-[0.28em] uppercase hover:border-orange-400/80 hover:bg-orange-500/10 transition-colors"
              >
                Explore Events
              </button> */}
            </div>

            {/* Tracks Icons */}
            {/* <div className="flex items-center gap-6 opacity-90">

              <img
                src={impetus_b}
                alt="Impetus"
                className="w-8 sm:w-10 cursor-pointer hover:scale-110"
                onClick={() => navigate("/events/impetus")}
              />

              <img
                src={pradnya_b}
                alt="Pradnya"
                className="w-8 sm:w-10 cursor-pointer hover:scale-110"
                onClick={() => navigate("/events/pradnya")}
              />

              <img
                src={concepts_b}
                alt="Concepts"
                className="w-7 sm:w-9 cursor-pointer hover:scale-110"
                onClick={() => navigate("/events/concepts")}
              />

            </div> */}
          </div>
        </motion.div>

        {/* RIGHT — AI Assistant */}
        <div className="flex justify-center lg:justify-start w-full lg:w-[320px] shrink-0 mt-10 lg:mt-0 lg:ml-4">
          <VirtualAssistant />
        </div>

      </div>
     

    </section>
  );
};

export default Hero;
