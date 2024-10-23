import { IcnUser3 } from "@/asset/svg";
import { chipWrapper } from "@/view/group/dashboard/GroupSidebar/GroupCard/index.css";

type RoleChipProps = {
  isOwner?: boolean;
};
const RoleChip = ({ isOwner }: RoleChipProps) => {
  return (
    <div className={chipWrapper}>
      <IcnUser3 width={9} height={13} />
      {isOwner ? "스터디장" : "스터디원"}
    </div>
  );
};

export default RoleChip;
