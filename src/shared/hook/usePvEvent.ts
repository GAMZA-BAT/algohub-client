import { useEffectOnce } from "@/common/hook/useEffectOnce";
import type { PvEvent } from "@/sdk/__generated__/pv.gen";
import { MixpanelTracker } from "@/sdk/mixpanel";

export const usePvEvent = <TName extends PvEvent["name"]>(
  name: TName,
  params: Extract<PvEvent, { name: TName }>["params"],
) => {
  useEffectOnce(() => {
    MixpanelTracker().tracePageView(name, params);
  }, []);

  return null;
};
