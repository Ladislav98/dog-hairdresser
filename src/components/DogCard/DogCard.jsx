import { useState } from "react";
import { useUser } from "../../authentication/useUser";
import DogDataForm from "../dogs/DogDataForm/DogDataForm";
import { useGetDogsFromUser } from "../dogs/useGetDogsFromUser";
import FormRow from "../Form/FormRow";
import Spinner from "../Spinner/Spinner";
import {
  DogCardWrapper,
  DogBreed,
  DogName,
  MultipleDogsWrapper,
  DogImage,
} from "./DogCardStyle";
import { Button } from "../../styles/generalStyles";
import { useDeleteDog } from "../dogs/useDeleteDog";
import { RiDeleteBin5Line } from "react-icons/ri";

function DogCard() {
  const { user } = useUser();
  const { usersDog, isLoading } = useGetDogsFromUser(user?.id);
  const [showForm, setShowForm] = useState(false);
  const { deleteDog, isDeletingDog } = useDeleteDog();

  if (isLoading) {
    return <Spinner />;
  }

  if (!usersDog || usersDog.length === 0) {
    return (
      <>
        <p>You have no dogs yet. Create one below:</p>
        <DogDataForm />
      </>
    );
  }

  return (
    <>
      <MultipleDogsWrapper>
        {usersDog.map((dog) => (
          <DogCardWrapper key={dog.id}>
            <DogImage src={dog.dogAvatar} alt="Dog" />
            <DogName>{dog.dogName}</DogName>
            <DogBreed>{dog.breed || "Unknown Breed"}</DogBreed>
            <div>
              <Button
                $variation="secondary"
                size="medium"
                onClick={() => deleteDog(dog.id)}
              >
                {isDeletingDog ? (
                  <Spinner size="small" />
                ) : (
                  <RiDeleteBin5Line />
                )}
              </Button>
              {/* <Button size="small" onClick={() => handleUpdateDog(dog.id)}>
                Edit
              </Button> */}
            </div>
          </DogCardWrapper>
        ))}
      </MultipleDogsWrapper>
      {!showForm && (
        <FormRow>
          <Button onClick={() => setShowForm(!showForm)}>Add new dog</Button>
        </FormRow>
      )}
      {showForm && (
        <FormRow>
          <DogDataForm />
        </FormRow>
      )}
    </>
  );
}

export default DogCard;
