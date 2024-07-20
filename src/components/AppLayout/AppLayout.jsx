import { Outlet } from "react-router-dom";
import { Container, Main, StyledAppLayout } from "./AppLayoutStyle";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <Header />
        <Sidebar />
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
