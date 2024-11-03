import { kyInstance } from "@/api";

export const deleteSignOut = async (accessToken: string) => {
  const response = await kyInstance
    .delete("api/user/logout", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .json();

  return response;
};
