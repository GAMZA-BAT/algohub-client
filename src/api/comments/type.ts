export type CommentContent = {
  commentId: number;
  writerNickname: string;
  writerProfileImage: string;
  content: string;
  createdAt: string;
};

export type CommentResponse = CommentContent[];

export type EditCommentRequest = {
  content: string;
};

export type CommentRequest = {
  content: string;
};
