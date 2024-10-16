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

export interface GroupRankingResponse {
  userNickname: string;
  profileImage: string;
  rank: number;
  solvedCount: number;
}
