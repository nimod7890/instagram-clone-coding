import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import apiClient from "src/apis";
import { useAppRepository, useAuthStorage } from "src/hooks/@common";
import RoutePath from "src/routes/routePath";

export default function useSignin() {
  const navigate = useNavigate();
  const { setAuthData } = useAuthStorage();
  const { syncRepository } = useAppRepository();

  const { mutate: signin, ...rest } = useMutation({
    mutationFn: async (data: { loginId: string; password: string }) =>
      (await apiClient.post(`/auth/sign-in`, data)).data.result,
    onSuccess: ({ jwt }: { id: number; jwt: string }, { loginId }) => {
      setAuthData(jwt);

      const userData = { loginId };
      syncRepository({ userData });

      navigate(RoutePath.Home, { replace: true });
    },
  });

  return { signin, ...rest };
}
