import type { NoticeResponse } from "@/api/notice/type";
import { IcnClose, IcnEdit, IcnNew } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Textarea from "@/common/component/Textarea";
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
      <ul>
        <></>
      </ul>

      {/* 댓글 입력란 */}
      <div className={inputStyle}>
        <CommentInput />
      </div>
    </article>
  );
};

export default NoticeDetail;
