import type { Role } from "@/app/api/groups/type";
import { IcnUser3 } from "@/asset/svg";
import { ROLE } from "@/shared/constant/role";
import { chipWrapper } from "@/view/group/dashboard/GroupSidebar/GroupCard/index.css";

type RoleChipProps = {
  role: Role;
};
const RoleChip = ({ role }: RoleChipProps) => {
  return (
    <div className={chipWrapper}>
      <IcnUser3 width={9} height={13} />
      {ROLE[role]}
    </div>
  );
};

export default RoleChip;
