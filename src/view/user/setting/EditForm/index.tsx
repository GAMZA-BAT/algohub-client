"use client";

import { Form, FormController } from "@/shared/component/Form";
import { handleOnChangeMode } from "@/shared/util/form";
import Card from "@/view/index/Card";
import SubmitButton from "@/view/index/SubmitButton";
import { editCardStyle, footerStyle } from "../MyProfile/index.css";
import { contentStyle, formStyle, labelStyle } from "./index.css";
import useEditForm from "./useEditForm";

const EditForm = () => {
  const { form, handleSubmit, isActive } = useEditForm();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={formStyle}>
        <FormController form={form} name="profile" type="image" />
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
              name="baekjoonId"
              type="input"
              showLabel
              labelProps={{
                className: labelStyle,
                children: "백준 아이디",
              }}
              fieldProps={{
                placeholder: "백준 아이디",
              }}
            />

            <FormController
              form={form}
              name="introduction"
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
          <SubmitButton isActive={isActive} disabled={!isActive}>수정하기</SubmitButton>
          <p className={footerStyle}>회원 탈퇴하기</p>
        </Card>
      </form>
    </Form>
  );
};

export default EditForm;
