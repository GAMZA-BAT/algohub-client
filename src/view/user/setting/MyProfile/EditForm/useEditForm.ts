import { useToast } from "@/common/hook/useToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { baseEditSchema } from "./schema";

const useEditForm = () => {
  // TODO: API연결 후 defaultValues 적용하기
  const form = useForm<z.infer<typeof baseEditSchema>>({
    resolver: zodResolver(baseEditSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      profile: "",
      nickname: "백예린",
      baekjoonId: "yerin",
      introduction: "프로필에 나타나요",
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
