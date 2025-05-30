import { logoutAction } from "@/app/api/auth/actions";
import Avatar from "@/common/component/Avatar";
import Dropdown, { type DropdownProps } from "@/common/component/Dropdown";
import { handleA11yClick } from "@/common/util/dom";
import {
  dropdownStyle,
  dropdownTextStyle,
} from "@/shared/component/Header/Profile.css";
import { iconStyle } from "@/shared/component/Header/index.css";
import { setAccessToken } from "@/shared/util/token";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Profile = ({ ...props }: DropdownProps) => {
  const session = useSession();
  const nickname = session.data?.user?.nickname;

  const router = useRouter();

  const handleLogout = async () => {
    await logoutAction();
    await session.update(null);
    setAccessToken("");

    router.push("/login");
  };

  return (
    <Dropdown {...props} className={dropdownStyle}>
      <Link href={`/${nickname}/setting`}>
        <li className={dropdownTextStyle}>내 프로필</li>
      </Link>
      <li
        className={dropdownTextStyle}
        onClick={handleLogout}
        onKeyDown={handleA11yClick(handleLogout)}
      >
        로그아웃
      </li>
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
