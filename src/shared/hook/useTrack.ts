import type { CustomEvent } from "@/sdk/__generated__/custom.gen";
import { MixpanelTracker } from "@/sdk/mixpanel";

export const useTrack = () => {
  return {
    track<TName extends CustomEvent["name"]>(
      name: TName,
      params: Extract<CustomEvent, { name: TName }>["params"],
    ) {
      MixpanelTracker().trackEvent(name, params);
    },
  };
};
