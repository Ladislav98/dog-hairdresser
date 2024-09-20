import { Navigate, Outlet } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { useUser } from "../../authentication/useUser";

export const ProtectedRoute = () => {
  const { isLoading, user, isAuthenticated } = useUser();

  if (isLoading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (isAuthenticated) return <Outlet />;
};
