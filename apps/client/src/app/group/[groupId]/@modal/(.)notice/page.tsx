"use client";

import { usePvEvent } from "@/shared/hook/usePvEvent";
import { textStyle } from "../../components/index.css";
import NoticeList from "./components/NoticeModal/NoticeList";
import {
  noticeHeaderStyle,
  noticeModalWrapper,
} from "./components/NoticeModal/index.css";

const InterceptingNoticeListPage = ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  usePvEvent("group_notice_list_page_view", {
    group_id: groupId,
  });

  return (
    <div className={noticeModalWrapper}>
      <header className={noticeHeaderStyle}>
        <h2 className={textStyle.head}>NOTICE</h2>
      </header>
      <NoticeList />
    </div>
  );
};

export default InterceptingNoticeListPage;
