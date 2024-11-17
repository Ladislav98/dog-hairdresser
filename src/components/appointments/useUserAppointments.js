import { useQuery } from "@tanstack/react-query";
import { getAppointmentsForUser } from "../../services/apiAppointments";
import { useUser } from "../../authentication/useUser";

export function useUserAppointments() {
  const user = useUser();
  const userId = user?.user?.id;

  const { data: appointments } = useQuery({
    queryKey: ["appointments"],
    queryFn: () => getAppointmentsForUser(userId),
    enabled: !!userId, // Only run the query if userId is defined
  });

  return { appointments };
}
