import { useDeleteMeMutation } from "@/app/api/users/mutation";
import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import { Form, FormController } from "@/shared/component/Form";
import { withdrawSchema } from "@/view/login/LoginForm/schema";
import {
  descTextStyle,
  metaTextStyle,
  modalWrapper,
} from "@/view/user/setting/MyProfile/WithdrawModal/index.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

type WithdrawModalProps = {
  isOAuthAccount: boolean;
  isOpen: boolean;
  onClose: () => void;
};
const WithdrawModal = ({
  isOpen,
  onClose,
  isOAuthAccount,
}: WithdrawModalProps) => {
  const form = useForm<z.infer<typeof withdrawSchema>>({
    resolver: zodResolver(withdrawSchema),
    mode: "onTouched",
    defaultValues: {
      isOAuthAccount,
      password: "",
    },
  });

  useEffect(() => {
    if (!isOpen) {
      form.reset();
    }
  }, [isOpen, form]);

  const { mutate } = useDeleteMeMutation();
  const isActive = form.formState.isValid;
  const placeholder = isOAuthAccount ? "DELETE" : "비밀번호";
  const handleSubmit = ({ password }: z.infer<typeof withdrawSchema>) => {
    mutate(
      { password, isOAuthAccount },
      {
        onError: () => {
          if (!isOAuthAccount) {
            form.setError("password", {
              message: "비밀번호가 올바르지 않습니다.",
            });
          }
        },
      },
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} hasCloseBtn>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={modalWrapper}
        >
          <h2 className={metaTextStyle}>정말 계정을 삭제하시겠습니까?</h2>
          <p className={descTextStyle}>
            이 작업은 되돌릴 수 없습니다. {placeholder}를 입력한 후 ‘계정
            삭제’버튼을 눌러 진행해주세요.
          </p>
          <FormController
            form={form}
            name="password"
            type="input"
            showDescription
            fieldProps={{
              placeholder,
              type: isOAuthAccount ? "text" : "password",
            }}
          />
          <Button type="submit" isActive={isActive} disabled={!isActive}>
            계정 삭제
          </Button>
        </form>
      </Form>
    </Modal>
  );
};

export default WithdrawModal;
