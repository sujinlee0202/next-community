import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 토큰 인터셉터 추가
let interceptorId: number | null = null;

export const setupTokenInterceptor = (token: string | null) => {
  // 기존 인터셉터 제거
  if (interceptorId !== null) {
    api.interceptors.request.eject(interceptorId);
  }

  // 새 인터셉터 추가
  interceptorId = api.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};
