import UserPageLeftSidebar from "@/app/[user]/components/LeftSidebar";
import RecommendStudySection from "@/app/[user]/components/RecommendSection";
import {
  leftSidebarStyle,
  userHomeWrapper,
} from "@/app/[user]/components/index.css";
import Sidebar from "@/common/component/Sidebar";
import { sidebarWrapper } from "@/styles/shared.css";

const MyPage = () => {
  return (
    <main className={sidebarWrapper}>
      <Sidebar className={leftSidebarStyle}>
        <UserPageLeftSidebar />
      </Sidebar>
      <div className={userHomeWrapper}>
        <RecommendStudySection />
      </div>
      <Sidebar>
        <div>임시로 만드는 우측 패널</div>
      </Sidebar>
    </main>
  );
};

export default MyPage;
