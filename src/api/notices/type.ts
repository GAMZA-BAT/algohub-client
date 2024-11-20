export interface NoticeResponse {
  author: string;
  noticeCategory: string;
  noticeId: number;
  noticeContent: string;
  noticeTitle: string;
  createAt: string;
}

export interface NoticeRequest {
  studyGroupId: number;
  title: string;
  content: string;
}

export type NoticeListResponse = NoticeResponse[];
