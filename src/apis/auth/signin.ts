import apiClient from "src/apis";

export default async function signIn(data: {
  loginId: string;
  password: string;
}): Promise<{ id: number; jwt: string }> {
  return (await apiClient.post(`/auth/sign-in`, data)).data.result;
}
