"use client";
import Animation from "@/common/component/Animation";
import Button from "@/common/component/Button";
import { Form } from "@/shared/component/Form";
import DateFormController from "@/view/group/problem-list/RegisterForm/DateFormController";
import LinkFormController from "@/view/group/problem-list/RegisterForm/LinkFormController";
import {
  animationStyle,
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
import { problemRegister } from "../../../../../public/asset/lottie";

type RegisterFormProps = {
  onDelete?: () => void;
  onSubmit: (
    link: string,
    startDate: Date,
    endDate: Date,
    onSuccess: () => void,
  ) => void;
};

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const [isSuccess, setIsSuccess] = useState(false);

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
    const onSuccess = () => setIsSuccess(true);
    onSubmit(link || "", startDate, endDate, onSuccess);
  };

  return (
    <>
      <div className={registerWrapper}>
        <h2 className={titleStyle}>문제 등록하기</h2>
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
              문제 등록하기
            </Button>
          </form>
        </Form>
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
