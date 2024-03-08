import axios, { AxiosInstance } from "axios";
import * as jsonwebtoken from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import lStorage, { StorageKeys } from "@utils/storage";

const request: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 2500,

  headers: {
    accept: "application/json",
    Authorization: `Bearer ${lStorage.get(StorageKeys.Token)}`,
  },
});

request.interceptors.request.use(
  (config) => {
    const jwt = lStorage.get(StorageKeys.Token) ?? "";
    const decodedJwt: JwtPayload = jsonwebtoken.decode(jwt) as JwtPayload;
    const currentTime = new Date().getTime() / 1000;

    if (decodedJwt.exp ?? 0 < currentTime) {
      // Todo: 서버에 토큰 재발급 요청 코드 작성 필요
      console.log("서버에 토큰 재발급 요청");
    }
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
