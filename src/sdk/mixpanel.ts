import { IS_PROD } from "@/shared/constant/config";
import mixpanel from "mixpanel-browser";
import { CustomEventRegex } from "./__generated__/custom.gen";
import { PvEventRegex } from "./__generated__/pv.gen";

export const MixpanelTracker = () => {
  let initialized = false;

  const initialize = () => {
    if (
      !IS_PROD ||
      process.env.NEXT_PUBLIC_MIXPANEL_TOKEN === undefined ||
      initialized
    )
      return;

    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
      debug: true,
    });

    initialized = true;
  };

  return {
    initialize,
    trackEvent(name: string, params?: Record<string, unknown>) {
      if (!CustomEventRegex.test(name)) return undefined;

      if (!initialized) return;

      mixpanel.track(name, params);
    },
    tracePageView(name: string, params?: Record<string, unknown>) {
      if (!PvEventRegex.test(name)) return;

      if (!initialized) return;

      mixpanel.track_pageview({
        name,
        ...params,
      });
    },
  };
};
