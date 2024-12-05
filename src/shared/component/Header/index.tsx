import { getNotificationList } from "@/api/notifications";
import { getMyInfo } from "@/api/users";
import Logo from "@/shared/component/Header/Logo";
import UserMenu from "@/shared/component/Header/UserMenu";
import { headerStyle } from "@/shared/component/Header/index.css";
import LoginMenu from "@/view/login/LoginMenu/LoginMenu";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const Header = async () => {
  /* TODO: 로그인 api 부착 후 Atom으로 교체 */
  // const { isLoggedIn } = useAtomValue(authAtom);
  const isLoggedIn = true;
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
