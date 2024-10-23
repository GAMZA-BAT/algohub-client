export type CommentContent = {
  commentId: number;
  writerNickname: string;
  writerProfileImage: string;
  content: string;
  createAt: string;
};

export type CommentResponse = CommentContent[];

export type EditCommentRequest = {
  commentId: number;
  content: string;
};

export type CommentRequest = {
  solutionId: number;
  content: string;
};
