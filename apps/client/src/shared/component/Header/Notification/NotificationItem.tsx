import { useDeleteNotiMutation, useReadNotiItemMutation } from "@/app/api/notifications/mutation";
import { notificationQueryKey } from "@/app/api/notifications/query";
import { IcnBtnDeleteCircle } from "@/asset/svg";
import icnNew from "@/asset/svg/icn_new.svg?url";
import type { NotificationType } from "@/shared/component/Header/Notification";
import { dateContainerStyle } from "@/shared/component/Header/Notification/index.css";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import { useQueryClient } from "@tanstack/react-query";
import { differenceInCalendarDays } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  containerStyle,
  dateStyle,
  deleteIconStyle,
  messageStyle,
  nameStyle,
  notificationContentStyle,
  profileImageStyle,
  profileStyle,
} from "./NotificationItem.css";

type NotificationListProps = {
  id: number;
  problemId: number | null;
  solutionId: number | null;
  groupId: number | null;
  groupImage: string;
  groupName: string;
  message: string;
  createdAt: string;
  isRead: boolean;
  notificationType: NotificationType;
};

const NotificationListItem = ({
  id,
  problemId,
  solutionId,
  groupId,
  groupImage,
  groupName,
  message,
  createdAt,
  isRead,
  notificationType,
}: NotificationListProps) => {
  const { isActive, ...handlers } = useA11yHoverHandler();

  const router = useRouter();

  const queryClient = useQueryClient();
  const { mutate: readNotiMutate } = useReadNotiItemMutation();
  const { mutate: deleteMutate } = useDeleteNotiMutation();

  const handleItemClick = () => {
    if (!isRead) readNotiMutate(id);

    router.push(
      `/group/${groupId}${problemId ? `/problem-list/${problemId}` : ""}${
        solutionId ? `/solved-detail/${solutionId}` : ""
      }`
    );
  };

  const handleItemDelete = () => {
    deleteMutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: notificationQueryKey.lists(notificationType),
        });
      },
    });
  };

  return (
    <div className={containerStyle} aria-label={`${groupName}님의 알림: ${message}, ${createdAt}`} {...handlers}>
      <button
        className={notificationContentStyle}
        onClick={handleItemClick}
        aria-label={`${groupName}의 알림으로 이동`}
      >
        <div className={profileStyle}>
          <Image
            src={groupImage || icnNew}
            width={25}
            height={25}
            className={profileImageStyle}
            alt={`${groupName}님의 프로필 이미지`}
          />
          <div>
            <strong className={nameStyle}>{groupName} </strong>
            <span className={messageStyle({ isRead })}>{message}</span>
          </div>
        </div>
        <div className={dateContainerStyle}>
          <time className={dateStyle} aria-label={createdAt}>
            {`${differenceInCalendarDays(new Date(), new Date(createdAt))}일 전`}
          </time>
        </div>
      </button>
      <button
        className={deleteIconStyle({ active: isActive })}
        onClick={handleItemDelete}
        aria-label={`${groupName}의 알림 삭제`}
      >
        <IcnBtnDeleteCircle width={"1.6rem"} height={"1.6rem"} aria-hidden />
      </button>
    </div>
  );
};

export default NotificationListItem;
