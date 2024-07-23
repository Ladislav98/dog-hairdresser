import Logo from "../Logo/Logo";
import MainNav from "../MainNav/MainNav";
import { StyledSidebar } from "./SidebarStyle";

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
