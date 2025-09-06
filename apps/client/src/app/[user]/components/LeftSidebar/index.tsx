import Spinner from "@/common/component/Spinner";
import { alignCenterStyle } from "@/styles/shared.css";
import { Suspense } from "react";
import { countWrapper } from "../CountChip/index.css";
import HydratedStudyList from "./HydratedStudyList";
import { SidebarProvider } from "./SidebarProvider";
import StudyCount from "./StudyCount";
import StudyFilter from "./StudyFilter";
import { sidebarWrapper, titleStyle, titleWrapper } from "./index.css";

const UserPageLeftSidebar = () => {
  return (
    <div className={sidebarWrapper}>
      <div className={titleWrapper}>
        <h2 className={titleStyle}>내가 속한 스터디</h2>
        <Suspense fallback={<div className={countWrapper} />}>
          <StudyCount />
        </Suspense>
      </div>
      <SidebarProvider>
        <StudyFilter />
        <Suspense fallback={<Spinner className={alignCenterStyle} />}>
          <HydratedStudyList />
        </Suspense>
      </SidebarProvider>
    </div>
  );
};

export default UserPageLeftSidebar;
