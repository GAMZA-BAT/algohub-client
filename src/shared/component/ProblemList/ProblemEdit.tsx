"use client";

import {
  useDeleteProblemMutation,
  usePatchProblemMutation,
  useProblemInfoQuery,
} from "@/app/group/[groupId]/problem-list/query";
import { IcnEdit } from "@/asset/svg";
import Modal from "@/common/component/Modal";
import { useBooleanState } from "@/common/hook/useBooleanState";
import { editIconStyle } from "@/shared/component/ProblemList/index.css";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import PatchForm from "@/view/group/problem-list/RegisterForm/PatchForm";

type ProblemEditProps = {
  problemId: number;
  isActive: boolean;
};

const ProblemEdit = ({ problemId, isActive }: ProblemEditProps) => {
  const { open, isOpen, close } = useBooleanState();
  const groupId = useGetGroupId();
  const { mutate: deleteMutate } = useDeleteProblemMutation(+groupId);
  const { data: problemInfo } = useProblemInfoQuery(problemId);
  const { mutate: patchMutate } = usePatchProblemMutation(+groupId, problemId);

  const handleDelete = () => {
    deleteMutate(problemId, {
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
          onSuccess();
        },
      },
    );
    setTimeout(() => {
      close();
    }, 1700);
  };

  return (
    <>
      <IcnEdit
        onClick={open}
        className={editIconStyle({ isActive })}
        width={24}
        height={24}
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

export default ProblemEdit;
