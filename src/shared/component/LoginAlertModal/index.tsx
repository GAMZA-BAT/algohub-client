"use client";

import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import {
  alertTextStyle,
  containerStyle,
} from "@/shared/component/LoginAlertModal/index.css";
import { useRouter } from "next/navigation";

interface LoginAlertModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const LoginAlertModal = ({
  isOpen = false,
  onClose = () => {},
}: LoginAlertModalProps) => {
  const router = useRouter();

  const 로그인페이지로 = () => router.push("/login");

  return (
    <Modal isOpen={isOpen} onClose={onClose} hasCloseBtn={true}>
      <div className={containerStyle}>
        <p className={alertTextStyle}>로그인이 필요한 서비스입니다.</p>
        <Button onClick={로그인페이지로}>로그인하러 가기</Button>
      </div>
    </Modal>
  );
};

export default LoginAlertModal;
