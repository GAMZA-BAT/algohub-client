import type { Role } from "@/api/groups/type";

export const ROLE: Record<Role, string> = {
  OWNER: "스터디장",
  ADMIN: "부 스터디장",
  PARTICIPANT: "스터디원",
};
