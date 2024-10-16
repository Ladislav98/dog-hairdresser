// hooks/useGetDogsFromUser.js
import { useQuery } from "@tanstack/react-query";
import { getDogsForUser } from "../../services/apiDogs";

export function useGetDogsFromUser(userId) {
  const {
    data: usersDog,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["dogs", userId],
    queryFn: () => getDogsForUser(userId),
    enabled: !!userId,
  });

  return { usersDog, isLoading, error };
}
