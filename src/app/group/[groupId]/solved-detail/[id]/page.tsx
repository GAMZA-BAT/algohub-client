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

  const { data } = useSolutionQuery(+params.id);

  return (
    <Modal isOpen={true} onClose={() => router.back()} hasCloseBtn>
      <div className={modalWrapper}>
        <header>
          <ProblemDetail
            solutionId={data.solutionId}
            problemTitle={data.problemTitle}
            solvedDateTime={data.solvedDateTime}
            problemLevel={6}
            result={data.result}
            className={solvedListStyle}
          />
        </header>
        <div className={modalContainer}>
          <CodeSection code={data.content} language={data.language} />
          <CommentSection solutionId={params.id} />
        </div>
      </div>
    </Modal>
  );
};

export default page;
