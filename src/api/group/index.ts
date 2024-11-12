import { kyFileInstance } from "@/api";
import type { groupSchema } from "@/api/group/schema";
import type { z } from "zod";

export const postCreateGroup = async (
  formData: z.infer<typeof groupSchema>,
) => {
  const response = await kyFileInstance.post<typeof groupSchema>("api/group", {
    json: formData,
  });

  return response;
};
