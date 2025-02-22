import {
  getCheckPasswordToken,
  postEmailForResetPassword,
} from "@/app/api/auth";

export const sendEmailForResetPWAction = async (email: string) => {
  try {
    const response = await postEmailForResetPassword(email);

    return response;
  } catch (err) {
    return err;
  }
};

export const checkPasswordTokenAction = async (token: string) => {
  const response = await getCheckPasswordToken(token);

  return response;
};
