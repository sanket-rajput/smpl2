import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProtectedRoute from '../../ProtectedRoute';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AdminDashboard from './AdminDashboard';

const AdminVerify = lazy(() => import("./AdminVerify"));
const AdminRegistrations = lazy(() => import("./AdminRegistrations"));
const AdminIncomplete = lazy(() => import("./AdminIncomplete"));
const AdminAllocate = lazy(() => import("./AdminAllocate"));
const AdminDeallocate = lazy(() => import("./AdminDeallocate"));
const AdminResults = lazy(() => import("./AdminResults"));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Admin = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="h-full py-24">
        <Routes>
          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute path={"/auth/login"} navigate={"/admin"}/>}>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/verify/:event_name" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><AdminVerify /></Suspense>} />
            <Route path="/registrations/:event_name" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><AdminRegistrations /></Suspense>} />
            <Route path="/incomplete-registrations/:event_name" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><AdminIncomplete /></Suspense>} />
            <Route path="/allocate/:event_name" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><AdminAllocate /></Suspense>} />
            <Route path="/deallocate/:event_name" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><AdminDeallocate /></Suspense>} />
            <Route path="/results/:table_name" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><AdminResults /></Suspense>} />
          </Route>
          {/* Catch-all for undefined admin routes */}
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default Admin;
