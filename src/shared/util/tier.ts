import type { TierDetail } from "@/shared/type";

export const getTierByLevel = (level: number): TierDetail => {
  if (level === 31) return "master";

  const tier = ["bronze", "silver", "gold", "platinum", "diamond", "ruby"];

  let idx = 0;
  while (level > 5) {
    level -= 5;
    idx++;
  }

  return `${tier[idx]} ${level}` as TierDetail;
};
