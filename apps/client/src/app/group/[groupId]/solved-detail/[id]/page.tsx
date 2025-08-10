"use client";

import { useSolutionQuery } from "@/app/group/[groupId]/solved-detail/[id]/query";
import Modal from "@/common/component/Modal";
import CodeSection from "@/view/group/solved-detail/CodeSection";
import CommentSection from "@/view/group/solved-detail/CommentSection";
import SolvedDetail from "@/view/group/solved-detail/SolvedDetail";
import {
  modalContainer,
  modalWrapper,
} from "@/view/group/solved-detail/index.css";
import { useRouter } from "next/navigation";

const page = ({ params }: { params: { id: string; groupId: string } }) => {
  const router = useRouter();

  const { data: solutionInfo } = useSolutionQuery(+params.id);

  const handleCloseClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(`/group/${params.groupId}/my-solved`);
    }
  };

  return (
    <Modal isOpen={true} onClose={handleCloseClick} hasCloseBtn>
      <div className={modalWrapper}>
        <header>
          <SolvedDetail info={solutionInfo} />
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
