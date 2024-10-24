"use client";
import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import { useBooleanState } from "@/common/hook/useBooleanState";
import { problemSidebarWrapper } from "@/view/group/problem-list/ProblemSidebar/index.css";
import RegisterForm from "@/view/group/problem-list/RegisterForm";

const ProblemSidebar = () => {
  const { open, isOpen, close } = useBooleanState();
  return (
    <>
      <div className={problemSidebarWrapper}>
        <Button size="medium" onClick={() => open()}>
          문제 추가하기
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={close}>
        <RegisterForm />
      </Modal>
    </>
  );
};

export default ProblemSidebar;
