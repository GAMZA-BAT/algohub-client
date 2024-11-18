import type { CommentContent } from "@/api/comments/type";
import type { NoticeResponse } from "@/api/notices/type";
import { IcnClose, IcnEdit, IcnNew } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Textarea from "@/common/component/Textarea";
import CommentBox from "@/shared/component/CommentBox";
import CommentInput from "@/shared/component/CommentInput";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import { getNoticeBannerCreateAt } from "@/shared/util/time";
import { useRef, useState } from "react";
import {
  articleStyle,
  avatarStyle,
  contentStyle,
  contentWrapper,
  headerStyle,
  iconContainerStyle,
  iconStyle,
  inputStyle,
  itemStyle,
  listStyle,
  noticeInfoStyle,
  textStyle,
  textareaStyle,
  textareaWrapper,
} from "./index.css";

type NoticeDetailProps = {
  data: NoticeResponse;
  goBack: () => void;
};

const NoticeDetail = ({
  data: {
    author,
    noticeTitle,
    createAt,
    noticeCategory,
    noticeId,
    noticeContent,
  },
  goBack,
}: NoticeDetailProps) => {
  const { isActive, handleMouseOver, handleMouseOut, handleFocus, handleBlur } =
    useA11yHoverHandler();
  const [isEdit, setIsEdit] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleEditClick = () => {
    setIsEdit(!isEdit);
    // disabled 일땐 자동으로 focus 적용 안함
    setTimeout(() => textareaRef.current?.focus());
  };
  const handleDeleteClick = () => {
    // TODO: 삭제 api 추가
    // TODO: 삭제 안내 창 띄우기
    goBack();
  };

  /** TODO: 실제 Comment API로 연결 */
  const tmpData: CommentContent = {
    commentId: 1,
    writerNickname: "고독한 예린",
    writerProfileImage: "",
    createAt: "2024-10-24",
    content:
      "이 접근 방식이 문제를 해결하는 데 충분히 효율적일까요? 추가적인 최적화 방법이 있을까요?",
  };

  return (
    <article
      className={articleStyle}
      aria-labelledby={`notice-title-${noticeId}`}
    >
      {/* 상세보기 헤더 */}
      <header className={headerStyle}>
        <div className={contentWrapper}>
          <Avatar className={avatarStyle} alt="작성자 프로필 사진" />
          <div className={contentStyle}>
            <h3 id={`notice-title-${noticeId}`} className={textStyle.category}>
              {noticeCategory}
            </h3>
            <p className={textStyle.title}>{noticeTitle}</p>
          </div>
        </div>

        <div className={noticeInfoStyle}>
          <p className={textStyle.author}>{author}</p>
          <time dateTime={createAt} className={textStyle.time}>
            {getNoticeBannerCreateAt(createAt)}
          </time>
          {<IcnNew width={13} height={13} style={{ minWidth: 13 }} />}
        </div>
      </header>

      {/* 상세보기 내용 */}
      <div
        className={textareaWrapper}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <Textarea
          ref={textareaRef}
          defaultValue={noticeContent}
          disabled={!isEdit}
          className={textareaStyle}
        />
        <div className={iconContainerStyle}>
          <button
            aria-label="공지 수정하기"
            onClick={handleEditClick}
            className={iconStyle({ isEdit, isActive })}
          >
            <IcnEdit width={18} height={18} />
          </button>
          <button
            aria-label="공지 삭제하기"
            onClick={handleDeleteClick}
            className={iconStyle({ isActive })}
          >
            <IcnClose width={16} height={16} />
          </button>
        </div>
      </div>

      {/* 댓글란 */}
      <ul className={listStyle}>
        {[tmpData, tmpData, tmpData, tmpData].map((item, idx) => (
          <CommentBox
            key={item.commentId}
            className={idx !== 2 ? itemStyle : ""}
            variant="notice"
            commentId={item.commentId}
            createdAt={item.createAt}
            content={item.content}
            writerNickname={item.writerNickname}
            writerProfileImage={item.writerProfileImage}
          />
        ))}
      </ul>

      {/* 댓글 입력란 */}
      <div className={inputStyle}>
        <CommentInput />
      </div>
    </article>
  );
};

export default NoticeDetail;
