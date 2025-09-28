"use client";

import {
  edgeCaseFavoriteCountStyle,
  edgeCaseFavoriteWrapper,
  edgeCaseListWrapper,
  edgeCaseMetaWrapper,
  edgeCaseContentWrapper,
  edgeCaseTitleStyle,
  edgeCaseTitleWrapper,
  edgeCaseContentTitleStyle,
  edgeCaseContentContainer,
} from "@/app/[user]/edge-case/components/EdgeCaseList/index.css";
import { getTierImage } from "@/shared/util/img";
import { IcnFavoriteBorder, IcnFavoriteFill } from "@/asset/svg";
import { useState } from "react";
import FoldableTextBox from "@/app/[user]/edge-case/components/EdgeCaseList/FoldableTextBox";
import Link from "next/link";
import { EdgeCaseResponse } from "@/app/api/edge-case/type";

type EdgeCaseListProps = EdgeCaseResponse;

const EdgeCaseList = ({
  level,
  problemNumber,
  input,
  output,
  title,
  like,
}: EdgeCaseListProps) => {
  const TierIcon = getTierImage(level);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    //TODO(@jnary): 좋아요 토글
    setIsFavorite((prev) => !prev);
  };

  return (
    <section className={edgeCaseListWrapper}>
      <div className={edgeCaseMetaWrapper}>
        <Link
          className={edgeCaseTitleWrapper}
          href={`https://www.acmicpc.net/problem/${problemNumber}`}
          target="_blank"
        >
          <TierIcon width={24} height={24} />
          <h2 className={edgeCaseTitleStyle}>{`${problemNumber}번: ${title}`}</h2>
        </Link>
        <button
          className={edgeCaseFavoriteWrapper}
          onClick={handleToggleFavorite}
          aria-label="좋아요 토글"
          aria-pressed={isFavorite}
          aria-controls="edge-case-favorite-count"
        >
          {isFavorite ? (
            <IcnFavoriteFill width={20} height={20} aria-label="좋아요 취소" />
          ) : (
            <IcnFavoriteBorder width={20} height={20} aria-label="좋아요" />
          )}
          <span
            id="edge-case-favorite-count"
            className={edgeCaseFavoriteCountStyle}
          >
            {like}
          </span>
        </button>
      </div>
      <div className={edgeCaseContentWrapper}>
        <div className={edgeCaseContentContainer}>
          <h3 className={edgeCaseContentTitleStyle}>입력</h3>
          <FoldableTextBox text={input} />
        </div>
        <div className={edgeCaseContentContainer}>
          <h3 className={edgeCaseContentTitleStyle}>출력</h3>
          <FoldableTextBox text={output} />
        </div>
      </div>
    </section>
  );
};

export default EdgeCaseList;
