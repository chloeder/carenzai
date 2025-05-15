import { useMutation } from "@tanstack/react-query";
import { storeInterviewSession } from "../actions/store-interview-session";

export function useStoreInterviewSession() {
  const { mutate: interviewSession, isPending } = useMutation({
    mutationFn: storeInterviewSession,
    onSuccess: () => {
      console.log("Interview session stored successfully");
    },
    onError: () => {
      console.log("Failed to store interview session");
    },
  });

  return { interviewSession, isPending };
}
