import { FormController } from "@/shared/component/Form";
import type { GroupFormProps } from "@/shared/component/GroupInfoForm";
import {
  formLabelStyle,
  nameInputStyle,
} from "@/shared/component/GroupInfoForm/index.css";
import { handleOnChangeMode } from "@/shared/util/form";

const NameFormController = ({ form, variant }: GroupFormProps) => {
  return (
    <FormController
      form={form}
      name="name"
      type="input"
      showLabel
      labelProps={{
        children: "스터디 이름",
        className: formLabelStyle({ variant }),
      }}
      fieldProps={{
        placeholder: "스터디 이름을 입력해주세요. (최대 15자)",
        className: nameInputStyle({ variant }),
      }}
      showDescription
      revalidationHandlers={handleOnChangeMode}
    />
  );
};

export default NameFormController;
