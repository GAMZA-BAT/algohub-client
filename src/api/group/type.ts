// TODO: API Response 타입으로 바꾸기
export interface GroupJoinResponse {
  src: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  owner: string;
}

export interface GroupInfoResponse {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  introduction: string;
  groupImage: string;
  isOwner: boolean;
  ownerNickname: string;
}

export type StudyGroupResponse = {
  id: number;
  name: string;
  groupImage: string;
  startDate: string;
  endDate: string;
  introduction: string;
  ownerNickname: string;
  isOwner: boolean;
  isBookmarked: boolean;
};

export type StudyGroupListsResponse = {
  bookmarked: StudyGroupResponse[];
  done: StudyGroupResponse[];
  inProgress: StudyGroupResponse[];
  queued: StudyGroupResponse[];
};
