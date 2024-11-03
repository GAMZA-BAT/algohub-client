import { logoutAction } from "@/api/user/actions";
import IcnNew from "@/asset/svg/icn_new.svg?url";
import Dropdown, { type DropdownProps } from "@/common/component/Dropdown";
import { handleA11yClick } from "@/common/util/dom";
import { dropdownStyle } from "@/shared/component/Header/Profile.css";
import { iconStyle } from "@/shared/component/Header/index.css";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";

const Profile = ({ ...props }: DropdownProps) => {
  const session = useSession();
  const token = session.data?.user?.accessToken;
  const handleLogout = async () => {
    if (!token) return;
    const error = await logoutAction(token);
    if (error) {
      console.warn({ error });
    } else {
      await session.update(await getSession());
    }
  };
  return (
    <Dropdown {...props} className={dropdownStyle}>
      <li>내 프로필</li>
      <li onClick={handleLogout} onKeyDown={handleA11yClick(handleLogout)}>
        로그아웃
      </li>
    </Dropdown>
  );
};

type TriggerButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

Profile.TriggerButton = ({ ...props }: TriggerButtonProps) => (
  <button {...props}>
    <Image className={iconStyle} src={IcnNew} alt="user profile" priority />
  </button>
);

export default Profile;
