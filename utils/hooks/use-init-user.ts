import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../actions/get-current-user";

export function useInitUser() {
  return useQuery({
    queryKey: ["init-user"],
    queryFn: getCurrentUser,
  });
}
