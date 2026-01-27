"use client";

import type { groupSchema } from "@/app/api/groups/schema";
import { createFormDataFromDirtyFields } from "@/shared/util/form";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";

export const getGroupFormData = (
  form: UseFormReturn<z.infer<typeof groupSchema>>,
  values: z.infer<typeof groupSchema>,
) => {
  const { groupImage } = values;
  const data = createFormDataFromDirtyFields(
    form.formState.dirtyFields as Record<string, boolean>,
    values,
  );

  if (groupImage instanceof File) {
    data.append("groupImage", groupImage);
  }

  return data;
};
