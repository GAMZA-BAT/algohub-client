"use client";

import Button from "@/common/component/Button";
import { Form, FormController } from "@/shared/component/Form";
import {
  btnStyle,
  btnWrapper,
  formStyle,
  inputStyle,
  metaStyle,
  noticeCreateWrapper,
  sectionStyle,
  textareaStyle,
  titleWrapper,
} from "@/view/group/dashboard/NoticeModal/NoticeCreate/index.css";
import { registerNoticeSchema } from "@/view/group/dashboard/NoticeModal/NoticeCreate/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import type { z } from "zod";

const NoticeCreate = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof registerNoticeSchema>>({
    resolver: zodResolver(registerNoticeSchema),
    mode: "onTouched",
    defaultValues: {
      category: "",
      title: "",
      content: "",
    },
  });

  const handleSubmit = (_values: z.infer<typeof registerNoticeSchema>) => {
    // console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={formStyle}>
        <section className={noticeCreateWrapper}>
          <div className={titleWrapper}>
            <div className={sectionStyle}>
              <FormController
                form={form}
                name="category"
                type="input"
                showLabel
                labelProps={{ children: "카테고리", className: metaStyle }}
                fieldProps={{
                  placeholder: "카테고리를 입력해주세요.",
                  className: inputStyle,
                }}
                showDescription
              />
            </div>
            <div className={sectionStyle}>
              <FormController
                form={form}
                name="title"
                type="input"
                showLabel
                labelProps={{ children: "제목", className: metaStyle }}
                fieldProps={{
                  placeholder: "제목을 입력해주세요.",
                  className: inputStyle,
                }}
                showDescription
              />
            </div>
          </div>
          <div className={sectionStyle}>
            <FormController
              form={form}
              name="content"
              type="textarea"
              showLabel
              labelProps={{ children: "내용", className: metaStyle }}
              fieldProps={{
                placeholder: "내용을 입력해주세요.",
                className: textareaStyle,
              }}
              showDescription
            />
          </div>
        </section>
        <div className={btnWrapper}>
          <Button
            className={btnStyle}
            color="gray"
            onClick={() => router.back()}
          >
            취소
          </Button>
          <Button
            className={btnStyle}
            type="submit"
            disabled={!form.formState.isValid}
            isActive={form.formState.isValid}
          >
            글쓰기
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NoticeCreate;
