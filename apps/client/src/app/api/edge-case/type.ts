export type EdgeCaseRequest = {
  link: string;
  input: string;
  output: string;
};

export type EdgeCaseResponse = {
  edgeCaseId: number;
  level: number;
  problemNumber: number;
  title: string;
  input: string;
  output: string;
  like: number;
  isLiked: boolean;
};
