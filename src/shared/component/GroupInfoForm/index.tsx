"use client";

import type { groupSchema } from "@/app/api/groups/schema";
import { usePatchGroupMutation } from "@/app/group/[groupId]/setting/query";
import SupportingText from "@/common/component/SupportingText";
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
import useGetGroupId from "@/shared/hook/useGetGroupId";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";

export type GroupFormProps = {
  children?: React.ReactNode;
  form: UseFormReturn<z.infer<typeof groupSchema>>;
  variant?: "create-group" | "group-setting";
};

const GroupInfoForm = ({
  children,
  form,
  variant = "create-group",
}: GroupFormProps) => {
  const groupId = useGetGroupId();
  const { mutate: editGroupMutate } = usePatchGroupMutation(+groupId);

  const handleSubmit = (values: z.infer<typeof groupSchema>) => {
    const data = getGroupFormData(values);

    if (variant === "create-group") {
      createGroupAction(data);
    } else if (variant === "group-setting") {
      editGroupMutate(data);
    }
  };
  const error = form.formState.errors.endDate;
  return (
    <Form {...form}>
      <form
        className={formStyle({ variant })}
        onSubmit={form.handleSubmit((v) => handleSubmit(v))}
      >
        <ImageFormController form={form} />
        <NameFormController form={form} variant={variant} />
        <div style={{ width: "100%" }}>
          <p className={formLabelStyle({ variant })}>스터디 기간</p>
          <div className={dateWrapper}>
            <DateFormController
              form={form}
              variant={variant}
              dateType="startDate"
            />
            <DateFormController
              form={form}
              variant={variant}
              dateType="endDate"
            />
          </div>
          {error && (
            <SupportingText isError hasErrorIcon message={error.message} />
          )}
        </div>
        <DescFormController form={form} variant={variant} />
        {children}
      </form>
    </Form>
  );
};

export default GroupInfoForm;
