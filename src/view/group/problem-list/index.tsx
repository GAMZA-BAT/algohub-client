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
import { titleStyle } from "@/view/group/problem-list/index.css";
import { useState } from "react";

type ProgressListProps = {
  data: ProblemContent[];
  variant?: "inProgress" | "expired";
  isOwner: boolean;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const ProgressList = ({
  data,
  variant = "inProgress",
  isOwner,
  totalPages,
  currentPage,
  onPageChange,
}: ProgressListProps) => {
  const isInProgress = variant === "inProgress";
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
      <div style={{ width: "100%", margin: "1.6rem 0" }}>
        <h2 className={titleStyle}>
          {isInProgress ? "진행중인 문제" : "만료된 문제"}
        </h2>
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

        {data.length && (
          <Pagination
            style={{ marginTop: "1.6rem" }}
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        )}
      </div>
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
