import tmp from "@/asset/img/leejin.png";
import { IcnClose, IcnEdit } from "@/asset/svg";
import {
  containerStyle,
  contentStyle,
  contentWrapperStyle,
  createdAtStyle,
  iconContainerStyle,
  iconStyle,
  profileStyle,
  topContentStyle,
  writerStyle,
} from "@/shared/component/CommentBox/index.css";
import type { Comment } from "@/shared/type/comment";
import { getFormattedCreatedAt } from "@/shared/util/time";
import Image from "next/image";
import { useState } from "react";

type CommentBox = Comment & {
  variant: "detail" | "notice";
  onDelete?: () => void;
  onEdit?: () => void;
};

const CommentBox = ({
  variant,
  commentId,
  writerNickname,
  writerProfileImage,
  content,
  createdAt,
  onDelete,
  onEdit,
}: CommentBox) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      // biome-ignore lint/a11y/useKeyWithMouseEvents:
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      aria-label={`코멘트 ${commentId}`}
      className={containerStyle({ isHover })}
    >
      <Image
        className={profileStyle}
        src={tmp ?? writerProfileImage} // 나중에 서버 이미지로 대체
        alt={`${writerNickname} 프로필 이미지`}
      />
      <div className={contentWrapperStyle({ variant })}>
        <div className={topContentStyle}>
          <p className={writerStyle}>{writerNickname}</p>
          <p className={createdAtStyle}>{getFormattedCreatedAt(createdAt)}</p>
        </div>
        <p className={contentStyle}>{content}</p>
      </div>

      <div className={iconContainerStyle}>
        <div className={iconStyle({ variant: "edit", isHover })}>
          <IcnEdit onClick={onEdit} width={18} height={18} />
        </div>
        <div className={iconStyle({ variant: "close", isHover })}>
          <IcnClose onClick={onDelete} width={16} height={16} />
        </div>
      </div>
    </li>
  );
};

export default CommentBox;
