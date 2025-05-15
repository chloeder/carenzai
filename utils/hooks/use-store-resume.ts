import { useMutation } from "@tanstack/react-query";
import { storeResume } from "../actions/store-resume";

export function useStoreResume() {
  const { mutate: saveResume, isPending } = useMutation({
    mutationFn: storeResume,
    onSuccess: () => {
      console.log("Resume saved successfully");
    },
    onError: () => {
      console.log("Failed to save resume");
    },
  });

  return { saveResume, isPending };
}
