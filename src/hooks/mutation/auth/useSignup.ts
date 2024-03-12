import { useMutation } from "@tanstack/react-query";
import { padStart } from "lodash";
import { useNavigate } from "react-router-dom";
import apiClient from "src/apis";
import RoutePath from "src/routes/routePath";
import { DateSelectFormType, SignupFormInput } from "src/types";

export default function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, ...rest } = useMutation({
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

  return { signup, ...rest };
}

/** utils */
function getFormattedDate({ year, month, day }: DateSelectFormType): string {
  const formattedYear = padStart(year.toString(), 4, "0");
  const formattedMonth = padStart(month.toString(), 2, "0");
  const formattedDay = padStart(day.toString(), 2, "0");

  return `${formattedYear}-${formattedMonth}-${formattedDay}`;
}
