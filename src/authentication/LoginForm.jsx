import { useState } from "react";
import FormRowVertical from "../components/Form/FormRowVertical";
import Form from "../components/Form/Form";
import styled from "styled-components";
import { Button, Heading } from "../styles/generalStyles";
import SpinnerMini from "../components/SpinnerMini/SpinnerMini";
import useLogin from "./useLogin";
import { Link } from "react-router-dom";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
`;

function LoginForm() {
  const [email, setEmail] = useState("proba@example.com");
  const [password, setPassword] = useState("lalalala");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>

      <Heading as="h3" type="login">
        {"Don't have an account? "}
        <Link to="/register" style={{ color: "blue", fontWeight: 500 }}>
          Sign up
        </Link>
      </Heading>
    </Form>
  );
}

export default LoginForm;
