import { NavList, StyledNavLink } from "./MainNavStyle";

function MainNav() {
  return (
    <NavList>
      <StyledNavLink to="/">
        <span>Home</span>
      </StyledNavLink>
      <StyledNavLink to="appointment">
        <span>Appointment</span>
      </StyledNavLink>
      <StyledNavLink to="services">
        <span>Services</span>
      </StyledNavLink>
      <StyledNavLink to="about">
        <span>About</span>
      </StyledNavLink>
    </NavList>
  );
}

export default MainNav;
