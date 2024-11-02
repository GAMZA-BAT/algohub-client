import { IcnLogo } from "@/asset/svg";
import UserMenu from "@/shared/component/Header/UserMenu";
import {
  headerStyle,
  logoContainer,
  logoStyle,
} from "@/shared/component/Header/index.css";
import LoginMenu from "@/view/login/LoginMenu/LoginMenu";
import type { Session } from "next-auth";
import Link from "next/link";

type HeaderProps = {
  session: Session | null;
};

const Header = ({ session }: HeaderProps) => {
  const isLoggedIn = !!session;

  return (
    <header className={headerStyle}>
      <Link href={"/user"} className={logoContainer} aria-label="User page">
        <IcnLogo className={logoStyle} aria-label="algoHub 로고" />
      </Link>
      {isLoggedIn ? <UserMenu /> : <LoginMenu />}
    </header>
  );
};

export default Header;
