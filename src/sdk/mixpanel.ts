import { IS_PROD } from "@/shared/constant/config";
import mixpanel from "mixpanel-browser";
import type { User } from "next-auth";
import { CustomEventRegex } from "./__generated__/custom.gen";
import { PvEventRegex } from "./__generated__/pv.gen";

type MixpanelInfo = {
  $name: string;
  $email: string;
};

type ExtraProperties = Pick<User, "id" | "bjNickname">;

type Info = MixpanelInfo & ExtraProperties;

const MixpanelTracker = () => {
  let initialized = false;

  const initialize = (info: Info) => {
    if (
      !IS_PROD ||
      process.env.NEXT_PUBLIC_MIXPANEL_TOKEN === undefined ||
      initialized
    )
      return;

    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
      debug: true,
      autotrack: false,
      track_pageview: false,
    });

    if (info.id) mixpanel.identify(info.id);
    mixpanel.people.set(info);

    initialized = true;
  };

  return {
    initialize,
    reset() {
      initialized = false;
      mixpanel.reset();
    },
    trackEvent(name: string, params?: Record<string, unknown>) {
      if (!CustomEventRegex.test(name)) return undefined;

      if (!initialized) return;

      mixpanel.track(name, params);
    },
    tracePageView(name: string, params?: Record<string, unknown>) {
      if (!PvEventRegex.test(name)) return;

      if (!initialized) return;

      /** track_pageview가 있으나 이벤트명이 디폴트값으로 설정되어 track 메서드로 트래킹 */
      mixpanel.track(name, params);
    },
  };
};

export const mixpanelTracker = MixpanelTracker();
