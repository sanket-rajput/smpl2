import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProtectedRoute from '../../ProtectedRoute';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import JudgeDashboard from './JudgeDashboard';


const JudgeEvaluate = lazy(() => import("./JudgeEvaluate"));
const JudgeProfile = lazy(() => import("./JudgeProfile"));
const EvaluateConcepts = lazy(() => import("./EvaluateConcepts"));
const EvaluateImpetus = lazy(() => import("./EvaluateImpetus"));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Judge = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="h-full py-24">
        <Routes>
          {/* Protected Judge Routes */}
          <Route element={<ProtectedRoute path={"/auth/login"} navigate={"/judge"}/>}>
            <Route path="/" element={<JudgeDashboard />} />
            <Route path="/evaluate" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><JudgeEvaluate /></Suspense>} />
            <Route path="/evaluate/impetus/:pid" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><EvaluateImpetus /></Suspense>} />
            <Route path="/evaluate/concepts/:pid" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><EvaluateConcepts /></Suspense>} />
            <Route path="/profile" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><JudgeProfile /></Suspense>} />
          </Route>
          {/* Catch-all for undefined judge routes */}
          <Route path="*" element={<Navigate to="/judge" replace />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default Judge;
