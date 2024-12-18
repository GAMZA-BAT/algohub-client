import { useToast } from "@/common/hook/useToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { baseEditSchema } from "./schema";

const useEditForm = () => {
  const user = useSession().data?.user;

  const form = useForm<z.infer<typeof baseEditSchema>>({
    resolver: zodResolver(baseEditSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      profile: user?.profileImage,
      nickname: user?.nickname,
      baekjoonId: user?.bjNickname,
      introduction: user?.description,
    },
  });
  const { showToast } = useToast();
  // TODO: api 연결 후 default values와 달라지면 true가 되게 하기
  const isActive = form.formState.isDirty && form.formState.isValid;

  const handleSubmit = (_values: z.infer<typeof baseEditSchema>) => {
    showToast("정상적으로 수정이 되었어요", "success");
  };

  return {
    form,
    isActive,
    handleSubmit,
  };
};

export default useEditForm;
