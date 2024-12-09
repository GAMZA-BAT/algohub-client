"use client";

import type { Session } from "next-auth";
import type { UpdateSession } from "next-auth/react";
import { useEffect, useRef } from "react";

const RefreshTokenExpireTime = ({
  session,
  update,
}: {
  session: Session | null;
  update: UpdateSession;
}) => {
  const interval = useRef<NodeJS.Timer | undefined>(undefined);

  useEffect(() => {
    if (interval.current) {
      clearInterval(interval.current as NodeJS.Timeout);
    }

    const watchAndUpdateIfExpire = () => {
      if (session) {
        const nowTime = Math.floor(new Date().getTime() / 1000);
        const timeRemaining = session.accessTokenExpires - nowTime;

        if (timeRemaining <= 0) update();
      }
    };

    interval.current = setInterval(watchAndUpdateIfExpire, 1000 * 10);

    return () => {
      if (interval.current) {
        clearInterval(interval.current as NodeJS.Timeout);
      }
    };
  }, [session, update]);

  return null;
};

export default RefreshTokenExpireTime;
