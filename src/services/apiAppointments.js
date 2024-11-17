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

export async function getAppointmentsForUser(userId) {
  if (!userId) {
    console.error("User ID is undefined");
    return [];
  }

  const { data, error } = await supabase
    .from("appointments")
    .select("*,dogs(dogName)") // Include the dogName from the dogs table that is related to the appointments table
    .eq("userId", userId)
    .order("appointmentDate", { ascending: false });

  if (error) {
    console.log(error);
    throw new Error("Failed to fetch appointments for user");
  }

  return data;
}

export async function getDogSpending(userId) {
  const { data, error } = await supabase.rpc("get_dog_spending", {
    user_id: userId,
  });

  if (error) {
    console.error("Error fetching dog spending:", error);
    throw error;
  }

  return data; // [{ dog_name, total_spent }]
}
