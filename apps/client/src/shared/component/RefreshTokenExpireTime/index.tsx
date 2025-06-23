"use client";

import type { Session } from "next-auth";
import { useEffect, useRef } from "react";
import { setAccessToken } from "../../util/token";
import { getSession } from "next-auth/react";

const RefreshTokenExpireTime = ({
  session,
  update,
}: {
  session: Session | null;
  update: (data?: unknown) => Promise<Session | null>;
}) => {
  const interval = useRef<ReturnType<typeof setInterval>>();
  const watchAndUpdateIfExpire = async () => {
    if (session) {
      const timeRemaining = session.accessTokenExpires - Date.now();
      if (timeRemaining <= 1000 * 60 * 5) {
        const newSession = await update(await getSession());
        setAccessToken(newSession?.accessToken!);
      }
    }
  };

  useEffect(() => {
    watchAndUpdateIfExpire();
  }, []);

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }
    interval.current = setInterval(watchAndUpdateIfExpire, 1000 * 60);

    return () => clearInterval(interval.current);
  }, [session?.accessToken]);

  return null;
};

export default RefreshTokenExpireTime;
