"use client";
import type { GroupListItem, GroupStatus } from "@/api/group/type";
import Carousel from "@/common/component/Carousel";
import Sidebar from "@/common/component/Sidebar";
import { tmpUserGroupListData } from "@/shared/util/example";
import { sidebarWrapper } from "@/styles/shared.css";
import GroupCard from "@/view/user/index/GroupCard";
import UserCard from "@/view/user/index/UserCard";
import { userCardWrapper } from "@/view/user/index/UserCard/index.css";
import { GROUP_STATUS_MAPPING } from "@/view/user/index/constant";
import {
  groupLabelStyle,
  userDashboardWrapper,
} from "@/view/user/index/index.css";

const UserDashboardPage = () => {
  return (
    <main className={sidebarWrapper}>
      <Sidebar>
        <div className={userCardWrapper}>
          <UserCard />
        </div>
      </Sidebar>
      <div className={userDashboardWrapper}>
        {GROUP_STATUS_MAPPING.map((list) => (
          <section key={list.status}>
            <h2 className={groupLabelStyle}>{list.label}</h2>
            <Carousel
              length={tmpUserGroupListData[list.status as GroupStatus].length}
            >
              {tmpUserGroupListData[list.status as GroupStatus].map(
                (item: GroupListItem, idx: number) => (
                  <Carousel.Item key={item.id} index={idx}>
                    <GroupCard
                      item={item}
                      status={list.status as GroupStatus}
                    />
                  </Carousel.Item>
                ),
              )}
            </Carousel>
          </section>
        ))}
      </div>
    </main>
  );
};

export default UserDashboardPage;
