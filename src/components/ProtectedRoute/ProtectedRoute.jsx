import { Navigate, Outlet } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { useUser } from "../../authentication/useUser";
import styled from "styled-components";

const FullPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ProtectedRoute = () => {
  const { isLoading, user, isAuthenticated } = useUser();

  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (isAuthenticated) return <Outlet />;
};
