import { FormController } from "@/shared/component/Form";
import type { GroupFormProps } from "@/shared/component/GroupInfoForm";
import {
  dateInputStyle,
  dateLabelStyle,
} from "@/shared/component/GroupInfoForm/index.css";

interface DateFormControllerProps extends GroupFormProps {
  dateType: "startDate" | "endDate";
}
const DateFormController = ({
  dateType,
  form,
  variant,
}: DateFormControllerProps) => {
  return (
    <FormController
      form={form}
      name={dateType}
      type="date"
      showLabel
      labelPosition="top"
      labelProps={{
        children: dateType === "startDate" ? "시작 일자" : "종료 일자",
        className: dateLabelStyle({ variant }),
      }}
      dateProps={{
        className: dateInputStyle,
      }}
    />
  );
};

export default DateFormController;