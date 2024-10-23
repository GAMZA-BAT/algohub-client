import { IcnLogo } from "@/asset/svg";
import UserMenu from "@/shared/component/Header/UserMenu";
import {
  headerStyle,
  logoContainer,
  logoStyle,
} from "@/shared/component/Header/index.css";
import LoginMenu from "@/view/login/LoginMenu/LoginMenu";
import Link from "next/link";

const Header = () => {
  /* TODO: 로그인 api 부착 후 Atom으로 교체 */
  // const { isLoggedIn } = useAtomValue(authAtom);
  const isLoggedIn = false;

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
