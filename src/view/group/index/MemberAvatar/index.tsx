"use client";

import { IcnUser2 } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import { handleA11yClick } from "@/common/util/dom";
import {
  iconStyle,
  memberAvatarStyle,
} from "@/view/group/index/MemberAvatar/index.css";
import { useRouter } from "next/navigation";

interface MemberAvatarProps {
  isLeader?: boolean;
  src: string;
  nickname: string;
}
const MemberAvatar = ({
  isLeader = false,
  src,
  nickname,
}: MemberAvatarProps) => {
  const router = useRouter();

  const handleClick = () => router.push(`/${nickname}`);

  return (
    <Avatar
      src={src}
      size="small"
      hasShadow
      alt={`${nickname} 프로필`}
      title={nickname}
      className={memberAvatarStyle}
      onClick={handleClick}
      aria-label={`${nickname} 대시보드로 이동하기`}
      onKeyDown={handleA11yClick(handleClick)}
    >
      {isLeader && <IcnUser2 className={iconStyle} width={9} height={13} />}
    </Avatar>
  );
};

export default MemberAvatar;
