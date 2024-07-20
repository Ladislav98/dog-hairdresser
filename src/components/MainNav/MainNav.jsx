import { NavList, StyledNavLink } from "./MainNavStyle";

function MainNav() {
  return (
    <NavList>
      <StyledNavLink>
        <span>Home</span>
      </StyledNavLink>
      <StyledNavLink>
        <span>Appointment</span>
      </StyledNavLink>
      <StyledNavLink>
        <span>Services</span>
      </StyledNavLink>
      <StyledNavLink>
        <span>About</span>
      </StyledNavLink>
    </NavList>
  );
}

export default MainNav;
