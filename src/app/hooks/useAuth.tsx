"use client";

import { useEffect, useState } from "react";
import { fetchRefreshToken, fetchUserProfile } from "../api/auth";
import { useTokenStore } from "../store/useTokenStore";

const useAuth = () => {
  const [user, setUser] = useState<any>({});
  const [isLogin, setIsLogin] = useState<string | null>(null);
  const accessToken = useTokenStore((state) => state.accessToken);
  const setAccessToken = useTokenStore((state) => state.setAccessToken);

  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLogin") || "";
    setIsLogin(storedLoginState);

    console.log("accessToken", accessToken);

    const initializeAuth = async () => {
      try {
        // accessToken이 없고 isLogin이 true라면 refreshToken으로 갱신
        if (!accessToken && storedLoginState) {
          await fetchRefreshToken().then((res) => {
            setAccessToken(res.accessToken);
            fetchUserProfile().then((res) => setUser(res.user));
          });
        } else if (accessToken) {
          await fetchUserProfile().then((res) => setUser(res.user));
        }
      } catch (error) {
        console.error("초기 인증 실패:", error);
        // setIsLogin("false"); // 로그인 상태 초기화
        // localStorage.removeItem("isLogin"); // 상태 동기화
      }
    };

    initializeAuth();

    const interval = setInterval(
      () => {
        if (accessToken) {
          fetchRefreshToken()
            .then((res) => setAccessToken(res.accessToken))
            .catch((error) => {
              setAccessToken(null); // 초기화
              setIsLogin("false");
              localStorage.removeItem("isLogin");
            });
        }
      },
      5 * 60 * 1000,
    );

    return () => clearInterval(interval);
  }, [accessToken, fetchRefreshToken]);

  return { user, isLogin };
};
export default useAuth;
