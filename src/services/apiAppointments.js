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

export async function checkAvailability(date, time) {
  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .eq("appointmentDate", date)
    .eq("appointmentTime", time);

  if (error) {
    console.log(error);
    throw new Error("Failed to check availability");
  }

  return data.length === 0;
}
