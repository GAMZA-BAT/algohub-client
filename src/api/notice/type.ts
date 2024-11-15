export interface NoticeResponse {
  author: string;
  noticeId: number;
  content: string;
  title: string;
  category: string;
  createAt: string;
  isRead: boolean;
}

export interface NoticeRequest {
  studyGroupId: number;
  title: string;
  content: string;
}

export type NoticeListResponse = NoticeResponse[];
