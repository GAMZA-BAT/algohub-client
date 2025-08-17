"use client";
import { IcnEnter } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Input from "@/common/component/Input";
import CodeCard from "@/shared/component/CodeCard";
import Like from "@/shared/component/Like";

import {
  agoMinuteStyle,
  commentItemStyle,
  commentListStyle,
  commentNameStyle,
  commentStyle,
  commentWrapper,
  descriptionStyle,
  feedItemContainer,
  infoTextWrapper,
  infoWrapper,
  leaveCommentWrapper,
  nameStyle,
  studyNameStyle,
} from "@/app/[user]/components/FeedItem/index.css";

const FeedItem = () => {
  return (
    <article className={feedItemContainer}>
      <section className={infoWrapper}>
        {/* * TODO: 피드 조회 api 연결 후 이름 넣기 */}
        <Avatar alt={`${"이진"}님의 프로필 사진`} size="small" />
        <div className={infoTextWrapper}>
          <p className={descriptionStyle}>
            <span className={nameStyle}>이진</span>님이{" "}
            <span className={nameStyle}>최주용</span>님의 풀이에 댓글을
            남겼습니다.
          </p>
          <p>
            <span className={studyNameStyle}>알고대학 알고리즘 스터디</span>
            <span className={agoMinuteStyle}>20분 전</span>
          </p>
        </div>
      </section>

      <CodeCard />

      <ul className={commentListStyle}>
        <li className={commentItemStyle}>
          <Avatar size="small" alt="댓글을 단 유저" />
          <div className={commentWrapper}>
            <p className={commentNameStyle}>이진</p>
            <p className={commentStyle}>
              이 접근 방식이 문제를 해결하는 데 충분히 효율적일까요? 추가적인
              최적화 방법이 있을까요? 이 접근 방식이 문제를 해결하는 데 충분히
              효율적일까요? 추가적인 최적화 방법이 있을까요?
            </p>
            <Like />
          </div>
        </li>
      </ul>

      <section className={leaveCommentWrapper}>
        <IcnEnter width={24} height={24} />
        <Avatar size="small" alt="유저" />
        <Input
          placeholder="의견을 남겨주세요."
          aria-label="풀이에 대한 의견을 남기는 input"
        />
      </section>
    </article>
  );
};

export default FeedItem;
