import { useQuery } from "@tanstack/react-query";
import { getCurrentAdminStatus } from "../services/apiAuth";

export function useAdmin() {
  const { isLoading, data } = useQuery({
    queryKey: ["adminStatus"],
    queryFn: getCurrentAdminStatus,
  });

  console.log(data); // Log to confirm data structure
  const isAdmin = data?.isAdmin || false;

  return { isLoading, isAdmin, user: data?.user };
}
