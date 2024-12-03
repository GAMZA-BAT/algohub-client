import { kyInstance } from "@/api";
import type { UserResponse } from "@/api/user/type";

export const getUser = async (accessToken: string) => {
  const response = await kyInstance
    .get<UserResponse>("api/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .json();

  return response;
};
