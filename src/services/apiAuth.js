import supabase, { supabaseUrl } from "./supabase";

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { fullName, avatar: "" } },
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function getCurrentAdminStatus() {
  const user = await getCurrentUser();

  if (!user) return null;

  // Fetch the user's profile to get the is_admin value
  const { data: profile, error } = await supabase
    .from("profile")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  if (error) throw new Error(error.message);

  // Return both the user and their admin status
  return { user, isAdmin: profile.is_admin };
}

export async function logout() {
  await supabase.auth.signOut();
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) {
    throw new Error(error.message);
  }
  if (!avatar) return data;

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storageError) {
    throw new Error(storageError.message);
  }

  const { data: updatedUser, error: error2 } = supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });
  if (error2) {
    throw new Error(error2.message);
  }
  return updatedUser;
}
