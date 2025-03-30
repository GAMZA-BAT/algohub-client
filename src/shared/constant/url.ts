import { IS_PROD } from "@/app/config";

export const APP_URL = IS_PROD
  ? "https://algohub.kr"
  : "https://rc.algohub.kr";
