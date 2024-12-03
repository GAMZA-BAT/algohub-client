import Avatar from "@/common/component/Avatar";
import Dropdown, { type DropdownProps } from "@/common/component/Dropdown";
import { dropdownStyle } from "@/shared/component/Header/Profile.css";
import { iconStyle } from "@/shared/component/Header/index.css";

const Profile = ({ ...props }: DropdownProps) => (
  <Dropdown {...props} className={dropdownStyle}>
    <li>내 프로필</li>
    <li>로그아웃</li>
  </Dropdown>
);

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
