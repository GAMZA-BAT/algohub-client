import { getSolution } from "@/api/solution";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useSolutionQuery = (solutionId: number) => {
  return useSuspenseQuery({
    queryKey: ["solution", solutionId],
    queryFn: () => getSolution(solutionId),
  });
};
