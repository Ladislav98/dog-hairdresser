import { Outlet } from "react-router-dom";
import { Container, Main, StyledAppLayout } from "./AppLayoutStyle";
import Header from "../Header/Header";

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <Header />
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
