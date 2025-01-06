"use server";
import { patchMyInfo, patchPassword } from "@/app/api/users";
import type { PasswordRequest, UserResponse } from "@/app/api/users/type";

export const patchMyInfoAction = async (
  requestData: Omit<UserResponse, "email">,
) => {
  const data = new FormData();

  data.append(
    "request",
    JSON.stringify({
      profileImage: requestData.profileImage,
      nickname: requestData.nickname,
      bjNickname: requestData.bjNickname,
      description: requestData.description,
    }),
  );

  try {
    await patchMyInfo(data);
  } catch {
    throw new Error("fail to patch my info");
  }
};

export const patchPasswordAction = async ({
  currentPassword,
  newPassword,
}: PasswordRequest) => {
  try {
    await patchPassword({ currentPassword, newPassword });
  } catch {
    throw new Error("fail to patch password");
  }
};
