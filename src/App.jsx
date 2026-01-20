import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { About, Navbar, Sponsors } from "./components";
import Hero from "./components/HeroParallax";
import Events from "./components/Events";
import Notification from "./components/Modal";
import useDimension from "./hooks/useDimension";
import MobileContext from "./hooks/MobileContext";
import RegisterHome from "./components/RegisterHome";
import Test from "./components/Test";
import AnimatedCounter from "./components/AnimatedCounter";
import { ToastContainer, Zoom } from "react-toastify";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/footer";
import { Suspense, lazy } from "react";
import Admin from "./components/admin/AdminRoot";
import AdminLogin from "./components/admin/AdminLogin";
import JudgeRegister from "./components/forms/JudgeRegister";
import Judge from "./components/judge/JudgeRoot";
import GenerateSynopsis from "./components/GenerateSynopsis";

import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";

// Lazy components
const Register = lazy(() => import("./components/Register.jsx"));
const Committee = lazy(() => import("./components/committee"));
const EventDetails = lazy(() => import("./components/EventDetails"));
// const Results = lazy(() => import("./components/Results"));

// Suspense wrappers
const RegisterWithSuspense = () => (
  <Suspense
    fallback={
      <div
        style={{
          textAlign: "center",
          padding: "150px 0",
          color: "white",
          fontSize: "18px",
        }}
      >
        Loading Registration...
      </div>
    }
  >
    <Register />
  </Suspense>
);

const EventDetailsWithSuspense = () => (
  <Suspense
    fallback={
      <div
        style={{
          textAlign: "center",
          padding: "150px 0",
          color: "white",
          fontSize: "18px",
        }}
      >
        Loading Event Details...
      </div>
    }
  >
    <EventDetails />
  </Suspense>
);

const CommitteeWithSuspense = () => (
  <Suspense
    fallback={
      <div
        style={{
          textAlign: "center",
          padding: "150px 0",
          color: "white",
          fontSize: "18px",
        }}
      >
        Loading Committee...
      </div>
    }
  >
    <Committee />
  </Suspense>
);

// const ResultsWithSuspense = () => (
//   <Suspense
//     fallback={
//       <div
//         style={{
//           textAlign: "center",
//           padding: "150px 0",
//           color: "white",
//           fontSize: "18px",
//         }}
//       >
//         Loading Results...
//       </div>
//     }
//   >
//     <Results />
//   </Suspense>
// );

const App = () => {
  const [loading, setLoading] = useState(true); // PRELOADER
  const isMobile = useDimension();
  const location = useLocation();

  // Show preloader ONLY on landing page "/"
  useEffect(() => {
    if (location.pathname !== "/") {
      setLoading(false);
    }
  }, [location.pathname]);

  return (
    <MobileContext.Provider value={isMobile}>

      {/* Preloader only when on "/" and still loading */}
      {location.pathname === "/" && loading && (
        <AnimatePresence>
          <Preloader onFinish={() => setLoading(false)} />
        </AnimatePresence>
      )}

      {/* Render the main website AFTER preloader finishes */}
      {!loading && (
        <>
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Zoom}
          />

          <Navbar />

          <div className="relative z-0 bg-primary min-h-full" key={location.pathname}>
            <Routes>
              {/* PUBLIC ROUTES */}
              <Route
                key="home"
                path="/"
                element={
                  <>
                    <Hero key="hero-component" />
                    <About />
                    <Events key="events-component" />
                    <AnimatedCounter />
                    <Sponsors />
                    <Notification />
                  </>
                }
              />

              <Route path="/register" element={<RegisterHome />} />
              <Route
                path="/register/judge/:event_name"
                element={<JudgeRegister />}
              />

              <Route
                path="/register/:event"
                element={<RegisterWithSuspense />}
              />

              <Route
                path="/events/:id"
                element={<EventDetailsWithSuspense />}
              />

              <Route
                path="/committee/:id"
                element={<CommitteeWithSuspense />}
              />

              <Route
                path="/generate-synopsis/:event_name"
                element={<GenerateSynopsis />}
              />

              {/* <Route
                path="/results/:event_name"
                element={<ResultsWithSuspense />}
              /> */}

              <Route path="/test" element={<Test />} />

              {/* ADMIN ROUTES */}
              <Route path="/auth/login" element={<AdminLogin />} />
              <Route path="/admin/*" element={<Admin />} />

              {/* JUDGE ROUTES */}
              <Route path="/judge/*" element={<Judge />} />

              {/* 404 */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>

            <Footer />
          </div>
        </>
      )}
    </MobileContext.Provider>
  );
};

export default App;