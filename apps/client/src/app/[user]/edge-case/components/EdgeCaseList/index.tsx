"use client";

import FoldableTextBox from "@/app/[user]/edge-case/components/EdgeCaseList/FoldableTextBox";
import {
  edgeCaseContentContainer,
  edgeCaseContentTitleStyle,
  edgeCaseContentWrapper,
  edgeCaseFavoriteCountStyle,
  edgeCaseFavoriteWrapper,
  edgeCaseListWrapper,
  edgeCaseMetaWrapper,
  edgeCaseTitleStyle,
  edgeCaseTitleWrapper,
} from "@/app/[user]/edge-case/components/EdgeCaseList/index.css";
import type { EdgeCaseResponse } from "@/app/api/edge-case/type";
import { IcnFavoriteBorder, IcnFavoriteFill } from "@/asset/svg";
import { getTierImage } from "@/shared/util/img";
import Link from "next/link";
import { useState } from "react";

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
          <h2
            className={edgeCaseTitleStyle}
          >{`${problemNumber}번: ${title}`}</h2>
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
