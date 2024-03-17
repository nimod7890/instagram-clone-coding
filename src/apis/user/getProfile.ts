import { QueryFunctionContext } from "@tanstack/react-query";
import apiClient from "src/apis";
import { UserProfileType } from "src/types";

export default async function getProfile({
  queryKey,
}: QueryFunctionContext): Promise<UserProfileType> {
  const [, loginId] = queryKey;
  return (await apiClient.get(`/users/${loginId}/profile`)).data.result;
}
