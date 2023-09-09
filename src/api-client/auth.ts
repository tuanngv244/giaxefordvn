import { LoginPayload } from "@/models";
import restClient from "@/api-client/restClient";

export const authApi = {
  login(payload: LoginPayload) {
    return restClient.post("/login", payload);
  },
  logout() {
    return restClient.post("/logout");
  },
  getProfile() {
    return restClient.get("/profile");
  },
};

export type AuthApi = typeof authApi;
