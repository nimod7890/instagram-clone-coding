import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "src/apis/auth";
import RoutePath from "src/routes/routePath";

export default function useSignup() {
  const navigate = useNavigate();

  const { mutate, ...rest } = useMutation({
    mutationFn: signup,
    onSuccess: () => navigate(RoutePath.Signin),
  });

  return { signup: mutate, ...rest };
}
