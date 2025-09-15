"use client";

import { edgeCaseFavoriteCountStyle, edgeCaseFavoriteWrapper, edgeCaseListWrapper, edgeCaseMetaWrapper, edgeCaseContentWrapper, edgeCaseTitleStyle, edgeCaseTitleWrapper, edgeCaseContentTitleStyle, edgeCaseContentContainer } from "@/app/[user]/edge-case/components/EdgeCaseList/index.css";
import { getTierImage } from "@/shared/util/img";
import { IcnFavoriteBorder, IcnFavoriteFill } from "@/asset/svg";
import { useState } from "react";
import FoldableTextBox from "@/app/[user]/edge-case/components/EdgeCaseList/FoldableTextBox";

const EdgeCaseList = () => {
  const TierIcon = getTierImage(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpenProblem = () => {
    //TODO(@jnary): 문제 링크 연결
  }

  const handleToggleFavorite = () => {
    //TODO(@jnary): 좋아요 토글
    setIsFavorite(prev => !prev);
  }

  return (
    <section className={edgeCaseListWrapper}>
      <div className={edgeCaseMetaWrapper}>
        <button className={edgeCaseTitleWrapper} onClick={handleOpenProblem}>
          <TierIcon width={24} height={24} />
          <h2 className={edgeCaseTitleStyle}>1166번: 선물</h2>
        </button>
        <button className={edgeCaseFavoriteWrapper} onClick={handleToggleFavorite}>
          {isFavorite ? <IcnFavoriteFill width={20} height={20} /> : <IcnFavoriteBorder width={20} height={20} />}
          <span className={edgeCaseFavoriteCountStyle}>10</span>
        </button>
      </div>
      <div className={edgeCaseContentWrapper}>
        <div className={edgeCaseContentContainer}>
          <p className={edgeCaseContentTitleStyle}>입력</p>
          <FoldableTextBox text="1000\n1000" />
        </div>
        <div className={edgeCaseContentContainer}>
          <p className={edgeCaseContentTitleStyle}>출력</p>
          <FoldableTextBox text="1000 1000" />
        </div>
      </div>
    </section>
  );
};

export default EdgeCaseList;
