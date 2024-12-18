"use client";

import type { ProblemContent } from "@/app/api/problems/type";
import { problemRegister } from "@/asset/lottie";
import Animation from "@/common/component/Animation";
import Button from "@/common/component/Button";
import Input from "@/common/component/Input";
import { handleA11yClick } from "@/common/util/dom";
import { Form } from "@/shared/component/Form";
import DateFormController from "@/view/group/problem-list/RegisterForm/DateFormController";
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

type PatchFormProps = {
  onDelete?: () => void;
  onSubmit: (startDate: Date, endDate: Date, onSuccess: () => void) => void;
  problemInfo: ProblemContent;
};

const PatchForm = ({
  onDelete = () => {},
  onSubmit,
  problemInfo,
}: PatchFormProps) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof registerProblemSchema>>({
    resolver: zodResolver(registerProblemSchema),
    mode: "onTouched",
    defaultValues: {
      startDate: new Date(problemInfo.startDate),
      endDate: new Date(problemInfo.endDate),
    },
  });

  const handleSubmit = (values: z.infer<typeof registerProblemSchema>) => {
    const { startDate, endDate } = values;
    const onSuccess = () => setIsSuccess(true);
    onSubmit(startDate, endDate, onSuccess);
  };

  return (
    <>
      <div className={registerWrapper}>
        <h2 className={titleStyle}>문제 수정하기</h2>
        <Form {...form}>
          <form
            className={formStyle}
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <Input placeholder={problemInfo?.link} disabled />
            <DateFormController form={form} />
            <Button
              type="submit"
              size="large"
              className={submitBtnStyle}
              disabled={!form.formState.isValid}
              isActive={form.formState.isValid}
            >
              문제 수정하기
            </Button>
          </form>
        </Form>
        <div className={deleteWrapper}>
          <p
            className={deleteStyle}
            onKeyDown={handleA11yClick(onDelete)}
            onClick={onDelete}
            aria-label="삭제하기"
          >
            문제 삭제하기
          </p>
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

export default PatchForm;
