import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://611c2dd2edc3ed74.mokky.dev",
  timeout: 8000,
  headers: { Accept: "application/json" },
});
