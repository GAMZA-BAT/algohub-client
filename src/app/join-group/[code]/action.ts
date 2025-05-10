"use server";
import { postJoinGroupByCode } from "@/app/api/groups";
import { HTTPError } from "ky";

type JoinGroupResponse = {
  status: number;
  data?: string;
  error?: string;
};

export const joinGroupAction = async (
  code: string,
): Promise<JoinGroupResponse> => {
  try {
    const response = await postJoinGroupByCode(code);
    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    if (error instanceof HTTPError) {
      return {
        ...(await error.response.json()),
      };
    }
    return {
      status: 500,
    };
  }
};
