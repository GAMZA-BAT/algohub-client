import { getMe } from "@/api/users";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useMyNicknameQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });

  return data.nickname;
};
