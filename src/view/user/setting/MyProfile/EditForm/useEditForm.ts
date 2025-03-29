import { patchMyInfoAction } from "@/app/[user]/setting/action";
import { useToast } from "@/common/hook/useToast";
import { createFormDataFromDirtyFields } from "@/shared/util/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { baseEditSchema } from "./schema";

const useEditForm = () => {
  const session = useSession();
  const user = session.data?.user;

  const form = useForm<z.infer<typeof baseEditSchema>>({
    resolver: zodResolver(baseEditSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      profileImage: user?.profileImage || null,
      nickname: user?.nickname,
      description: user?.description,
    },
  });
  const { showToast } = useToast();
  const isActive = form.formState.isValid && form.formState.isDirty;

  const handleSubmit = async (values: z.infer<typeof baseEditSchema>) => {
    const { profileImage } = values;
    const data = createFormDataFromDirtyFields(
      form.formState.dirtyFields,
      values,
    );

    if (profileImage instanceof File) {
      data.append("profileImage", profileImage);
    }

    await patchMyInfoAction(data);
    await session.update(await getSession());
    showToast("정상적으로 수정이 되었어요", "success");
  };

  return {
    form,
    isActive,
    handleSubmit,
  };
};

export default useEditForm;
