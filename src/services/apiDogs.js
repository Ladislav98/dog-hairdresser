import supabase from "./supabase";

export async function getDogs() {
  const { data: dogs, error } = await supabase.from("dogs").select("*");

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching dogs");
  }
  return dogs;
}
