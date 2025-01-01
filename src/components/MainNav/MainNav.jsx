// components/MainNav/MainNav.jsx
import { NavList, StyledNavLink } from "./MainNavStyle";
import { useAdmin } from "../../authentication/useAdmin";

function MainNav() {
  const { isAdmin } = useAdmin();

  return (
    <NavList>
      {isAdmin && (
        <StyledNavLink to="admin">
          <span>Admin Dashboard</span>
        </StyledNavLink>
      )}
      <StyledNavLink to="/">
        <span>Home</span>
      </StyledNavLink>
      <StyledNavLink to="gallery">
        <span>Our Work</span>
      </StyledNavLink>
      <StyledNavLink to="appointment">
        <span>Appointment</span>
      </StyledNavLink>
    </NavList>
  );
}

export default MainNav;
