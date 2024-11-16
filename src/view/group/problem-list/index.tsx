"use client";

import { useDeleteProblemMutation } from "@/app/group/[groupId]/problem-list/query";
import Modal from "@/common/component/Modal";
import { useBooleanState } from "@/common/hook/useBooleanState";
import Pagination from "@/shared/component/Pagination";
import ProblemList from "@/shared/component/ProblemList";
import type { Problem } from "@/shared/type";
import ProblemListHeader from "@/view/group/dashboard/ProblemListHeader";
import RegisterForm from "@/view/group/problem-list/RegisterForm";
import { titleStyle } from "@/view/group/problem-list/index.css";
import { useState } from "react";

type ProgressListProps = {
  data: Problem[];
  variant?: "inProgress" | "expired";
};
const ProgressList = ({ data, variant = "inProgress" }: ProgressListProps) => {
  const isInProgress = variant === "inProgress";
  const { open, isOpen, close } = useBooleanState();
  const [editId, setEditId] = useState(0);
  const { mutate: deleteMutate } = useDeleteProblemMutation();

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
              onEdit={handleItemEditClick}
              isOwner={isInProgress}
            />
          ))}
        </ProblemList>

        <Pagination
          style={{ marginTop: "1.6rem" }}
          totalPages={10}
          currentPage={1}
          onPageChange={() => {}}
        />
      </div>
      <Modal isOpen={isOpen} onClose={close}>
        <RegisterForm
          variant="secondary"
          onRegister={close}
          onDelete={handleDelete}
        />
      </Modal>
    </>
  );
};

export default ProgressList;
