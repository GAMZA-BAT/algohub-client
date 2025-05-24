import Logo from "@/shared/component/Header/Logo";
import UserMenu from "@/shared/component/Header/UserMenu";
import { headerStyle } from "@/shared/component/Header/index.css";
import LoginMenu from "@/view/login/LoginMenu";
import {} from "@tanstack/react-query";
import type { Session } from "next-auth";

type HeaderProps = {
  session: Session | null;
};

const Header = async ({ session }: HeaderProps) => {
  const isLoggedIn = !!session;

  return (
    <header className={headerStyle}>
      <Logo userNickname={isLoggedIn ? `${session.user?.nickname}` : ""} />
      {isLoggedIn ? <UserMenu /> : <LoginMenu />}
    </header>
  );
};

export default Header;
