export type Timeout = ReturnType<typeof setTimeout>;

export interface Problem {
  id: string | number;
  tier: TierDetail;
  title: string;
  date: string;
  solved: number;
  total: number;
  status: "solved" | "unsolved" | "wrong";
}

export type tier =
  | "bronze"
  | "silver"
  | "gold"
  | "platinum"
  | "diamond"
  | "ruby";

export type TierDetail = `${tier} ${1 | 2 | 3 | 4 | 5}` | "master";

export type Status = "Favorites" | "Queued" | "Progress" | "Done";
