import { useForm } from "react-hook-form";
import Form from "../components/Form/Form";
import FormRow from "../components/Form/FormRow";
import { Button, Heading, Input } from "../styles/generalStyles";
import { useSignup } from "./useSignup";
import { Link } from "react-router-dom";

function SignupForm() {
  const { signup, isUpdating } = useSignup();
  const { register, formState, getValues, handleSubmit, reset, watch } =
    useForm();
  const { errors } = formState;

  const formValues = watch();

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSuccess: reset,
      }
    );
  }

  const isFormNotEmpty = Object.values(formValues).some(
    (value) => value !== ""
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isUpdating}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isUpdating}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characaters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        {isFormNotEmpty && (
          <Button
            $variation="secondary"
            type="reset"
            disabled={isUpdating}
            onClick={reset}
          >
            Cancel
          </Button>
        )}
        <Button disabled={isUpdating}>Create account</Button>
      </FormRow>
      <Heading as="h3" type="login">
        {"Already have an account? "}
        <Link to="/login" style={{ color: "blue", fontWeight: 500 }}>
          Login
        </Link>
      </Heading>
    </Form>
  );
}

export default SignupForm;
