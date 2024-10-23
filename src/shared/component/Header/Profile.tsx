import IcnNew from "@/asset/svg/icn_new.svg?url";
import Dropdown, { type DropdownProps } from "@/common/component/Dropdown";
import { dropdownStyle } from "@/shared/component/Header/Profile.css";
import { iconStyle } from "@/shared/component/Header/index.css";
import Image from "next/image";

const Profile = ({ ...props }: DropdownProps) => (
  <Dropdown {...props} className={dropdownStyle}>
    <li>내 프로필</li>
    <li>로그아웃</li>
  </Dropdown>
);

type TriggerButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

Profile.TriggerButton = ({ ...props }: TriggerButtonProps) => (
  <button {...props}>
    <Image className={iconStyle} src={IcnNew} alt="user profile" priority />
  </button>
);

export default Profile;
