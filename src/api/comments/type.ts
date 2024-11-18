export type CommentContent = {
  commentId: number;
  writerNickname: string;
  writerProfileImage: string;
  content: string;
  createAt: string;
};

export type CommentResponse = CommentContent[];

export type EditCommentRequest = {
  content: string;
};

export type CommentRequest = {
  content: string;
};
