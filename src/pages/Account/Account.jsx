import UpdatePasswordForm from "../../authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../../authentication/UpdateUserDataForm";
import DogDataForm from "../../components/dogs/DogDataForm/DogDataForm";
import { Heading } from "../../styles/generalStyles";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Heading as="h3">Update user data</Heading>
      <UpdateUserDataForm />

      <Heading as="h3">Create or update dog data</Heading>
      <DogDataForm />

      <Heading as="h3">Update password</Heading>
      <UpdatePasswordForm />
    </>
  );
}

export default Account;
