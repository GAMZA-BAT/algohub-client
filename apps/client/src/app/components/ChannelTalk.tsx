"use client";

import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import { theme } from "@/styles/themes.css";

const ChannelTalk = () => {
  const { data: session, status } = useSession();
  const bootedRef = useRef(false);

  useEffect(() => {
    const pluginKey = process.env.NEXT_PUBLIC_CHANNEL_IO_KEY;
    if (!pluginKey) return;

    if (status === "loading") return;

    // 이미 부팅했다면 재부팅 방지
    if (bootedRef.current) return;

    ChannelService.loadScript();

    if (status === "authenticated" && session?.user?.id) {
      ChannelService.boot({
        pluginKey,
        memberId: session.user.id,
        profile: {
          name: session.user.nickname ?? "USER",
          mobileNumber: session.user.email ?? "",
          customField1: session.user.bjNickname ?? "",
        },
        zIndex: Number(theme.zIndex.bottom),
      });
    } else {
      // 게스트 모드
      ChannelService.boot({ pluginKey, zIndex: Number(theme.zIndex.bottom) });
    }

    bootedRef.current = true;
  }, [status, session?.user?.id]);

  return null;
};

export default ChannelTalk;
