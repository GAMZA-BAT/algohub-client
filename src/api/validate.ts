import { checkBojNickname, checkNickname } from "@/api/users";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { HTTPError } from "ky";

export const validateNickname = async (nickname: string) => {
  try {
    const response = await checkNickname(nickname);

    return response;
  } catch (err) {
    if (err instanceof HTTPError) {
      const { response } = err;

      if (response.status === HTTP_ERROR_STATUS.CONFLICT) {
        return null;
      }
    }
  }
};

export const validateBojNickname = async (nickname: string) => {
  try {
    const response = await checkBojNickname(nickname);

    return response;
  } catch (err) {
    if (err instanceof HTTPError) {
      const { response } = err;

      if (response.status === HTTP_ERROR_STATUS.NOT_FOUND) {
        return null;
      }
    }
  }
};
