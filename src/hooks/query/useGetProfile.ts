import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getProfile } from "src/apis/user";
import { QueryKeys } from "src/libraries/reactQuery";
import RoutePath from "src/routes/routePath";

export default function useGetProfile(loginId: string) {
  const navigate = useNavigate();
  const {
    data: profile,
    isError,
    ...rest
  } = useQuery({
    queryKey: [QueryKeys.User, loginId],
    queryFn: getProfile,
  });

  if (isError) {
    navigate(RoutePath.NotFoundError);
  }

  return { profile, ...rest };
}
