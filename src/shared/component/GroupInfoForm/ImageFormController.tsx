import { FormController } from "@/shared/component/Form";
import type { GroupFormProps } from "@/shared/component/GroupInfoForm";
import { imageWrapper } from "@/shared/component/GroupInfoForm/index.css";

const ImageFormController = ({ form }: GroupFormProps) => {
  return (
    <div className={imageWrapper}>
      <FormController form={form} name="image" type="image" />
    </div>
  );
};

export default ImageFormController;
