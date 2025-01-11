import { patchMyInfoAction } from "@/app/[user]/setting/action";
import { useToast } from "@/common/hook/useToast";
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
      bjNickname: user?.bjNickname,
      description: user?.description,
    },
  });
  const { showToast } = useToast();
  const isActive = form.formState.isValid && form.formState.isDirty;

  const handleSubmit = async ({
    nickname,
    bjNickname,
    description,
    profileImage,
  }: z.infer<typeof baseEditSchema>) => {
    const data = new FormData();
    if (profileImage) {
      data.append("profileImage", profileImage);
    }

    data.append(
      "request",
      JSON.stringify({
        nickname,
        bjNickname,
        description,
      }),
    );
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
