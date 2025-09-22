"use client";

import { useNoticeByIdQueryObject } from "@/app/api/notices/query";
import NoticeDetail from "@/app/group/[groupId]/components/NoticeModal/NoticeDetail";
import {
  noticeHeaderStyle,
  noticeModalWrapper,
} from "@/app/group/[groupId]/components/NoticeModal/index.css";
import { textStyle } from "@/app/group/[groupId]/components/index.css";
import Spinner from "@/common/component/Spinner";
import { usePvEvent } from "@/shared/hook/usePvEvent";
import { alignCenterStyle } from "@/styles/shared.css";
import { useQuery } from "@tanstack/react-query";

const NoticeDetailPage = ({
  params: { noticeId, groupId },
}: { params: { groupId: string; noticeId: string } }) => {
  usePvEvent("group_notice_detail_page_view", {
    group_id: groupId,
    notice_id: noticeId,
  });
  const { data: selectedNotice, isLoading } = useQuery(
    useNoticeByIdQueryObject(+noticeId),
  );
  if (isLoading) return <Spinner className={alignCenterStyle} />;

  return (
    <div className={noticeModalWrapper}>
      <header className={noticeHeaderStyle}>
        <h2 className={textStyle.head}>NOTICE</h2>
      </header>
      <NoticeDetail data={selectedNotice!} />
    </div>
  );
};

export default NoticeDetailPage;
