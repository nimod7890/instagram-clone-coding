import axios, { AxiosInstance } from "axios";
import * as jsonwebtoken from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
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
    const { exp: expiredDate } = jsonwebtoken.decode(jwt) as JwtPayload;
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

    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  ({ data }) => data,
  (error) => Promise.reject(error)
);

export default apiClient;
