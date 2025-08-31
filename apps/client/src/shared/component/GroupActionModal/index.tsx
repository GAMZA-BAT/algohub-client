import Modal from "@/common/component/Modal";
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
};

const GroupActionModal = ({
  isOpen,
  onClose,
  children,
}: GroupActionModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} hasCloseBtn>
      <div className={wrapper}>{children}</div>
    </Modal>
  );
};

GroupActionModal.Info = GroupInfoCard;
GroupActionModal.Applicant = ApplicantInfo;
GroupActionModal.Prompt = DecisionPrompt;
GroupActionModal.Actions = Actions;

export default GroupActionModal;
