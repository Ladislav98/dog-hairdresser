// components/AdminRoute/AdminRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import styled from "styled-components";
import { useAdmin } from "../../authentication/useAdmin";

const FullPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const AdminRoute = () => {
  const { isLoading, isAdmin } = useAdmin(); // useAdmin hook gives isAdmin

  // If loading the user data, show a loading spinner
  if (isLoading) {
    return (
      <FullPage>
        <Spinner /> {/* Loading spinner while fetching user data */}
      </FullPage>
    );
  }

  // If the user is not an admin, redirect them to the homepage
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  // If the user is an admin, render the admin content
  return <Outlet />;
};
