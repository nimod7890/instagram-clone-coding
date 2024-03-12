import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import apiClient from "src/apis";
import { useAppRepository, useAuthStorage } from "src/hooks/@common";
import RoutePath from "src/routes/routePath";

export default function useSignin() {
  const navigate = useNavigate();
  const { setAuthData } = useAuthStorage();
  const { syncRepository, clear } = useAppRepository();

  const { mutate: signin, ...rest } = useMutation({
    mutationFn: async (data: { loginId: string; password: string }) => {
      const { loginId } = data;

      const userData = { loginId };
      syncRepository({ userData });

      return (await apiClient.post(`/auth/sign-in`, data)).data.result;
    },
    onSuccess: ({ jwt }: { id: number; jwt: string }) => {
      setAuthData(jwt);
      navigate(RoutePath.Home, { replace: true });
    },
    onError: () => {
      clear();
    },
  });

  return { signin, ...rest };
}
