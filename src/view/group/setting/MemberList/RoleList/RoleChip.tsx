import type { Role } from "@/app/api/groups/type";
import {} from "@/asset/svg";
import { ROLE } from "@/shared/constant/role";
import { chipStyle } from "@/view/group/setting/MemberList/RoleList/index.css";

type RoleChipProps = {
  role: Role;
};

const RoleChip = ({ role }: RoleChipProps) => {
  const labelByRole = {
    OWNER: "스터디장 칩",
    ADMIN: "부 스터디장 칩",
    PARTICIPANT: "스터디원 칩",
  };

  return (
    <div aria-label={labelByRole[role]} className={chipStyle({ role })}>
      {ROLE[role]}
    </div>
  );
};

export default RoleChip;
