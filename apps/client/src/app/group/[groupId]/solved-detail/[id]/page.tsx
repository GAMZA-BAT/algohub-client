"use client";

import { useSolutionQueryObject } from "@/app/api/solutions/query";
import CodeSection from "@/app/group/[groupId]/solved-detail/components/CodeSection";
import CommentSection from "@/app/group/[groupId]/solved-detail/components/CommentSection";
import SolvedDetail from "@/app/group/[groupId]/solved-detail/components/SolvedDetail";
import {
  modalContainer,
  modalWrapper,
} from "@/app/group/[groupId]/solved-detail/components/index.css";
import Modal from "@/common/component/Modal";
import { usePvEvent } from "@/shared/hook/usePvEvent";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";

const page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const routeParams = useParams();
  const groupId = Array.isArray(routeParams.groupId)
    ? routeParams.groupId[0]
    : routeParams.groupId;

  usePvEvent("group_solved_detail_page_view", {
    group_id: groupId ?? "",
    problem_id: params.id,
  });

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
