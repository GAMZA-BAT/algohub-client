"use client";

import type { Session } from "next-auth";
import { useEffect, useRef } from "react";

export const [getAccessToken, setAccessToken] = (() => {
  let accessToken = "";
  const getAcessToken = () => accessToken;
  const setAcessToken = (value: string | undefined) => {
    accessToken = value!;
  };

  return [getAcessToken, setAcessToken];
})();

const TokenManager = ({
  session,
  update,
}: {
  session: Session | null;
  update: (data?: unknown) => Promise<Session | null>;
}) => {
  const interval = useRef<ReturnType<typeof setInterval>>();

  // ky hook에서 사용할 액세스 토큰 업데이트
  useEffect(() => {
    if (session?.accessToken !== getAccessToken())
      setAccessToken(session?.accessToken);
  }, [session?.accessToken]);

  // 토큰 재발급
  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }

    const watchAndUpdateIfExpire = async () => {
      if (session) {
        const nowTime = Math.floor(new Date().getTime() / 1000);
        const timeRemaining = session.accessTokenExpires - nowTime;

        if (timeRemaining <= 0) {
          const { accessToken } = (await update())!;
          setAccessToken(accessToken);
        }
      }
    };

    interval.current = setInterval(watchAndUpdateIfExpire, 1000 * 10);

    return () => clearInterval(interval.current);
  }, [session, update]);

  return null;
};

export default TokenManager;
