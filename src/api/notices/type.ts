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
  title: string;
  content: string;
  category: string;
}
