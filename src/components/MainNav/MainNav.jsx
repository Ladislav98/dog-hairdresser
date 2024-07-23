import { NavList, StyledNavLink } from "./MainNavStyle";

function MainNav() {
  return (
    <NavList>
      <StyledNavLink to="/">
        <span>Home</span>
      </StyledNavLink>
      <StyledNavLink to="gallery">
        <span>Our Work</span>
      </StyledNavLink>
      <StyledNavLink to="about">
        <span>About</span>
      </StyledNavLink>
      <StyledNavLink to="faqs">
        <span>FAQs</span>
      </StyledNavLink>
    </NavList>
  );
}

export default MainNav;
