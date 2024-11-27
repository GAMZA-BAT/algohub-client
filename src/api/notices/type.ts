import type { PaginationResponse } from "@/api/type";

export type NoticeContent = {
  author: string;
  authorImage: string;
  noticeId: number;
  content: string;
  title: string;
  category: string;
  createAt: string;
  isRead: boolean;
};

export type NoticeResponse = PaginationResponse & {
  content: NoticeContent[];
};

export type NoticeRequest = {
  title: string;
  content: string;
  category: string;
};

export type NoticeListRequest = {
  groupId: number;
  page?: number;
  size?: number;
};
