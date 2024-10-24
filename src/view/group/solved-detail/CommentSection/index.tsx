import CommentBox from "@/shared/component/CommentBox";
import CommentInput from "@/shared/component/CommentInput";
import type { Comment } from "@/shared/type";
import { useEffect, useRef } from "react";
import { commentInputStyle, sectionWrapper, ulStyle } from "./index.css";

const CommentSection = () => {
  const commentRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (commentRef.current) {
      commentRef.current.scrollTop = commentRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className={sectionWrapper}>
      <ul className={ulStyle} ref={commentRef}>
        {[...data, ...data, ...data]
          .sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt))
          .map(({ writerProfileImage, ...item }, idx) => (
            <CommentBox key={idx} {...item} variant={item.variant} />
          ))}
      </ul>
      <div className={commentInputStyle}>
        <CommentInput />
      </div>
    </div>
  );
};

const data: (Comment & { variant: "detail" })[] = [
  {
    variant: "detail",
    commentId: 1,
    writerNickname: "최주용",
    writerProfileImage:
      "https://velog.velcdn.com/images/wuzoo/post/0ccaf96f-ea68-46bb-8603-2dece6320b57/image.jpeg",
    createdAt: "2024-10-14T14:45:52.731Z",
    content: "알고헙 코멘트 박스를 만들고 있습니다.",
  },
  {
    variant: "detail",
    commentId: 2,
    writerNickname: "이진",
    writerProfileImage:
      "https://velog.velcdn.com/images/wuzoo/post/0ccaf96f-ea68-46bb-8603-2dece6320b57/image.jpeg",
    createdAt: "2024-08-14T14:45:52.731Z",
    content:
      "이 접근 방식이 문제를 해결하는 데 충분히 효율적일까요? 추가적인 최적화 방법이 있을까요? 이 접근 방식이 문제를 해결하는 데 충분히 효율적일까요? 추가적인 최적화 방법이 있을까요?",
  },
  {
    variant: "detail",
    commentId: 3,
    writerNickname: "곽규한",
    writerProfileImage:
      "https://velog.velcdn.com/images/wuzoo/post/0ccaf96f-ea68-46bb-8603-2dece6320b57/image.jpeg",
    createdAt: "2022-10-14T14:45:52.731Z",
    content: "알고헙 코멘트 박스를 만들고 있습니다.",
  },
];

export default CommentSection;
