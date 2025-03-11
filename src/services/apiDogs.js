import supabase from "./supabase";

export async function getDogs() {
  const { data: dogs, error } = await supabase.from("dogs").select("*");

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching dogs");
  }
  return dogs;
}

export async function createDog({ dogName, breed, age, weight, userId }) {
  const { data: dog, error } = await supabase
    .from("dogs")
    .insert([{ dogName, breed, age, weight, userId }]);

  if (error) {
    console.error(error);
    throw new Error("An error occurred while creating a dog");
  }
  return dog;
}

export async function deleteDog(dogId) {
  const { error } = await supabase.from("dogs").delete().eq("id", dogId);

  if (error) {
    console.error(error);
    throw new Error("An error occurred while deleting the dog");
  }
}

export async function getDogsForUser(userId) {
  const { data: userDogs, error } = await supabase
    .from("dogs")
    .select("id, dogName, breed, dog_size")
    .eq("userId", userId);

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching dogs");
  }

  return userDogs || [];
}
