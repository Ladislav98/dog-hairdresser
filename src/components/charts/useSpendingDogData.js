import { useQuery } from "@tanstack/react-query";
import { getDogSpending } from "../../services/apiAppointments";

export function useSpendingDogData({ userId }) {
  const {
    data: spendingData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["dogSpending", userId],
    queryFn: () => getDogSpending(userId),
  });

  return { spendingData, isLoading, error };
}
