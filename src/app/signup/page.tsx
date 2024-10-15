"use client";

import Modal from "@/common/component/Modal";
import AuthHeader from "@/view/index/AuthHeader";
import Footer from "@/view/index/Footer";
import SignupForm from "@/view/signup/SignupForm";
import { containerStyle } from "@/view/signup/index.css";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();
  const onClose = () => {
    router.push("/");
  };
  return (
    <Modal isOpen={true} onClose={onClose}>
      <AuthHeader handleClick={onClose} />
      <div className={containerStyle}>
        <SignupForm />
        <Footer
          guideLabel="이미 계정이 있으신가요?"
          link={{ href: "/login", label: "로그인하기" }}
        />
      </div>
    </Modal>
  );
};

export default SignupPage;
