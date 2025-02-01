"use client";

import type { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useEffect, useRef } from "react";
import { setAccessToken } from "../../util/token";

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
      const nowTime = Date.now();
      const timeRemaining = session.accessTokenExpires - nowTime;
      if (timeRemaining <= 1000 * 60 * 5) {
        const newSession = await update(await getSession());
        setAccessToken(newSession?.accessToken!);
      }
    }
  };

  useEffect(() => {
    setAccessToken(session?.accessToken);
    watchAndUpdateIfExpire();
  }, [session?.accessToken]);

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }

    interval.current = setInterval(watchAndUpdateIfExpire, 1000 * 10);

    return () => clearInterval(interval.current);
  }, [session, update]);

  return null;
};

export default RefreshTokenExpireTime;
