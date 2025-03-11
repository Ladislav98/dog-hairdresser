import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteDog as deleteDogApi } from "../../services/apiDogs";

export function useDeleteDog() {
  const queryClient = useQueryClient();

  const { mutate: deleteDog, isDeletingDog } = useMutation({
    mutationFn: deleteDogApi,
    onSuccess: () => {
      toast.success("Dog deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["dogs"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteDog, isDeletingDog };
}
