import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import { useRouter } from "next/navigation";
import { descErrorText, errorText, errorWrapper } from "./index.css";

type AlreadyJoinedModalProps = {
  isOpen: boolean;
  userNickname: string;
  groupId: number;
  groupName: string;
};

const AlreadyJoinedModal = ({
  isOpen,
  userNickname,
  groupId,
  groupName,
}: AlreadyJoinedModalProps) => {
  const router = useRouter();

  const handleReject = () => {
    if (!isOpen) router.push(`/${userNickname}`);
  };
  const handleMoveGroup = () => router.push(`/group/${groupId}`);

  return (
    <Modal isOpen={isOpen} onClose={handleReject} hasCloseBtn>
      <div className={errorWrapper}>
        <p className={errorText({ isHighlight: false })}>
          초대 받은 그룹 스터디
          <br />
          <span className={errorText({ isHighlight: true })}>{groupName}</span>
          는<br />
          이미 가입된 그룹이에요.
        </p>
        <p className={descErrorText}>
          이미 스터디원으로 참여하고 있어요. 해당 스터디홈으로 이동할게요.
        </p>
        <Button
          type="button"
          size="medium"
          color="purple"
          onClick={handleMoveGroup}
        >
          스터디홈으로 돌아가기
        </Button>
      </div>
    </Modal>
  );
};

export default AlreadyJoinedModal;
