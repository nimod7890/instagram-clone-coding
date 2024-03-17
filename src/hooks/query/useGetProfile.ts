import { useQuery } from "@tanstack/react-query";
import { getProfile } from "src/apis/user";
import { QueryKeys } from "src/libraries/reactQuery";

export default function useGetProfile(loginId: string) {
  const {
    data: profile,
    error,
    ...rest
  } = useQuery({
    queryKey: [QueryKeys.User, loginId],
    queryFn: getProfile,
  });

  return { profile, ...rest };
}
