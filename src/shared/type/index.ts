import type { SolutionLanguage } from "@/api/solutions/type";

export type Timeout = ReturnType<typeof setTimeout>;

export interface Problem {
  title: string;
  problemId: number;
  link?: string;
  startDate: string;
  endDate: string;
  level: TierDetail;
  solved: boolean;
  submitMemberCount?: number;
  memberCount?: number;
  accuracy?: number;
  inProgress?: boolean;
}

export interface Solution {
  solutionId: number;
  title: string;
  level: TierDetail;
  nickname?: string;
  profileImage?: string;
  solvedDateTime?: string;
  content?: string;
  result?: string;
  memoryUsage?: number;
  executionTime?: number;
  language: SolutionLanguage;
  codeLength?: number;
  commentCount?: number;
}

export type tier =
  | "bronze"
  | "silver"
  | "gold"
  | "platinum"
  | "diamond"
  | "ruby";

export type Comment = {
  commentId: number;
  writerNickname: string;
  writerProfileImage: string;
  content: string;
  createdAt: string;
};

export type TierDetail = `${tier} ${1 | 2 | 3 | 4 | 5}` | "master";

export type Status = "Favorites" | "Queued" | "Progress" | "Done";
