"use client";

import { useNoticesQuery } from "@/app/group/[groupId]/notice/query";
import { IcnNew, IcnNotifications } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { overlayStyle, textStyle } from "@/view/group/dashboard/index.css";
import { useRouter } from "next/navigation";
import {
  bannerWrapper,
  contentWrapper,
  headerWrapper,
  notifyWrapper,
} from "./index.css";

const NoticeBanner = () => {
  const router = useRouter();
  const groupId = useGetGroupId();
  const { content: noticeList } = useNoticesQuery({ groupId: +groupId });

  const recentNotice = noticeList?.length > 0 ? noticeList[0] : null;

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
          onClick={() => router.push(`/group/${groupId}/notice`)}
        />
        <header className={headerWrapper}>
          <div className={notifyWrapper}>
            <IcnNotifications width={24} height={24} focusable="false" />
            <p className={textStyle.notification}>공지</p>
          </div>
          {recentNotice ? (
            <>
              <Avatar size="mini" alt="방장 프로필 사진" />
              <h2 className={textStyle.category}>{recentNotice.category}</h2>
            </>
          ) : (
            <p className={textStyle.time}>공지가 없습니다.</p>
          )}
        </header>
        {recentNotice && (
          <div className={contentWrapper}>
            <p className={textStyle.bannerTitle}>{recentNotice.title}</p>
            <time className={textStyle.time} dateTime={recentNotice.createdAt}>
              {recentNotice.createdAt}
            </time>
            {
              <IcnNew
                width={13}
                height={13}
                style={{ minWidth: 13, opacity: recentNotice.isRead ? 0 : 1 }}
              />
            }
          </div>
        )}
      </section>
    </>
  );
};

export default NoticeBanner;
