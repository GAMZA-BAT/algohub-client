"use client";

import { getNotificationList } from "@/api/notifications";
import { useMyNicknameQuery } from "@/app/[user]/query";
import { IcnLogo } from "@/asset/svg";
import UserMenu from "@/shared/component/Header/UserMenu";
import {
  headerStyle,
  logoContainer,
  logoStyle,
} from "@/shared/component/Header/index.css";
import LoginMenu from "@/view/login/LoginMenu/LoginMenu";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Link from "next/link";

const Header = async () => {
  /* TODO: 로그인 api 부착 후 Atom으로 교체 */
  // const { isLoggedIn } = useAtomValue(authAtom);
  const isLoggedIn = true;
  const userNickname = useMyNicknameQuery();

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notifications"],
    queryFn: getNotificationList,
  });

  return (
    <header className={headerStyle}>
      <Link
        href={`/${userNickname}`}
        className={logoContainer}
        aria-label="User page"
      >
        <IcnLogo className={logoStyle} aria-label="algoHub 로고" />
      </Link>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {isLoggedIn ? <UserMenu /> : <LoginMenu />}
      </HydrationBoundary>
    </header>
  );
};

export default Header;
