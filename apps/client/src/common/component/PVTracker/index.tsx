"use client";
import type { PvEvent } from "@/sdk/__generated__/pv.gen";
import { mixpanelTracker } from "@/sdk/mixpanel";
import { useEffect } from "react";

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
  useEffect(() => {
    mixpanelTracker.tracePageView(name, params);
  }, [name, params]);

  return null;
};
