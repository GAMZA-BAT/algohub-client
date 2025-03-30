import { IS_PROD } from "@/app/config";

export const AppUrl = IS_PROD
  ? "https://algohub.kr"
  : "https://rc.algohub.kr";
