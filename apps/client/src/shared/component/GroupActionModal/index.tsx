import Modal from "@/common/component/Modal";
import clsx from "clsx";
import type { ReactNode } from "react";
import Actions from "./Actions";
import ApplicantInfo from "./ApplicantInfo";
import DecisionPrompt from "./DecisionPrompt";
import GroupInfoCard from "./GroupInfoCard";
import { wrapper } from "./index.css";

type GroupActionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

const GroupActionModal = ({
  isOpen,
  onClose,
  children,
  className,
}: GroupActionModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} hasCloseBtn>
      <div className={clsx(wrapper, className)}>{children}</div>
    </Modal>
  );
};

GroupActionModal.Info = GroupInfoCard;
GroupActionModal.Applicant = ApplicantInfo;
GroupActionModal.Prompt = DecisionPrompt;
GroupActionModal.Actions = Actions;

export default GroupActionModal;
