"use client";

import EdgeCaseCreateForm from "@/app/[user]/edge-case/components/EdgeCaseController/EdgeCaseCreateForm";
import {
  addEdgeCaseButtonWrapper,
  edgeCaseControllerWrapper,
  edgeCaseSearchInputWrapper,
} from "@/app/[user]/edge-case/components/EdgeCaseController/index.css";
import { IcnSearch } from "@/asset/svg";
import Button from "@/common/component/Button";
import Input from "@/common/component/Input";
import Modal from "@/common/component/Modal";
import { useBooleanState } from "@/common/hook/useBooleanState";
import type { ChangeEvent } from "react";

type EdgeCaseControllerProps = {
  setProblemNumber: (problemNumber: number) => void;
};

const EdgeCaseController = ({ setProblemNumber }: EdgeCaseControllerProps) => {
  const {
    open: createModalOpen,
    isOpen: isCreateModalOpen,
    close: closeCreateModal,
  } = useBooleanState();

  const handleOpenCreateModal = () => {
    createModalOpen();
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setProblemNumber(Number(value));
  };

  return (
    <div className={edgeCaseControllerWrapper}>
      <div className={edgeCaseSearchInputWrapper}>
        <Input
          leftContent={<IcnSearch width={16} height={16} />}
          placeholder="문제 번호 검색"
          onChange={handleSearch}
          size="small"
        />
      </div>
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
        <EdgeCaseCreateForm onSuccess={closeCreateModal} />
      </Modal>
    </div>
  );
};

export default EdgeCaseController;
