import type { PvEvent } from "@/sdk/__generated__/pv.gen";
import { mixpanelTracker } from "@/sdk/mixpanel";
import { useEffect } from "react";

/** SSR 환경에서는 layout 파일에 PVTracker를 사용해주세요. */
export const usePvEvent = <TName extends PvEvent["name"]>(
  name: TName,
  params?: Extract<PvEvent, { name: TName }>["params"],
) => {
  useEffect(() => {
    mixpanelTracker.tracePageView(name, params);
  }, [name, params]);

  return null;
};
