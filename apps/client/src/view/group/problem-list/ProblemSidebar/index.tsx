"use client";
import { usePostProblemMutation } from "@/app/group/[groupId]/problem-list/query";
import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import { useBooleanState } from "@/common/hook/useBooleanState";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { problemSidebarWrapper } from "@/view/group/problem-list/ProblemSidebar/index.css";
import RegisterForm from "@/view/group/problem-list/RegisterForm";
import type {} from "react";

const ProblemSidebar = () => {
  const { open, isOpen, close } = useBooleanState();
  const groupId = useGetGroupId();
  const { mutate: postProblemMutate } = usePostProblemMutation(+groupId);

  const handleSubmit = (
    link: string,
    startDate: Date,
    endDate: Date,
    onSuccess: () => void,
  ) => {
    postProblemMutate(
      { link, startDate, endDate },
      {
        onSuccess: () => {
          onSuccess();
          setTimeout(() => {
            close();
          }, 1500);
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
      <Modal isOpen={isOpen} onClose={close} hasCloseBtn>
        <RegisterForm onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default ProblemSidebar;
