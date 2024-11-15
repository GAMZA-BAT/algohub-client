"use server";
import { postJoinGroupByCode } from "@/api/groups";

export const joinGroupAction = async (code: string) => {
  try {
    const response = await postJoinGroupByCode(code);
    return response;
  } catch {
    throw new Error("");
  }
};
