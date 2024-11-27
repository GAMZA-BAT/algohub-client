"use client";

import type { ProblemContent } from "@/api/problems/type";
import {
  useDeleteProblemMutation,
  usePatchProblemMutation,
  useProblemInfoQuery,
} from "@/app/group/[groupId]/problem-list/query";
import Modal from "@/common/component/Modal";
import { useBooleanState } from "@/common/hook/useBooleanState";
import Pagination from "@/shared/component/Pagination";
import ProblemList from "@/shared/component/ProblemList";
import ProblemListHeader from "@/view/group/dashboard/ProblemListHeader";
import PatchForm from "@/view/group/problem-list/RegisterForm/PatchForm";
import { useState } from "react";

type ProgressListProps = {
  data: ProblemContent[];
  isOwner: boolean;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const ProgressList = ({
  data,
  isOwner,
  totalPages,
  currentPage,
  onPageChange,
}: ProgressListProps) => {
  const { open, isOpen, close } = useBooleanState();
  const [editId, setEditId] = useState(data[0].problemId);

  const { mutate: deleteMutate } = useDeleteProblemMutation();
  const { data: problemInfo } = useProblemInfoQuery(editId);
  const { mutate: patchMutate } = usePatchProblemMutation(editId);

  const handleItemEditClick = (problemId: number) => {
    open();
    setEditId(problemId);
  };

  const handleDelete = () => {
    deleteMutate(editId, {
      onSuccess: () => {
        setTimeout(close, 1700);
      },
    });
  };

  const handleEditSubmit = (
    startDate: Date,
    endDate: Date,
    onSuccess: () => void,
  ) => {
    patchMutate(
      { startDate, endDate },
      {
        onSuccess: () => {
          setTimeout(close, 1700);
        },
      },
    );
    onSuccess();
    setTimeout(() => {
      close();
    }, 1700);
  };

  return (
    <>
      <ProblemListHeader />
      <ProblemList>
        {data.map((item) => (
          <ProblemList.Item
            key={item.problemId}
            {...item}
            onEdit={() => handleItemEditClick(item.problemId)}
            isOwner={isOwner}
          />
        ))}
      </ProblemList>
      <Pagination
        style={{ marginTop: "1.6rem" }}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <Modal isOpen={isOpen} onClose={close} hasCloseBtn>
        <PatchForm
          onDelete={handleDelete}
          onSubmit={handleEditSubmit}
          problemInfo={problemInfo}
        />
      </Modal>
    </>
  );
};

export default ProgressList;
