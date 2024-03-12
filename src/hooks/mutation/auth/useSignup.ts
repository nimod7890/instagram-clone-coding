import { useMutation } from "@tanstack/react-query";
import { padStart } from "lodash";
import { useNavigate } from "react-router-dom";
import apiClient from "src/apis";
import { SignupFormInput } from "src/hooks/page/useSignupPage";
import RoutePath from "src/routes/routePath";
import { DateSelectFormType } from "src/types";

export default function useSignup() {
  const navigate = useNavigate();

  const { mutate: signin, ...rest } = useMutation({
    mutationFn: async ({
      birthDate,
      loginId,
      password,
      ...rest
    }: SignupFormInput) => {
      return (
        await apiClient.post(`/auth/sign-up`, {
          loginId: loginId.trim(),
          password: password.trim(),
          birthDate: getFormattedDate(birthDate),
          ...rest,
        })
      ).data.result;
    },
    onSuccess: () => navigate(RoutePath.Signin),
  });

  return { signin, ...rest };
}

/** utils */
function getFormattedDate({ year, month, day }: DateSelectFormType): string {
  const formattedYear = padStart(year.toString(), 4, "0");
  const formattedMonth = padStart(month.toString(), 2, "0");
  const formattedDay = padStart(day.toString(), 2, "0");

  return `${formattedYear}-${formattedMonth}-${formattedDay}`;
}
