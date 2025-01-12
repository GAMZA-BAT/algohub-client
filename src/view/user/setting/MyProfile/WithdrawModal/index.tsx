import { useDeleteMeMutation } from "@/app/[user]/setting/query";
import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import { Form, FormController } from "@/shared/component/Form";
import { passwordSchema } from "@/view/login/LoginForm/schema";
import {
  descTextStyle,
  metaTextStyle,
  modalWrapper,
} from "@/view/user/setting/MyProfile/WithdrawModal/index.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

type WithdrawModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
const WithdrawModal = ({ isOpen, onClose }: WithdrawModalProps) => {
  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    mode: "onTouched",
    defaultValues: {
      password: "",
    },
  });
  const { mutate } = useDeleteMeMutation();
  const isActive = form.formState.isValid;

  const handleSubmit = (values: z.infer<typeof passwordSchema>) => {
    mutate(values.password, {
      onError: () => {
        form.setError("password", { message: "비밀번호가 올바르지 않습니다." });
      },
    });
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
            이 작업은 되돌릴 수 없습니다. 비밀번호를 입력한 후 ‘계정 삭제’
            버튼을 눌러 진행해주세요.
          </p>
          <FormController
            form={form}
            name="password"
            type="input"
            showDescription
            fieldProps={{
              placeholder: "비밀번호",
              type: "password",
            }}
          />
          <Button
            type="submit"
            isActive={isActive}
            disabled={!form.formState.isValid}
          >
            계정 삭제
          </Button>
        </form>
      </Form>
    </Modal>
  );
};

export default WithdrawModal;
