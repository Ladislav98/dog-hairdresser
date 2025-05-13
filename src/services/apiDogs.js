import supabase, { supabaseUrl } from "./supabase";

export async function getDogs() {
  const { data: dogs, error } = await supabase.from("dogs").select("*");

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching dogs");
  }
  return dogs;
}

export async function createDog({
  dogName,
  breed,
  age,
  weight,
  userId,
  dogAvatar,
}) {
  const imageName = `${Math.random()}-${dogAvatar.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/dog_avatar/${imageName}`;

  const { data: dog, error } = await supabase
    .from("dogs")
    .insert([{ dogName, breed, age, weight, userId, dogAvatar: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error("An error occurred while creating a dog");
  }

  //2. upload the image to Supabase storage
  const { error: storageError } = await supabase.storage
    .from("dog_avatar")
    .upload(imageName, dogAvatar);

  //obrisi avatar ako je error prilikom uploada
  if (storageError) {
    await supabase.from("dogs").delete().eq("id", dog.dogId);
    console.error(storageError);
    throw new Error("Dog image upload failed and it was not created");
  }
  console.log("Fetched dogs for user:", dog);

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
    .select("*")
    .eq("userId", userId);

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching dogs");
  }

  console.log("Fetched dogs for user:", userDogs);

  return userDogs || [];
}
