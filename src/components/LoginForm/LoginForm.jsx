import { useState } from "react";
// import { useLogin } from "./useLogin";
// import SpinnerMini from "./../../ui/SpinnerMini";
import FormRowVertical from "../Form/FormRowVertical";
import Form from "../Form/Form";
// import { Button } from "../../styles/generalStyles";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
`;

function LoginForm() {
  const [email, setEmail] = useState("jonas@example.com");
  const [password, setPassword] = useState("pass1234");
  // const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    // login(
    //   { email, password },
    //   {
    //     onSettled: () => {
    //       setEmail("");
    //       setPassword("");
    //     },
    //   }
    // );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        {/* <Button size="large" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button> */}
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
