import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAppointment as createAppointmentApi } from "../../services/apiAppointments";
import toast from "react-hot-toast";

export function useCreateAppointment() {
  const queryClient = useQueryClient();

  const { mutate: createAppointment, isLoading } = useMutation({
    mutationFn: createAppointmentApi,
    onSuccess: () => {
      toast.success("Appointment created successfully");
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
      queryClient.invalidateQueries({ queryKey: ["dogSpending"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createAppointment, isLoading };
}
