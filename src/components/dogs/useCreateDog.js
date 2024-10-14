import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createDog as createDogApi } from "../../services/apiDogs";

export function useCreateDog() {
  const queryClient = useQueryClient();
  const { mutate: createDog, isLoading } = useMutation({
    mutationFn: createDogApi,
    onSuccess: () => {
      toast.success("Dog created successfully");
      queryClient.invalidateQueries({
        queryKey: ["dogs"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createDog, isLoading };
}
