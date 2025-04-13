"use client";

import { useBooleanState } from "@/common/hook/useBooleanState";
import { handleA11yClick } from "@/common/util/dom";
import Card from "@/shared/component/Card";
import { Form, FormController } from "@/shared/component/Form";
import SubmitButton from "@/shared/component/SubmitButton";
import { handleOnChangeMode } from "@/shared/util/form";
import WithdrawModal from "@/view/user/setting/MyProfile/WithdrawModal";
import {
  editCardStyle,
  footerStyle,
} from "@/view/user/setting/MyProfile/index.css";
import { useSession } from "next-auth/react";
import { contentStyle, formStyle, labelStyle } from "./index.css";
import useEditForm from "./useEditForm";

const EditForm = () => {
  const session = useSession();
  const isOAuthAccount = session.data?.isOAuthAccount!;
  const { form, handleSubmit, isActive } = useEditForm(session);
  const { isOpen, open, close } = useBooleanState();

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className={formStyle}>
          <FormController
            form={form}
            name="profileImage"
            type="image"
            fieldProps={{ variant: "secondary" }}
          />
          <Card className={editCardStyle}>
            <div className={contentStyle}>
              <FormController
                form={form}
                name="nickname"
                type="input"
                showLabel
                labelProps={{
                  className: labelStyle,
                  children: "닉네임",
                }}
                fieldProps={{
                  placeholder: "닉네임",
                }}
              />

              <FormController
                form={form}
                name="description"
                type="input"
                revalidationHandlers={handleOnChangeMode}
                showLabel
                labelProps={{
                  className: labelStyle,
                  children: "소개",
                }}
                fieldProps={{
                  placeholder: "프로필에 나타나요",
                }}
              />
            </div>
            <SubmitButton isActive={isActive} disabled={!isActive}>
              수정하기
            </SubmitButton>
            <footer>
              <p
                className={footerStyle}
                onClick={open}
                onKeyDown={handleA11yClick(open)}
              >
                회원 탈퇴하기
              </p>
            </footer>
          </Card>
        </form>
      </Form>
      <WithdrawModal
        isOpen={isOpen}
        onClose={close}
        isOAuthAccount={isOAuthAccount}
      />
    </>
  );
};

export default EditForm;
