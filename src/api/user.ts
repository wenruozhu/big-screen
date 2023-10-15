import axios from "axios";

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}

export function login(data: LoginData) {
  return axios.post<LoginRes>("/api/v1/tokens", data);
}

export function logout() {
  return axios.post<LoginRes>("/api/user/logout");
}
