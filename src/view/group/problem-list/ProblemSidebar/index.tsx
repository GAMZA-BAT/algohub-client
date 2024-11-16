"use client";
import { usePostProblemMutation } from "@/app/group/[groupId]/problem-list/query";
import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import { useBooleanState } from "@/common/hook/useBooleanState";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { problemSidebarWrapper } from "@/view/group/problem-list/ProblemSidebar/index.css";
import RegisterForm from "@/view/group/problem-list/RegisterForm";
import type { Dispatch, SetStateAction } from "react";

const ProblemSidebar = () => {
  const { open, isOpen, close } = useBooleanState();
  const { mutate: postProblemMutate } = usePostProblemMutation();
  const groupId = useGetGroupId();

  const handleSubmit = (
    link: string,
    startDate: Date,
    endDate: Date,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
  ) => {
    postProblemMutate(
      { groupId: +groupId, link, startDate, endDate },
      {
        onSuccess: () => {
          setIsSuccess(true);
          setTimeout(() => {
            close();
          }, 1700);
        },
      },
    );
  };
  return (
    <>
      <div className={problemSidebarWrapper}>
        <Button size="medium" onClick={() => open()}>
          문제 추가하기
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={close}>
        <RegisterForm onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default ProblemSidebar;
