import axios from "axios";
import { api } from ".";

export const fetchSignup = async (user: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await api.post("/api/users", user);
  return response.data;
};

export const fetchLogin = async (user: { email: string; password: string }) => {
  const response = await api.post("/api/auth", user);
  return response.data;
};

// 사용자 프로필 가져오기
export const fetchUserProfile = async () => {
  try {
    const response = await api.get("/api/auth/profile", {
      headers: {
        Authorization: axios.defaults.headers.common.Authorization,
      },
    });

    return response.data;
  } catch (error) {
    console.error("프로필 가져오기 실패:", error);
    throw error;
  }
};

// 리프레시 토큰 가져오기
export const fetchRefreshToken = async () => {
  try {
    const response = await api.get("/api/auth/refresh");
    const { accessToken } = response.data;
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    return response.data;
  } catch (error) {
    console.error("리프레시 토큰 갱신 실패:", error);
    throw error;
  }
};

export const fetchLogout = async () => {
  const response = await api.post(
    "/api/auth/logout",
    {},
    {
      headers: {
        Authorization: axios.defaults.headers.common.Authorization,
      },
    },
  );
  return response.data;
};
