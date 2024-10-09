import supabase from "./supabase";

export async function createAppointment(newAppointment) {
  console.log(newAppointment);
  const { data, error } = await supabase
    .from("appointments")
    .insert([newAppointment])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Appointment creation failed");
  }

  return data;
}
