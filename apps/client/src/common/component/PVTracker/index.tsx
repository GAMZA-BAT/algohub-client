import type { PvEvent } from "@/sdk/__generated__/pv.gen";
import { mixpanelTracker } from "@/sdk/mixpanel";

type PVTrackerProps<TName, TParams> = {
  name: TName;
  params?: TParams;
};

export const PVTracker = <
  TName extends PvEvent["name"],
  TParams extends Extract<PvEvent, { name: TName }>["params"],
>({
  name,
  params,
}: PVTrackerProps<TName, TParams>) => {
  mixpanelTracker.tracePageView(name, params);

  return null;
};
