import { IcnUser2 } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import { iconStyle } from "@/view/group/index/MemberAvatar/index.css";

interface MemberAvatarProps {
  isLeader?: boolean;
  src: string;
}
const MemberAvatar = ({ isLeader = false, src }: MemberAvatarProps) => {
  return (
    <Avatar src={src} size="small" hasShadow alt="멤버 프로필">
      {isLeader && <IcnUser2 className={iconStyle} width={9} height={13} />}
    </Avatar>
  );
};

export default MemberAvatar;
