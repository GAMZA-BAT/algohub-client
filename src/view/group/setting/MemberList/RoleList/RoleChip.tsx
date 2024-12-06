import type { Role } from "@/api/groups/type";
import {} from "@/asset/svg";
import { ROLE } from "@/shared/constant/role";
import { chipStyle } from "@/view/group/setting/MemberList/RoleList/index.css";

type RoleChipProps = {
  role: Role;
};

const RoleChip = ({ role }: RoleChipProps) => {
  switch (role) {
    case "OWNER":
      return (
        <div aria-label="스터디장 칩" className={chipStyle({ role })}>
          {ROLE[role]}
        </div>
      );
    case "ADMIN":
      return (
        <div aria-label="부 스터디장 칩" className={chipStyle({ role })}>
          {ROLE[role]}
        </div>
      );
    case "PARTICIPANT":
      return (
        <div aria-label="스터디원 칩" className={chipStyle({ role })}>
          {ROLE[role]}
        </div>
      );
  }
};

export default RoleChip;
