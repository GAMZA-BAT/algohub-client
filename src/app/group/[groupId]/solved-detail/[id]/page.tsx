"use client";

import { useSolutionQuery } from "@/app/group/[groupId]/solved-detail/[id]/query";
import Modal from "@/common/component/Modal";
import CodeSection from "@/view/group/solved-detail/CodeSection";
import CommentSection from "@/view/group/solved-detail/CommentSection";
import ProblemDetail from "@/view/group/solved-detail/ProblemDetail";
import {
  modalContainer,
  modalWrapper,
  solvedListStyle,
} from "@/view/group/solved-detail/index.css";
import { useRouter } from "next/navigation";

const page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const { data: solutionInfo } = useSolutionQuery(+params.id);

  return (
    <Modal isOpen={true} onClose={() => router.back()} hasCloseBtn>
      <div className={modalWrapper}>
        <header>
          <ProblemDetail
            solutionId={solutionInfo.solutionId}
            problemTitle={solutionInfo.problemTitle}
            solvedDateTime={solutionInfo.solvedDateTime}
            problemLevel={solutionInfo.problemLevel}
            result={solutionInfo.result}
            submitMemberCount={solutionInfo.submitMemberCount}
            totalMemberCount={solutionInfo.totalMemberCount}
            accuracy={solutionInfo.accuracy}
            className={solvedListStyle}
          />
        </header>
        <div className={modalContainer}>
          <CodeSection
            code={solutionInfo.content}
            language={solutionInfo.language}
          />
          <CommentSection solutionId={params.id} />
        </div>
      </div>
    </Modal>
  );
};

export default page;
