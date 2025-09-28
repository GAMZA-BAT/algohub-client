import {
  createFormWrapper,
  createTitleStyle,
  createFormContainer,
  labelStyle,
  textAreaStyle,
  buttonWrapper,
} from "@/app/[user]/edge-case/components/EdgeCaseController/EdgeCaseCreateForm/index.css";
import { edgeCaseCreateFormSchema } from "@/app/[user]/edge-case/components/EdgeCaseController/EdgeCaseCreateForm/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormController } from "@/shared/component/Form";
import Button from "@/common/component/Button";
import { useEdgeCaseMutation } from "@/app/api/edge-case/mutation";

const EdgeCaseCreateForm = () => {
  const form = useForm<z.infer<typeof edgeCaseCreateFormSchema>>({
    resolver: zodResolver(edgeCaseCreateFormSchema),
    mode: "onTouched",
    defaultValues: {
      problem: "",
      input: "",
      output: "",
    },
  });
  const { mutate: createEdgeCase } = useEdgeCaseMutation();

  const handleSubmit = (values: z.infer<typeof edgeCaseCreateFormSchema>) => {
    const { problem, input, output } = values;
    createEdgeCase({
      link: problem,
      input,
      output,
    });
  };

  return (
    <div className={createFormWrapper}>
      <h2 className={createTitleStyle}>반례 추가하기</h2>
      <Form {...form}>
        <form
          className={createFormContainer}
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormController
            form={form}
            name="problem"
            type="input"
            showLabel
            labelProps={{
              children: "문제 번호 및 링크",
              className: labelStyle,
            }}
            fieldProps={{ placeholder: "문제 번호 및 링크를 입력해주세요." }}
            showDescription
          />
          <FormController
            form={form}
            name="input"
            type="textarea"
            showLabel
            labelProps={{ children: "입력", className: labelStyle }}
            fieldProps={{ className: textAreaStyle }}
          />
          <FormController
            form={form}
            name="output"
            type="textarea"
            showLabel
            labelProps={{ children: "출력", className: labelStyle }}
            fieldProps={{ className: textAreaStyle }}
          />
          <div className={buttonWrapper}>
            <Button
              type="submit"
              size="small"
              disabled={!form.formState.isValid}
              isActive={form.formState.isValid}
            >
              등록하기
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EdgeCaseCreateForm;
