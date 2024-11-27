import { getMyInfo } from "@/api/users";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useMyNicknameQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["me"],
    queryFn: () => getMyInfo(),
  });

  return data.nickname;
};
