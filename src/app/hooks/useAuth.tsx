"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchRefreshToken, fetchUserProfile } from "../api/auth";
import { setupTokenInterceptor } from "../api";

const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false); // 초기화 상태 플래그

  const refreshTokenAndGetUser = useCallback(async () => {
    try {
      // Refresh Token으로 Access Token 발급
      const refreshResponse = await fetchRefreshToken();
      const newAccessToken = refreshResponse.accessToken;

      // Axios 인터셉터에 새 토큰 반영
      setupTokenInterceptor(newAccessToken);
      setAccessToken(newAccessToken);

      // 갱신된 Access Token으로 사용자 정보 가져오기
      const userProfile = await fetchUserProfile();
      setUser(userProfile);
    } catch (error) {
      console.error("토큰 갱신 실패:", error);
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const initializeUser = async () => {
      try {
        await refreshTokenAndGetUser();
      } finally {
        setIsInitialized(true); // 초기화 완료 플래그 설정
      }
    };

    if (!isInitialized) {
      initializeUser();
    }

    // 주기적으로 토큰 갱신
    const refreshInterval = setInterval(refreshTokenAndGetUser, 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, [isInitialized, refreshTokenAndGetUser]);

  return { user, accessToken };
};

export default useAuth;
