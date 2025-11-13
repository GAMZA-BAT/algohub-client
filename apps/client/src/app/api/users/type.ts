export type CheckEmailRequest = {
  email: string;
};

export type DeleteUserRequest = {
  password: string;
  isOAuthAccount: boolean;
};

export type EditPasswordRequest = {
  currentPassword: string;
  newPassword: string;
};

export type UserResponse = {
  email: string;
  nickname: string;
  bjNickname?: string;
  githubName?: string;
  profileImage?: string;
  description?: string;
};

export type PasswordRequest = {
  currentPassword: string;
  newPassword: string;
};

export type RecommendationTagType =
  | "MOST_ACTIVE_THIS_WEEK"
  | "HIGH_JOIN_RATE_RECENT"
  | "SIMILAR_DIFFICULTY";

export type RecommendStudyGroup = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  introduction: string;
  groupImage: string | null;
  tags?: RecommendationTagType[];
};

export type RecommendationItem = {
  tagType: RecommendationTagType;
  score: number;
  studyGroup: RecommendStudyGroup;
};

export type RecommendStudyResponse = {
  mostActiveThisWeek: RecommendationItem;
  highJoinRateRecent: RecommendationItem;
  similarDifficulty: RecommendationItem;
};
