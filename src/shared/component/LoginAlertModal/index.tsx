"use client";

import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import {
  alertTextStyle,
  containerStyle,
} from "@/shared/component/LoginAlertModal/index.css";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import loginAni from "../../../../public/asset/lottie/require_login.json";

interface LoginAlertModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const LoginAlertModal = ({
  isOpen = false,
  onClose = () => {},
}: LoginAlertModalProps) => {
  const router = useRouter();

  const handleRedirectToLogin = () => router.push("/login");

  return (
    <Modal isOpen={isOpen} onClose={onClose} hasCloseBtn>
      <div className={containerStyle}>
        <p className={alertTextStyle}>로그인이 필요한 서비스입니다.</p>
        <Lottie
          animationData={loginAni}
          style={{ width: "12.5rem", height: "12.5rem", placeSelf: "center" }}
        />
        <Button onClick={handleRedirectToLogin}>로그인하러 가기</Button>
      </div>
    </Modal>
  );
};

export default LoginAlertModal;
