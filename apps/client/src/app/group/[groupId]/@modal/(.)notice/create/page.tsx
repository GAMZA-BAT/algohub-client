"use client";
import {
  noticeHeaderStyle,
  noticeModalWrapper,
} from "@/app/group/[groupId]/@modal/(.)notice/components/NoticeModal/index.css";
import { textStyle } from "@/app/group/[groupId]/components/index.css";
import { usePvEvent } from "@/shared/hook/usePvEvent";

import NoticeCreate from "@/app/group/[groupId]/@modal/(.)notice/components/NoticeModal/NoticeCreate";

const InterceptingNoticeCreatePage = ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  usePvEvent("group_notice_create_page_view", {
    group_id: groupId?.toString() ?? "",
  });

  return (
    <div className={noticeModalWrapper}>
      <header className={noticeHeaderStyle}>
        <h2 className={textStyle.head}>공지 추가하기</h2>
      </header>
      <NoticeCreate groupId={+groupId} />
    </div>
  );
};

export default InterceptingNoticeCreatePage;
