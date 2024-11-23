import { FormController } from "@/shared/component/Form";
import type { GroupFormProps } from "@/shared/component/GroupInfoForm";
import {
  descInputStyle,
  formLabelStyle,
} from "@/shared/component/GroupInfoForm/index.css";

const DescFormController = ({ form, variant }: GroupFormProps) => {
  return (
    <FormController
      form={form}
      name="introduction"
      type="textarea"
      showLabel
      labelProps={{
        children: "스터디 소개",
        className: formLabelStyle({ variant }),
      }}
      fieldProps={{
        placeholder: "스터디 소개를 입력해주세요.",
        className: descInputStyle,
      }}
    />
  );
};

export default DescFormController;
