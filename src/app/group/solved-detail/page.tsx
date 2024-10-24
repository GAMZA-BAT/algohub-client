"use client";

import Modal from "@/common/component/Modal";
import ProblemList from "@/shared/component/ProblemList";
import CodeSection from "@/view/group/solved-detail/CodeSection";
import CommentSection from "@/view/group/solved-detail/CommentSection";
import {
  modalContainer,
  modalWrapper,
  solvedListStyle,
} from "@/view/group/solved-detail/index.css";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <Modal isOpen={true} onClose={() => router.back()} hasCloseBtn>
      <div className={modalWrapper}>
        <header>
          <ProblemList.Item
            problemId={1}
            title="트리에서의 동적 계획법"
            startDate="2024-01-01"
            endDate="2024-01-02"
            level="bronze 1"
            solved={true}
            memberCount={200}
            className={solvedListStyle}
          />
        </header>
        <div className={modalContainer}>
          <CodeSection />
          <CommentSection />
        </div>
      </div>
    </Modal>
  );
};

export default page;
