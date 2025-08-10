"use client";

import { useSolutionQueryObject } from "@/app/api/solutions/query";
import Modal from "@/common/component/Modal";
import CodeSection from "@/view/group/solved-detail/CodeSection";
import CommentSection from "@/view/group/solved-detail/CommentSection";
import SolvedDetail from "@/view/group/solved-detail/SolvedDetail";
import {
  modalContainer,
  modalWrapper,
} from "@/view/group/solved-detail/index.css";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const { data: solutionInfo } = useQuery(useSolutionQueryObject(+params.id));

  if (!solutionInfo) return null;

  return (
    <Modal isOpen={true} onClose={() => router.back()} hasCloseBtn>
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
