import { useState } from "react";
import FormRowVertical from "../components/Form/FormRowVertical";
import Form from "../components/Form/Form";
import { Button, Heading, Input } from "../styles/generalStyles";
import SpinnerMini from "../components/SpinnerMini/SpinnerMini";
import useLogin from "./useLogin";
import { Link } from "react-router-dom";

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
