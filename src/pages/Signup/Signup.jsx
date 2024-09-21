import { Heading } from "../../styles/generalStyles";
import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import SignupForm from "../../authentication/SignupForm";

const SignupLayout = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  // selector of all children of SignupLayout
  & > * {
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
  }
`;

function Signup() {
  return (
    <SignupLayout>
      <Logo />
      <Heading as="h4">Signup to your account</Heading>
      <SignupForm />
    </SignupLayout>
  );
}

export default Signup;
