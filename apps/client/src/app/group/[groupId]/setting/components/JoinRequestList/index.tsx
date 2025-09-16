"use client";

import { IcnBtnArrowLeft, IcnBtnArrowRight } from "@/asset/svg";
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

const MOCK_JOIN_REQUESTS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `요청자 ${i + 1}`,
  avatarUrl: "",
}));

const ITEMS_PER_PAGE = 3;

const JoinRequestList = ({ groupName }: { groupName: string }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDownDirection, setIsDownDirection] = useState(true);

  const totalPages = useMemo(
    () => Math.ceil(MOCK_JOIN_REQUESTS.length / ITEMS_PER_PAGE),
    [MOCK_JOIN_REQUESTS.length],
  );
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentRequests = MOCK_JOIN_REQUESTS.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  if (!totalPages) return null;

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
          <span className={countStyle}>{MOCK_JOIN_REQUESTS.length}</span>
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
                groupName={groupName}
                avatarUrl={request.avatarUrl}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
};

export default JoinRequestList;
