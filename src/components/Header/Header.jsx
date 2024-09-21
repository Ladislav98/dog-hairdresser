import { useLogout } from "../../authentication/useLogout";
import { Button } from "../../styles/generalStyles";
import { StyledHeader } from "./HeaderStyle";

function Header() {
  const { logout, isLoading } = useLogout();

  return (
    <StyledHeader>
      <Button onClick={logout} disabled={isLoading}>
        Logout
      </Button>
    </StyledHeader>
  );
}

export default Header;
