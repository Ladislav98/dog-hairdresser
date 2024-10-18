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

function DogCard() {
  const { user } = useUser();
  const { usersDog, isLoading } = useGetDogsFromUser(user?.id);
  const [showForm, setShowForm] = useState(false);

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
            <DogImage src="https://via.placeholder.com/300" alt="Dog" />
            <DogName>{dog.dogName}</DogName>
            <DogBreed>{dog.breed || "Unknown Breed"}</DogBreed>
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
