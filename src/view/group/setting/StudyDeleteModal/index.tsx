import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import {
  containerStyle,
  contentStyle,
  headingStyle,
} from "@/view/group/setting/StudyDeleteModal/index.css";

type StudyDeleteModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
  onDelete?: () => void;
};

const StudyDeleteModal = ({
  isOpen = false,
  onClose = () => {},
  onDelete,
}: StudyDeleteModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} hasCloseBtn>
      <div className={containerStyle}>
        <h1 className={headingStyle}>스터디를 삭제하시겠어요?</h1>
        <p className={contentStyle}>
          삭제한 스터디는 복구할 수 없어요. <br />
          삭제하기 버튼을 누르시면 즉각적으로 삭제되어요. <br />
          신중하게 생각하신 후 삭제하기 버튼을 눌러주세요.
        </p>
        <Button onClick={onDelete}>삭제하기</Button>
      </div>
    </Modal>
  );
};

export default StudyDeleteModal;
