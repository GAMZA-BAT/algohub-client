"use client";

import LoginAlertModal from "@/shared/component/LoginAlertModal";
import { loginAlertModalAtom } from "@/shared/store/alertModal";
import { useAtom } from "jotai";

const LoginAlertModalController = () => {
  const [isOpen, setIsOpen] = useAtom(loginAlertModalAtom);
  return <LoginAlertModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

export default LoginAlertModalController;
