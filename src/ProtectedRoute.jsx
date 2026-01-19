import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useLazyProcessVerifyQuery } from "./app/services/authAPI";
import Loader from "./components/ui/Loader";
import { toast } from "react-toastify";
import { setLogin } from "./app/features/auth/authSlice";

const ProtectedRoute = ({path, navigate: navigatePath}) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [isVerifying, setIsVerifying] = useState(true);
  const dispatch = useDispatch();
  const [ processVeriy, { isFetching } ] = useLazyProcessVerifyQuery();
  const navigate = useNavigate();

  const verifyAdmin = async () => {
    try {
      if(!isAuthenticated){
        const data = await processVeriy().unwrap();
        dispatch(setLogin({ username: data.username, roles: data.roles, isAuthenticated: true }));
        toast.success("Admin Verified.")
        navigate(navigatePath)
      }
    } catch (error) {
      console.error(error);
      toast.info(error?.data?.message || error?.message || 'Login to Proceed.');
    }
    finally {
      setIsVerifying(false);
    }
  }
  
  useEffect(() => {
    verifyAdmin();
  }, []);

  return isAuthenticated ? <Outlet /> : (isVerifying || isFetching) ?
  <div className="fixed inset-0 z-50 backdrop-blur-sm">
    <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex flex-col items-center gap-8">
      <Loader size={150} />
      <h2 className="sm:text-2xl text-white text-center">Authenticating...</h2>
    </div>
  </div> : <Navigate to={path} replace />;
};

export default ProtectedRoute