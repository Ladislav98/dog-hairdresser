import { Heading } from "../../styles/generalStyles";
import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h1" type="center">
        Login to your account
      </Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
