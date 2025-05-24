import { patchMyInfoAction } from "@/app/[user]/setting/action";
import { createFormDataFromDirtyFields } from "@/shared/util/form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { User } from "next-auth";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { baseEditSchema } from "./schema";

const useEditForm = (user: User) => {
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

  useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      if (name === "profileImage" && type === "change") {
        const currentValue = value.profileImage;
        if (currentValue instanceof File) {
          // 직접 dirty 상태 설정
          form.resetField("profileImage", {
            keepDirty: false,
            defaultValue: "",
          });
          form.setValue("profileImage", currentValue, {
            shouldDirty: true,
            shouldValidate: true,
          });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);
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

    return await patchMyInfoAction(data);
  };

  return {
    form,
    isActive,
    handleSubmit,
  };
};

export default useEditForm;
