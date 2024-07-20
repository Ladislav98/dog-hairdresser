import { NavList, StyledNavLink } from "./MainNavStyle";

function MainNav() {
  return (
    <NavList>
      <StyledNavLink to="/">
        <span>Home</span>
      </StyledNavLink>
      <StyledNavLink>
        <span>Appointment</span>
      </StyledNavLink>
      <StyledNavLink>
        <span>Services</span>
      </StyledNavLink>
      <StyledNavLink to="about">
        <span>About</span>
      </StyledNavLink>
    </NavList>
  );
}

export default MainNav;
