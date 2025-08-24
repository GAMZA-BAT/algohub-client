"use client";
import {
  useDeleteNotiMutation,
  useReadAllNotiMutation,
  useReadNotiItemMutation,
} from "@/app/api/notifications/mutation";
import type { NotificationItem } from "@/app/api/notifications/type";
import { IcnBellHeader } from "@/asset/svg";
import TabGroup from "@/common/component/Tab";
import Empty from "@/shared/component/Empty";
import {
  countChipStyle,
  countStyle,
  headerStyle,
  notificationContainer,
  titleStyle,
  ulStyle,
} from "@/shared/component/Header/Notification/index.css";
import { iconStyle } from "@/shared/component/Header/index.css";
import { useQueryClient } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { type HTMLAttributes, useState } from "react";
import NotificationListItem from "./NotificationItem";

interface NotificationProps extends HTMLAttributes<HTMLUListElement> {
  notificationList: NotificationItem[];
}

const Notification = ({ notificationList, ...props }: NotificationProps) => {
  const router = useRouter();

  const [notifications, setNotifications] = useState(notificationList);

  const queryClient = useQueryClient();
  const { mutate: readNotiMutate } = useReadNotiItemMutation();
  const { mutate: readAllMutate } = useReadAllNotiMutation();
  const { mutate: deleteMutate } = useDeleteNotiMutation();

  const handleItemClick = (data: NotificationItem) => {
    if (!data.isRead) readNotiMutate(data.id);
    router.push(
      `/group/${data.groupId}${
        data.problemId ? `/problem-list/${data.problemId}` : ""
      }${data.solutionId ? `/solved-detail/${data.solutionId}` : ""}`,
    );
  };

  const handleItemDelete = (notificationId: number) => {
    deleteMutate(notificationId, {
      onSuccess: async () => {
        setNotifications((prev) =>
          prev.filter((item) => item.id !== notificationId),
        );
        await queryClient.invalidateQueries({
          queryKey: ["notifications"],
        });
      },
    });
  };

  return (
    <div className={notificationContainer}>
      <header className={headerStyle}>
        <h2 className={titleStyle}>알림</h2>
        <div className={countChipStyle}>신규 2</div>
      </header>
      {notificationList.length > 0 ? (
        <>
          <TabGroup.Tabs
            variant="tertiary"
            tag="section"
            // className={rankingTabStyle}
          >
            <TabGroup.TabList>
              <TabGroup.Tab tabId="1">전체</TabGroup.Tab>
              <TabGroup.Tab tabId="2">문제</TabGroup.Tab>
              <TabGroup.Tab tabId="3">코멘트</TabGroup.Tab>
              <TabGroup.Tab tabId="4">스터디</TabGroup.Tab>
            </TabGroup.TabList>
            <TabGroup.TabPanels>
              <div style={{ color: "white" }}>1번째 패널</div>
              <div style={{ color: "white" }}>2번째 패널</div>
              <div style={{ color: "white" }}>3번째 패널</div>
              <div style={{ color: "white" }}>4번째 패널</div>
            </TabGroup.TabPanels>
          </TabGroup.Tabs>
          <ul className={ulStyle} {...props} aria-label="알림 목록">
            <AnimatePresence>
              {notifications.map((notification) => (
                <motion.li
                  key={notification.id}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <NotificationListItem
                    isRead={notification.isRead}
                    name={notification.groupName}
                    message={notification.message}
                    date={notification.createdAt}
                    profileImg={notification.groupImage}
                    onClick={() => handleItemClick(notification)}
                    onDelete={() => handleItemDelete(notification.id)}
                  />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </>
      ) : (
        <Empty guideText="지금은 알림이 없어요." />
      )}
    </div>
  );
};

interface TriggerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  count: number;
}

Notification.TriggerButton = ({ count, ...props }: TriggerButtonProps) => {
  return (
    <button {...props}>
      {count > 0 && <div aria-live="polite" className={countStyle} />}
      <IcnBellHeader className={iconStyle} />
    </button>
  );
};

export default Notification;
