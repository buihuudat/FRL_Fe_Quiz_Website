import { axiosClient } from "../axiosConfig";

export const authApi = {
  login: ({ email, password }) =>
    axiosClient.post("/auth/login", { email, password }),
  register: ({ name, email, password }) =>
    axiosClient.post("/auth/signup", { name, email, password }),
  checkAuth: () => axiosClient.post("/auth/check-auth"),
};
