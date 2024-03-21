import axios, { AxiosInstance } from "axios";
import { jwtDecode } from "jwt-decode";
import RoutePath from "src/routes/routePath";
import { lStorage, StorageKeys } from "src/utils/storage";

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 2500,

  headers: {
    accept: "application/json",
    Authorization: `Bearer ${lStorage.get(StorageKeys.Token)}`,
  },
});

const ONE_HOUR = 60 * 60;

apiClient.interceptors.request.use(async (config) => {
  const jwt = lStorage.get(StorageKeys.Token);

  if (jwt) {
    const { exp: expiredDate } = jwtDecode(jwt);
    const currentTime = new Date().getTime() / 1000;

    if (expiredDate) {
      const remainingTime = expiredDate - currentTime;

      /** 토큰 만료 기한이 1시간 미만일 경우 token 재발급 */
      if (remainingTime < ONE_HOUR) {
        try {
          const token = lStorage.get(StorageKeys.Token);
          const { jwt } = (
            await axios.post(`${process.env.REACT_APP_API}/auth/jwt`, {
              jwt: token,
            })
          ).data.result;

          lStorage.set(StorageKeys.Token, jwt);
        } catch (error) {
          console.error(error);
          window.location.href = RoutePath.Signout;
        }
      }
    }
  }

  return config;
});

export default apiClient;
