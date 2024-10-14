import UpdatePasswordForm from "../../authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../../components/UpdateUserDataForm/UpdateUserDataForm";
import { Heading } from "../../styles/generalStyles";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Heading as="h3">Update user data</Heading>
      <UpdateUserDataForm />

      <Heading as="h3">Update password</Heading>
      <UpdatePasswordForm />
    </>
  );
}

export default Account;
