import { useForm } from "react-hook-form";
import FormRow from "../../Form/FormRow";
import { Button, Input } from "../../../styles/generalStyles";
import Form from "../../Form/Form";
import { useCreateDog } from "../useCreateDog";
import { useUser } from "../../../authentication/useUser";

function DogDataForm() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { createDog, isLoading } = useCreateDog();
  const { user } = useUser();

  function onSubmit({ dogName, breed, age, weight, dogAvatar }) {
    const avatarFile = dogAvatar[0];
    createDog(
      {
        dogName,
        breed,
        age,
        weight,
        userId: user.id,
        dogAvatar: avatarFile,
      },
      {
        onSuccess: (data) => {
          console.log("Dog created successfully", data);
          reset();
        },
      }
    );
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Dog name" error={errors?.dogName?.message}>
          <Input
            type="text"
            id="dogName"
            {...register("dogName", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Breed" error={errors?.breed?.message}>
          <Input
            type="text"
            id="breed"
            disabled={isLoading}
            {...register("breed", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Age" error={errors?.age?.message}>
          <Input
            type="text"
            id="age"
            disabled={isLoading}
            {...register("age", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Weight (kg)" error={errors?.weight?.message}>
          <Input
            type="text"
            id="weight"
            disabled={isLoading}
            {...register("weight", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Dog Avatar">
          <Input
            type="file"
            id="dogAvatar"
            accept="image/*"
            disabled={isLoading}
            {...register("dogAvatar")}
          />
        </FormRow>

        <FormRow>
          <Button
            $variation="secondary"
            type="reset"
            disabled={isLoading}
            onClick={reset}
          >
            Cancel
          </Button>
          <Button disabled={isLoading}>Create dog data</Button>
        </FormRow>
      </Form>
    </>
  );
}

export default DogDataForm;
