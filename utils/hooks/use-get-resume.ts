import { useQuery } from "@tanstack/react-query";
import { getResume } from "../actions/get-resume";

export function useGetResume(userId: string | undefined) {
  return useQuery({
    queryKey: ["resume", userId],
    queryFn: () => getResume(userId ?? ""),
  });
}
