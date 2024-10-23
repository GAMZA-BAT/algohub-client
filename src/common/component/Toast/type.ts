export type ToastOption = {
  id: string;
  message: string;
  variant?: "error" | "success" | "default";
  duration?: number;
};
