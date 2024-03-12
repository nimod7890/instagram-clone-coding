import axios, { AxiosInstance } from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuthStorage } from "src/hooks/@common";
import lStorage, { StorageKeys } from "src/utils/storage";

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 2500,

  headers: {
    accept: "application/json",
    Authorization: `Bearer ${lStorage.get(StorageKeys.Token)}`,
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const jwt = lStorage.get(StorageKeys.Token);

    if (jwt) {
      const { exp: expiredDate } = jwtDecode(jwt);
      const currentTime = new Date().getTime() / 1000;

      /** token 재발급 */
      if (expiredDate && expiredDate < currentTime) {
        console.info("token 재발급 시도", expiredDate, currentTime);

        const { token, setAuthData } = useAuthStorage();

        const { jwt } = (await axios.post("/auth/jwt", { jwt: token })).data;

        console.info("token 재발급 완료", jwt);

        setAuthData(jwt);

        // if (config.headers) {
        //   config.headers.Authorization = `Bearer ${jwt}`;
        // }
      }
    }

    return config;
  }
  // (error) => Promise.reject(error)
);

export default apiClient;
