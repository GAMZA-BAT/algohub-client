import { kyJsonWithTokenInstance } from "@/app/api";
import type {
  EdgeCaseRequest,
  EdgeCaseResponse,
} from "@/app/api/edge-case/type";

export const postEdgeCase = async (body: EdgeCaseRequest) => {
  const response = await kyJsonWithTokenInstance.post("api/edge-case", {
    json: body,
  });

  return response;
};

export const getEdgeCaseList = async (problemNumber?: number) => {
  const response = await kyJsonWithTokenInstance
    .get("api/edge-case/list", {
      searchParams: problemNumber ? { problemNumber } : undefined,
    })
    .json<{ edgeCaseList: EdgeCaseResponse[] }>();

  return response.edgeCaseList;
};
