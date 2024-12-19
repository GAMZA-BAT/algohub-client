import { groupSchema } from "@/app/api/groups/schema";
import { IcnPlus } from "@/asset/svg";
import Button from "@/common/component/Button";
import SupportingText from "@/common/component/SupportingText";
import { useToast } from "@/common/hook/useToast";
import { Form } from "@/shared/component/Form";
import DateFormController from "@/shared/component/GroupInfoForm/DateFormController";
import DescFormController from "@/shared/component/GroupInfoForm/DescFormController";
import ImageFormController from "@/shared/component/GroupInfoForm/ImageFormController";
import NameFormController from "@/shared/component/GroupInfoForm/NameFormController";
import { createGroupAction } from "@/shared/component/GroupInfoForm/action";
import {
  dateWrapper,
  formLabelStyle,
  formStyle,
} from "@/shared/component/GroupInfoForm/index.css";
import { getGroupFormData } from "@/shared/component/GroupInfoForm/util";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { submitBtnStyle } from "./index.css";

type CreateGroupFormProps = {
  onSuccess: (code: string) => void;
};
const CreateGroupForm = ({ onSuccess }: CreateGroupFormProps) => {
  const { showToast } = useToast();
  const form = useForm<z.infer<typeof groupSchema>>({
    resolver: zodResolver(groupSchema),
    mode: "onTouched",
    defaultValues: {
      groupImage: null,
      name: "",
      introduction: "",
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  const handleSubmit = async (values: z.infer<typeof groupSchema>) => {
    const data = getGroupFormData(values);
    const code = await createGroupAction(data);

    onSuccess(code);
    showToast("스터디가 정상적으로 만들어졌어요.", "success");
  };
  const error = form.formState.errors.endDate;

  return (
    <Form {...form}>
      <form
        className={formStyle({ variant: "create-group" })}
        onSubmit={form.handleSubmit((v) => handleSubmit(v))}
      >
        <ImageFormController form={form} />
        <NameFormController form={form} variant="create-group" />
        <div>
          <p className={formLabelStyle({ variant: "create-group" })}>
            스터디 기간
          </p>
          <div className={dateWrapper}>
            <DateFormController
              form={form}
              variant="create-group"
              dateType="startDate"
            />
            <DateFormController
              form={form}
              variant="create-group"
              dateType="endDate"
            />
          </div>
          {error && (
            <SupportingText isError hasErrorIcon message={error.message} />
          )}
        </div>
        <DescFormController form={form} variant="create-group" />
        <Button
          className={submitBtnStyle}
          type="submit"
          size="large"
          disabled={!form.formState.isValid || form.formState.isSubmitted}
          isActive={form.formState.isValid && !form.formState.isSubmitted}
        >
          <IcnPlus fill="white" width={24} height={24} />
          스터디 만들기
        </Button>
      </form>
    </Form>
  );
};

export default CreateGroupForm;
