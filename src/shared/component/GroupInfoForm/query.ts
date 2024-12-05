import { patchGroupInfo } from "@/app/api/groups";
import { useMutation } from "@tanstack/react-query";

export const usePatchGroupInfoQuery = (groupId: number) => {
  return useMutation({
    mutationFn: (formData: FormData) => patchGroupInfo(groupId, formData),
  });
};
