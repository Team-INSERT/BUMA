import axios, { AxiosError } from "axios";
import { ERROR } from "@/constants";
import { refresh } from "@/services/auth/auth.api";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  timeout: 10000,
});

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error instanceof AxiosError) {
      const request = error.config;
      const { code } = error.response?.data || { code: null };
      const isAccessTokenExpiredError = code === ERROR.TOKEN_403_2;

      if (isAccessTokenExpiredError && request) {
        request.headers.Authorization = await refresh();
        return http(request);
      }
    }
    return Promise.reject(error);
  },
);
