import { FormController } from "@/shared/component/Form";
import { dateInputStyle } from "@/shared/component/GroupInfoForm/index.css";
import { grayTextStyle } from "@/view/group/problem-list/RegisterForm/index.css";
import type { registerProblemSchema } from "@/view/group/problem-list/RegisterForm/schema";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";

interface DateFormControllerProps {
  form: UseFormReturn<z.infer<typeof registerProblemSchema>>;
  dateType: "startDate" | "endDate";
}

const DateFormController = ({ dateType, form }: DateFormControllerProps) => {
  return (
    <FormController
      form={form}
      name={dateType}
      type="date"
      showLabel
      labelProps={{
        children: dateType === "startDate" ? "시작 일자" : "종료 일자",
        className: grayTextStyle,
      }}
      fieldProps={{
        className: dateInputStyle,
      }}
    />
  );
};

export default DateFormController;
