import { getSolutionList } from "@/app/api/solutions";
import type { SolutionLanguage } from "@/app/api/solutions/type";
import { useDebounce } from "@/common/hook/useDebounce";
import type { SolvedFilterType } from "@/shared/type/solvedFilter";
import { useQuery } from "@tanstack/react-query";

type useSolutionListQueryProps = {
  problemId: number;
  groupId: string;
  option: SolvedFilterType;
  nicknameFilter: string;
};

export const useSolutionListQuery = ({
  problemId,
  groupId,
  option,
  nicknameFilter,
}: useSolutionListQueryProps) => {
  const debouncedNicknameFilter = useDebounce(nicknameFilter, 200);

  return useQuery({
    queryKey: ["solution", problemId, groupId, option, debouncedNicknameFilter],
    queryFn: () =>
      getSolutionList({
        problemId,
        language:
          option.language === "모든 언어"
            ? undefined
            : (option.language as SolutionLanguage),
        result: option.result === "모든 결과" ? undefined : option.result,
        nickname: debouncedNicknameFilter,
      }),
  });
};
