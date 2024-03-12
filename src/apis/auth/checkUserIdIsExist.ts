import apiClient from "src/apis";

export default async function checkUserIdIsExist(loginId: string): Promise<{
  targetId: string;
  isExist: boolean;
}> {
  return (await apiClient.get(`/users`, { params: { loginId } })).data.result;
}
