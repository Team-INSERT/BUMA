import { http } from "@/apis";
import { refreshToken } from "@/apis/header";
import { TOKEN } from "@/constants";
import { Storage } from "@/storage";

export const refresh = async (authCode: string) => {
  const { data } = await http.put("/auth/refresh/access", { accessToken: authCode });
  Storage.setItem(TOKEN.ACCESS, data.accessToken);
  return data.accessToken;
};

export const requestLogin = async (accessToken: string) => {
  const { data } = await http.post("/auth/oauth/bsm", { accessToken });
  return data;
};

export const requestLogout = async () => {
  const { data } = await http.delete("/auth/bsm/logout", refreshToken());
  return data;
};
