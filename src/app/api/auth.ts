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
    const response = await api.get("/api/auth/profile");
    console.log("profile", response.data);
    return response.data;
  } catch (error) {
    console.log("fail get profile");
    console.error("프로필 가져오기 실패:", error);
    throw error;
  }
};

// 리프레시 토큰 가져오기
export const fetchRefreshToken = async () => {
  try {
    const response = await api.get("/api/auth/refresh");
    console.log("fetch refreshtoken", response.data);
    return response.data;
  } catch (error) {
    console.log("error refresh token fail");
    console.error("리프레시 토큰 갱신 실패:", error);
    throw error;
  }
};
