"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import { theme } from "@/styles/themes.css";

const pluginKey = process.env.NEXT_PUBLIC_CHANNEL_IO_KEY;

const ChannelTalk = () => {
  const { data: session, status } = useSession();

  // Channel.io 스크립트는 최초 1회만 로드
  useEffect(() => {
    if (!pluginKey) return;

    ChannelService.loadScript();
  }, []);

  // 사용자 인증 상태에 따른 부팅 처리
  useEffect(() => {
    if (!pluginKey) return;

    if (status === "loading") return;

    if (status === "authenticated" && session?.user?.id) {
      // 인증된 사용자: 사용자 정보와 함께 부팅
      ChannelService.boot({
        pluginKey,
        memberId: session.user.id,
        profile: {
          name: session.user.nickname ?? "USER",
          mobileNumber: session.user.email ?? "",
          customField1: session.user.bjNickname ?? "",
        },
        zIndex: +theme.zIndex.bottom,
      });
    } else {
      // 게스트 모드: 기본 설정으로 부팅
      ChannelService.boot({
        pluginKey,
        zIndex: +theme.zIndex.bottom
      });
    }

    return () => {
      ChannelService.shutdown();
    };
  }, [status, session?.user?.id]);

  return null;
};

export default ChannelTalk;
