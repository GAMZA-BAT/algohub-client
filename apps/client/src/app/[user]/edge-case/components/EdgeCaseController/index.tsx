"use client";

import Button from "@/common/component/Button";
import {
  edgeCaseControllerWrapper,
  addEdgeCaseButtonWrapper,
} from "@/app/[user]/edge-case/components/EdgeCaseController/index.css";
import EdgeCaseCreateForm from "@/app/[user]/edge-case/components/EdgeCaseController/EdgeCaseCreateForm";
import Modal from "@/common/component/Modal";
import { useBooleanState } from "@/common/hook/useBooleanState";

const EdgeCaseController = () => {
  const {
    open: createModalOpen,
    isOpen: isCreateModalOpen,
    close: closeCreateModal,
  } = useBooleanState();

  const handleOpenCreateModal = () => {
    createModalOpen();
  };

  return (
    <div className={edgeCaseControllerWrapper}>
      <div className={addEdgeCaseButtonWrapper}>
        <Button
          size="small"
          color="purple"
          isActive
          onClick={handleOpenCreateModal}
        >
          반례 추가
        </Button>
      </div>
      <Modal isOpen={isCreateModalOpen} onClose={closeCreateModal} hasCloseBtn>
        <EdgeCaseCreateForm />
      </Modal>
    </div>
  );
};

export default EdgeCaseController;
