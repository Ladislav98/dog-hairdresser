import { useUser } from "../../authentication/useUser";
import DogDataForm from "../dogs/DogDataForm/DogDataForm";
import { useGetDogsFromUser } from "../dogs/useGetDogsFromUser";
import Spinner from "../Spinner/Spinner";
import { DogCardWrapper, DogBreed, DogName } from "./DogCardStyle";

function DogCard() {
  const { user } = useUser();
  const { usersDog, isLoading } = useGetDogsFromUser(user?.id);

  if (isLoading) {
    return <Spinner />;
  }

  if (!usersDog || usersDog.length === 0) {
    return (
      <>
        <p>You have no dogs yet. Create one below:</p>
        <DogDataForm />
      </>
    ); // Handle cases where there are no dogs
  }

  return (
    <>
      {usersDog.map((dog) => (
        <DogCardWrapper key={dog.id}>
          <DogName>{dog.dogName}</DogName>
          <DogBreed>{dog.breed}</DogBreed>
        </DogCardWrapper>
      ))}
    </>
  );
}

export default DogCard;
