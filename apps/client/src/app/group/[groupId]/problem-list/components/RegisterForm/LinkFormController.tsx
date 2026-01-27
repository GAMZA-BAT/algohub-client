import {
  grayTextStyle,
  labelStyle,
} from "@/app/group/[groupId]/problem-list/components/RegisterForm/index.css";
import type { registerProblemSchema } from "@/app/group/[groupId]/problem-list/components/RegisterForm/schema";
import { FormController } from "@/shared/component/Form";
import {} from "@/shared/component/GroupInfoForm/index.css";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";

const LinkFormController = ({
  form,
}: { form: UseFormReturn<z.infer<typeof registerProblemSchema>> }) => {
  return (
    <FormController
      form={form}
      name="link"
      type="input"
      showLabel
      labelProps={{
        children: "문제 링크",
        className: labelStyle,
      }}
      fieldProps={{
        placeholder: "백준 문제 링크를 넣어주세요.",
        className: grayTextStyle,
      }}
      showDescription
    />
  );
};

export default LinkFormController;
