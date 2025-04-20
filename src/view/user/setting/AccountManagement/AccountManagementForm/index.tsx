import { deleteBjNickname } from "@/app/api/users";
import Input from "@/common/component/Input";
import Modal from "@/common/component/Modal";
import { useBooleanState } from "@/common/hook/useBooleanState";
import { useToast } from "@/common/hook/useToast";
import { Form, FormController } from "@/shared/component/Form";
import SubmitButton from "@/shared/component/SubmitButton";
import { getMultipleRevalidationHandlers } from "@/shared/util/form";
import { useSession } from "next-auth/react";
import { match } from "ts-pattern";
import IdRegisterForm from "./IdRegisterForm";
import {
  deleteBjNicknameWrapperStyle,
  formStyle,
  idRegisterStyle,
  idTextStyle,
  labelStyle,
  passwordWrapper,
  regiserNicknameTextStyle,
  width,
} from "./index.css";
import useAccountForm from "./useAccountForm";

const AccountManagementForm = () => {
  const { form, isActive, handleSubmit } = useAccountForm();

  const { isOpen, open, close } = useBooleanState();

  const { data, update } = useSession();
  const bjNickname = data?.user?.bjNickname || undefined;

  const { showToast } = useToast();

  const updateBjNickname = async (bjNickname?: string) => {
    await update({
      ...data,
      user: { ...data?.user, bjNickname },
    });
  };

  const handleDeleteBjNickname = async () => {
    const response = await deleteBjNickname();

    if (response.ok) {
      updateBjNickname(undefined);
    }
  };

  const handleRegisterBjNickname = async (id: string) => {
    updateBjNickname(id);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={formStyle}>
        {!data?.isOAuthAccount && (
          <>
            <FormController
              form={form}
              name="currentPassword"
              type="input"
              showLabel
              labelProps={{ children: "비밀번호 변경", className: labelStyle }}
              fieldProps={{
                placeholder: "기존 비밀번호",
                className: width,
                type: "password",
              }}
            />
            <div className={passwordWrapper}>
              <FormController
                form={form}
                type="input"
                name="changePassword"
                revalidationHandlers={getMultipleRevalidationHandlers(
                  "confirmPassword",
                )}
                showDescription
                fieldProps={{
                  placeholder: "변경할 비밀번호",
                  type: "password",
                }}
              />
              <FormController
                form={form}
                type="input"
                name="confirmPassword"
                revalidationHandlers={getMultipleRevalidationHandlers(
                  "password",
                )}
                showDescription
                fieldProps={{
                  placeholder: "비밀번호 확인",
                  type: "password",
                }}
              />
            </div>
            <SubmitButton isActive={isActive} disabled={!isActive}>
              수정하기
            </SubmitButton>
          </>
        )}

        {match(bjNickname)
          .with(undefined, () => (
            <div className={regiserNicknameTextStyle}>
              <p className={idTextStyle}>백준 아이디</p>
              <button type="button" onClick={open} className={idRegisterStyle}>
                등록하기
              </button>
            </div>
          ))
          .otherwise(() => (
            <div className={deleteBjNicknameWrapperStyle}>
              <div className={regiserNicknameTextStyle}>
                <p className={idTextStyle}>백준 아이디</p>
                <button
                  type="button"
                  onClick={() => {
                    handleDeleteBjNickname();
                    showToast("백준 아이디 삭제를 완료하였어요", "success");
                  }}
                  className={idRegisterStyle}
                >
                  삭제하기
                </button>
              </div>
              <Input disabled placeholder={bjNickname} />
            </div>
          ))}
      </form>
      <Modal isOpen={isOpen} onClose={close} hasCloseBtn>
        <IdRegisterForm
          onSuccess={async (id: string) => {
            handleRegisterBjNickname(id);
            close();
          }}
        />
      </Modal>
    </Form>
  );
};

export default AccountManagementForm;
