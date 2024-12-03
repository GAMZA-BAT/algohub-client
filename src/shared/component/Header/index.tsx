import { getNotificationList } from "@/api/notifications";
import { getMyInfo } from "@/api/users";
import Logo from "@/shared/component/Header/Logo";
import UserMenu from "@/shared/component/Header/UserMenu";
import { headerStyle } from "@/shared/component/Header/index.css";
import LoginMenu from "@/view/login/LoginMenu/LoginMenu";
import type { Session } from "next-auth";

type HeaderProps = {
  session: Session | null;
};

const Header = ({ session }: HeaderProps) => {
  const isLoggedIn = !!session;

  const userNickname = await getMyInfo();

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notifications"],
    queryFn: getNotificationList,
  });

  return (
    <header className={headerStyle}>
      <Logo user={userNickname} />
      <HydrationBoundary state={dehydrate(queryClient)}>
        {isLoggedIn ? <UserMenu /> : <LoginMenu />}
      </HydrationBoundary>
    </header>
  );
};

export default Header;
