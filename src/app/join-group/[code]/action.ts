"use server";
import { postJoinGroupByCode } from "@/app/api/groups";

export const joinGroupAction = async (code: string) => {
  const response = await postJoinGroupByCode(code);
  return response;
};
