"use client";

import { usePostProblemMutation } from "@/app/group/[groupId]/problem-list/query";
import { problemRegister } from "@/asset/lottie";
import Animation from "@/common/component/Animation";
import Button from "@/common/component/Button";
import { handleA11yClick } from "@/common/util/dom";
import { Form } from "@/shared/component/Form";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import DateFormController from "@/view/group/problem-list/RegisterForm/DateFormController";
import LinkFormController from "@/view/group/problem-list/RegisterForm/LinkFormController";
import {
  animationStyle,
  deleteStyle,
  deleteWrapper,
  formStyle,
  registerWrapper,
  submitBtnStyle,
  titleStyle,
} from "@/view/group/problem-list/RegisterForm/index.css";
import { registerProblemSchema } from "@/view/group/problem-list/RegisterForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

type RegisterFormProps = {
  variant?: "default" | "secondary";
  onRegister?: () => void;
  onDelete?: () => void;
};
const RegisterForm = ({
  variant = "default",
  onRegister = () => {},
  onDelete = () => {},
}: RegisterFormProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate: postProblemMutate } = usePostProblemMutation();
  const groupId = useGetGroupId();
  const form = useForm<z.infer<typeof registerProblemSchema>>({
    resolver: zodResolver(registerProblemSchema),
    mode: "onTouched",
    defaultValues: {
      link: "",
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  const handleSubmit = (values: z.infer<typeof registerProblemSchema>) => {
    const { link, startDate, endDate } = values;
    postProblemMutate(
      { groupId: +groupId, link, startDate, endDate },
      {
        onSuccess: () => {
          setIsSuccess(true);
          setTimeout(() => {
            onRegister();
          }, 1700);
        },
      },
    );
  };

  const title = variant === "default" ? "문제 등록하기" : "문제 수정하기";
  return (
    <>
      <div className={registerWrapper}>
        <h2 className={titleStyle}>{title}</h2>
        <Form {...form}>
          <form
            className={formStyle}
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <LinkFormController form={form} />
            <DateFormController form={form} />
            <Button
              type="submit"
              size="large"
              className={submitBtnStyle}
              disabled={!form.formState.isValid}
              isActive={form.formState.isValid}
            >
              {title}
            </Button>
          </form>
        </Form>
        <div className={deleteWrapper}>
          {variant === "secondary" && (
            <p
              className={deleteStyle}
              onKeyDown={handleA11yClick(onDelete)}
              onClick={onDelete}
              aria-label="삭제하기"
            >
              문제 삭제하기
            </p>
          )}
        </div>
      </div>
      {isSuccess && (
        <Animation
          className={animationStyle}
          animationJson={problemRegister}
          size="100%"
        />
      )}
    </>
  );
};

export default RegisterForm;
