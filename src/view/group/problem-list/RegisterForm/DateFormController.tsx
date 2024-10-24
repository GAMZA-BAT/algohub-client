import { FormController } from "@/shared/component/Form";
import { getMultipleRevalidationHandlers } from "@/shared/util/form";
import {
  fieldsetStyle,
  itemStyle,
} from "@/view/group/problem-list/RegisterForm/index.css";
import type { registerProblemSchema } from "@/view/group/problem-list/RegisterForm/schema";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";

interface DateFormControllerProps {
  form: UseFormReturn<z.infer<typeof registerProblemSchema>>;
}

const DateFormController = ({ form }: DateFormControllerProps) => {
  return (
    <fieldset className={fieldsetStyle}>
      <legend className={itemStyle}>풀이 기간</legend>
      <FormController
        form={form}
        type="date"
        name="startDate"
        revalidationHandlers={getMultipleRevalidationHandlers("endDate")}
        showLabel
        showDescription
        labelProps={{
          children: "시작 일자",
        }}
        fieldProps={{
          ariaDescribedBy: "date-description", // description 공유 (start date)
        }}
        descriptionProps={{
          style: {
            position: "absolute",
            transform: "translate(0, 10px)",
          },
          showErrorIcon: false,
          id: "date-description", // description 공유 (start date)
        }}
      />
      <FormController
        form={form}
        type="date"
        name="endDate"
        revalidationHandlers={getMultipleRevalidationHandlers("startDate")}
        showLabel
        labelProps={{
          children: "종료 일자",
        }}
        fieldProps={{
          ariaDescribedBy: "date-description", // description 공유 (start date)
        }}
      />
    </fieldset>
  );
};

export default DateFormController;
