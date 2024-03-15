import { padStart } from "lodash";
import apiClient from "src/apis";
import { DateSelectFormType, SignupFormInput } from "src/types";

export default async function signup({
  birthDate,
  loginId,
  password,
  ...rest
}: SignupFormInput): Promise<{ id: number; loginId: string }> {
  return (
    await apiClient.post(`/auth/sign-up`, {
      loginId: loginId.trim(),
      password: password.trim(),
      birthDate: getFormattedDate(birthDate),
      ...rest,
    })
  ).data.result;
}

/** utils */

function getFormattedDate({ year, month, day }: DateSelectFormType): string {
  const formattedYear = padStart(year.toString(), 4, "0");
  const formattedMonth = padStart(month.toString(), 2, "0");
  const formattedDay = padStart(day.toString(), 2, "0");

  return `${formattedYear}-${formattedMonth}-${formattedDay}`;
}
