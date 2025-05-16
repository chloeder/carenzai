import { useQuery } from "@tanstack/react-query";
import { getNewestInterviewSession } from "../actions/get-interview";

export function useGetInterview(userId: string | undefined) {
  return useQuery({
    queryKey: ["interview", userId],
    queryFn: () => getNewestInterviewSession(userId ?? ""),
  });
}
