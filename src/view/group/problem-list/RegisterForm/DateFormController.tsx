import type Calendar from "@/common/component/Calendar";
import { FormController } from "@/shared/component/Form";
import { getMultipleRevalidationHandlers } from "@/shared/util/form";
import {
  fieldsetStyle,
  itemStyle,
} from "@/view/group/problem-list/RegisterForm/index.css";
import type { registerProblemSchema } from "@/view/group/problem-list/RegisterForm/schema";
import type { ComponentProps } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";

interface DateFormControllerProps
  extends Omit<ComponentProps<typeof Calendar>, "form" | "disabled"> {
  form: UseFormReturn<z.infer<typeof registerProblemSchema>>;
  disabled: {
    startDate?: boolean;
    endDate?: boolean;
  };
}

const DateFormController = ({
  form,
  startDate,
  endDate,
  disabled,
}: DateFormControllerProps) => {
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
          startDate,
          disabled: disabled.startDate,
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
          startDate: endDate,
          disabled: disabled.endDate,
        }}
      />
    </fieldset>
  );
};

export default DateFormController;
