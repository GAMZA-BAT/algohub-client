"use client";

import { useBooleanState } from "@/common/hook/useBooleanState";
import { useToast } from "@/common/hook/useToast";
import { handleA11yClick } from "@/common/util/dom";
import Card from "@/shared/component/Card";
import { Form, FormController } from "@/shared/component/Form";
import SubmitButton from "@/shared/component/SubmitButton";
import { HTTP_ERROR_STATUS } from "@/shared/constant/api";
import { handleOnChangeMode } from "@/shared/util/form";
import WithdrawModal from "@/view/user/setting/MyProfile/WithdrawModal";
import {
  editCardStyle,
  footerStyle,
} from "@/view/user/setting/MyProfile/index.css";
import { getSession, useSession } from "next-auth/react";
import type { z } from "zod";
import { contentStyle, formStyle, labelStyle } from "./index.css";
import type { baseEditSchema } from "./schema";
import useEditForm from "./useEditForm";

const EditForm = () => {
  const { data, update } = useSession();
  const {
    form,
    handleSubmit: _handleSubmit,
    isActive,
  } = useEditForm(data?.user!);
  const { showToast } = useToast();
  const { isOpen, open, close } = useBooleanState();

  const isOAuthAccount = data?.isOAuthAccount!;

  const handleSubmit = async (values: z.infer<typeof baseEditSchema>) => {
    const response = await _handleSubmit(values);
    if (response.status === 200) {
      await update(await getSession());

      form.reset(values, {
        keepValues: true, // 현재 입력값 유지
        keepDirty: false, // dirty 상태 초기화
      });

      showToast("정상적으로 수정되었어요.", "success");
    } else if (response.status === HTTP_ERROR_STATUS.INTERNAL_SERVER_ERROR)
      showToast("정상적으로 수정되지 않았어요.", "error");
    else {
      showToast(response.error, "error");
    }
  };

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
