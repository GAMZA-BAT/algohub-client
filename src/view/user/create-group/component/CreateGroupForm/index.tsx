import { IcnPlus } from "@/asset/svg";
import Button from "@/common/component/Button";
import { groupSchema } from "@/shared/api/schema";
import GroupInfoForm from "@/shared/component/GroupInfoForm";
import { submitBtnStyle } from "@/view/user/create-group/component/CreateGroupForm/index.css";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

type CreateGroupFormProps = {
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
};
const CreateGroupForm = ({ setIsSuccess }: CreateGroupFormProps) => {
  const form = useForm<z.infer<typeof groupSchema>>({
    resolver: zodResolver(groupSchema),
    mode: "onTouched",
    defaultValues: {
      image: "",
      name: "",
      desc: "",
    },
  });

  return (
    <GroupInfoForm form={form}>
      <Button
        className={submitBtnStyle}
        type="submit"
        size="large"
        disabled={!form.formState.isValid}
        isActive={form.formState.isValid}
        onClick={() => setIsSuccess(true)}
      >
        <IcnPlus fill="white" width={24} height={24} />
        스터디 만들기
      </Button>
    </GroupInfoForm>
  );
};

export default CreateGroupForm;
