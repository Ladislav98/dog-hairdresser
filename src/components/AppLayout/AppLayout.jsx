import { Outlet } from "react-router-dom";
import { Container, Main, StyledAppLayout } from "./AppLayoutStyle";

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
