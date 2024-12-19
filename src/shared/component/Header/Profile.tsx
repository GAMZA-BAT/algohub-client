import Avatar from "@/common/component/Avatar";
import Dropdown, { type DropdownProps } from "@/common/component/Dropdown";
import {
  dropdownStyle,
  dropdownTextStyle,
} from "@/shared/component/Header/Profile.css";
import { iconStyle } from "@/shared/component/Header/index.css";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Profile = ({ ...props }: DropdownProps) => {
  const nickname = useSession().data!.user?.nickname;

  return (
    <Dropdown {...props} className={dropdownStyle}>
      <Link href={`/${nickname}`}>
        <li className={dropdownTextStyle}>내 프로필</li>
      </Link>
      <li className={dropdownTextStyle}>로그아웃</li>
    </Dropdown>
  );
};

type TriggerButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  src?: string;
};

Profile.TriggerButton = ({ src = "", ...props }: TriggerButtonProps) => (
  <button {...props}>
    <Avatar
      size="mini"
      className={iconStyle}
      src={src}
      alt="user profile"
      priority
    />
  </button>
);

export default Profile;
