"use client";

import { useJoinRequestsQueryObject } from "@/app/api/groups/query";
import { IcnBtnArrowLeft, IcnBtnArrowRight } from "@/asset/svg";
import { useSuspenseQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ApprovalCard } from "./ApprovalCard";
import {
  buttonStyle,
  cardListWrapperStyle,
  countStyle,
  joinRequestHeadStyle,
  joinRequestHeaderWrapper,
  joinRequestSectionWrapper,
  joinRequestStyle,
} from "./index.css";

type JoinRequestListProps = {
  groupId: number;
};

const ITEMS_PER_PAGE = 3;
const JoinRequestList = ({ groupId }: JoinRequestListProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDownDirection, setIsDownDirection] = useState(true);
  const { data: joinRequests } = useSuspenseQuery(
    useJoinRequestsQueryObject(groupId),
  );

  const totalPages = useMemo(
    () => Math.ceil(joinRequests.length / ITEMS_PER_PAGE),
    [joinRequests.length],
  );
  if (!totalPages) return null;
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentRequests = joinRequests.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handlePrev = () => {
    setIsDownDirection(false);
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIsDownDirection(true);
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <section
      className={joinRequestSectionWrapper}
      aria-labelledby="join-request-title"
    >
      <div className={joinRequestHeaderWrapper}>
        <div className={joinRequestHeadStyle}>
          <h2 id="join-request-title" className={joinRequestStyle}>
            가입 요청
          </h2>
          <span className={countStyle}>{joinRequests.length}</span>
        </div>
        <div>
          <button
            type="button"
            className={buttonStyle}
            onClick={handlePrev}
            disabled={currentPage === 0}
            aria-label="이전 가입 요청 목록"
          >
            <IcnBtnArrowLeft width={24} height={24} />
          </button>
          <button
            type="button"
            className={buttonStyle}
            onClick={handleNext}
            disabled={currentPage >= totalPages - 1}
            aria-label="다음 가입 요청 목록"
          >
            <IcnBtnArrowRight width={24} height={24} />
          </button>
        </div>
      </div>

      <motion.ul className={cardListWrapperStyle}>
        <AnimatePresence mode="wait">
          {currentRequests.map((request) => (
            <motion.li
              key={request.id}
              initial={{ opacity: 0.6, y: isDownDirection ? 3 : -3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.6, y: isDownDirection ? -3 : 3 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
            >
              <ApprovalCard
                name={request.name}
                avatarUrl={request.avatarUrl}
                groupId={groupId}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
};

export default JoinRequestList;
