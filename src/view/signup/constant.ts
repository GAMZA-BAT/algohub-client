import EmailVerification from "./EmailVerification";
import PasswordSetup from "./PasswordSetup";
import ProfileCreation from "./ProfileCreation";

export const SIGNUP_STEPS = {
  EMAIL_VERIFICATION: 0,
  PASSWORD_SETUP: 1,
  PROFILE_CREATION: 2,
} as const;

export const STEP_COMPONENTS = {
  [SIGNUP_STEPS.EMAIL_VERIFICATION]: EmailVerification,
  [SIGNUP_STEPS.PASSWORD_SETUP]: PasswordSetup,
  [SIGNUP_STEPS.PROFILE_CREATION]: ProfileCreation,
} as const;
