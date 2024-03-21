import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signin } from "src/apis/auth";
import { useAppRepository, useAuthStorage } from "src/hooks/@common";
import RoutePath from "src/routes/routePath";

export default function useSignin(onSuccess: () => void) {
  const navigate = useNavigate();
  const { setAuthData } = useAuthStorage();
  const { syncRepository } = useAppRepository();

  const { mutate, ...rest } = useMutation({
    mutationFn: signin,
    onSuccess: ({ id, jwt }, { loginId }) => {
      onSuccess();
      setAuthData(jwt);
      syncRepository({ userData: { id, loginId } });

      navigate(RoutePath.Home, { replace: true });
    },
  });

  return { signin: mutate, ...rest };
}
