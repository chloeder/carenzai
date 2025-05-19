import { useMutation, useQueryClient } from "@tanstack/react-query";
import { storeInterviewSession } from "../actions/store-interview-session";
import { toast } from "sonner";

export function useStoreInterviewSession() {
  const queryClient = useQueryClient();

  const { mutate: interviewSession, isPending } = useMutation({
    mutationFn: storeInterviewSession,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["interview"],
      });
      toast.success("Interview session created successfully");
    },
    onError: () => {
      toast.error("Failed to create interview session");
    },
  });

  return { interviewSession, isPending };
}
