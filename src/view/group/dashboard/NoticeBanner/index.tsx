"use client";

import { IcnNew, IcnNotifications } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import { useBooleanState } from "@/common/hook/useBooleanState";
import { getNoticeBannerCreateAt } from "@/shared/util/time";
import { overlayStyle, textStyle } from "@/view/group/dashboard/index.css";
import NoticeModal from "../NoticeModal";
import { tmpData } from "./constant";
import {
  avatarStyle,
  bannerWrapper,
  contentWrapper,
  headerWrapper,
  notifyWrapper,
} from "./index.css";

const NoticeBanner = () => {
  const { isOpen, open, close } = useBooleanState();

  // TODO: API 연결 데이터로 변경하기
  // 공지 리스트 중 가장 최근의 공지를 찾는 reduce
  const { createAt, noticeCategory, noticeTitle } = tmpData.reduce(
    (mostRecent, currentNotice) => {
      const mostRecentDate = new Date(mostRecent.createAt);
      const currentNoticeDate = new Date(currentNotice.createAt);

      return currentNoticeDate > mostRecentDate ? currentNotice : mostRecent;
    },
  );
  return (
    <>
      <section
        role="status"
        aria-live="polite"
        className={bannerWrapper}
        aria-label="공지사항"
      >
        <button
          className={overlayStyle}
          aria-label="공지 모달 열기"
          onClick={open}
        />
        <header className={headerWrapper}>
          <div className={notifyWrapper}>
            <IcnNotifications width={24} height={24} focusable="false" />
            <p className={textStyle.notification}>공지</p>
          </div>
          <Avatar className={avatarStyle} alt="방장 프로필 사진" />
          <h2 className={textStyle.category}>{noticeCategory}</h2>
        </header>

        <div className={contentWrapper}>
          <p className={textStyle.bannerTitle}>{noticeTitle}</p>
          <time className={textStyle.time} dateTime={createAt}>
            {getNoticeBannerCreateAt(createAt)}
          </time>
          {<IcnNew width={13} height={13} style={{ minWidth: 13 }} />}
        </div>
      </section>
      <NoticeModal isOpen={isOpen} onClose={close} />
    </>
  );
};

export default NoticeBanner;
